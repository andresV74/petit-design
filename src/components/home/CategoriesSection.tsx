import { useCollections } from '@/hooks/useCollections.ts'
import { Link } from 'react-router-dom'
import { useLanguage } from '@/lib/i18n'
import type { ImportsListProps } from '@/types/generalTypes.ts'

export function CategoriesSection({ first = 2 }: ImportsListProps) {
  const { t } = useLanguage()
	const { collections, loading, error } = useCollections(first)

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>Ocurrió un error al cargar productos.</p>;

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
						collections?.map(({ id, title, image }) =>  {
							const slug = title.toLowerCase().replace(/\s+/g, '-')

							return (
							<div key={id} className="flex flex-col">
								<Link
									to={`/collections/${slug}`}
									className="group w-full relative aspect-4/3 overflow-hidden rounded-2xl text-left transition-all hover:shadow-lg z-20 cursor-pointer"
								>
									<img
										src={image.url}
										alt={image.altText}
										loading="lazy"
										decoding="async"
										className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
									/>
									<div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/0 to-transparent" />
									<div className="absolute inset-0 flex flex-col items-center justify-end p-6">
										<h3 className="flex items-center font-display text-xl font-semibold text-white text-center text-balance min-h-14 mb-2">
											{title}
										</h3>
									</div>
								</Link>
							</div>
            )})
					}
        </div>
      </div>
    </section>
  )
}
