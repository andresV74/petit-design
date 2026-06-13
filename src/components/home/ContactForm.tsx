import { useState, type ChangeEvent } from 'react';
import { useLanguage } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { MessageCircle, Send, Baby, Phone, User, ShoppingBag } from 'lucide-react';
import { z } from 'zod';
import { trackFormSubmission } from '@/hooks/useMetaPixel';
import { getWhatsAppUrl } from '@/lib/whatsapp';

const contactSchema = z.object({
  name: z.string().trim().min(1, "El nombre es requerido").max(100, "Máximo 100 caracteres"),
  phone: z.string().trim().min(7, "Número inválido").max(20, "Máximo 20 caracteres"),
  product: z.string().trim().max(200, "Máximo 200 caracteres").optional(),
  gender: z.enum(['girl', 'boy', 'surprise']),
  message: z.string().trim().max(500, "Máximo 500 caracteres").optional(),
});

const inputClasses = 'flex w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm'

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    product: '',
    gender: 'girl',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const translations = {
    es: {
      title: '¿Tienes alguna pregunta?',
      subtitle: 'Cuéntanos qué necesitas y te contactaremos por WhatsApp',
      namePlaceholder: 'Tu nombre completo',
      nameLabel: 'Nombre',
      phonePlaceholder: 'Ej: 310 123 4567',
      phoneLabel: 'Número de contacto',
      productPlaceholder: 'Escribe el producto o déjalo vacío para asesoría',
      productLabel: '¿Tienes algún producto de interés o te asesoramos?',
      genderLabel: 'Género del bebé',
      girl: 'Niña',
      boy: 'Niño',
      surprise: 'Sorpresa / Aún no sé',
      messagePlaceholder: '¿Algún detalle adicional que quieras contarnos?',
      messageLabel: 'Mensaje adicional (opcional)',
      sendButton: 'Enviar mensaje a WhatsApp',
      whatsappGreeting: '¡Hola! Me interesa conocer más sobre los productos en la página web!',
    },
    en: {
      title: 'Do you have any questions?',
      subtitle: "Tell us what you need and we'll contact you via WhatsApp",
      namePlaceholder: 'Your full name',
      nameLabel: 'Name',
      phonePlaceholder: 'Ex: 310 123 4567',
      phoneLabel: 'Contact number',
      productPlaceholder: 'Type the product or leave empty for advice',
      productLabel: 'Do you have a product in mind or need advice?',
      genderLabel: "Baby's gender",
      girl: 'Girl',
      boy: 'Boy',
      surprise: "Surprise / Don't know yet",
      messagePlaceholder: 'Any additional details you want to share?',
      messageLabel: 'Additional message (optional)',
      sendButton: 'Send message to WhatsApp',
      whatsappGreeting: "Hi! I'm interested in learning more about the products on the website!",
    },
  };

  const t = translations[language];

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      setErrors(fieldErrors);
      return;
    }

    const genderMap = {
      girl: language === 'es' ? 'Niña' : 'Girl',
      boy: language === 'es' ? 'Niño' : 'Boy',
      surprise: language === 'es' ? 'Sorpresa / Aún no sé' : "Surprise / Don't know yet",
    };
    const genderText = genderMap[formData.gender];

    const messageLines = [
      t.whatsappGreeting,
      '',
      `👤 *${language === 'es' ? 'Nombre' : 'Name'}:* ${formData.name}`,
      `📱 *${language === 'es' ? 'Teléfono' : 'Phone'}:* ${formData.phone}`,
    ];

    if (formData.product?.trim()) {
      messageLines.push(`🛍️ *${language === 'es' ? 'Producto de interés' : 'Product'}:* ${formData.product}`);
    } else {
      messageLines.push(`🛍️ *${language === 'es' ? 'Producto' : 'Product'}:* ${language === 'es' ? 'Necesito asesoría' : 'I need advice'}`);
    }

    messageLines.push(`🎀 *${language === 'es' ? 'Género del bebé' : "Baby's gender"}:* ${genderText}`);

    if (formData.message?.trim()) {
      messageLines.push(`💬 *${language === 'es' ? 'Mensaje' : 'Message'}:* ${formData.message}`);
    }

    trackFormSubmission('Inicio', { content_category: formData.product || 'General' });

    setTimeout(() => {
      window.open(getWhatsAppUrl({ message: messageLines.join('\n'), source: 'Inicio - Formulario', language }), '_blank');
    }, 150);
  };

  return (
    <div className="rounded-lg bg-card text-card-foreground border-2 border-primary/10 shadow-lg">
      <div className="space-y-1.5 p-6 text-center pb-2">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
          <MessageCircle className="h-6 w-6 text-primary" />
        </div>
        <h3 className="leading-none tracking-tight text-xl md:text-2xl font-bold">
          {t.title}
        </h3>
        <div className="text-muted-foreground text-sm mt-1">
          {t.subtitle}
        </div>
      </div>

      <div className="p-6 pt-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div className="space-y-1.5">
            <label htmlFor="name" className="flex items-center gap-2 text-sm">
              <User className="h-3.5 w-3.5 text-muted-foreground" />
              {t.nameLabel}
            </label>
            <input
              id="name"
              placeholder={t.namePlaceholder}
              value={formData.name}
              onChange={(event: ChangeEvent<HTMLInputElement>) => handleInputChange('name', event.target.value)}
              className={`h-9 ${inputClasses} ${errors.name ? 'border-destructive' : ''}`}
							autoComplete="name"
            />
            {errors.name && (
              <p className="text-xs text-destructive">{errors.name}</p>
            )}
          </div>

          {/* Phone */}
          <div className="space-y-1.5">
            <label htmlFor="phone" className="flex items-center gap-2 text-sm">
              <Phone className="h-3.5 w-3.5 text-muted-foreground" />
              {t.phoneLabel}
            </label>
            <input
              id="phone"
              type="tel"
              placeholder={t.phonePlaceholder}
              value={formData.phone}
              onChange={(event: ChangeEvent<HTMLInputElement>) => handleInputChange('phone', event.target.value)}
              className={`h-9 ${inputClasses} ${errors.phone ? 'border-destructive' : ''}`}
							autoComplete="tel"
            />
            {errors.phone && (
              <p className="text-xs text-destructive">{errors.phone}</p>
            )}
          </div>

          {/* Product */}
          <div className="space-y-1.5">
            <label htmlFor="product" className="flex items-center gap-2 text-sm">
              <ShoppingBag className="h-3.5 w-3.5 text-muted-foreground" />
              {t.productLabel}
            </label>
            <input
              id="product"
              placeholder={t.productPlaceholder}
              value={formData.product}
              onChange={(event: ChangeEvent<HTMLInputElement>) => handleInputChange('product', event.target.value)}
              className={`h-9 ${inputClasses} ${errors.product ? 'border-destructive' : ''}`}
            />
          </div>

          {/* Gender */}
					<fieldset className="space-y-2">
						<legend className="flex items-center gap-2 text-sm">
							<Baby className="h-3.5 w-3.5 text-muted-foreground" />
							{t.genderLabel}
						</legend>
						<div className="flex gap-3 flex-wrap">
							<div className="inline-flex items-center gap-1.5">
								<input
									type="radio"
									value="girl"
									id="girl"
									name="gender"
									checked={formData.gender === 'girl'}
									onChange={
										(event: ChangeEvent<HTMLInputElement>) => handleInputChange('gender', event.target.value)
									}
									className={`h-4 w-4 appearance-none border border-gray-300 checked:bg-pink-300 checked:border-pink-500 rounded-full cursor-pointer ${errors.name ? 'border-destructive' : ''}`}
								/>
								<label htmlFor="girl" className="cursor-pointer font-normal text-sm">
									🎀 {t.girl}
								</label>
							</div>
							<div className="inline-flex items-center gap-1.5">
								<input
									type="radio"
									value="boy"
									id="boy"
									name="gender"
									checked={formData.gender === 'boy'}
									onChange={
										(event: ChangeEvent<HTMLInputElement>) => handleInputChange('gender', event.target.value)
									}
									className={`h-4 w-4 appearance-none border border-gray-300 checked:bg-blue-300 checked:border-blue-500 rounded-full cursor-pointer ${errors.name ? 'border-destructive' : ''}`}
								/>
								<label htmlFor="boy" className="cursor-pointer font-normal text-sm">
									🧸 {t.boy}
								</label>
							</div>
							<div className="inline-flex items-center gap-1.5">
								<input
									type="radio"
									value="surprise"
									id="gender-surprise"
									name="gender"
									checked={formData.gender === 'surprise'}
									onChange={
										(event: ChangeEvent<HTMLInputElement>) => handleInputChange('gender', event.target.value)
									}
									className={`h-4 w-4 appearance-none border border-gray-300 checked:bg-green-300 checked:border-green-500 rounded-full cursor-pointer  ${errors.name ? 'border-destructive' : ''}`}
								/>
								<label htmlFor="gender-surprise" className="cursor-pointer font-normal text-sm">
									🎁 {t.surprise}
								</label>
							</div>
						</div>
					</fieldset>

          {/* Additional message */}
          <div className="space-y-1.5">
            <label htmlFor="message" className="flex items-center gap-2 text-sm">
              <MessageCircle className="h-3.5 w-3.5 text-muted-foreground" />
              {t.messageLabel}
            </label>
            <textarea
              id="message"
              placeholder={t.messagePlaceholder}
              value={formData.message}
              onChange={(event: ChangeEvent<HTMLTextAreaElement>) => handleInputChange('message', event.target.value)}
              rows={2}
              className={`4 w-4 ${inputClasses} ${errors.message ? 'border-destructive' : ''}`}
            />
          </div>

          {/* Submit button */}
          <Button
            type="submit"
            className="h-10 px-4 py-2 w-full gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white"
          >
            <Send className="h-4 w-4" />
            {t.sendButton}
          </Button>
        </form>
      </div>
    </div>
  );
}
