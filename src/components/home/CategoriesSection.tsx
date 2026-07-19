import { Link } from 'react-router-dom'
import { useLanguage } from '@/lib/i18n'
import { catalogContent } from '@/data/catalogContent.ts'

export function CategoriesSection() {
  const { t, language } = useLanguage()
	const tCatalog = catalogContent[language]

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
						tCatalog.categories.map((category) =>  (
							(category.image_url && (
								<div key={category.slug} className="flex flex-col">
									{/* Category Card */}
									<Link
										to={`/catalogo/${category.slug}`}
										className="group w-full relative aspect-4/3 overflow-hidden rounded-2xl text-left transition-all hover:shadow-lg z-20 cursor-pointer"
									>
										<img
											src={category.image_url}
											alt={category.title}
											loading="lazy"
											decoding="async"
											className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
										/>
										<div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/0 to-transparent" />
										<div className="absolute inset-0 flex flex-col items-center justify-end p-6">
											<h3 className="font-display text-xl font-semibold text-white text-center mb-2">
												{category.title}
											</h3>
										</div>
									</Link>
								</div>
							))
            ))
					}
        </div>
      </div>
    </section>
  );
}
