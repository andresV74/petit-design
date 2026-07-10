import { useParams } from 'react-router-dom'
import { ProductCard } from '@/components/products/ProductCard.tsx'
import { Breadcrumbs } from '@/components/ui/breadcrumbs'
import { useLanguage } from '@/lib/i18n'
import { Link } from 'react-router-dom'
import { catalogContent } from '@/data/catalogContent.ts'
import productsData from '@/data/products.json'

export function CatalogPage() {
  const { category, subcategory } = useParams<{ category?: string; subcategory?: string }>()
  const { language } = useLanguage()

  const t = catalogContent[language]
  const headTitle = `${t.pageTitle} | Petit Design`

  const canonicalUrl = subcategory
    ? `https://petitdesign.com.co/catalogo/${category}/${subcategory}`
    : category
      ? `https://petitdesign.com.co/catalogo/${category}`
      : 'https://petitdesign.com.co/catalogo'

  const getTitlesBySlug = (slug: string | undefined, field: 'title' | 'description') => {
    if (!slug) {
      return t.pageTitle
    }

    return t.categories.find(category => category.slug === slug)?.[field]
  }

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
        <div className="text-center mb-8">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
            {getTitlesBySlug(category, 'title')}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {getTitlesBySlug(category, 'description')?.substring(0, 3) === 'Cat' ? '' : getTitlesBySlug(category, 'description')}
          </p>
        </div>

        {/* Filters Section */}
        {!subcategory && (
          <div className="mb-8 space-y-4">
            <div className="flex flex-wrap justify-center gap-2">
              <Link
                to="/catalogo"
                className={
                  `px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${!category
                    ? "bg-mint text-white"
                    : "bg-muted text-muted-foreground hover:bg-mint-light"}`
                }
              >
                {t.allButtonText}
              </Link>
              {t.categories.map(cat => (
                cat.description && (
                  <Link
                    key={cat.slug}
                    to={`/catalogo/${cat.slug}`}
                    className={
                      `px-4 py-2 rounded-full text-sm font-medium transition-colors
                      ${category === cat.slug
                        ? "bg-mint text-white"
                        : "bg-muted text-muted-foreground hover:bg-mint-light"}`
                    }
                  >
                    {cat.title}
                  </Link>
                )
              ))}
            </div>
          </div>
        )}

        {/* Breadcrumb for subcategory */}
        <Breadcrumbs category={category} subcategory={subcategory} isProduct={false} />

        {/* Products Grid */}
        {productsData.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              {t.noProducts}
            </p>
            <Link
              to="/catalogo"
              className="inline-block mt-4 text-mint hover:text-mint-dark underline"
            >
              {t.allProducts}
            </Link>
          </div>)
        : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {
              subcategory ? (
                productsData
                  .filter((product) => product.category === category && product.subcategory === subcategory)
                  .map((card) => (
                    <ProductCard key={card.id} product={card} language={language} />
                  ))
              ) : category ? (
                productsData
                  .filter((product) => product.category === category)
                  .map((card) => (
                  <ProductCard key={card.id} product={card} language={language} />
                ))
              ) : (
                productsData.map((card) => (
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
