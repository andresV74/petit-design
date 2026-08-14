import { Heart, Award, Users, Sparkles, Leaf, MapPin, Calendar } from 'lucide-react'
import { Badge } from '@/components/ui/badge.tsx'
import { useLanguage } from '@/lib/i18n.tsx'
import { trackWhatsAppClick } from '@/hooks/useMetaPixel'
import { getWhatsAppUrl } from '@/lib/whatsapp'

export function AboutPage() {
  const { t, language } = useLanguage()

  const highlights = [
    {
      icon: Leaf,
      text: t('about.highlight.leaf')
    },
    {
      icon: Sparkles,
      text: t('about.highlight.sparkles')
    },
    {
      icon: MapPin,
      text: t('about.highlight.mapPin')
    },
    {
      icon: Heart,
      text: t('about.highlight.heart')
    },
  ]

  const values = [
    {
      icon: Heart,
      title: 'Amor en cada puntada',
      desc: 'Cada producto está hecho con amor genuino y dedicación.'
    },
    {
      icon: Award,
      title: 'Calidad premium',
      desc: 'Solo usamos los mejores materiales, seguros para tu bebé.'
    },
    {
      icon: Users,
      title: 'Atención personalizada',
      desc: 'Te acompañamos en cada paso de tu pedido.'
    },
    {
      icon: Sparkles,
      title: 'Diseños únicos',
      desc: 'Creamos piezas personalizadas solo para ti.'
    },
  ]

  return (
    <>
      <title>Nuestra Historia | Petit Design</title>
      <meta name="description" content="Conoce la historia de Petit Design. Desde 2014 creamos lencería personalizada para bebés con amor, calidad y diseño exclusivo desde Manizales, Colombia." />
      <link rel="canonical" href="https://petitdesign.com.co/nosotros" />

      <meta property="og:title" content="Nuestra Historia | Petit Design" />
      <meta property="og:description" content="Conoce la historia de Petit Design. Desde 2014 creamos lencería personalizada para bebés con amor, calidad y diseño exclusivo desde Manizales, Colombia." />
      <meta property="og:url" content="https://petitdesign.com.co/nosotros" />

      <meta name="twitter:title" content="Nuestra Historia | Petit Design" />
      <meta name="twitter:description" content="Conoce la historia de Petit Design. Desde 2014 creamos lencería personalizada para bebés con amor, calidad y diseño exclusivo desde Manizales, Colombia." />

      {/* Hero */}
      <section className="relative py-16 md:py-24 bg-linear-to-b from-cream to-background overflow-hidden">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="gap-2 px-4 py-2 bg-mint/10 rounded-full mb-4 border-0">
              <Calendar className="h-4 w-4 text-mint-dark" />
              <span className="text-sm font-medium text-mint-dark">
                {t('about.badge')}
              </span>
            </Badge>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 animate-fade-in">
              {t('about.title')}
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.1s' }}>
              {t('about.subtitle')}
            </p>
          </div>
        </div>
        <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />
      </section>

      {/* Story Part 1 */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex items-center justify-center">
              <div className="aspect-3/4 max-w-md rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/founder.webp"
                  alt="Mariana y Catalina - Fundadoras de Petit Design"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                {t('about.story.part1')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="py-16 md:py-24 bg-mint-light/30">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-semibold mb-4 text-center">
              {t('about.purposeTitle')}
            </h2>
            <p className="text-lg text-center text-muted-foreground mb-10 text-balance">
              {t('about.purposeText')}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border/50 shadow-sm"
                >
                  <div className="p-2 rounded-full bg-mint/20 text-mint-dark shrink-0">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <p className="text-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Today's story */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line text-center text-balance">
              {t('about.todayText')}
            </p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 md:py-24 bg-beige/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-semibold mb-6 text-center">
              {t('about.descriptionTitle')}
            </h2>
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line mb-12">
              {t('about.description')}
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-card rounded-2xl border border-border/50 shadow-sm">
                <h3 className="font-display text-xl font-semibold mb-3 text-mint-dark">
                  {t('about.missionTitle')}
                </h3>
                <p className="text-muted-foreground">
                  {t('about.mission')}
                </p>
              </div>
              <div className="p-6 bg-card rounded-2xl border border-border/50 shadow-sm">
                <h3 className="font-display text-xl font-semibold mb-3 text-mint-dark">
                  {t('about.visionTitle')}
                </h3>
                <p className="text-muted-foreground">
                  {t('about.vision')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24">
        <div className="container px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border/50 shadow-sm animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-4 rounded-full bg-primary/10 text-primary mb-4">
                  <value.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground text-balance">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-cream/50">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center">
            <img
              src="/logo-full.png"
              alt="Petit Design"
              className="h-36 w-36 rounded-full mx-auto mb-6 shadow-lg"
            />
            <p className="text-muted-foreground mb-8">
              {t('about.ctaMessage')}
            </p>
            <a
              href={getWhatsAppUrl({ source: 'Nuestra Historia', language })}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('Nuestra Historia CTA', { content_category: 'About' })}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-medium hover:bg-[#20BD5A] transition-colors"
            >
              {t('about.cta')}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
