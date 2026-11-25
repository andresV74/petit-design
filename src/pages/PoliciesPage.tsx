import { useMemo } from 'react'
import { MessageCircle } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'
import { Button } from '@/components/ui/button'
import { trackWhatsAppClick } from '@/hooks/useMetaPixel'
import { getWhatsAppUrl } from '@/lib/whatsapp'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { faqs, policies } from '@/const/policiesTranslations.ts'

export function PoliciesPage() {
  const { t, language } = useLanguage();

  const { tFaqs, tPolicies } = useMemo(() => {
    const faqsTranslations = faqs();
    const policiesTranslations = policies();

    return {
      tFaqs: faqsTranslations[language],
      tPolicies: policiesTranslations[language]
    };
  }, [language]);

  return (
    <>
			<title>Políticas y Normas de Envío | Petit Design</title>
			<meta name="description" content="Conoce nuestras políticas de compra, envío, producción y post-venta. Todo lo que necesitas saber antes de realizar tu pedido en Petit Design." />
			<link rel="canonical" href="https://petitdesign.co/politicas" />

			<meta property="og:title" content="Políticas y Normas de Envío | Petit Design" />
			<meta property="og:description" content="Conoce nuestras políticas de compra, envío, producción y post-venta. Todo lo que necesitas saber antes de realizar tu pedido en Petit Design." />
			<meta property="og:url" content="https://petitdesign.co/politicas" />

			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content="Políticas y Normas de Envío | Petit Design" />
			<meta name="twitter:description" content="Conoce nuestras políticas de compra, envío, producción y post-venta. Todo lo que necesitas saber antes de realizar tu pedido en Petit Design." />

			<script type="application/ld+json">{JSON.stringify({
				"@context": "https://schema.org",
				"@type": "FAQPage",
				"mainEntity": tFaqs.map(faq => ({
					"@type": "Question",
					"name": faq.question,
					"acceptedAnswer": {
						"@type": "Answer",
						"text": faq.answer
					}
				}))
			})}</script>

      {/* Hero */}
      <section className="relative py-12 md:py-16 bg-linear-to-b from-cream to-background overflow-hidden">
        <div className="container px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-center animate-fade-in">
            {t('policies.title')}
          </h1>
          <p className="text-lg text-muted-foreground text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {t('policies.subtitle')}
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 md:py-16">
        <div className="container px-4">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
            {t('policies.faqs')}
          </h2>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {tFaqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="bg-card rounded-xl border border-border/50 px-6 shadow-sm"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4 cursor-pointer">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="py-12 md:py-16 bg-beige/30">
        <div className="container px-4">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">
            {t('policies.policiesTitle')}
          </h2>

          <div className="max-w-3xl mx-auto grid gap-6">
            {tPolicies.map((policy, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-xl border border-border/50 shadow-sm animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {policy.title}
                </h3>
                <p className="text-muted-foreground">
                  {policy.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              {t('policies.moreTitle')}
            </h2>
            <p className="text-muted-foreground mb-6">
              {t('policies.moreDescription')}
            </p>
            <Button asChild className="h-11 rounded-md px-8 bg-[#25D366] hover:bg-[#20BD5A] text-white gap-2">
              <a
                href={getWhatsAppUrl({ message: t('policies.moreCtaMessage'), source: 'Políticas y Normas de Envío', language })}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('Políticas CTA', { content_category: 'Policies' })}
              >
                <MessageCircle className="h-5 w-5" />
                {t('policies.moreCta')}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
