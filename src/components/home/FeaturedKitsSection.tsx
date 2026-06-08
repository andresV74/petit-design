import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/i18n';
import { Badge } from '@/components/ui/badge.tsx';

export function FeaturedKitsSection() {
  const { language } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-linear-to-b from-mint-light/30 relative overflow-hidden">
      <div className="container px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 gap-2 px-4 py-2 bg-mint/20 text-mint-dark border-mint/30">
            <Star className="h-4 w-4 fill-current" />
            {language === 'es' ? 'Lo más vendido' : 'Best Sellers'}
          </Badge>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
            {language === 'es' ? 'Kits Personalizados' : 'Personalized Kits'}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {language === 'es'
              ? 'Sets completos diseñados para el nacimiento de tu bebé. Todo lo que necesitas en un solo paquete, con la posibilidad de personalizarlo con el nombre de tu pequeño.'
              : 'Complete sets designed for your baby\'s birth. Everything you need in one package, with the possibility of personalizing it with your little one\'s name.'}
          </p>
        </div>

        {/* Kits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
					<article>
						<Link to="/kits/kit-0002"
              className="group block relative"
            >
              <figure className="aspect-square overflow-hidden rounded-2xl bg-muted mb-4">
                <img
                  src="./src/assets/KIT-0002_KIT_COMPLETO_PARA_RECIBIR_AL_B_foto1.webp"
                  alt="Kit Personalizado para Recibir al Bebé"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </figure>
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs">
                Destacado
              </div>
              <h3 className="text-lg font-semibold text-foreground uppercase group-hover:text-primary transition-colors mb-1">
                Kit completo para recibir al bebé
              </h3>
              <p className="text-muted-foreground">
                Desde $ 1.760.000
              </p>
						</Link>
					</article>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild className="h-11 rounded-md gap-2 px-8 bg-mint text-white">
            <Link to="/catalogo/kits">
              {language === 'es' ? 'Ver todos los Kits' : 'View all Kits'}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
