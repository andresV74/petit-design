import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useHomeBanner } from '@/hooks/useHomeBanner.ts'
import { LoadingIndicator } from '@/components/ui/loadingIndicator.tsx'
import { useLanguage } from '@/lib/i18n'
import { trackWhatsAppClick } from '@/hooks/useMetaPixel'
import { getWhatsAppUrl } from '@/lib/whatsapp'

const SLIDE_INTERVAL_MS = 5000

export function HeroSection() {
  const { t, language } = useLanguage()
  const { imagesData, loading, error } = useHomeBanner()

  const images = imagesData ?? []
  const [activeIndex, setActiveIndex] = useState(0)
  const isCarousel = images.length > 1

  useEffect(() => {
    if (!isCarousel) return

    const intervalId = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, SLIDE_INTERVAL_MS)

    return () => clearInterval(intervalId)
  }, [isCarousel, images.length])

  const currentIndex = isCarousel ? activeIndex % images.length : 0

  return (
    <section className="relative flex md:aspect-video min-h-[70vh] md:min-h-0 items-center overflow-hidden bg-background">
      {/* Background Image with gradient blur effect */}
      <div className="absolute inset-0">
        {error ? (
          <img
          src="/hero-banner.webp"
          alt="Petit Design - Productos personalizados para bebé" />)
        : loading ? (
          <LoadingIndicator type="line-simple" size="lg" label={t('catalog.loading')} />)
        : images.length === 0 ? (
          <img
            src="/hero-banner.webp"
            alt="Petit Design - Productos personalizados para bebé" />)
        : isCarousel ? (
          images.map((image, index) => (
            <img
              key={image.id}
              src={image.imagen.reference.image.url}
              alt={image.titulo.value || 'Petit Design'}
              decoding={index === currentIndex ? 'sync' : 'async'}
              aria-hidden={index !== currentIndex}
              className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))
        ) : (
          <img
            src={images[0].imagen.reference.image.url}
            alt={images[0].titulo.value || 'Petit Design'}
            decoding="sync"
            className="h-full w-full object-cover object-center"
          />
        )}
        {/* Gradient overlay: blurred on left, clear on right */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(255, 255, 255, 0.6) 25%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0.1) 75%, transparent 100%)'
          }}
        />
        {/* Additional blur effect on left side */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            backdropFilter: 'blur(2px)',
            WebkitBackdropFilter: 'blur(2px)',
            maskImage: 'linear-gradient(to right, black 30%, transparent 60%)',
            WebkitMaskImage: 'linear-gradient(to right, black 0%, black 30%, transparent 60%)'
          }}
        />
      </div>

      <div className="container relative px-4">
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
                  href={getWhatsAppUrl({ language })}
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
