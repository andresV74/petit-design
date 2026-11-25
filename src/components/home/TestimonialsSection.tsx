import { Star, Quote } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

export function TestimonialsSection() {
  const { t, language } = useLanguage();

  const testimonials = [
    {
      id: '1',
      customer_name: 'Laura Gómez',
      content_es: 'Excelente calidad y atención. Compramos el set completo para nuestro bebé y quedó hermoso. El bordado personalizado quedó perfecto. Muy recomendado.',
      content_en: 'Excellent quality and service. We bought the complete set for our baby and it looked beautiful. The personalized embroidery was perfect. Highly recommended.',
      rating: 5,
    },
    {
      id: '2',
      customer_name: 'Andrea Martínez',
      content_es: 'Hermosos productos, muy buena calidad de las telas. La lencería para la cuna de mi bebé quedó preciosa. Mariana y Catalina son muy amables.',
      content_en: 'Beautiful products, very good fabric quality. The linens for my baby\'s crib turned out gorgeous. Mariana and Catalina are very kind.',
      rating: 5,
    },
    {
      id: '3',
      customer_name: 'Valentina Restrepo',
      content_es: 'Amé todo lo que pedí. Los productos llegaron perfectos y el servicio por WhatsApp fue excelente. Definitivamente volveré a comprar para mi próximo bebé.',
      content_en: 'I loved everything I ordered. The products arrived perfect and the WhatsApp service was excellent. I will definitely buy again for my next baby.',
      rating: 5,
    },
    {
      id: '4',
      customer_name: 'Carolina Duque',
      content_es: 'Súper lindos los productos y el tiempo de entrega fue el acordado. El nido personalizado con el nombre de mi hija quedó divino.',
      content_en: 'Super cute products and the delivery time was as agreed. The nest personalized with my daughter\'s name turned out divine.',
      rating: 5,
    },
    {
      id: '5',
      customer_name: 'María Fernanda López',
      content_es: 'La mejor lencería de bebé en Colombia. Compré cobija, nido y accesorios, todo llegó impecable. Recomiendo 100% a Petit Design.',
      content_en: 'The best baby linens in Colombia. I bought a blanket, nest and accessories, everything arrived impeccable. I 100% recommend Petit Design.',
      rating: 5,
    },
    {
      id: '6',
      customer_name: 'Juliana Ospina',
      content_es: 'Increíble la calidad del algodón y los acabados. Mi hermana lloró de emoción con el regalo que le hice para su baby shower. Gracias Petit Design!',
      content_en: 'Incredible cotton quality and finishes. My sister cried with emotion at the gift I gave her for her baby shower. Thank you Petit Design!',
      rating: 5,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-mint-light/30">
      <div className="container px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-12">
          {t('testimonials.title')}
        </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="relative p-8 rounded-2xl bg-card border border-border/50 shadow-sm animate-fade-in grid grid-rows-subgrid row-span-3 gap-4"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Quote className="absolute top-6 right-6 h-8 w-8 text-mint/20" />

                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                <p className="text-muted-foreground">
                  "{language === 'es' ? testimonial.content_es : testimonial.content_en}"
                </p>

                <p className="font-display font-semibold text-foreground">
                  {testimonial.customer_name}
                </p>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
}
