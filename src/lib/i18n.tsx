import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

type Language = 'es' | 'en';

interface Translations {
  [key: string]: {
    es: string;
    en: string;
  };
}

const translations: Translations = {
  // Navigation
  'nav.home': { es: 'Inicio', en: 'Home' },
  'nav.catalog': { es: 'Catálogo', en: 'Catalog' },
  'nav.catalogBoy': { es: 'Catálogo Telas Niño', en: "Boy's Fabrics Catalog" },
  'nav.catalogGirl': { es: 'Catálogo Telas Niña', en: "Girl's Fabrics Catalog" },
  'nav.about': { es: 'Nosotros', en: 'About Us' },
  'nav.contact': { es: 'Contacto', en: 'Contact' },
  'nav.categories': { es: 'Categorías', en: 'Categories' },

  // Banner
  'banner.title': { es: 'Encuentra el regalo perfecto', en: 'Find the perfect gift' },
  'banner.subtitle': { es: 'Explora nuestros catálogos especializados', en: 'Explore our specialized catalogs' },
  'banner.allProducts': { es: 'Catálogo Petit Design', en: 'Petit Design Catalog' },
  'banner.boysCatalog': { es: 'Catálogo Niño', en: "Boy's Catalog" },
  'banner.girlsCatalog': { es: 'Catálogo Niña', en: "Girl's Catalog" },

  // Hero
  'hero.title': { es: 'Lencería personalizada para tu bebé, hecha con amor', en: 'Personalized linens for your baby, made with love' },
  'hero.subtitle': { es: 'Productos suaves, delicados y personalizados especialmente para tu bebé', en: 'Soft, delicate and personalized products especially for your baby' },
  'hero.cta': { es: 'Personaliza el set de tu bebé', en: 'Personalize your baby\'s set' },

  // Benefits
  'benefits.title': { es: '¿Por qué elegirnos?', en: 'Why choose us?' },
  'benefits.personalization': { es: 'Personalización con nombre', en: 'Personalization with name' },
  'benefits.personalization.desc': { es: 'Cada pieza lleva el nombre de tu bebé bordado con amor', en: 'Each piece carries your baby\'s name embroidered with love' },
  'benefits.handmade': { es: 'Hecho en Colombia', en: 'Made in Colombia' },
  'benefits.handmade.desc': { es: 'Artesanía colombiana de la más alta calidad', en: 'Colombian craftsmanship of the highest quality' },
  'benefits.materials': { es: 'Materiales suaves y seguros', en: 'Soft and safe materials' },
  'benefits.materials.desc': { es: 'Solo usamos telas hipoalergénicas y certificadas', en: 'We only use hypoallergenic and certified fabrics' },
  'benefits.attention': { es: 'Atención personalizada', en: 'Personalized attention' },
  'benefits.attention.desc': { es: 'Te acompañamos en cada paso de tu pedido', en: 'We accompany you every step of your order' },

  // Products
  'products.featured': { es: 'Productos Destacados', en: 'Featured Products' },
  'products.viewAll': { es: 'Ver todos los productos', en: 'View all products' },
  'products.from': { es: 'Desde', en: 'From' },

  // Categories
  'categories.title': { es: 'Nuestras Categorías', en: 'Our Categories' },
  'categories.explore': { es: 'Explorar', en: 'Explore' },

  // Testimonials
  'testimonials.title': { es: 'Lo que dicen nuestras clientas', en: 'What our customers say' },

  // Product page
  'product.personalize': { es: 'Personaliza tu producto', en: 'Personalize your product' },
  'product.babyName': { es: 'Nombre del bebé', en: 'Baby\'s name' },
  'product.babyNamePlaceholder': { es: 'Escribe el nombre aquí', en: 'Write the name here' },
  'product.embroideryColor': { es: 'Color del bordado', en: 'Embroidery color' },
  'product.fontType': { es: 'Tipo de letra', en: 'Font type' },
  'product.observations': { es: 'Observaciones especiales', en: 'Special observations' },
  'product.observationsPlaceholder': { es: '¿Algún detalle especial que debamos saber?', en: 'Any special detail we should know?' },
  'product.productionTime': { es: 'Tiempo de producción', en: 'Production time' },
  'product.days': { es: 'días', en: 'days' },
  'product.trustMessage': { es: 'Este producto se elabora especialmente para tu bebé con el mayor cariño y cuidado.', en: 'This product is made especially for your baby with the greatest care and love.' },
  'product.orderWhatsapp': { es: 'Enviar pedido por WhatsApp', en: 'Send order via WhatsApp' },

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

  // About
  'about.title': { es: 'Nuestra Historia', en: 'Our Story' },
  'about.content': { es: 'En Petit Design, creemos que cada bebé merece ser recibido con amor y detalles únicos. Nacimos con la misión de acompañar a las familias colombianas en los momentos más especiales de sus vidas.', en: 'At Petit Design, we believe that every baby deserves to be welcomed with love and unique details. We were born with the mission of accompanying Colombian families in the most special moments of their lives.' },

  // General
  'general.loading': { es: 'Cargando...', en: 'Loading...' },
  'general.error': { es: 'Ha ocurrido un error', en: 'An error occurred' },
  'general.noProducts': { es: 'No hay productos disponibles', en: 'No products available' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('petit-design-lang');
    return (saved as Language) || 'es';
  });

  useEffect(() => {
    localStorage.setItem('petit-design-lang', language);
  }, [language]);

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) {
      console.warn(`Missing translation for key: ${key}`);
      return key;
    }
    return translation[language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
