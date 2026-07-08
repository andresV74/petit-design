import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { ProductCard } from '@/components/products/ProductCard.tsx'
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/i18n';
import { Badge } from '@/components/ui/badge.tsx';
import productsData from '@/data/products.json'

export function FeaturedKitsSection() {
  const { t, language } = useLanguage();

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          {
            productsData.filter((card) => card.category === 'kits').slice(0, 3).map((card) => (
              <ProductCard key={card.id} product={card} language={language} />
            ))
          }
        </div>

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
