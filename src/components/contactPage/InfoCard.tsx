import { Mail, MapPin, Phone } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'
import { trackWhatsAppClick } from '@/hooks/useMetaPixel'
import { contactInfo } from '@/const/contactInfo.ts'

export function InfoCard() {
  const { t } = useLanguage();

  return (
		<div className="p-6 bg-card rounded-2xl border border-border/50 shadow-sm">
			<h3 className="text-lg font-semibold mb-4">{t('infoCard.title')}</h3>
			<div className="space-y-4">
				<a
					href="tel:+573328813416"
					onClick={() => trackWhatsAppClick('Contáctanos teléfono', { content_category: 'Contact Page' })}
					className="flex items-center gap-3 text-muted-foreground hover:text-mint-dark transition-colors"
				>
					<div className="p-2 rounded-full bg-mint/10 shrink-0">
						<Phone className="h-4 w-4 text-mint-dark" />
					</div>
					<span className="text-sm">{contactInfo.phone}</span>
				</a>
				<a
					href="tel:+573105453701"
					onClick={() => trackWhatsAppClick('Contáctanos teléfono', { content_category: 'Contact Page' })}
					className="flex items-center gap-3 text-muted-foreground hover:text-mint-dark transition-colors"
				>
					<div className="p-2 rounded-full bg-mint/10 shrink-0">
						<Phone className="h-4 w-4 text-mint-dark" />
					</div>
					<span className="text-sm">{contactInfo.phone2}</span>
				</a>
				<a
					href="mailto:petitanddesign@gmail.com"
					className="flex items-center gap-3 text-muted-foreground hover:text-mint-dark transition-colors"
				>
					<div className="p-2 rounded-full bg-mint/10 shrink-0">
						<Mail className="h-4 w-4 text-mint-dark" />
					</div>
					<span className="text-sm">{contactInfo.email}</span>
				</a>
				<div className="flex items-center gap-3 text-muted-foreground">
					<div className="p-2 rounded-full bg-mint/10 shrink-0">
						<MapPin className="h-4 w-4 text-mint-dark" />
					</div>
					<span className="text-sm">{contactInfo.location}</span>
				</div>
			</div>
		</div>
  )
}
