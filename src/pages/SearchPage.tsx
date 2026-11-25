import { useParams } from 'react-router-dom'
import { useProductSearch } from '@/hooks/useProductSearch.ts'
import { ProductCard } from '@/components/products/ProductCard.tsx'
import { useLanguage } from '@/lib/i18n'
import { Link } from 'react-router-dom'
import { LoadingIndicator } from '@/components/ui/loadingIndicator.tsx'
import { ErrorMessage } from '@/components/ui/errorMessage.tsx'

export function SearchPage() {
  const { handle } = useParams()
  const { products, loading, error } = useProductSearch(handle)
  const { t, language } = useLanguage()

  const headTitle = `${t('catalog.title')} | Petit Design`

  const canonicalUrl = handle
      ? `https://petitdesign.co/search/${handle}`
      : 'https://petitdesign.co/search'

  if (loading) return <LoadingIndicator type="line-simple" size="lg" label={t('catalog.loading')} />
  if (error) return <ErrorMessage message={t('catalog.error')} />

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
        <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-semibold mb-15">
          {t('search.title')} "{handle}"
        </h1>

        {/* Products Grid */}
        {products?.length === 0 && handle ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              {t('search.noResults')}
            </p>
            <Link
              to="/collections"
              className="inline-block mt-4 text-mint hover:text-mint-dark underline"
            >
              {t('search.viewAll')}
            </Link>
          </div>)
        : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {products?.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                language={language}
              />
            ))}
          </div>
        )}
      </div>
    </>
  )
}
