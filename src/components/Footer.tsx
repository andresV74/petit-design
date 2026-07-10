import { Link } from 'react-router-dom'
import { MessageCircle, Heart } from 'lucide-react'
import { useLanguage } from '@/lib/i18n.tsx'
import { trackWhatsAppClick } from '@/hooks/useMetaPixel.ts'
import { getWhatsAppUrl } from '@/lib/whatsapp.ts'
import { contactInfo } from '@/const/contactInfo.ts'

// TikTok icon component since lucide-react doesn't have it
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
	<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
		<rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
		<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
		<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
	</svg>
)

// Facebook icon
const FacebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-gray-light/50">
      <div className="container px-4 py-12 md:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="block mb-2">
              <img
                src="/logo-header.png"
                alt="Petit Design"
                width="100"
                height="100"
                className="h-25 w-25 object-contain"
              />
            </Link>
            <p className="text-muted-foreground max-w-md">
              {t('footer.tagline')}
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://www.instagram.com/petit.design?igsh=a3Q3bTFnNjgzN2Nw&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-mint/10 text-mint-dark hover:bg-mint/20 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/share/1BnfqgVRwr/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-mint/10 text-mint-dark hover:bg-mint/20 transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@petit.design0?_r=1&_t=ZS-93e1QVO98VN"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-mint/10 text-mint-dark hover:bg-mint/20 transition-colors"
                aria-label="TikTok"
              >
                <TikTokIcon className="h-5 w-5" />
              </a>
              <a
                href={getWhatsAppUrl({ source: 'Pie de página' })}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('Footer icono', { content_category: 'Footer' })}
                className="p-2 rounded-full bg-mint/20 text-mint-dark hover:bg-mint/30 transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-mint-dark transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/catalogo" className="text-muted-foreground hover:text-mint-dark transition-colors">
                  {t('nav.catalog')}
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-muted-foreground hover:text-mint-dark transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-muted-foreground hover:text-mint-dark transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
              <li>
                <Link to="/politicas" className="text-muted-foreground hover:text-mint-dark transition-colors">
                  {t('nav.policies')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">
              {t('footer.contact')}
            </h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a
                  href={getWhatsAppUrl({ source: 'Pie de página' })}
                  onClick={() => trackWhatsAppClick('Footer teléfono', { content_category: 'Footer' })}
                  className="hover:text-mint-dark transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href="mailto:petitanddesign@gmail.com"
                  className="hover:text-mint-dark transition-colors"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li>{contactInfo.location} 🇨🇴</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Petit Design. {t('footer.rights')}.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Hecho con <Heart className="h-4 w-4 text-mint fill-mint stroke-mint" /> desde Manizales, Colombia 🇨🇴
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
