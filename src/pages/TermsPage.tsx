import { useLanguage } from '@/lib/i18n.tsx'

export function TermsPage() {
  const { t } = useLanguage()
  const pageTitle = `${t('terms.title')} | Petit Design`
  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content="Conoce la historia de Petit Design. Desde 2014 creamos lencería personalizada para bebés con amor, calidad y diseño exclusivo desde Manizales, Colombia." />
      <link rel="canonical" href="https://petitdesign.co/nosotros" />

      <meta property="og:title" content="Nuestra Historia | Petit Design" />
      <meta property="og:description" content="Conoce la historia de Petit Design. Desde 2014 creamos lencería personalizada para bebés con amor, calidad y diseño exclusivo desde Manizales, Colombia." />
      <meta property="og:url" content="https://petitdesign.co/nosotros" />

      <meta name="twitter:title" content="Nuestra Historia | Petit Design" />
      <meta name="twitter:description" content="Conoce la historia de Petit Design. Desde 2014 creamos lencería personalizada para bebés con amor, calidad y diseño exclusivo desde Manizales, Colombia." />

      <section className="container px-4 py-16 md:py-24 bg-linear-to-b from-cream to-background overflow-hidden">
        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-center font-semibold mb-4 md:mb-12 text-balance">
          {t('terms.title')}
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
          {t('terms.termsContent')}
        </p>
        <ol className="list-decimal list-outside my-4 ps-5 space-y-2">
          <li className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
            {t('terms.termsList1')}
          </li>
          <li className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
            {t('terms.termsList2')}
          </li>
          <li className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
            {t('terms.termsList3')}
          </li>
          <li className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
            {t('terms.termsList4')}
          </li>
          <li className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
            {t('terms.termsList5')}
          </li>
          <li className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
            {t('terms.termsList6a')}
            <a href="mailto:petitanddesign@gmail.com" className="underline hover:no-underline">
              petitanddesign@gmail.com
            </a>
            {t('terms.termsList6b')}
            <a href="tel:+573218813416" className="underline hover:no-underline">
              +57 321 8813416
            </a>.
          </li>
        </ol>
        <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
          {t('terms.termsFinalStatement')}
          <a href="https://www.sic.gov.co/" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">
            www.sic.gov.co
          </a>).
        </p>
      </section>
    </>
  );
}
