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
  'nav.policies': { es: 'Políticas', en: 'Policies' },
  'nav.contact': { es: 'Contacto', en: 'Contact' },
  'nav.categories': { es: 'Categorías', en: 'Categories' },
  'nav.boysCatalog': { es: 'Catálogo Niño', en: "Boy's Catalog" },
  'nav.girlsCatalog': { es: 'Catálogo Niña', en: "Girl's Catalog" },

  // Header
  'header.fabrics': { es: 'Telas', en: "Fabrics" },
  'header.boysFabricsCatalog': { es: 'Catálogo Telas Niño', en: "Boy's Fabric Catalog" },
  'header.girlsFabricsCatalog': { es: 'Catálogo Telas Niña', en: "Girls' Fabrics Catalog" },

  // Homepage hero
  'hero.beforeTitle': { es: '100% Personalizable', en: '100% Customizable'},
  'hero.title': {
    es: 'Lencería de cuna y accesorios personalizados para bebés y niños',
    en: 'Crib linens and personalized accessories for babies and children'
  },
  'hero.subtitle': {
    es: 'Recibe asesoría para personalizar tu producto',
    en: 'Get advice on how to customize your product'
  },
  'hero.badgeTitle': { es: 'Todos nuestros productos son personalizables', en: 'All our products are customizable' },
  'hero.badgeSubtitle': { es: 'Bordamos el nombre de tu bebé con amor', en: `We embroider your baby's name with love` },
  'hero.cta': { es: 'Descubre toda la colección', en: 'Discover the entire collection' },
  'hero.whatsAppCta': { es: 'Abre WhatsApp', en: 'Open WhatsApp' },

  // Homepage featured kits
  'kits.title': { es: 'Kits Personalizados', en: 'Personalized Kits' },
  'kits.description': {
    es: 'Sets completos diseñados para el nacimiento de tu bebé. Todo lo que necesitas en un solo paquete, con la posibilidad de personalizarlo con el nombre de tu pequeño.',
    en: `Complete sets designed for your baby's birth. Everything you need in one package, with the possibility of personalizing it with your little one's name.`
  },
  'kits.cta': { es: 'Ver todos los Kits', en: 'View all Kits' },

  // Favorites
  'favorites.title': { es: 'Nuestros Favoritos', en: 'Our Favorites' },
  'favorites.badge': { es: 'Los más vendido', en: 'Best Sellers' },
  'favorites.prev': { es: 'Ver favoritos anteriores', en: 'View previous favorites' },
  'favorites.next': { es: 'Ver más favoritos', en: 'View more favorites' },
  'favorites.goTo': { es: 'Ir a la página {page}', en: 'Go to page {page}' },

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
    en: `Start by choosing the baby's gender to see our exclusive fabrics`
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
    en: `Each piece carries your baby's name embroidered with love`
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
  'policies.policiesTitle': { es: 'Políticas de Petit Design', en: 'Petit Design Policies' },
  'policies.moreTitle': { es: '¿Tienes más preguntas?', en: 'Have more questions?' },
  'policies.moreDescription': {
    es: 'Estamos aquí para ayudarte. Contáctanos por WhatsApp y te asesoramos en todo el proceso.',
    en: `We're here to help. Contact us on WhatsApp and we'll guide you through the entire process.`
  },
  'policies.moreCtaMessage': {
    es: '¡Hola! Tengo una pregunta sobre las políticas de Petit Design',
    en: 'Hello! I have a question about Petit Design policies'
  },
  'policies.moreCta': { es: 'Contactar por WhatsApp', en: 'Contact via WhatsApp' },


  // Catalog
  'catalog.title': { es: 'Catálogo', en: 'Catalog' },
  'catalog.allButtonText': { es: 'Todos los Productos', en: 'All Products' },
  'catalog.noProducts': { es: 'Aún no hay productos disponibles en esta categoría.', en: 'No products available in this category yet.' },
  'catalog.allProducts': { es: 'Ver todos los productos', en: 'View all products' },
  'catalog.loading': { es: 'Cargando productos y colecciones...', en: 'Loading products and collections...' },
  'catalog.error': { es: 'Ocurrió un error al cargar productos o colecciones.', en: 'An error occurred while loading products or collections.' },


  // Products
  'products.singleFeatured': { es: 'Destacado', en: 'Featured' },
  'products.featured': { es: 'Productos Destacados', en: 'Featured Products' },
  'products.viewAll': { es: 'Ver todos los productos', en: 'View all products' },
  'products.from': { es: 'Desde', en: 'From' },

  // Product page
  'product.personalize': { es: 'Personaliza tu producto', en: 'Personalize your product' },
  'product.babyName': { es: 'Nombre del bebé', en: `Baby's name` },
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
  'product.fabricsSelected': { es: 'Telas seleccionadas', en: 'Selected fabrics' },
  'product.removeFabric': { es: 'Quitar tela', en: 'Remove fabric' },
  'product.fabricsLimit': {
    es: 'Puedes seleccionar hasta {max} telas',
    en: 'You can select up to {max} fabrics'
  },
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
  'product.cta1': { es: 'Agregar al carrito', en: 'Add to cart'},
  'product.cta2': { es: 'Agregando...', en: 'Adding...'},
  'product.cta3': { es: 'Agregado al carrito', en: 'Added to cart'},
  'product.cta4': { es: 'Haz tu pedido por WhatsApp', en: 'Place your order via WhatsApp'},
  'product.o': { es: 'o', en: 'or'},
  'product.tooltip1': {
    es: 'Haz clic aquí para agregar el producto al carrito y continuar con la compra',
    en: 'Click here to add the product to your cart and continue shopping'
  },
  'product.tooltip2': {
    es: 'Haz clic aquí para continuar tu compra por WhatsApp',
    en: 'Click here to continue your purchase on WhatsApp'
  },
  'product.error': { es: 'Ocurrió un error al cargar el producto.', en: 'An error occurred while loading the product.' },

  // Cart Page
  'cart.title': { es: 'Tu Carrito', en: 'Your Cart'},
  'cart.variation': { es: 'Variación:', en: 'Variation:'},
  'cart.babyName': { es: 'Nombre del bebé:', en: `Baby's name:` },
  'cart.color': { es: 'Color:', en: 'Color:' },
  'cart.font': { es: 'Fuente:', en: 'Font:' },
  'cart.fabric': { es: 'Tela:', en: 'Fabric:' },
  'cart.observations': { es: 'Observaciones:', en: 'Observations:' },
  'cart.checkout': { es: 'Proceder al pago', en: 'Go to checkout' },
  'cart.empty': { es: 'Tu carrito está vacío', en: 'Your cart is empty' },
  'cart.continueShopping': { es: 'Volver a la tienda', en: 'Back to Store' },
  'cart.error': { es: 'Ocurrió un error al cargar el carrito.', en: 'An error occurred while loading the cart.' },
  'cart.termsAcceptPrefix': { es: 'He leído y acepto los ', en: 'I have read and accept the ' },
  'cart.termsLinkTerms': { es: 'Términos y Condiciones', en: 'Terms and Conditions' },
  'cart.termsLinkAnd': { es: ' y la ', en: ' and the ' },
  'cart.termsLinkPrivacy': { es: 'Política de Tratamiento de Datos Personales', en: 'Personal Data Processing Policy' },
  'cart.termsRequired': {
    es: 'Debes aceptar los Términos y Condiciones y la Política de Tratamiento de Datos Personales para continuar.',
    en: 'You must accept the Terms and Conditions and the Personal Data Processing Policy to continue.'
  },

  // Search Page
  'search.title': { es: 'Resultados de búsqueda para', en: 'Search Results for' },
  'search.noResults': { es: 'No se encontraron resultados para tu búsqueda.', en: 'No results found for your search.' },
  'search.tryAgain': { es: 'Intenta con otra palabra clave o revisa la ortografía.', en: 'Try another keyword or check the spelling.' },
  'search.viewAll': { es: 'Ver todos los productos', en: 'View all products' },

  // Terms Page
  'terms.title': { es: 'Términos y Condiciones de Uso y Compra', en: 'Terms and Conditions of Use and Purchase' },
  'terms.termsTitle': { es: 'Términos y Condiciones', en: 'Terms and Conditions' },
  'terms.termsContent': {
    es: `Última actualización: 1 de octubre de 2026.

        El presente documento regula los términos y condiciones bajo los cuales los usuarios acceden y realizan compras en el sitio web petitdesign.co, propiedad de PETIT DESIGN 2014 SAS, identificado con NIT 901917160-5, con domicilio en la ciudad de Manizales, Caldas.`,
    en: `Last updated: October 1, 2026.

        This document sets forth the terms and conditions under which users access and make purchases on the petitdesign.co website, owned by PETIT DESIGN 2014 SAS, with NIT No. 901917160-5, located in the city of Manizales, Caldas.`
  },
  'terms.termsList1': {
    es: `Aceptación de los Términos
        Al acceder, navegar y/o realizar una compra en este sitio web, el usuario declara haber leído, entendido y aceptado sin reservas los presentes Términos y Condiciones, así como nuestra Política de Tratamiento de Datos Personales.`,
    en: `Acceptance of the Terms
        By accessing, browsing, and/or making a purchase on this website, the user declares that he or she has read, understood, and accepted these Terms and Conditions, as well as our Personal Data Processing Policy, without reservation.` },
  'terms.termsList2': {
    es: `Capacidad Legal
        Los servicios y productos ofrecidos en este sitio web están destinados exclusivamente a personas con capacidad legal para contratar según la legislación colombiana vigente. Los actos que realicen los menores de edad en este sitio serán responsabilidad de sus padres, tutores o encargados.`,
    en: `Legal Capacity
        The services and products offered on this website are intended exclusively for individuals who have the legal capacity to enter into contracts under current Colombian law. Any actions taken by minors on this site are the responsibility of their parents, guardians, or legal custodians.`
  },
  'terms.termsList3': {
    es: `Precios y Precios Correctos
        Todos los precios de los productos exhibidos en la tienda virtual están expresados en pesos colombianos (COP) e incluyen los impuestos aplicables (como el IVA), salvo que expresamente se indique lo contrario. Los costos de envío serán informados al usuario de manera previa a la finalización y pago de la orden. Nos reservamos el derecho de modificar los precios en cualquier momento sin previo aviso, garantizando el precio informado al momento de confirmar la compra.`,
    en: `Prices and Fair Prices
        All prices for products displayed in the online store are listed in Colombian pesos (COP) and include applicable taxes (such as VAT), unless otherwise specified. Shipping costs will be provided to the user prior to order completion and payment. We reserve the right to change prices at any time without prior notice, while guaranteeing the price quoted at the time of purchase confirmation.`
  },
  'terms.termsList4': {
    es: `Medios de Pago y Financiación
        Los pagos podrán realizarse a través de las pasarelas de pago y medios habilitados en el sitio (tarjetas de crédito/débito, transferencias bancarias, y soluciones de financiamiento/crédito inmediato como Addi, entre otros). El procesamiento de pagos estará sujeto a las validaciones de seguridad de cada proveedor.`,
    en: `Payment Methods and Financing
        Payments may be made through the payment gateways and methods available on the site (credit/debit cards, bank transfers, and financing/instant credit solutions such as Addi, among others). Payment processing will be subject to each provider's security validations.`,
  },
  'terms.termsList5': {
    es: `Despacho y Entrega de Productos
        Los productos comprados serán entregados en la dirección especificada por el usuario dentro del territorio colombiano, a través de empresas de transporte aliadas. Los tiempos de entrega estimados se informarán en el proceso de compra y comenzarán a contar a partir de la confirmación del pago.`,
    en: `Order Processing and Product Delivery
        Purchased products will be delivered to the address specified by the user within Colombia via our partner shipping companies. Estimated delivery times will be provided during the checkout process and will begin upon confirmation of payment.`
  },
  'terms.termsList6a': {
    es: `Notificaciones y Autoridad de Control
        Para cualquier consulta, reclamo o solicitud relacionada con las compras en nuestro sitio, el usuario puede comunicarse al correo electrónico `,
    en: `Notifications and Supervisory Authority
        For any questions, complaints, or requests related to purchases on our site, users can contact us by email at`
  },
  'terms.termsList6b': {
    es: ` o a la línea de atención `,
    en: ` or through our customer service line `
  },
  'terms.termsFinalStatement': {
    es: `En cumplimiento de las normas colombianas de comercio electrónico, informamos que la autoridad de protección al consumidor en Colombia es la Superintendencia de Industria y Comercio (SIC) (`,
    en: `In compliance with Colombian e-commerce regulations, we inform you that the consumer protection authority in Colombia is the Superintendence of Industry and Commerce (SIC) (`
  },

  // Personal Data Page
  'personalData.title': { es: 'Política de tratamiento de datos personales', en: 'Personal Data Policy and Treatment' },
  'personalData.intro': {
    es: `Última actualización: 1 de octubre de 2026

        En cumplimiento de la Ley Estatutaria 1581 de 2012 y el Decreto 1377 de 2013, PETIT DESIGN 2014 S.A.S, identificada con NIT 901917160-5, domiciliada en Manizales, Caldas, en calidad de Responsable del Tratamiento de Datos Personales, adopta la siguiente política para el manejo de la información recolectada de sus clientes y usuarios.`,
    en: `Last updated: October 1, 2026

        In compliance with Statutory Law 1581 of 2012 and Decree 1377 of 2013, PETIT DESIGN 2014 S.A.S, identified by Tax ID Number 901917160-5, with its principal place of business in Manizales, Caldas, in its capacity as the Data Controller, adopts the following policy for the handling of information collected from its customers and users.`
  },
  'personalData.list1': {
    es: `Finalidad del Tratamiento de Datos
        Los datos personales recolectados a través de formularios web, registros de usuario o procesos de compra serán utilizados para las siguientes finalidades:`,
    en: `Purpose of Data Processing
        Personal data collected through web forms, user registrations, or purchase processes will be used for the following purposes:`
  },
  'personalData.list1Purpose1': {
    es: 'Procesar, despachar y confirmar las órdenes de compra realizadas en la tienda virtual.',
    en: 'Process, ship, and confirm purchase orders placed on the virtual store.'
  },
  'personalData.list1Purpose2': {
    es: 'Emitir facturas de venta y gestionar cobros o reembolsos.',
    en: 'Issue sales invoices and manage collections or refunds.'
  },
  'personalData.list1Purpose3': {
    es: 'Prestar servicio al cliente, responder Peticiones, Quejas y Reclamos (PQR).',
    en: 'Provide customer service; respond to requests, complaints, and claims.'
  },
  'personalData.list1Purpose4': {
    es: 'Enviar notificaciones sobre el estado de los envíos o transacciones.',
    en: 'Send notifications about the status of shipments or transactions.'
  },
  'personalData.list1Purpose5': {
    es: 'Previa autorización del titular, enviar información comercial, promociones y novedades del catálogo de productos.',
    en: `With the subscriber's prior consent, send marketing information, promotions, and updates on the product catalog.`
  },
  'personalData.list1Purpose6': {
    es: 'Cumplir con obligaciones legales, contables y tributarias.',
    en: 'Comply with legal, accounting, and tax obligations.'
  },
  'personalData.list2': {
    es: `Derechos de los Titulares
        De conformidad con el Artículo 8 de la Ley 1581 de 2012, el titular de los datos personales tiene derecho a:`,
    en: `Rights of Data Subjects
        In accordance with Article 8 of Law 1581 of 2012, the data subject has the right to:`
  },
  'personalData.list2right1': {
    es: 'Conocer, actualizar y rectificar sus datos personales frente al Responsable.',
    en: 'Process, ship, and confirm purchase orders placed on the virtual store.'
  },
  'personalData.list2right2': {
    es: 'Solicitar prueba de la autorización otorgada.',
    en: 'Request proof of the authorization granted.'
  },
  'personalData.list2right3': {
    es: 'Ser informado, previa solicitud, sobre el uso que se le ha dado a sus datos.',
    en: 'To be informed, upon request, of how your data has been used.'
  },
  'personalData.list2right4': {
    es: 'Presentar ante la Superintendencia de Industria y Comercio (SIC) quejas por infracciones a la ley.',
    en: 'File complaints with the Superintendency of Industry and Commerce (SIC) regarding violations of the law.'
  },
  'personalData.list2right5': {
    es: 'Revocar la autorización y/o solicitar la supresión del dato cuando no se respeten los principios, derechos y garantías constitucionales y legales.',
    en: 'To revoke authorization and/or request the deletion of data when constitutional and legal principles, rights, and safeguards are not respected.'
  },
  'personalData.list3a': {
    es: `Procedimiento para Ejercer los Derechos (Consultas y Reclamos)
        El titular podrá ejercer sus derechos enviando una solicitud formal al correo electrónico `,
    en: `Procedure for Exercising Rights (Inquiries and Complaints)
        The data subject may exercise their rights by sending a formal request to the email address`
  },
  'personalData.list3b': {
    es: ` o mediante comunicación escrita dirigida a CR 26 #69-17, Manizales, Caldas. La solicitud debe incluir:`,
    en: ` or by written notice sent to CR 26 #69-17, Manizales, Caldas. The request must include:`
  },
  'personalData.list2complaint1': {
    es: 'Nombre completo y documento de identidad del titular.',
    en: 'Full name and identification number of the account holder.',
  },
  'personalData.list2complaint2': {
    es: 'Descripción clara de la solicitud (actualización, supresión, consulta, revocatoria de autorización).',
    en: 'Clear description of the request (update, deletion, inquiry, revocation of authorization).',
  },
  'personalData.list2complaint3': {
    es: 'Dirección física o electrónica de contacto para notificaciones.',
    en: 'Physical or email address for notifications.',
  },
  'personalData.outro': {
    es: 'Las consultas serán atendidas en un término máximo de diez (10) días hábiles y los reclamos en un término máximo de quince (15) días hábiles, contados a partir de la fecha de recepción.',
    en: 'Inquiries will be addressed within a maximum of ten (10) business days, and complaints within a maximum of fifteen (15) business days, counted from the date of receipt.',
  },

  // Returns Page
  'returns.title': { es: 'Política de cambios, devoluciones y derecho de retracto', en: 'Exchange, Return, and Right of Withdrawal Policy' },
  'returns.intro': {
    es: `Última actualización: 1 de octubre de 2026

        En Petit Design garantizamos la calidad de nuestros productos y el respeto estricto a los derechos de los consumidores consagrados en la Ley 1480 de 2011 (Estatuto del Consumidor).`,
    en: `Last updated: October 1, 2026

        At Petit Design, we guarantee the quality of our products and strict compliance with the consumer rights enshrined in Law 1480 of 2011 (Consumer Protection Act).`
  },
  'returns.list1': {
    es: `Derecho de Retracto (Ley 1480 de 2011, Art. 47)
        El cliente tiene derecho a retractarse de la compra realizada en nuestra tienda virtual dentro de los cinco (5) días hábiles siguientes a la entrega del producto.`,
    en: `Right of Withdrawal (Law 1480 of 2011, Art. 47)
        The customer has the right to cancel a purchase made in our online store within five (5) business days of the product's delivery.`,
  },
  'returns.list1item1': {
    es: 'Condiciones para ejercer el retracto:',
    en: 'Conditions for exercising the right of first refusal:',
  },
  'returns.list1item1appendix1': {
    es: 'El producto no debe presentar muestras de uso, desgaste, lavado o daño.',
    en: 'The product must not show any signs of use, wear, washing, or damage.',
  },
  'returns.list1item1appendix2': {
    es: 'Debe conservar los empaques originales, etiquetas, accesorios y manuales completos.',
    en: 'You must keep the original packaging, labels, accessories, and complete manuals.',
  },
  'returns.list1item1appendix3': {
    es: 'Los costos de transporte para la devolución del producto hacia nuestras instalaciones deberán ser asumidos por el comprador, conforme lo establece la ley.',
    en: 'The shipping costs for returning the product to our facilities must be paid by the buyer, as required by law.',
  },
  'returns.list1item1appendix4': {
    es: 'Excepciones legales: No aplica el derecho de retracto en bienes confeccionados a la medida o personalizados, bienes de uso personal o de uso íntimo, ni bienes perecederos o que por su naturaleza no puedan ser devueltos.',
    en: 'Legal Exceptions: The right of withdrawal does not apply to custom-made or personalized goods, goods intended for personal or intimate use, or perishable goods or goods that, by their nature, cannot be returned.',
  },
  'returns.list1item2': {
    es: `Proceso de reembolso:
        Una vez recibido el producto en bodega y verificado su estado, Petit Design devolverá la totalidad del dinero pagado por el producto en un plazo máximo de treinta (30) días calendario contados desde el momento en que se ejerció el derecho.`,
    en: `Refund Process:
        Once the product has been received at the warehouse and its condition verified, Petit Design will refund the full amount paid for the product within a maximum of thirty (30) calendar days from the date the right was exercised.`,
  },
  'returns.list2': {
    es: `Cambios de Producto (Garantía o Preferencia)`,
    en: `Product Exchanges (Warranty or Preference)`,
  },
  'returns.list2item1': {
    es: `Cambios por preferencia (talla, color o modelo): El cliente podrá solicitar el cambio dentro de los 15 días calendario posteriores a la entrega. El producto debe estar completamente nuevo y sin uso. Los costos de envío asociados al cambio por preferencia corren por cuenta del cliente.`,
    en: `Exchanges Based on Preference (size, color, or style): The customer may request an exchange within 15 calendar days of delivery. The product must be brand new and unused. Shipping costs associated with exchanges based on preference are the customer's responsibility.`,
  },
  'returns.list2item2': {
    es: `Garantía por Defectos de Fábrica: Todos nuestros productos cuentan con una garantía legal de 90 días calendario contados a partir de la fecha de entrega. Si el producto presenta fallas de calidad, idoneidad o seguridad, el cliente podrá solicitar la reparación, el cambio por uno nuevo o la devolución de su dinero. En caso de garantía confirmada, los costos de transporte de recogida y reenvío serán asumidos en su totalidad por Petit Design.`,
    en: `Garantía por Defectos de Fábrica: Todos nuestros productos cuentan con una garantía legal de 90 días calendario contados a partir de la fecha de entrega. Si el producto presenta fallas de calidad, idoneidad o seguridad, el cliente podrá solicitar la reparación, el cambio por uno nuevo o la devolución de su dinero. En caso de garantía confirmada, los costos de transporte de recogida y reenvío serán asumidos en su totalidad por Petit Design.`,
  },
  'returns.list3': {
    es: `Canales de Atención para Devoluciones y Retractos
    Para iniciar un proceso de cambio, devolución o efectividad de la garantía, comunícate con nosotros:`,
    en: `Customer Service Channels for Returns and Cancellations
    To initiate a return, exchange, or warranty claim, please contact us:`,
  },
  'returns.list3item1': {
    es: `Correo de soporte: `,
    en: `Support email: `,
  },
  'returns.list3item2': {
    es: `Línea de WhatsApp / Atención:`,
    en: `WhatsApp Hotline / Customer Service:`,
  },
  'returns.list3item3': {
    es: `Horario de atención: Lunes a Viernes de 8:00 a.m. a 5:00 p.m.`,
    en: `Hours of operation: Monday through Friday, 8:00 a.m. to 5:00 p.m.`,
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
  'fabricGallery.error': { es: 'Error al cargar telas.',  en: 'Error loading fabrics.' },

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
  'footer.tagline': { es: 'Creando momentos especiales para los primeros días de tu bebé', en: `Creating special moments for your baby's first days` },
  'footer.quickLinks': { es: 'Enlaces rápidos', en: 'Quick Links' },
  'footer.contact': { es: 'Contacto', en: 'Contact' },
  'footer.returns': { es: 'Devoluciones', en: 'Returns' },
  'footer.followUs': { es: 'Síguenos', en: 'Follow Us' },
  'footer.rights': { es: 'PETIT DESIGN 2014 S.A.S - NIT 901917160-5 Todos los derechos reservados', en: 'PETIT DESIGN 2014 S.A.S - NIT 901917160-5 All rights reserved' },
  'footer.made': { es: 'Hecho con', en: 'Made with' },
  'footer.from': { es: 'desde', en: 'from' },
  'footer.catalogTitle': { es: 'Catálogo PDF', en: 'PDF Catalog' },
  'footer.catalogDescription': { es: 'Descarga nuestro catálogo PDF con todas las opciones disponibles', en: 'Download our PDF catalog with all available options' },
  'footer.legalTermsTitle': { es: 'Términos Legales', en: 'Legal Terms' },
  'footer.legalTerms1': { es: 'Términos y Condiciones', en: 'Terms and Conditions' },
  'footer.legalTerms2': { es: 'Tratamiento de Datos', en: 'Data Processing' },
  'footer.legalTerms3': { es: 'Cambios y Devoluciones', en: 'Exchanges and Returns' },
  'footer.legalTerms4': { es: 'Superintendencia de Industria y Comercio (SIC)', en: 'Superintendency of Industry and Commerce (SIC)' },

  // General
  'general.loading': { es: 'Cargando...', en: 'Loading...' },
  'general.error': { es: 'Ha ocurrido un error', en: 'An error occurred' },
  'general.noProducts': { es: 'No hay productos disponibles', en: 'No products available' },
  'general.select': { es: 'Seleccionar esta tela', en: 'Select this fabric' },
  'general.unselect': { es: 'Anular selección de tela', en: 'Clears fabric selection' },
}
