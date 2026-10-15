import { useParams } from 'react-router-dom'
import { useProducts } from '@/hooks/useProducts.ts'
import { useCollections } from '@/hooks/useCollections.ts'
import { ProductCard } from '@/components/products/ProductCard.tsx'
import { useLanguage } from '@/lib/i18n'
import { Link } from 'react-router-dom'
import type { ImportsListProps } from '@/types/generalTypes.ts'
import { LoadingIndicator } from '@/components/ui/loadingIndicator.tsx'
import { ErrorMessage } from '@/components/ui/errorMessage.tsx'

export function CatalogPage({ first = 80 }: ImportsListProps) {
  const { category } = useParams<{ category?: string }>()
  const { products, loading, error } = useProducts(first)
  const { collections, loading: collectionsLoading, error: collectionsError } = useCollections(first)
  const { t, language } = useLanguage()
  const categoryProducts = products?.filter(({ collections }) => collections.edges.some(({ node }) => node.handle === category))

  const headTitle = `${t('catalog.title')} | Petit Design`

  const canonicalUrl = category
      ? `https://petitdesign.co/catalogo/${category}`
      : 'https://petitdesign.co/catalogo'

  if (collectionsLoading && loading) return <LoadingIndicator type="line-simple" size="lg" label={t('catalog.loading')} />
  if (collectionsError && error) return <ErrorMessage message={t('catalog.error')} />

  return (
    <>
			<title>{headTitle}</title>
			<meta name="description" content="Explora nuestro catálogo de lencería personalizada para bebés. Productos hechos a mano en Colombia con materiales premium." />
			<link rel="canonical" href={canonicalUrl} />

			<meta property="og:title" content={headTitle} />
			<meta property="og:description" content="Explora nuestro catálogo de lencería personalizada para bebés. Productos hechos a mano en Colombia con materiales premium." />
			<meta property="og:url" content={canonicalUrl} />

			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={headTitle} />
			<meta name="twitter:description" content="Explora nuestro catálogo de lencería personalizada para bebés. Productos hechos a mano en Colombia con materiales premium." />

      <div className="container px-4 py-12 md:py-16">
        {/* Header */}
        {category ? (
          categoryProducts?.slice(0,1)
            .map((card) => {
              const matchedCollection = card.collections.edges.find(
                (collection) => collection.node.handle === category
              )

              return (
                <div key={card.id} className="text-center mb-8">
                  <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
                    {matchedCollection?.node.title}
                  </h1>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    {matchedCollection?.node.description}
                  </p>
                </div>
              )
            })
          ) : (
            <div  className="text-center mb-8">
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
                {t('catalog.title')}
              </h1>
            </div>
          )
        }

        {/* Filters Section */}
        <div className="mb-8 space-y-4">
          <div className="flex-balance justify-center gap-2">
            <Link
              to="/collections"
              className={
                `px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${!category
                  ? "bg-mint text-white"
                  : "bg-muted text-muted-foreground hover:bg-mint-light"}`
              }
            >
              {t('catalog.allButtonText')}
            </Link>
            {collections?.map(({ id, title, handle }) => (
              <Link
                key={id}
                to={`/collections/${handle}`}
                className={
                  `px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${category === handle
                    ? "bg-mint text-white"
                    : "bg-muted text-muted-foreground hover:bg-mint-light"}`
                }
              >
                {title}
              </Link>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {categoryProducts?.length === 0 && category ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              {t('catalog.noProducts')}
            </p>
            <Link
              to="/collections"
              className="inline-block mt-4 text-mint hover:text-mint-dark underline"
            >
              {t('catalog.allProducts')}
            </Link>
          </div>)
        : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {
              category ? (
                categoryProducts
                  ?.map((card) => (
                  <ProductCard key={card.id} product={card} language={language} />
                ))
              ) : (
                products?.map((card) => (
                  <ProductCard key={card.id} product={card} language={language} />
                ))
              )
            }
          </div>
        )}
      </div>
    </>
  )
}
