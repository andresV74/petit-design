import { Heart, Award, Users, Sparkles, Leaf, MapPin, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge.tsx'
import { useLanguage } from '@/lib/i18n';
import { trackWhatsAppClick } from '@/hooks/useMetaPixel';
import { getWhatsAppUrl } from '@/lib/whatsapp';

export function AboutPage() {
  const { language } = useLanguage();

  const content = {
    es: {
      title: 'Quiénes somos',
      subtitle: 'Creando momentos especiales desde 2014',
      storyPart1: `En Petit Design creemos que los espacios donde crecen los bebés deben ser tan especiales como los sueños con los que son imaginados.

      Desde hace más de 12 años diseñamos y confeccionamos lencería, accesorios y piezas decorativas para bebés, creando ambientes llenos de belleza, calidez y significado. Cada colección nace del convencimiento de que los pequeños detalles tienen el poder de transformar un espacio y convertirlo en un lugar donde se construyen los primeros recuerdos de una familia.`,
      storyPart2: `La historia de Petit Design comenzó en 2014 como el sueño compartido de dos emprendedoras que deseaban ofrecer algo diferente para el mundo infantil. Con el paso de los años, la marca ha evolucionado, creciendo junto a miles de familias que nos han permitido acompañarlas en una de las etapas más emocionantes de la vida: la llegada de un bebé.

      Como diseñadora y fundadora, siempre imaginé construir una marca capaz de combinar diseño, calidad y emoción en cada creación. Lo que empezó como un sueño se ha convertido en una empresa sólida que hoy llega a hogares dentro y fuera del país, llevando consigo el amor, la dedicación y el cuidado con los que fue concebida.

      En Petit Design no solo confeccionamos productos. Creamos piezas pensadas para permanecer en la memoria de las familias, acompañar momentos irrepetibles y hacer aún más especial el inicio de una nueva historia.

      Seguimos diseñando con la misma ilusión del primer día, convencidos de que cuando el trabajo se hace con disciplina, pasión y propósito, los sueños sí pueden convertirse en realidad.
`,
      purposeTitle: 'Nuestro Propósito',
      purposeText: 'En Petit Design trabajamos con un propósito claro: crear productos que transmitan amor, calidad, cuidado y dedicación.',
      highlights: [
        { icon: Leaf, text: 'Nuestras telas son 100% algodón' },
        { icon: Sparkles, text: 'Diseñamos nuestras telas y cada detalle con intención' },
        { icon: MapPin, text: 'Todo es hecho en Colombia, en taller propio con mujeres cabeza de familia' },
        { icon: Heart, text: 'Cada producto se realiza de forma personalizada, pensado para cada bebé y cada familia' },
      ],
      todayText: `Hoy seguimos retándonos todos los días para crecer, mejorar y llevar Petit Design a más hogares, con la misma esencia con la que empezamos: hacer de cada nacimiento un momento aún más especial.

Este año celebramos 12 años construyendo Petit Design con el corazón. Nuestro taller de producción está en Manizales, y desde allí enviamos cada pedido con mucho cuidado a toda Colombia, para acompañar a más familias en la llegada de sus bebés.`,
      descriptionTitle: 'Sobre Petit Design',
      description: `Petit Design es una marca colombiana especializada en lencería y accesorios personalizados para bebés, creada para acompañar con amor y cuidado los primeros momentos de vida. Desde 2014, diseñamos y confeccionamos productos pensados para el nacimiento, el descanso y la rutina diaria del bebé, combinando funcionalidad, estética y calidad.

Nuestra actividad principal es el diseño, confección y personalización de lencería para cuna y cama cuna, accesorios de lencería, kits para clínica y viaje, y productos complementarios para bebés. Todos nuestros productos son hechos a la medida, producidos bajo pedido y personalizados con el nombre del bebé, utilizando telas 100% algodón y materiales seleccionados cuidadosamente.`,
      missionTitle: 'Nuestra Misión',
      mission: 'Ofrecer productos para bebés que transmitan tranquilidad, confianza y cercanía a las familias, brindando una experiencia de compra acompañada, humana y confiable, desde el primer contacto hasta la entrega final. Buscamos que cada producto refleje dedicación, detalle y amor, respetando los tiempos y necesidades de cada familia.',
      visionTitle: 'Nuestra Visión',
      vision: 'Consolidarnos como una marca referente en Colombia en lencería y accesorios personalizados para bebés, reconocida por la calidad de sus productos, su servicio cercano y su capacidad de acompañar a las familias en una de las etapas más importantes de sus vidas. Aspiramos a crecer de manera sostenible, apoyándonos en procesos digitales y tecnología que nos permitan escalar sin perder el trato humano que nos caracteriza.',
      values: [
        { icon: Heart, title: 'Amor en cada puntada', desc: 'Cada producto está hecho con amor genuino y dedicación.' },
        { icon: Award, title: 'Calidad premium', desc: 'Solo usamos los mejores materiales, seguros para tu bebé.' },
        { icon: Users, title: 'Atención personalizada', desc: 'Te acompañamos en cada paso de tu pedido.' },
        { icon: Sparkles, title: 'Diseños únicos', desc: 'Creamos piezas personalizadas solo para ti.' },
      ],
    },
    en: {
      title: 'Who are we',
      subtitle: 'Creating special moments since 2014',
      storyPart1: `At Petit Design, we believe that the spaces where babies grow up should be as special as the dreams in which they are imagined.

For more than 12 years, we have been designing and crafting lingerie, accessories, and decorative pieces for babies, creating spaces filled with beauty, warmth, and meaning. Each collection is born from the belief that small details have the power to transform a space and turn it into a place where a family's earliest memories are made.`,
      storyPart2: `The story of Petit Design began in 2014 as the shared dream of two entrepreneurs who wanted to offer something different for the world of children. Over the years, the brand has evolved, growing alongside thousands of families who have allowed us to accompany them through one of life’s most exciting stages: the arrival of a baby.

      As a designer and founder, I always envisioned building a brand capable of combining design, quality, and emotion in every creation. What began as a dream has become a solid company that today reaches homes both within and outside the country, carrying with it the love, dedication, and care with which it was conceived.

      At Petit Design, we don’t just make products. We create pieces designed to remain in families’ memories, to be part of once-in-a-lifetime moments, and to make the beginning of a new story even more special.

      We continue to design with the same enthusiasm as on day one, convinced that when work is done with discipline, passion, and purpose, dreams really can come true.`,
      purposeTitle: 'Our Purpose',
      purposeText: 'At Petit Design we work with a clear purpose: to create products that convey love, quality, care and dedication.',
      highlights: [
        { icon: Leaf, text: 'Our fabrics are 100% cotton' },
        { icon: Sparkles, text: 'We design our fabrics and every detail with intention' },
        { icon: MapPin, text: 'Everything is made in Colombia, in our own workshop with women heads of household' },
        { icon: Heart, text: 'Each product is made in a personalized way, designed for each baby and each family' },
      ],
      todayText: `Today we continue to challenge ourselves every day to grow, improve and bring Petit Design to more homes, with the same essence with which we started: making each birth an even more special moment.

This year we celebrate 12 years building Petit Design with heart. Our production workshop is in Manizales, and from there we send each order with great care throughout Colombia, to accompany more families in the arrival of their babies.`,
      descriptionTitle: 'About Petit Design',
      description: `Petit Design is a Colombian brand specialized in personalized baby linens and accessories, created to accompany with love and care the first moments of life. Since 2014, we design and manufacture products designed for birth, rest and the baby's daily routine, combining functionality, aesthetics and quality.

Our main activity is the design, manufacturing and customization of crib and toddler bed linens, linen accessories, clinic and travel kits, and complementary products for babies. All our products are custom-made, produced to order and personalized with the baby's name, using 100% cotton fabrics and carefully selected materials.`,
      missionTitle: 'Our Mission',
      mission: 'To offer products for babies that convey peace, trust and closeness to families, providing an accompanied, human and reliable shopping experience, from the first contact to final delivery. We seek that each product reflects dedication, detail and love, respecting the times and needs of each family.',
      visionTitle: 'Our Vision',
      vision: 'To establish ourselves as a reference brand in Colombia in personalized baby linens and accessories, recognized for the quality of its products, its close service and its ability to accompany families in one of the most important stages of their lives. We aspire to grow sustainably, relying on digital processes and technology that allow us to scale without losing the human touch that characterizes us.',
      values: [
        { icon: Heart, title: 'Love in every stitch', desc: 'Each product is made with genuine love and dedication.' },
        { icon: Award, title: 'Premium quality', desc: 'We only use the best materials, safe for your baby.' },
        { icon: Users, title: 'Personalized attention', desc: 'We accompany you every step of your order.' },
        { icon: Sparkles, title: 'Unique designs', desc: 'We create personalized pieces just for you.' },
      ],
    },
  };

  const t = content[language];

  return (
    <>
      {/* Head */}
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
                {language === 'es' ? '12 años de historia' : '12 years of history'}
              </span>
            </Badge>
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 animate-fade-in">
              {t.title}
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.1s' }}>
              {t.subtitle}
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
                  src="/images/founders.webp"
                  alt="Mariana y Catalina - Fundadoras de Petit Design"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                {t.storyPart1}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line mt-6">
                {t.storyPart2}
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
              {t.purposeTitle}
            </h2>
            <p className="text-lg text-center text-muted-foreground mb-10">
              {t.purposeText}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.highlights.map((item, index) => (
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
            <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line text-center">
              {t.todayText}
            </p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-16 md:py-24 bg-beige/30">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-semibold mb-6 text-center">
              {t.descriptionTitle}
            </h2>
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line mb-12">
              {t.description}
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-card rounded-2xl border border-border/50 shadow-sm">
                <h3 className="font-display text-xl font-semibold mb-3 text-mint-dark">
                  {t.missionTitle}
                </h3>
                <p className="text-muted-foreground">
                  {t.mission}
                </p>
              </div>
              <div className="p-6 bg-card rounded-2xl border border-border/50 shadow-sm">
                <h3 className="font-display text-xl font-semibold mb-3 text-mint-dark">
                  {t.visionTitle}
                </h3>
                <p className="text-muted-foreground">
                  {t.vision}
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
            {t.values.map((value, index) => (
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
                <p className="text-sm text-muted-foreground">
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
              {language === 'es'
                ? 'Lencería personalizada para bebés, hecha con amor desde Manizales, Colombia 🇨🇴'
                : 'Personalized baby linens, made with love from Manizales, Colombia 🇨🇴'}
            </p>
            <a
              href={getWhatsAppUrl({ source: 'Nuestra Historia', language })}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('Nuestra Historia CTA', { content_category: 'About' })}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-medium hover:bg-[#20BD5A] transition-colors"
            >
              {language === 'es' ? 'Contáctanos' : 'Contact Us'}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
