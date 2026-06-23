import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { trackWhatsAppClick } from '@/hooks/useMetaPixel';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { Button } from '@/components/ui/button';

export function WhatsAppCard() {
  const { language } = useLanguage();

  const content = {
    es: {
      whatsappTitle: 'Escríbenos por WhatsApp',
      whatsappDesc: 'Si prefieres una respuesta inmediata, contáctanos directamente por WhatsApp. Te asesoraremos paso a paso.',
      whatsappButton: 'Abrir WhatsApp',
    },
    en: {
      whatsappTitle: 'Write us on WhatsApp',
      whatsappDesc: "If you prefer an immediate response, contact us directly on WhatsApp. We'll guide you step by step.",
      whatsappButton: 'Open WhatsApp',
    },
  };

  const t = content[language];

  const handleWhatsAppDirect = () => {
    trackWhatsAppClick('Contáctanos directo', { content_category: 'Contact Page' });
    window.open(getWhatsAppUrl({ source: 'Contáctanos', language }), '_blank');
  };

  return (
		<div className="p-6 bg-[#25D366]/5 rounded-2xl border border-[#25D366]/20">
			<div className="flex items-center gap-3 mb-3">
				<div className="p-2 rounded-full bg-[#25D366]/20">
					<MessageCircle className="h-5 w-5 text-[#25D366]" />
				</div>
				<h3 className="font-display text-lg font-semibold">{t.whatsappTitle}</h3>
			</div>
			<p className="text-sm text-muted-foreground mb-4">{t.whatsappDesc}</p>
			<Button
				onClick={handleWhatsAppDirect}
				className="w-full gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white h-11 rounded-md px-8"
			>
				<MessageCircle className="h-5 w-5" />
				{t.whatsappButton}
			</Button>
		</div>
  );
}
