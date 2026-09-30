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

      <div className="container relative px-4 py-16 md:py-24">
        <div className="max-w-xl">
          {/* Text Content */}
          <div className="flex flex-col gap-6 animate-fade-in">
            <span className="text-mint-dark font-medium text-sm uppercase tracking-wider">
              {t('hero.beforeTitle')}
            </span>
            <h1 className="font-display text-2xl sm:text-3xl/9 md:text-4xl/11 font-semibold leading-tight text-foreground">
              {t('hero.title')}
            </h1>

            {/* Personalization Badge */}
            <div className="flex items-center gap-3 p-4 bg-mint-light/50 rounded-xl border border-mint/30 max-w-100">
              <div className="h-10 w-10 rounded-full bg-mint flex items-center justify-center shrink-0">
                <span className="text-white font-display text-lg">✨</span>
              </div>
              <p className="text-sm text-foreground text-balance">
                {t('hero.subtitle')}
              </p>
              <Button
                asChild
                className="border border-mint text-mint-dark h-8 rounded-md px-3 bg-background hover:bg-mint-light/50"
              >
                <a
                  href={getWhatsAppUrl({ source: 'Inicio', language })}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick('Hero CTA', { content_category: 'Homepage' })}
                  className="gap-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  {t('hero.whatsAppCta')}
                </a>
              </Button>
            </div>

            <Button
              asChild
              className="bg-mint hover:bg-mint-dark text-white hover:text-white h-11 rounded-md mt-4 px-8 w-fit"
            >
              <Link to="/collections" className="gap-2">
                {t('hero.cta')}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
