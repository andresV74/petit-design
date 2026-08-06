interface Translations {
  [key: string]: {
    es: string
    en: string
  };
}

export const translations: Translations = {
  // Navigation
  'nav.home': { es: 'Inicio', en: 'Home' },
  'nav.catalog': { es: 'Catálogo', en: 'Catalog' },
  'nav.about': { es: 'Nosotros', en: 'About Us' },
  'nav.contact': { es: 'Contacto', en: 'Contact' },
  'nav.categories': { es: 'Categorías', en: 'Categories' },
  'nav.policies': { es: 'Politicas', en: 'Policies' },
  'nav.boysCatalog': { es: 'Catálogo Niño', en: "Boy's Catalog" },
  'nav.girlsCatalog': { es: 'Catálogo Niña', en: "Girl's Catalog" },

  // Header
  'header.fabrics': { es: 'Telas', en: "Fabrics" },
  'header.boysFabricsCatalog': { es: 'Catálogo Telas Niño', en: "Boy's Fabric Catalog" },
  'header.girlsFabricsCatalog': { es: 'Catálogo Telas Niña', en: "Girls' Fabrics Catalog" },

  // Homepage hero
  'hero.beforeTitle': { es: '100% Personalizable', en: '100% Customizable'},
  'hero.title': {
    es: 'Lencería de cuna personalizada y accesorios para bebés y niños, diseñados para acompañar sus primeros años con calidad y dedicación',
    en: 'Personalized crib linens and accessories for babies and children, designed to accompany them through their early years with quality and care'
  },
  'hero.subtitle': {
    es: 'Cada producto es único y personalizado con el nombre de tu bebé. Diseños exclusivos 100% colombianos',
    en: 'Each product is unique and personalized with your baby\'s name. Exclusive, 100% Colombian designs'
  },
  'hero.badgeTitle': { es: 'Todos nuestros productos son personalizables', en: 'All our products are customizable' },
  'hero.badgeSubtitle': { es: 'Bordamos el nombre de tu bebé con amor', en: 'We embroider your baby\'s name with love' },
  'hero.cta': { es: 'Descubre toda la colección', en: 'Discover the entire collection' },
  'hero.whatsAppCta': { es: 'Consultar por WhatsApp', en: 'Ask on WhatsApp' },

  // Homepage featured kits
  'kits.badge': { es: 'Lo más vendido', en: 'Best Sellers' },
  'kits.title': { es: 'Kits Personalizados', en: 'Personalized Kits' },
  'kits.description': {
    es: 'Sets completos diseñados para el nacimiento de tu bebé. Todo lo que necesitas en un solo paquete, con la posibilidad de personalizarlo con el nombre de tu pequeño.',
    en: 'Complete sets designed for your baby\'s birth. Everything you need in one package, with the possibility of personalizing it with your little one\'s name.'
  },
  'kits.cta': { es: 'Ver todos los Kits', en: 'View all Kits' },

  // Homepage categories
  'categories.title': { es: 'Nuestras Categorías', en: 'Our Categories' },
  'categories.subtitle': {
    es: 'Explora nuestra colección de productos artesanales personalizados para tu bebé',
    en: 'Explore our collection of personalized handmade products for your baby'
  },
  'categories.cta': { es: 'Ver subcategorías', en: 'View subcategories' },

  // Homepage personalization
  'personalization.badge': { es: 'Personalización única', en: 'Unique personalization' },
  'personalization.title': { es: 'Personaliza tu Producto', en: 'Personalize Your Product' },
  'personalization.description': {
    es: 'Comienza eligiendo el género del bebé para ver nuestras telas exclusivas',
    en: 'Start by choosing the baby\'s gender to see our exclusive fabrics'
  },
  'personalization.buttonCta': { es: 'Ver telas disponibles', en: 'See fabrics below' },
  'personalization.buttonCtaSelected': { es: 'Ver telas abajo', en: 'See fabrics below' },
  'personalization.instructions': {
    es: '✨ Elige una opción para ver las telas disponibles',
    en: '✨ Choose an option to see available fabrics' },
  'personalization.viewAll': { es: 'Ver todas las telas', en: 'View all fabrics' },
  'personalization.whatsAppCta': {
    es: '¡Tenemos muchos más diseños! Pregunta por WhatsApp para ver más opciones.',
    en: 'We have many more designs! Ask on WhatsApp to see more options.'
  },

  // Homepage benefits
  'benefits.title': { es: '¿Por qué elegirnos?', en: 'Why choose us?' },
  'benefits.personalization': { es: 'Personalización con nombre', en: 'Personalization with name' },
  'benefits.personalization.desc': {
    es: 'Cada pieza lleva el nombre de tu bebé bordado con amor',
    en: 'Each piece carries your baby\'s name embroidered with love'
  },
  'benefits.handmade': { es: 'Hecho en Colombia', en: 'Made in Colombia' },
  'benefits.handmade.desc': {
    es: 'Artesanía colombiana de la más alta calidad',
    en: 'Colombian craftsmanship of the highest quality'
  },
  'benefits.materials': { es: 'Materiales suaves y seguros', en: 'Soft and safe materials' },
  'benefits.materials.desc': {
    es: 'Solo usamos telas hipoalergénicas y certificadas',
    en: 'We only use hypoallergenic and certified fabrics'
  },
  'benefits.attention': { es: 'Atención personalizada', en: 'Personalized attention' },
  'benefits.attention.desc': { es: 'Te acompañamos en cada paso de tu pedido', en: 'We accompany you every step of your order' },

  // Homepage testimonials
  'testimonials.title': { es: 'Lo que dicen nuestras clientas', en: 'What our customers say' },

  // About page
  'about.badge': { es: '12 años de historia', en: '12 years of history' },
  'about.title': { es: 'Quiénes somos', en: 'Who are we' },
  'about.subtitle': { es: 'Creando momentos especiales desde 2014', en: 'Creating special moments since 2014' },
  'about.story.part1': {
    es: `En Petit Design creemos que los espacios donde crecen los bebés deben ser tan especiales como los sueños con los que son imaginados.

        Desde hace más de 12 años diseñamos y confeccionamos lencería, accesorios y piezas decorativas para bebés, creando ambientes llenos de belleza, calidez y significado. Cada colección nace del convencimiento de que los pequeños detalles tienen el poder de transformar un espacio y convertirlo en un lugar donde se construyen los primeros recuerdos de una familia.

        La historia de Petit Design comenzó en 2014 como el sueño compartido de dos emprendedoras que deseaban ofrecer algo diferente para el mundo infantil. Con el paso de los años, la marca ha evolucionado, creciendo junto a miles de familias que nos han permitido acompañarlas en una de las etapas más emocionantes de la vida: la llegada de un bebé.

        Como diseñadora y fundadora, siempre imaginé construir una marca capaz de combinar diseño, calidad y emoción en cada creación. Lo que empezó como un sueño se ha convertido en una empresa sólida que hoy llega a hogares dentro y fuera del país, llevando consigo el amor, la dedicación y el cuidado con los que fue concebida.

        En Petit Design no solo confeccionamos productos. Creamos piezas pensadas para permanecer en la memoria de las familias, acompañar momentos irrepetibles y hacer aún más especial el inicio de una nueva historia.

        Seguimos diseñando con la misma ilusión del primer día, convencidos de que cuando el trabajo se hace con disciplina, pasión y propósito, los sueños sí pueden convertirse en realidad.`,
    en: `At Petit Design, we believe that the spaces where babies grow up should be as special as the dreams in which they are imagined.

        For more than 12 years, we have been designing and crafting lingerie, accessories, and decorative pieces for babies, creating spaces filled with beauty, warmth, and meaning. Each collection is born from the belief that small details have the power to transform a space and turn it into a place where a family's earliest memories are made.

        The story of Petit Design began in 2014 as the shared dream of two entrepreneurs who wanted to offer something different for the world of children. Over the years, the brand has evolved, growing alongside thousands of families who have allowed us to accompany them through one of life's most exciting stages: the arrival of a baby.

        As a designer and founder, I always envisioned building a brand capable of combining design, quality, and emotion in every creation. What began as a dream has become a solid company that today reaches homes both within and outside the country, carrying with it the love, dedication, and care with which it was conceived.

        At Petit Design, we don't just make products. We create pieces designed to remain in families' memories, to be part of once-in-a-lifetime moments, and to make the beginning of a new story even more special.

        We continue to design with the same enthusiasm as on day one, convinced that when work is done with discipline, passion, and purpose, dreams really can come true.`
    },
  'about.purposeTitle': { es: 'Nuestro Propósito', en: 'Our Purpose' },
  'about.purposeText': {
    es: 'En Petit Design trabajamos con un propósito claro: crear productos que transmitan amor, calidad, cuidado y dedicación.',
    en: 'At Petit Design we work with a clear purpose: to create products that convey love, quality, care and dedication.'
  },
  'about.highlight.leaf': { es: 'Nuestras telas son 100% algodón', en: 'Our fabrics are 100% cotton'},
  'about.highlight.sparkles': {
    es: 'Diseñamos nuestras telas y cada detalle con intención',
    en: 'We design our fabrics and every detail with intention'
  },
  'about.highlight.mapPin': {
    es: 'Todo es hecho en Colombia, en taller propio con mujeres cabeza de familia',
    en: 'Everything is made in Colombia, in our own workshop with women heads of household'
  },
  'about.highlight.heart': {
    es: 'Cada producto se realiza de forma personalizada, pensado para cada bebé y cada familia',
    en: 'Each product is made in a personalized way, designed for each baby and each family'
  },
  'about.todayText': {
    es: `Hoy seguimos retándonos todos los días para crecer, mejorar y llevar Petit Design a más hogares, con la misma esencia con la que empezamos: hacer de cada nacimiento un momento aún más especial.

        Este año celebramos 12 años construyendo Petit Design con el corazón. Nuestro taller de producción está en Manizales, y desde allí enviamos cada pedido con mucho cuidado a toda Colombia, para acompañar a más familias en la llegada de sus bebés.`,
    en: `Today we continue to challenge ourselves every day to grow, improve and bring Petit Design to more homes, with the same essence with which we started: making each birth an even more special moment.

        This year we celebrate 12 years building Petit Design with heart. Our production workshop is in Manizales, and from there we send each order with great care throughout Colombia, to accompany more families in the arrival of their babies.`
    },
  'about.descriptionTitle': { es: 'Sobre Petit Design', en: 'About Petit Design' },
  'about.description': {
    es: `Petit Design es una marca colombiana especializada en lencería y accesorios personalizados para bebés, creada para acompañar con amor y cuidado los primeros momentos de vida. Desde 2014, diseñamos y confeccionamos productos pensados para el nacimiento, el descanso y la rutina diaria del bebé, combinando funcionalidad, estética y calidad.

        Nuestra actividad principal es el diseño, confección y personalización de lencería para cuna y cama cuna, accesorios de lencería, kits para clínica y viaje, y productos complementarios para bebés. Todos nuestros productos son hechos a la medida, producidos bajo pedido y personalizados con el nombre del bebé, utilizando telas 100% algodón y materiales seleccionados cuidadosamente.`,
    en: `Petit Design is a Colombian brand specialized in personalized baby linens and accessories, created to accompany with love and care the first moments of life. Since 2014, we design and manufacture products designed for birth, rest and the baby's daily routine, combining functionality, aesthetics and quality.

        Our main activity is the design, manufacturing and customization of crib and toddler bed linens, linen accessories, clinic and travel kits, and complementary products for babies. All our products are custom-made, produced to order and personalized with the baby's name, using 100% cotton fabrics and carefully selected materials.`
    },
  'about.missionTitle': { es: 'Nuestra Misión', en: 'Our Mission' },
  'about.mission': {
    es: 'Ofrecer productos para bebés que transmitan tranquilidad, confianza y cercanía a las familias, brindando una experiencia de compra acompañada, humana y confiable, desde el primer contacto hasta la entrega final. Buscamos que cada producto refleje dedicación, detalle y amor, respetando los tiempos y necesidades de cada familia.',
    en: 'To offer products for babies that convey peace, trust and closeness to families, providing an accompanied, human and reliable shopping experience, from the first contact to final delivery. We seek that each product reflects dedication, detail and love, respecting the times and needs of each family.'
  },
  'about.visionTitle': { es: 'Nuestra Visión', en: 'Our Vision' },
  'about.vision': {
    es: 'Consolidarnos como una marca referente en Colombia en lencería y accesorios personalizados para bebés, reconocida por la calidad de sus productos, su servicio cercano y su capacidad de acompañar a las familias en una de las etapas más importantes de sus vidas. Aspiramos a crecer de manera sostenible, apoyándonos en procesos digitales y tecnología que nos permitan escalar sin perder el trato humano que nos caracteriza.',
    en: 'To establish ourselves as a reference brand in Colombia in personalized baby linens and accessories, recognized for the quality of its products, its close service and its ability to accompany families in one of the most important stages of their lives. We aspire to grow sustainably, relying on digital processes and technology that allow us to scale without losing the human touch that characterizes us.'
  },
  'about.values.heart.title': { es: 'Amor en cada puntada', en: 'Love in every stitch' },
  'about.values.heart.desc': {
    es: 'Cada producto está hecho con amor genuino y dedicación.',
    en: 'Each product is made with genuine love and dedication.'
  },
  'about.values.award.title': { es: 'Calidad premium', en: 'Premium Quality' },
  'about.values.award.desc': {
    es: 'Solo usamos los mejores materiales, seguros para tu bebé.',
    en: 'We only use the best materials, safe for your baby.'
  },
  'about.values.users.title': { es: 'Atención personalizada', en: 'Personalized attention' },
  'about.values.users.desc': {
    es: 'Te acompañamos en cada paso de tu pedido.',
    en: 'We accompany you every step of your order.'
  },
  'about.values.sparkles.title': { es: 'Diseños únicos', en: 'Unique designs' },
  'about.values.sparkles.desc': {
    es: 'Creamos piezas personalizadas solo para ti.',
    en: 'We create personalized pieces just for you.'
  },
  'about.ctaMessage': {
    es: 'Lencería personalizada para bebés, hecha con amor desde Manizales, Colombia 🇨🇴',
    en: 'Personalized baby linens, made with love from Manizales, Colombia 🇨🇴'
  },
  'about.cta': { es: 'Contáctanos', en: 'Contact Us' },


  // Contact page
  'contact.title': { es: 'Contáctanos', en: 'Contact Us'},
  'contact.subtitle': {
    es: 'Estamos aquí para ayudarte. Escríbenos por el medio que prefieras y te responderemos lo antes posible.',
    en: `We're here to help. Write to us through your preferred channel and we'll respond as soon as possible.`
  },
  'contact.description': {
    es: 'Contáctanos para personalizar la lencería de tu bebé. Escríbenos por formulario o WhatsApp.',
    en: 'Contact us to personalize your baby linens. Write to us via form or WhatsApp.'
  },

  // Contact page - WhatsApp Card
  'whatsApp.title': { es: 'Escríbenos por WhatsApp', en: 'Write us on WhatsApp' },
  'whatsApp.description': {
    es: 'Si prefieres una respuesta inmediata, contáctanos directamente por WhatsApp. Te asesoraremos paso a paso.',
    en: `If you prefer an immediate response, contact us directly on WhatsApp. We'll guide you step by step.`
  },
  'whatsApp.button': { es: 'Abrir WhatsApp', en: 'Open WhatsApp' },

  // Contact page - Info Card
  'infoCard.title': { es: 'Información de contacto', en: 'Contact information' },
  'infoCard.scheduleInfo': { es: 'Lunes a viernes: 8am - 6pm', en: 'Monday to Friday: 8am - 6pm' },
  'infoCard.scheduleLabel': { es: 'Horario de atención', en: 'Business hours' },

  // Policies page
  'policies.title': { es: 'Políticas y Normas de Envío', en: 'Shipping Policies & Guidelines' },
  'policies.subtitle': {
    es: 'Todo lo que necesitas saber antes de realizar tu pedido',
    en: 'Everything you need to know before placing your order'
  },
  'policies.faqs': { es: 'Preguntas Frecuentes', en: 'Frequently Asked Questions' },
  'policies.question.1': { es: '¿Qué es Petit Design?', en: 'What is Petit Design?' },
  'policies.answer.1': {
    es: 'Petit Design es una marca colombiana con más de 11 años de experiencia dedicada a la creación de lencería y accesorios para bebé. Todos nuestros productos son hechos en Colombia, en nuestro taller propio en Manizales, con telas 100% algodón y procesos artesanales de confección y personalización. Acompañamos a las mamás desde el nacimiento del bebé y en cada etapa de su crecimiento, cuidando cada detalle.',
    en: 'Petit Design is a Colombian brand with over 11 years of experience dedicated to creating baby linens and accessories. All our products are made in Colombia, in our own workshop in Manizales, with 100% cotton fabrics and artisanal manufacturing and customization processes. We accompany mothers from the baby\'s birth and through each stage of growth, taking care of every detail.'
  },
  'policies.question.2': { es: '¿Qué tipo de productos venden?', en: 'What type of products do you sell?' },
  'policies.answer.2': {
    es: 'Ofrecemos lencería para cuna y cama cuna, nidos, cobijas, cojines, bolsitas organizadoras, botiquines, neceseres y otros accesorios para bebé. También contamos con kits y sets especiales que agrupan varios productos y ofrecen un mejor valor, ideales para regalos o para armar la habitación del bebé.',
    en: 'We offer crib and toddler bed linens, nests, blankets, cushions, organizer bags, first aid kits, toiletry bags and other baby accessories. We also have special kits and sets that group various products and offer better value, ideal for gifts or setting up the baby\'s room.'
  },
  'policies.question.3': { es: '¿Los productos son personalizados?', en: 'Are the products personalized?' },
  'policies.answer.3': {
    es: 'Sí. La mayoría de nuestros productos son personalizados con el nombre del bebé. Dependiendo del producto, puedes elegir la tela, el color del sesgo, el color del bordado, moños u otros acabados. Esto hace que cada pedido sea único y pensado especialmente para tu bebé.',
    en: 'Yes. Most of our products are personalized with the baby\'s name. Depending on the product, you can choose the fabric, cant color, embroidery color, bows or other finishes. This makes each order unique and specially designed for your baby.'
  },
  'policies.question.4': { es: '¿Cómo funciona el proceso de compra?', en: 'How does the purchasing process work?' },
  'policies.answer.4': {
    es: 'Nuestro proceso es 100% acompañado. Inicia normalmente por WhatsApp, donde te asesoramos paso a paso: elección del producto, selección de telas, definición de personalización, confirmación del pedido, pagos, producción y despacho. Siempre estamos disponibles para resolver tus dudas durante el proceso.',
    en: 'Our process is 100% accompanied. It normally starts via WhatsApp, where we advise you step by step: product selection, fabric selection, personalization definition, order confirmation, payments, production and shipping. We are always available to answer your questions during the process.'
  },
  'policies.question.5': { es: '¿Cuánto tiempo tarda la producción?', en: 'How long does production take?' },
  'policies.answer.5': {
    es: 'Nuestro tiempo estimado de producción es de 3 a 4 semanas. Este tiempo comienza a contar desde el día en que recibimos el pago del anticipo. Al ser productos personalizados y hechos a la medida, cada pedido requiere un proceso cuidadoso de confección.',
    en: 'Our estimated production time is 3 to 4 weeks. This time starts counting from the day we receive the deposit payment. Being personalized and custom-made products, each order requires a careful manufacturing process.'
  },
  'policies.question.6': { es: '¿Cómo funcionan los pagos?', en: 'How do payments work?' },
  'policies.answer.6': {
    es: 'Para iniciar la producción solicitamos un anticipo del 50% del valor del pedido. El 50% restante debe estar cancelado antes del despacho del producto. Esto nos permite asegurar materiales, telas y tiempos de producción.',
    en: 'To start production we request a 50% deposit of the order value. The remaining 50% must be paid before the product is shipped. This allows us to secure materials, fabrics and production times.'
  },
  'policies.question.7': { es: '¿El envío está incluido?', en: 'Is shipping included?' },
  'policies.answer.7': {
    es: 'No. El valor del envío no está incluido en el precio de los productos y se paga por separado.',
    en: 'No. The shipping cost is not included in the product price and is paid separately.'
  },
  'policies.question.8': { es: '¿Cómo se paga el envío?', en: 'How is shipping paid?' },
  'policies.answer.8': {
    es: 'El envío se realiza principalmente por Servientrega y puede pagarse contra entrega o de forma anticipada. Si eliges pago anticipado, este se realiza únicamente a la cuenta Nequi de Servientrega.',
    en: 'Shipping is mainly done through Servientrega and can be paid on delivery or in advance. If you choose advance payment, this is made only to Servientrega\'s Nequi account.'
  },
  'policies.question.9': { es: '¿Qué pasa si mi pedido llega con algún inconveniente?', en: 'What happens if my order arrives with an issue?' },
  'policies.answer.9': {
    es: 'Si tu pedido llega incompleto o con algún detalle de calidad, revisamos el caso y, si es responsabilidad nuestra, reponemos o corregimos el producto. Nuestro objetivo es que recibas exactamente lo que confirmamos contigo.',
    en: 'If your order arrives incomplete or with a quality issue, we review the case and, if it\'s our responsibility, we replace or correct the product. Our goal is for you to receive exactly what we confirmed with you.'
  },
  'policies.policiesTitle': { es: 'Políticas de Petit Design', en: 'Petit Design Policies' },
  'policies.policy.1.title': { es: 'Producción', en: 'Production' },
  'policies.policy.1.content': {
    es: 'Todos nuestros productos se elaboran bajo pedido y de forma personalizada. No iniciamos producción sin el pago del anticipo del 50%. El tiempo estimado de producción es de 3 a 4 semanas.',
    en: 'All our products are made to order and personalized. We do not start production without the 50% deposit payment. The estimated production time is 3 to 4 weeks.'
  },
  'policies.policy.2.title': { es: 'Confirmación del pedido', en: 'Order Confirmation' },
  'policies.policy.2.content': {
    es: 'Antes de iniciar producción, enviamos una confirmación detallada del pedido. Es responsabilidad del cliente revisar cuidadosamente telas, colores, nombre y tipografía.',
    en: 'Before starting production, we send a detailed order confirmation. It is the customer\'s responsibility to carefully review fabrics, colors, name and typography.'
  },
  'policies.policy.3.title': { es: 'Cambios y correcciones', en: 'Changes and Corrections' },
  'policies.policy.3.content': {
    es: 'Si el error es responsabilidad de Petit Design, asumimos el reproceso y el envío. Si el pedido fue confirmado correctamente y luego el cliente solicita cambios, los costos asociados deberán ser asumidos por el cliente.',
    en: 'If the error is Petit Design\'s responsibility, we assume reprocessing and shipping. If the order was correctly confirmed and then the customer requests changes, the associated costs must be assumed by the customer.'
  },
  'policies.policy.4.title': { es: 'Envíos', en: 'Shipping' },
  'policies.policy.4.content': {
    es: 'Los envíos se realizan principalmente por Servientrega. No despachamos pedidos que no estén cancelados al 100%.',
    en: 'Shipments are made mainly through Servientrega. We do not ship orders that are not 100% paid.'
  },
  'policies.policy.5.title': { es: 'Post-venta', en: 'After-sales' },
  'policies.policy.5.content': {
    es: 'Atendemos cada caso de forma empática y responsable, buscando siempre una solución clara y justa para el cliente.',
    en: 'We handle each case empathetically and responsibly, always seeking a clear and fair solution for the customer.'
  },
  'policies.moreTitle': { es: '¿Tienes más preguntas?', en: 'Have more questions?' },
  'policies.moreDescription': {
    es: 'Estamos aquí para ayudarte. Contáctanos por WhatsApp y te asesoramos en todo el proceso.',
    en: 'We\'re here to help. Contact us on WhatsApp and we\'ll guide you through the entire process.'
  },
  'policies.moreCtaMessage': {
    es: '¡Hola! Tengo una pregunta sobre las políticas de Petit Design',
    en: 'Hello! I have a question about Petit Design policies'
  },
  'policies.moreCta': { es: 'Contactar por WhatsApp', en: 'Contact via WhatsApp' },


  // Products
  'products.singleFeatured': { es: 'Destacado', en: 'Featured' },
  'products.featured': { es: 'Productos Destacados', en: 'Featured Products' },
  'products.viewAll': { es: 'Ver todos los productos', en: 'View all products' },
  'products.from': { es: 'Desde', en: 'From' },

  // Product page
  'product.personalize': { es: 'Personaliza tu producto', en: 'Personalize your product' },
  'product.babyName': { es: 'Nombre del bebé', en: 'Baby\'s name' },
  'product.babyNamePlaceholder': { es: 'Escribe el nombre aquí', en: 'Write the name here' },
  'product.embroideryColor': { es: 'Color de sesgo y bordado', en: 'Embroidery and cant color' },
  'product.fontType': { es: 'Tipo de letra', en: 'Font type' },
  'product.observations': { es: 'Observaciones especiales', en: 'Special observations' },
  'product.observationsPlaceholder': { es: '¿Algún detalle especial que debamos saber?', en: 'Any special detail we should know?' },
  'product.productionTime': { es: 'Tiempo de producción', en: 'Production time' },
  'product.days': { es: 'días', en: 'days' },
  'product.trustMessage': { es: 'Este producto se elabora especialmente para tu bebé con el mayor cariño y cuidado.', en: 'This product is made especially for your baby with the greatest care and love.' },
  'product.buy': { es: 'Comprar ahora', en: 'Buy now' },
  'product.select': { es: 'Selecciona una tela', en: 'Select a fabric' },
  'product.boy': { es: 'Niño', en: 'Boy' },
  'product.girl': { es: 'Niña', en: 'Girl' },
  'product.moreOptions': {
    es: '¿No encuentras la tela perfecta? ¡Tenemos más opciones!',
    en: `Can"t find the perfect fabric? We have more options!` },
  'product.selectGender': {
    es: '👆 Selecciona niño o niña para ver las telas disponibles',
    en: '👆 Select boy or girl to see available fabrics'
  },
  'product.fullDescription': { es: 'Descripción completa', en: 'Full description' },
  'product.name': { es: 'Nombre para bordar:', en: 'Name to be embroidered::' },
  'product.fabricSelected': { es: 'Tela seleccionada:', en: 'Selected fabric:' },
  'product.fontTitle': { es: 'Tipo de letra', en: 'Font' },
  'product.fontCta': { es: 'Escoge tipo de letra para el nombre', en: 'Choose a font for the name' },
  'product.namePreview': {
    es: '👆 Completa el nombre, el tipo de letra y el color para tener una vista previa de la personalización.',
    en: '👆 Enter the name, font, and color to see a preview of the customization.'
  },
  'product.quantity': { es: 'Cantidad', en: 'Quantity' },
  'product.size': { es: 'Medida', en: 'Size' },
  'product.price': { es: 'para el nombre', en: 'for the name' },
  'product.warn': {
    es: 'Esto es una representación gráfica, el producto final puede variar',
    en: 'This is an illustration; the final product may vary.'
  },

  // Fabric Gallery
  'fabricGallery.boysTitle': { es: 'Catálogo de Telas - Niño', en: 'Fabric Catalog - Boy' },
  'fabricGallery.girlsTitle': { es: 'Catálogo de Telas - Niña', en: 'Fabric Catalog - Girl' },
  'fabricGallery.boysTitle2': { es: 'Catálogo de Telas - Niño - Petit Design', en: 'Fabric Catalog - Boy - Petit Design' },
  'fabricGallery.girlsTitle2': { es: 'Catálogo de Telas - Niña - Petit Design', en: 'Fabric Catalog - Girl - Petit Design' },
  'fabricGallery.subtitle': { es: 'Haz clic en una tela para seleccionarla',  en: 'Click on a fabric to select it' },
  'fabricGallery.disclaimer': {
    es: '¡Tenemos muchos más diseños disponibles! Consulta por WhatsApp para ver más opciones.',
    en: 'We have many more designs available! Ask on WhatsApp to see more options.'
  },
  'fabricGallery.message': {
    es: '¡Hola! Me gustaría ver más diseños de telas',
    en: 'Hello! I would like to see more fabric designs'
  },
  'fabricGallery.seeMore': { es: 'Ver más',  en: 'See more' },
  'fabricGallery.moreFabrics': { es: 'Próximamente nuevas telas disponibles',  en: 'New fabrics coming soon' },

  // Colors
  'color.blanco': { es: 'Blanco', en: 'White' },
  'color.beige': { es: 'Beige', en: 'Beige' },
  'color.rosa_claro': { es: 'Rosa claro', en: 'Light pink' },
  'color.verde_salvia': { es: 'Verde salvia', en: 'Sage green' },
  'color.azul_cielo': { es: 'Azul cielo', en: 'Sky blue' },
  'color.gris_perla': { es: 'Gris perla', en: 'Pearl gray' },

  // Fonts
  'font.script': { es: 'Script (Elegante)', en: 'Script (Elegant)' },
  'font.serif': { es: 'Serif (Clásica)', en: 'Serif (Classic)' },
  'font.sans_serif': { es: 'Sans Serif (Moderna)', en: 'Sans Serif (Modern)' },
  'font.cursiva': { es: 'Cursiva (Delicada)', en: 'Cursive (Delicate)' },

  // Footer
  'footer.tagline': { es: 'Creando momentos especiales para los primeros días de tu bebé', en: 'Creating special moments for your baby\'s first days' },
  'footer.quickLinks': { es: 'Enlaces rápidos', en: 'Quick Links' },
  'footer.contact': { es: 'Contacto', en: 'Contact' },
  'footer.followUs': { es: 'Síguenos', en: 'Follow Us' },
  'footer.rights': { es: 'Todos los derechos reservados', en: 'All rights reserved' },

  // General
  'general.loading': { es: 'Cargando...', en: 'Loading...' },
  'general.error': { es: 'Ha ocurrido un error', en: 'An error occurred' },
  'general.noProducts': { es: 'No hay productos disponibles', en: 'No products available' },
  'general.select': { es: 'Seleccionar esta tela', en: 'Select this fabric' },
  'general.unselect': { es: 'Anular selección de tela', en: 'Clears fabric selection' },
}
