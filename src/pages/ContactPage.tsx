import { useLanguage } from '@/lib/i18n.tsx'
import { ContactForm } from '@/components/ContactForm.tsx'
import { WhatsAppCard } from '@/components/contactPage/WhatsAppCard.tsx'
import { InfoCard } from '@/components/contactPage/InfoCard.tsx'

export function ContactPage() {
  const { t } = useLanguage();


  const headTitle = `${t('contact.title')} | Petit Design`

  return (
    <>
			<title>{headTitle}</title>
			<meta name="description" content={`${t('contact.description')} Petit Design - Manizales, Colombia.`} />
			<link rel="canonical" href="https://petitdesign.com.co/contacto" />

			<meta property="og:title" content={`${t('contact.title')} | Petit Design`} />
			<meta property="og:description" content={t('contact.description')} />
			<meta property="og:url" content="https://petitdesign.com.co/contacto" />

			<meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={`${t('contact.description')} Petit Design - Manizales, Colombia.`} />

			<script type="application/ld+json">{JSON.stringify({
				"@context": "https://schema.org",
				"@type": "ContactPage",
				"name": "Petit Design - Contacto",
				"url": "https://petitdesign.com.co/contacto",
				"mainEntity": {
					"@type": "Organization",
					"name": "Petit Design",
					"telephone": "+573105453701",
					"email": "petitanddesign@gmail.com",
					"address": {
						"@type": "PostalAddress",
						"addressLocality": "Manizales",
						"addressCountry": "CO"
					}
				}
			})}</script>

      <section className="relative py-16 md:py-24 bg-linear-to-b from-cream to-background overflow-hidden">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 animate-fade-in">
              {t('contact.title')}
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-in text-balance" style={{ animationDelay: '0.1s' }}>
              {t('contact.subtitle')}
            </p>
          </div>
        </div>
        <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-48 w-48 rounded-full bg-accent/10 blur-3xl" />
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container px-4">
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            <div className="lg:col-span-2 space-y-10">
              <WhatsAppCard />
              <InfoCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
