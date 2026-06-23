import { Mail, MapPin, Clock, Phone } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { trackWhatsAppClick } from '@/hooks/useMetaPixel';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export function InfoCard() {
  const { language } = useLanguage();

  const content = {
    es: {
      infoTitle: 'Información de contacto',
      phoneInfo: '+57 310 545 3701',
      emailInfo: 'petitanddesign@gmail.com',
      locationInfo: 'Manizales, Colombia',
      hoursInfo: 'Lunes a viernes: 8am - 6pm',
      hoursLabel: 'Horario de atención',
    },
    en: {
      infoTitle: 'Contact information',
      phoneInfo: '+57 310 545 3701',
      emailInfo: 'petitanddesign@gmail.com',
      locationInfo: 'Manizales, Colombia',
      hoursInfo: 'Monday to Friday: 8am - 6pm',
      hoursLabel: 'Business hours',
    },
  };

  const t = content[language];

  return (
		<div className="p-6 bg-card rounded-2xl border border-border/50 shadow-sm">
			<h3 className="font-display text-lg font-semibold mb-4">{t.infoTitle}</h3>
			<div className="space-y-4">
				<a
					href={getWhatsAppUrl({ source: 'Contáctanos', language })}
					onClick={() => trackWhatsAppClick('Contáctanos teléfono', { content_category: 'Contact Page' })}
					className="flex items-center gap-3 text-muted-foreground hover:text-mint-dark transition-colors"
				>
					<div className="p-2 rounded-full bg-mint/10 shrink-0">
						<Phone className="h-4 w-4 text-mint-dark" />
					</div>
					<span className="text-sm">{t.phoneInfo}</span>
				</a>
				<a
					href="mailto:petitanddesign@gmail.com"
					className="flex items-center gap-3 text-muted-foreground hover:text-mint-dark transition-colors"
				>
					<div className="p-2 rounded-full bg-mint/10 shrink-0">
						<Mail className="h-4 w-4 text-mint-dark" />
					</div>
					<span className="text-sm">{t.emailInfo}</span>
				</a>
				<div className="flex items-center gap-3 text-muted-foreground">
					<div className="p-2 rounded-full bg-mint/10 shrink-0">
						<MapPin className="h-4 w-4 text-mint-dark" />
					</div>
					<span className="text-sm">{t.locationInfo}</span>
				</div>
				<div className="flex items-center gap-3 text-muted-foreground">
					<div className="p-2 rounded-full bg-mint/10 shrink-0">
						<Clock className="h-4 w-4 text-mint-dark" />
					</div>
					<div>
						<span className="text-xs text-muted-foreground/70 block">{t.hoursLabel}</span>
						<span className="text-sm">{t.hoursInfo}</span>
					</div>
				</div>
			</div>
		</div>
  );
}
