import { useLanguage } from '@/lib/i18n';
import { ContactForm } from '@/components/ContactForm.tsx'
import { WhatsAppCard } from '@/components/contactPage/WhatsAppCard'
import { InfoCard } from '@/components/contactPage/InfoCard'

export function ContactPage() {
  const { language } = useLanguage();

  const content = {
    es: {
      pageTitle: 'Contáctanos',
      pageSubtitle: 'Estamos aquí para ayudarte. Escríbenos por el medio que prefieras y te responderemos lo antes posible.',
      pageDescription: 'Contáctanos para personalizar la lencería de tu bebé. Escríbenos por formulario o WhatsApp.',
    },
    en: {
      pageTitle: 'Contact Us',
      pageSubtitle: "We're here to help. Write to us through your preferred channel and we'll respond as soon as possible.",
      pageDescription: 'Contact us to personalize your baby linens. Write to us via form or WhatsApp.',
    },
  };

  const t = content[language];
  const headTitle = `${t.pageTitle} | Petit Design`

  return (
    <>
			<title>{headTitle}</title>
			<meta name="description" content={`${t.pageDescription} Petit Design - Manizales, Colombia.`} />
			<link rel="canonical" href="https://petitdesign.com.co/contacto" />
			<meta property="og:title" content={`${t.pageTitle} | Petit Design`} />
			<meta property="og:description" content={t.pageDescription} />
			<meta property="og:url" content="https://petitdesign.com.co/contacto" />
			<meta property="og:type" content="website" />
			<meta property="og:image" content="https://petitdesign.com.co/logo-full.png" />
			<meta name="twitter:card" content="summary_large_image" />
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
              {t.pageTitle}
            </h1>
            <p className="text-lg text-muted-foreground animate-fade-in" style={{ animationDelay: '0.1s' }}>
              {t.pageSubtitle}
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

            <div className="lg:col-span-2 space-y-6">
              <WhatsAppCard />
              <InfoCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
