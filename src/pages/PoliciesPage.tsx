import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { trackWhatsAppClick } from '@/hooks/useMetaPixel';
import { getWhatsAppUrl } from '@/lib/whatsapp';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function PoliciesPage() {
  const { language } = useLanguage();

  const faqContent = {
    es: {
      title: 'Políticas y Normas de Envío',
      subtitle: 'Todo lo que necesitas saber antes de realizar tu pedido',
      whatsappNote: 'Recuerda: Todo proceso de compra debe ser finalizado vía WhatsApp',
      faqs: [
        {
          question: '¿Qué es Petit Design?',
          answer: 'Petit Design es una marca colombiana con más de 11 años de experiencia dedicada a la creación de lencería y accesorios para bebé. Todos nuestros productos son hechos en Colombia, en nuestro taller propio en Manizales, con telas 100% algodón y procesos artesanales de confección y personalización. Acompañamos a las mamás desde el nacimiento del bebé y en cada etapa de su crecimiento, cuidando cada detalle.',
        },
        {
          question: '¿Qué tipo de productos venden?',
          answer: 'Ofrecemos lencería para cuna y cama cuna, nidos, cobijas, cojines, bolsitas organizadoras, botiquines, neceseres y otros accesorios para bebé. También contamos con kits y sets especiales que agrupan varios productos y ofrecen un mejor valor, ideales para regalos o para armar la habitación del bebé.',
        },
        {
          question: '¿Los productos son personalizados?',
          answer: 'Sí. La mayoría de nuestros productos son personalizados con el nombre del bebé. Dependiendo del producto, puedes elegir la tela, el color del sesgo, el color del bordado, moños u otros acabados. Esto hace que cada pedido sea único y pensado especialmente para tu bebé.',
        },
        {
          question: '¿Cómo funciona el proceso de compra?',
          answer: 'Nuestro proceso es 100% acompañado. Inicia normalmente por WhatsApp, donde te asesoramos paso a paso: elección del producto, selección de telas, definición de personalización, confirmación del pedido, pagos, producción y despacho. Siempre estamos disponibles para resolver tus dudas durante el proceso.',
        },
        {
          question: '¿Cuánto tiempo tarda la producción?',
          answer: 'Nuestro tiempo estimado de producción es de 3 a 4 semanas. Este tiempo comienza a contar desde el día en que recibimos el pago del anticipo. Al ser productos personalizados y hechos a la medida, cada pedido requiere un proceso cuidadoso de confección.',
        },
        {
          question: '¿Cómo funcionan los pagos?',
          answer: 'Para iniciar la producción solicitamos un anticipo del 50% del valor del pedido. El 50% restante debe estar cancelado antes del despacho del producto. Esto nos permite asegurar materiales, telas y tiempos de producción.',
        },
        {
          question: '¿El envío está incluido?',
          answer: 'No. El valor del envío no está incluido en el precio de los productos y se paga por separado.',
        },
        {
          question: '¿Cómo se paga el envío?',
          answer: 'El envío se realiza principalmente por Servientrega y puede pagarse contra entrega o de forma anticipada. Si eliges pago anticipado, este se realiza únicamente a la cuenta Nequi de Servientrega.',
        },
        {
          question: '¿Qué pasa si mi pedido llega con algún inconveniente?',
          answer: 'Si tu pedido llega incompleto o con algún detalle de calidad, revisamos el caso y, si es responsabilidad nuestra, reponemos o corregimos el producto. Nuestro objetivo es que recibas exactamente lo que confirmamos contigo.',
        },
      ],
      policiesTitle: 'Políticas de Petit Design',
      policies: [
        {
          title: 'Producción',
          content: 'Todos nuestros productos se elaboran bajo pedido y de forma personalizada. No iniciamos producción sin el pago del anticipo del 50%. El tiempo estimado de producción es de 3 a 4 semanas.',
        },
        {
          title: 'Confirmación del pedido',
          content: 'Antes de iniciar producción, enviamos una confirmación detallada del pedido. Es responsabilidad del cliente revisar cuidadosamente telas, colores, nombre y tipografía.',
        },
        {
          title: 'Cambios y correcciones',
          content: 'Si el error es responsabilidad de Petit Design, asumimos el reproceso y el envío. Si el pedido fue confirmado correctamente y luego el cliente solicita cambios, los costos asociados deberán ser asumidos por el cliente.',
        },
        {
          title: 'Envíos',
          content: 'Los envíos se realizan principalmente por Servientrega. No despachamos pedidos que no estén cancelados al 100%.',
        },
        {
          title: 'Post-venta',
          content: 'Atendemos cada caso de forma empática y responsable, buscando siempre una solución clara y justa para el cliente.',
        },
      ],
    },
    en: {
      title: 'Shipping Policies & Guidelines',
      subtitle: 'Everything you need to know before placing your order',
      whatsappNote: 'Remember: All purchase processes must be completed via WhatsApp',
      faqs: [
        {
          question: 'What is Petit Design?',
          answer: 'Petit Design is a Colombian brand with over 11 years of experience dedicated to creating baby linens and accessories. All our products are made in Colombia, in our own workshop in Manizales, with 100% cotton fabrics and artisanal manufacturing and customization processes. We accompany mothers from the baby\'s birth and through each stage of growth, taking care of every detail.',
        },
        {
          question: 'What type of products do you sell?',
          answer: 'We offer crib and toddler bed linens, nests, blankets, cushions, organizer bags, first aid kits, toiletry bags and other baby accessories. We also have special kits and sets that group various products and offer better value, ideal for gifts or setting up the baby\'s room.',
        },
        {
          question: 'Are the products personalized?',
          answer: 'Yes. Most of our products are personalized with the baby\'s name. Depending on the product, you can choose the fabric, bias color, embroidery color, bows or other finishes. This makes each order unique and specially designed for your baby.',
        },
        {
          question: 'How does the purchasing process work?',
          answer: 'Our process is 100% accompanied. It normally starts via WhatsApp, where we advise you step by step: product selection, fabric selection, personalization definition, order confirmation, payments, production and shipping. We are always available to answer your questions during the process.',
        },
        {
          question: 'How long does production take?',
          answer: 'Our estimated production time is 3 to 4 weeks. This time starts counting from the day we receive the deposit payment. Being personalized and custom-made products, each order requires a careful manufacturing process.',
        },
        {
          question: 'How do payments work?',
          answer: 'To start production we request a 50% deposit of the order value. The remaining 50% must be paid before the product is shipped. This allows us to secure materials, fabrics and production times.',
        },
        {
          question: 'Is shipping included?',
          answer: 'No. The shipping cost is not included in the product price and is paid separately.',
        },
        {
          question: 'How is shipping paid?',
          answer: 'Shipping is mainly done through Servientrega and can be paid on delivery or in advance. If you choose advance payment, this is made only to Servientrega\'s Nequi account.',
        },
        {
          question: 'What happens if my order arrives with an issue?',
          answer: 'If your order arrives incomplete or with a quality issue, we review the case and, if it\'s our responsibility, we replace or correct the product. Our goal is for you to receive exactly what we confirmed with you.',
        },
      ],
      policiesTitle: 'Petit Design Policies',
      policies: [
        {
          title: 'Production',
          content: 'All our products are made to order and personalized. We do not start production without the 50% deposit payment. The estimated production time is 3 to 4 weeks.',
        },
        {
          title: 'Order Confirmation',
          content: 'Before starting production, we send a detailed order confirmation. It is the customer\'s responsibility to carefully review fabrics, colors, name and typography.',
        },
        {
          title: 'Changes and Corrections',
          content: 'If the error is Petit Design\'s responsibility, we assume reprocessing and shipping. If the order was correctly confirmed and then the customer requests changes, the associated costs must be assumed by the customer.',
        },
        {
          title: 'Shipping',
          content: 'Shipments are made mainly through Servientrega. We do not ship orders that are not 100% paid.',
        },
        {
          title: 'After-sales',
          content: 'We handle each case empathetically and responsibly, always seeking a clear and fair solution for the customer.',
        },
      ],
    },
  };

  const t = faqContent[language];

  return (
    <>
			<title>Políticas y Normas de Envío | Petit Design</title>
			<meta name="description" content="Conoce nuestras políticas de compra, envío, producción y post-venta. Todo lo que necesitas saber antes de realizar tu pedido en Petit Design." />
			<link rel="canonical" href="https://petitdesign.com.co/politicas" />
			<meta property="og:title" content="Políticas y Normas de Envío | Petit Design" />
			<meta property="og:description" content="Conoce nuestras políticas de compra, envío, producción y post-venta. Todo lo que necesitas saber antes de realizar tu pedido en Petit Design." />
			<meta property="og:url" content="https://petitdesign.com.co/politicas" />
			<meta property="og:type" content="website" />
			<meta property="og:image" content="https://petitdesign.com.co/logo-full.png" />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content="Políticas y Normas de Envío | Petit Design" />
			<meta name="twitter:description" content="Conoce nuestras políticas de compra, envío, producción y post-venta. Todo lo que necesitas saber antes de realizar tu pedido en Petit Design." />
			<script type="application/ld+json">{JSON.stringify({
				"@context": "https://schema.org",
				"@type": "FAQPage",
				"mainEntity": faqContent.es.faqs.map(faq => ({
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
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-center animate-fade-in">
            {t.title}
          </h1>
          <p className="text-lg text-muted-foreground text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {t.subtitle}
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 md:py-16">
        <div className="container px-4">
          <h2 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-center">
            {language === 'es' ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
          </h2>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {t.faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`faq-${index}`}
                  className="bg-card rounded-xl border border-border/50 px-6 shadow-sm"
                >
                  <AccordionTrigger className="text-left font-medium hover:no-underline py-4 cursor-pointer">
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
          <h2 className="font-display text-2xl md:text-3xl font-semibold mb-8 text-center">
            {t.policiesTitle}
          </h2>

          <div className="max-w-3xl mx-auto grid gap-6">
            {t.policies.map((policy, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-xl border border-border/50 shadow-sm animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="font-display text-lg font-semibold mb-2 text-foreground">
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
            <h2 className="font-display text-2xl md:text-3xl font-semibold mb-4">
              {language === 'es' ? '¿Tienes más preguntas?' : 'Have more questions?'}
            </h2>
            <p className="text-muted-foreground mb-6">
              {language === 'es'
                ? 'Estamos aquí para ayudarte. Contáctanos por WhatsApp y te asesoramos en todo el proceso.'
                : 'We\'re here to help. Contact us on WhatsApp and we\'ll guide you through the entire process.'}
            </p>
            <Button asChild className="h-11 rounded-md px-8 bg-[#25D366] hover:bg-[#20BD5A] text-white gap-2">
              <a
                href={getWhatsAppUrl({ message: language === 'es' ? '¡Hola! Tengo una pregunta sobre las políticas de Petit Design' : 'Hello! I have a question about Petit Design policies', source: 'Políticas y Normas de Envío', language })}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('Políticas CTA', { content_category: 'Policies' })}
              >
                <MessageCircle className="h-5 w-5" />
                {language === 'es' ? 'Contactar por WhatsApp' : 'Contact via WhatsApp'}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
