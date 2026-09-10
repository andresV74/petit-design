import { Link } from 'react-router-dom'
import { ArrowRight, Star } from 'lucide-react'
import { useProducts } from '@/hooks/useProducts.ts'
import { useCollections } from '@/hooks/useCollections.ts'
import { ProductCard } from '@/components/products/ProductCard.tsx'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/lib/i18n'
import { Badge } from '@/components/ui/badge.tsx'
import type { ImportsListProps } from '@/types/generalTypes.ts'

export function FeaturedKitsSection({ first = 3 }: ImportsListProps) {
  const { t, language } = useLanguage()
  const { products, loading, error } = useProducts(first)
  const { collections, loading: colLoading, error: colErrror } = useCollections(first)
  const kitsId = collections?.find((collection) => collection.title === 'Kits')?.id

  if (loading && colLoading) return <p>Cargando productos...</p>;
  if (error && colErrror) return <p>Ocurrió un error al cargar productos.</p>;

  return (
    <section className="py-16 md:py-24 bg-linear-to-b from-mint-light/30 relative overflow-hidden">
      <div className="container px-4 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 gap-2 px-4 py-2 bg-mint/20 text-mint-dark border-mint/30">
            <Star className="h-4 w-4 fill-current" />
            {t('kits.badge')}
          </Badge>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
            {t('kits.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t('kits.description')}
          </p>
        </div>

        {/* Kits Grid */}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {
              products?.filter((product) => product.collections.edges.some((edge) => edge.node.id === kitsId))
                .map((card) => (
                <ProductCard key={card.id} product={card} language={language} />
              ))
            }
          </div>
        )}

        {/* CTA */}
        <div className="text-center">
          <Button asChild className="h-11 rounded-md gap-2 px-8 bg-primary text-primary-foreground">
            <Link to="/catalogo/kits">
              {t('kits.cta')}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
