import { useLanguage } from '@/lib/i18n.tsx'

export function PersonalDataPage() {
  const { t } = useLanguage()
  const pageTitle = `${t('personalData.title')} | Petit Design`

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
          {t('personalData.title')}
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
          {t('personalData.intro')}
        </p>
        <ol className="list-decimal list-outside my-4 ps-5 space-y-2">
          <li className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
            {t('personalData.list1')}
            <ul className="list-disc list-outside my-2 ps-5 space-y-1">
              <li>{t('personalData.list1Purpose1')}</li>
              <li>{t('personalData.list1Purpose2')}</li>
              <li>{t('personalData.list1Purpose3')}</li>
              <li>{t('personalData.list1Purpose4')}</li>
              <li>{t('personalData.list1Purpose5')}</li>
              <li>{t('personalData.list1Purpose6')}</li>
            </ul>
          </li>
          <li className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
            {t('personalData.list2')}
            <ul className="list-disc list-outside my-2 ps-5 space-y-1">
              <li>{t('personalData.list2right1')}</li>
              <li>{t('personalData.list2right2')}</li>
              <li>{t('personalData.list2right3')}</li>
              <li>{t('personalData.list2right4')}</li>
              <li>{t('personalData.list2right5')}</li>
            </ul>
          </li>
          <li className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
            {t('personalData.list3a')}
            <a href="mailto:petitanddesign@gmail.com" className="underline hover:no-underline">
              petitanddesign@gmail.com
            </a>
            {t('personalData.list3b')}
          </li>
        </ol>
        <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
          {t('personalData.outro')}
        </p>
      </section>
    </>
  );
}
