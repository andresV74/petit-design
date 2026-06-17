import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/i18n';
import { trackWhatsAppClick } from '@/hooks/useMetaPixel';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export function HeroSection() {
  const { t, language } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-background min-h-[70vh]">
      {/* Background Image with gradient blur effect */}
      <div className="absolute inset-0">
        <img
          src="/hero-banner.webp"
          alt="Petit Design - Productos personalizados para bebé"
          decoding="sync"
          className="h-full w-full object-cover object-center"
        />
        {/* Gradient overlay: blurred on left, clear on right */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.8) 25%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.1) 75%, transparent 100%)'
          }}
        />
        {/* Additional blur effect on left side */}
        <div
          className="absolute inset-0"
          style={{
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            maskImage: 'linear-gradient(to right, black 0%, black 30%, transparent 60%)',
            WebkitMaskImage: 'linear-gradient(to right, black 0%, black 30%, transparent 60%)'
          }}
        />
      </div>

      <div className="container relative z-10 px-4 py-16 md:py-24">
        <div className="max-w-xl">
          {/* Text Content */}
          <div className="flex flex-col gap-6 animate-fade-in">
            <span className="text-mint-dark font-medium text-sm uppercase tracking-wider">
              {language === 'es' ? '100% Personalizable' : '100% Customizable'}
            </span>
            <h1 className="font-display text-3xl sm:text-4xl/10 md:text-5xl/12 font-semibold leading-tight text-foreground">
              {language === 'es'
                ? 'Lencería de cunas y accesorios de lencería para bebés y niños, hechos con amor'
                : 'Crib linens and linen accessories for babies and kids, made with love'}
            </h1>
            <p className="text-lg text-muted-foreground max-w-md">
              {language === 'es'
                ? 'Cada producto es único y personalizado con el nombre de tu bebé. Diseños exclusivos hechos a mano en Colombia.'
                : 'Each product is unique and personalized with your baby\'s name. Exclusive handmade designs from Colombia.'}
            </p>

            {/* Personalization Badge */}
            <div className="flex items-center gap-3 p-4 bg-mint-light/50 rounded-xl border border-mint/30 max-w-md">
              <div className="h-10 w-10 rounded-full bg-mint flex items-center justify-center shrink-0">
                <span className="text-white font-display text-lg">✨</span>
              </div>
              <p className="text-sm text-foreground">
                <strong>{language === 'es' ? 'Todos nuestros productos son personalizables' : 'All our products are customizable'}</strong>
                <br />
                <span className="text-muted-foreground">
                  {language === 'es'
                    ? 'Bordamos el nombre de tu bebé con amor'
                    : 'We embroider your baby\'s name with love'}
                </span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button
                asChild
                className="bg-mint hover:bg-mint-dark text-white hover:text-white h-11 rounded-md px-8"
              >
                <Link to="/catalogo" className="gap-2">
                  {t('hero.cta')}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                className="border border-mint text-mint-dark h-11 rounded-md px-8 bg-background hover:bg-mint-light/50"
              >
                <a
                  href={getWhatsAppUrl({ source: 'Inicio', language })}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('Hero CTA', { content_category: 'Homepage' })}
                  className="gap-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  {language === 'es' ? 'Consultar por WhatsApp' : 'Ask on WhatsApp'}
                </a>
              </Button>
            </div>

            {/* WhatsApp Notice */}
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-mint" />
              {language === 'es'
                ? 'Finaliza tu pedido directamente por WhatsApp'
                : 'Complete your order directly via WhatsApp'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
