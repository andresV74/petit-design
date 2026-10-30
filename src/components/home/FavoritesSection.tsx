import { Link } from 'react-router-dom'
import { Star } from 'lucide-react'
import { useProducts } from '@/hooks/useProducts.ts'
import { ProductCard } from '@/components/products/ProductCard.tsx'
import { useLanguage } from '@/lib/i18n'
import { Badge } from '@/components/ui/badge.tsx'
import { LoadingIndicator } from '@/components/ui/loadingIndicator.tsx'
import { ErrorMessage } from '@/components/ui/errorMessage.tsx'
import type { ImportsListProps } from '@/types/generalTypes.ts'

export function FavoritesSection({ first = 80 }: ImportsListProps) {
  const { t, language } = useLanguage()
  const { products, loading, error } = useProducts(first)

  if (loading) return <LoadingIndicator type="line-simple" size="lg" label={t('catalog.loading')} />
  if (error) return <ErrorMessage message={t('catalog.error')} />

  return (
    <section className="py-16 md:py-24 bg-gray-light/50 overflow-hidden">
      <div className="container px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 gap-2 px-4 py-2 bg-mint/20 text-mint-dark border-mint/30">
            <Star className="h-4 w-4 fill-current" />
            {t('favorites.badge')}
          </Badge>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
            {t('favorites.title')}
          </h2>
        </div>

        {/* Favorites Grid */}
        {!products || products.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              {t('catalog.noProducts')}
            </p>
            <Link
              to="/catalogo"
              className="inline-block mt-4 text-mint hover:text-mint-dark underline"
            >
              {t('catalog.allProducts')}
            </Link>
          </div>)
        : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
            {
              products?.filter((product) => product.isFeatured?.value === 'true').slice(0, 4)
                .map((card) => (
                <ProductCard key={card.id} product={card} language={language} />
              ))
            }
          </div>
        )}
      </div>
    </section>
  );
}
