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
)

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
)

// Pinterest icon
const PinterestIcon = ({ className }: { className?: string}) => (
  <svg fill="currentColor" viewBox="0 0 32 32" className={className}>
    <path d="M16.292 5C10.536 5 7.48 8.866 7.48 13.077c0 1.955 1.039 4.392 2.707 5.168.253.118.387.064.443-.18.047-.185.273-1.089.373-1.511a.402.402 0 0 0-.095-.386c-.55-.667-.988-1.896-.988-3.041 0-2.942 2.228-5.787 6.021-5.787 3.28 0 5.571 2.23 5.571 5.426 0 3.61-1.82 6.108-4.191 6.108-1.309 0-2.291-1.081-1.978-2.413.378-1.584 1.106-3.298 1.106-4.438 0-1.026-.552-1.883-1.685-1.883-1.341 0-2.415 1.385-2.415 3.241 0 1.182.4 1.978.4 1.978s-1.323 5.593-1.563 6.634c-.413 1.765.051 4.625.094 4.876.021.134.172.18.252.066.129-.175 1.725-2.565 2.174-4.292l.828-3.171c.439.829 1.707 1.531 3.061 1.531 4.021 0 6.923-3.703 6.923-8.299C24.52 8.301 20.92 5 16.292 5z"/>
  </svg>
)

export function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    {
      link: '/',
      title: t('nav.home'),
    },
    {
      link: '/collections',
      title: t('nav.catalog'),
    },
    {
      link: '/nosotros',
      title: t('nav.about'),
    },
    {
      link: '/politicas',
      title: t('nav.policies'),
    },
    {
      link: '/contacto',
      title: t('nav.contact'),
    },
  ]

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
            <ul className="flex items-center gap-4 mt-6">
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
                href="https://co.pinterest.com/petitanddesign/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-mint/10 text-mint-dark hover:bg-mint/20 transition-colors"
                aria-label="Pinterest"
              >
                <PinterestIcon className="h-5 w-5 scale-150" />
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
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map(({link, title}) => (
                <li key={link}>
                  <Link to={link} className="text-muted-foreground hover:text-mint-dark transition-colors">
                    {title}
                  </Link>
                </li>
              ))}
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
                  target="_blank"
                  onClick={() => trackWhatsAppClick('Footer teléfono', { content_category: 'Footer' })}
                  className="hover:text-mint-dark transition-colors"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppUrl({ source: 'Pie de página', whatsAppNumber: '573105453701' })}
                  target="_blank"
                  onClick={() => trackWhatsAppClick('Footer teléfono', { content_category: 'Footer' })}
                  className="hover:text-mint-dark transition-colors"
                >
                  {contactInfo.phone2}
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
            <h4 className="font-display text-lg font-semibold mt-6 mb-4">
              {t('footer.catalogTitle')}
            </h4>
            <p className="text-muted-foreground">
              <a
                href="/documents/Catalogo_Petit_Design.pdf"
                download
                className="hover:text-mint-dark transition-colors"
              >
                {t('footer.catalogDescription')}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Petit Design. {t('footer.rights')}.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              {t('footer.made')} <Heart className="h-4 w-4 text-mint fill-mint stroke-mint" /> {t('footer.from')} Manizales, Colombia 🇨🇴
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
