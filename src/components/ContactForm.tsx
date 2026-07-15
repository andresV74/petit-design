import { useState, useMemo, type ChangeEvent } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage } from '@/lib/i18n.tsx'
import { MessageCircle, Mail, Send, Baby, Phone, User, ShoppingBag } from 'lucide-react'
import { z } from 'zod'
import { trackFormSubmission } from '@/hooks/useMetaPixel'
import { getWhatsAppUrl } from '@/lib/whatsapp.ts'
import { formTranslations } from '@/const/contactFormTranslations.tsx'

const getContactSchema = (language: 'es' | 'en') =>
  z.object({
    name: z.string().trim().min(1, language === 'es' ? 'El nombre es requerido' : 'Name is required').max(100, language === 'es' ? 'Máximo 100 caracteres' : 'Maximum 100 characters'),
    email: z.email(language === 'es' ? 'Email inválido' : 'Invalid email').max(200, language === 'es' ? 'Máximo 200 caracteres' : 'Maximum 200 characters').optional(),
    phone: z.string().trim().min(7, language === 'es' ? 'Número inválido' : 'Invalid number').max(20, language === 'es' ? 'Máximo 20 caracteres' : 'Maximum 20 characters'),
    product: z.string().trim().max(200, language === 'es' ? 'Máximo 200 caracteres' : 'Maximum 200 characters').optional(),
    gender: z.enum(['girl', 'boy', 'surprise']),
    message: z.string().trim().max(500, language === 'es' ? 'Máximo 500 caracteres' : 'Maximum 500 characters').optional(),
  });

export const inputClasses = 'flex w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm'

type ContactFormData = z.infer<ReturnType<typeof getContactSchema>>;

export function ContactForm() {
  const { language } = useLanguage();
  const contactSchema = getContactSchema(language);
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    phone: '',
    product: '',
    gender: 'girl',
    message: '',
  });
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const getValidationErrors = (values: ContactFormData) => {
    const result = contactSchema.safeParse(values);

    if (result.success) {
      return {} as Partial<Record<keyof ContactFormData, string>>;
    }

    const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
    result.error.issues.forEach(err => {
      if (err.path[0]) {
        fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
      }
    });

    return fieldErrors;
  };

  const validationErrors = hasSubmitted
    ? getValidationErrors(formData)
    : ({} as Partial<Record<keyof ContactFormData, string>>);

  const location = useLocation()
  const isHomePage = location.pathname === '/'

  const t = useMemo(() => {
    const allTranslations = formTranslations({ isHomePage })

    return allTranslations[language]
  }, [isHomePage, language])

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const fieldErrors = getValidationErrors(formData);

    setHasSubmitted(true);

    if (Object.keys(fieldErrors).length > 0) {
      return;
    }

    const genderMap = {
      girl: t.girl,
      boy: t.boy,
      surprise: t.surprise,
    };
    const genderText = genderMap[formData.gender];

    const messageLines = [
      t.whatsAppGreeting,
      '',
      `👤 ${t.nameLabel}: *${formData.name}*`,
      `📱 ${t.phoneLabel}: *${formData.phone}*`,
    ];

    if (formData.product?.trim()) {
      messageLines.push(`🛍️ ${t.productLabel}: *${formData.product}*`);
    } else {
      messageLines.push(`🛍️ ${t.product}: *${t.advise}*`);
    }

    messageLines.push(`🎀 ${t.genderLabel}: *${genderText}*`);

    if (formData.message?.trim()) {
      messageLines.push(`💬 ${t.message}: *${formData.message}*`);
    }

    trackFormSubmission('Inicio', { content_category: formData.product || 'General' });

    setTimeout(() => {
      window.open(getWhatsAppUrl({ message: messageLines.join('\n'), source: 'Formulario Sitio Web', language }), '_blank');
    }, 150);
  };

  return (
    <div className={`rounded-lg bg-card text-card-foreground border-2 border-primary/10 ${isHomePage ? 'shadow-lg' : 'shadow-sm'}`}>
      <div className={`grid p-6 pb-2 items-center ${isHomePage ? 'text-center gap-1.5' : 'grid-cols-[auto_1fr] gap-x-3'}`}>
        <div className={`mx-auto flex items-center justify-center rounded-full bg-primary/10 ${isHomePage ? 'h-12 w-12 mb-3' : 'h-9 w-9'}`}>
          {isHomePage ? (
            <MessageCircle className="h-6 w-6 text-primary" />
          ) : (
            <Mail className="h-5 w-5 text-primary" />
          )}
        </div>
        <h3 className="leading-none tracking-tight text-xl md:text-2xl font-bold">
          {t.title}
        </h3>
        <div className={`text-muted-foreground text-sm mt-1 ${!isHomePage ? 'col-start-2' : ''}`}>
          {t.subtitle}
        </div>
      </div>

      <div className="p-6 pt-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className={`grid gap-5 ${!isHomePage ? 'sm:grid-cols-2' : ''}`}>
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
                className={`h-9 ${inputClasses} ${validationErrors.name ? 'border-destructive' : ''}`}
                autoComplete="name"
              />
              {validationErrors.name && (
                <p className="text-xs text-destructive">{validationErrors.name}</p>
              )}
            </div>

            {/* Email */
              !isHomePage && (
                <div className="space-y-1.5">
                  <label htmlFor="name" className="flex items-center gap-2 text-sm">
                    <Mail className="h-3.5 w-3.5 text-muted-foreground" />
                    {t.emailLabel}
                  </label>
                  <input
                    id="name"
                    placeholder={t.emailPlaceholder}
                    value={formData.name}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => handleInputChange('name', event.target.value)}
                    className={`h-9 ${inputClasses} ${validationErrors.name ? 'border-destructive' : ''}`}
                    autoComplete="name"
                  />
                  {validationErrors.name && (
                    <p className="text-xs text-destructive">{validationErrors.name}</p>
                  )}
                </div>
              )
            }

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
                className={`h-9 ${inputClasses} ${validationErrors.phone ? 'border-destructive' : ''}`}
                autoComplete="tel"
              />
              {validationErrors.phone && (
                <p className="text-xs text-destructive">{validationErrors.phone}</p>
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
                className={`h-9 ${inputClasses}`}
              />
            </div>
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
									className={'h-4 w-4 appearance-none border border-gray-300 checked:bg-pink-300 checked:border-pink-500 rounded-full cursor-pointer'}
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
									className={'h-4 w-4 appearance-none border border-gray-300 checked:bg-blue-300 checked:border-blue-500 rounded-full cursor-pointer'}
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
									className={'h-4 w-4 appearance-none border border-gray-300 checked:bg-green-300 checked:border-green-500 rounded-full cursor-pointer '}
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
              className={`4 w-4 ${inputClasses}`}
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="h-10 px-4 py-2 w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] rounded-md text-white cursor-pointer"
          >
            <Send className="h-4 w-4" />
            {t.sendButton}
          </button>
        </form>
      </div>
    </div>
  );
}
