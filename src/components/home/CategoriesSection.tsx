import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

const categoryImages: Record<string, string> = {
  'lenceria': '/products/product-1.jpeg',
  'accesorios-lenceria': '/products/product-9.jpeg',
};

// TODO: centralize the global state
const mainCategories = [
	{
		id: 'lenceria',
		slug: 'lenceria-cuna',
		name_en: 'Crib and Toddler Bed Linens',
		name_es: 'Lencería de Cunas y Cama Cunas',
		image_url: categoryImages['lenceria'],
		subcategories: [
			{
				key: '1',
				name: 'Cambio de pañal',
				slug: 'cambio-panal-lenceria'
			},
			{
				key: '2',
				name: 'Nido',
				slug: 'nido'
			},
			{
				key: '3',
				name: 'Lencería de Cuna',
				slug: 'cuidado-bebe-cuna'
			},
		]
	},
	{
		id: 'accesorios',
		slug: 'accesorios-lenceria',
		name_en: 'Linen Accessories',
		name_es: 'Accesorios de Lencería ',
		image_url: categoryImages['accesorios-lenceria'],
		subcategories: [
			{
				key: '1',
				name: 'Decoración',
				slug: 'decoracion'
			},
			{
				key: '2',
				name: 'Cambio de Pañal',
				slug: 'cambio-panal-accesorios'
			},
			{
				key: '3',
				name: 'Cuidado del Bebé',
				slug: 'cuidado-bebe'
			},
			{
				key: '4',
				name: 'Organizadores',
				slug: 'organizadores'
			},
		]
	},
]

export function CategoriesSection() {
  const { t, language } = useLanguage();
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
            {t('categories.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('categories.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto justify-items-center">
          {
						mainCategories.map((category) =>  (
              <div key={category.id} className="flex flex-col">
                {/* Category Card */}
								<button
									onClick={() => handleCategoryClick(category.id, true)}
									className="group w-full relative aspect-4/3 overflow-hidden rounded-2xl text-left transition-all hover:shadow-lg z-20 cursor-pointer"
								>
									<img
										src={category.image_url}
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
											{t('categories.cta')}
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
												to={`/catalogo/${category.slug}/${subcategory.slug}`}
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
            ))
					}
        </div>
      </div>
    </section>
  );
}
