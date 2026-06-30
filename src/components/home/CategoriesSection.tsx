import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

// Fallback images for categories
const categoryImages: Record<string, string> = {
  'lenceria': '/products/product-1.jpeg',
  'nidos': '/products/nido-estandar.png',
  'accesorios-lenceria': '/products/product-9.jpeg',
  'bolsitas-panalera': '/products/product-4.jpeg',
  'baby-sleeping': '/products/baby-sleeping-pijama.png',
  'toallas-baberos': '/products/product-5.jpeg',
  'cojines-cobijas': '/products/product-3.jpeg',
  'kit-cambiador': '/products/product-7.jpeg',
  'sets-personalizados': '/products/product-2.jpeg',
  'kits': '/products/product-2.jpeg',
};

const mainCategories = [
	{
		id: 'lenceria',
		slug: 'lenceria',
		name_en: 'Crib and Toddler Bed Linens',
		name_es: 'Lencería de Cunas y Cama Cunas',
		image_url: categoryImages['lenceria'],
		subcategories: [
			{
				key: '1',
				name: 'Cambio de pañal'},
			{
				key: '2',
				name: 'Nido'},
			{
				key: '3',
				name: 'Lencería de Cuna'},
		]
	},
	{
		id: 'accesorios',
		slug: 'accesorios',
		name_en: 'Linen Accessories',
		name_es: 'Accesorios de Lencería ',
		image_url: categoryImages['accesorios-lenceria'],
		subcategories: [
			{
				key: '1',
				name: 'Decoración'},
			{
				key: '2',
				name: 'Cambio de Pañal'},
			{
				key: '3',
				name: 'Cuidado del Bebé'},
			{
				key: '4',
				name: 'Organizadores'},
		]
	},
]

export function CategoriesSection() {
  const { language } = useLanguage();
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const handleCategoryClick = (categoryId: string, hasSubcategories: boolean) => {
    if (hasSubcategories) {
      setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gray-light/50">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
            {language === 'es' ? 'Nuestras Categorías' : 'Our Categories'}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {language === 'es'
              ? 'Explora nuestra colección de productos artesanales personalizados para tu bebé'
              : 'Explore our collection of personalized handmade products for your baby'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto justify-items-center">
          {mainCategories.map((category) => {
            const imageUrl = category.image_url || categoryImages[category.slug] || '/products/product-1.jpeg';

            return (
              <div key={category.id} className="flex flex-col">
                {/* Category Card */}
								<button
									onClick={() => handleCategoryClick(category.id, true)}
									className="group relative aspect-4/3 overflow-hidden rounded-2xl text-left transition-all hover:shadow-lg z-20 cursor-pointer"
								>
									<img
										src={imageUrl}
										alt={language === 'es' ? category.name_es : category.name_en}
										loading="lazy"
										decoding="async"
										className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
									/>
									<div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
									<div className="absolute inset-0 flex flex-col items-center justify-end p-6">
										<h3 className="font-display text-xl font-semibold text-white text-center mb-2">
											{language === 'es' ? category.name_es : category.name_en}
										</h3>
										<span className="flex items-center gap-1 text-sm text-white/80">
											{language === 'es' ? 'Ver subcategorías' : 'View subcategories'}
											<ChevronDown className={
												`h-4 w-4 transition-transform ${expandedCategory === category.id && "rotate-180"}`
											} />
										</span>
									</div>
								</button>

                {/* Subcategories Dropdown */}
								<div className={
									`overflow-hidden transition-all duration-300 ease-in-out bg-white rounded-b-2xl shadow-md -mt-2 z-10
									${expandedCategory === category.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`
								}>
									<div className="p-4 space-y-2">
										{category.subcategories.map((subcategory) => (
											<Link
												key={subcategory.key}
												to={`/catalogo/subcategoria/`}
												className="flex items-center justify-between p-3 rounded-lg hover:bg-mint-light/30 transition-colors group"
											>
												<span className="text-foreground font-medium">
													{subcategory.name}
												</span>
												<ChevronRight className="h-4 w-4 text-mint opacity-0 group-hover:opacity-100 transition-opacity" />
											</Link>
										))}
									</div>
								</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
