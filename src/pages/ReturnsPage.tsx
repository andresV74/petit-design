import { useLanguage } from '@/lib/i18n.tsx'

export function ReturnsPage() {
  const { t } = useLanguage()
  const pageTitle = `${t('returns.title')} | Petit Design`

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
          {t('returns.title')}
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
          {t('returns.intro')}
        </p>
        <ol className="list-decimal list-outside my-4 ps-5 space-y-2">
          <li className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
            {t('returns.list1')}
            <ul className="list-disc list-outside my-2 ps-5 space-y-1">
              <li>
                {t('returns.list1item1')}
                <ol className="list-decimal list-outside mb-4 ps-5 space-y-2">
                  <li>{t('returns.list1item1appendix1')}</li>
                  <li>{t('returns.list1item1appendix2')}</li>
                  <li>{t('returns.list1item1appendix3')}</li>
                  <li>{t('returns.list1item1appendix4')}</li>
                </ol>
              </li>
              <li>{t('returns.list1item2')}</li>
            </ul>
          </li>
          <li className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
            {t('returns.list2')}
            <ul className="list-disc list-outside my-2 ps-5 space-y-1">
              <li>{t('returns.list2item1')}</li>
              <li>{t('returns.list2item2')}</li>
            </ul>
          </li>
          <li className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
            {t('returns.list3')}
            <ul className="list-disc list-outside my-2 ps-5 space-y-1">
              <li>
                {t('returns.list3item1')}
                <a href="mailto:petitanddesign@gmail.com" className="underline hover:no-underline">
                  petitanddesign@gmail.com
                </a>.
              </li>
              <li>
                {t('returns.list3item2')}
                <a href="tel:+573218813416" className="underline hover:no-underline">
                  +57 321 8813416
                </a>.
              </li>
              <li>{t('returns.list3item3')}</li>
            </ul>
          </li>
        </ol>
        <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
          {t('returns.outro')}
        </p>
      </section>
    </>
  );
}
