import { Link } from 'react-router-dom';
import { useLanguage } from '@/lib/i18n.tsx'
import type { Product } from '@/types/generalTypes.ts'

interface ProductCardProps {
	product: Product
	language: 'es' | 'en'
}

export function ProductCard({ product, language }: ProductCardProps) {
	const { t } = useLanguage()
	const primaryImage = product.images?.find(img => img.isPrimary) ?? product.images?.[0]
	const imageUrl = primaryImage?.imageUrl
	const altImageEs = primaryImage?.altText_es
	const altImageEn = primaryImage?.altText_en

	const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

	return (
		<article className='animate-fade-in' >
			<Link to={`/producto/${product.slug}`}
				className="group block relative"
			>
				<figure className="aspect-square overflow-hidden rounded-2xl bg-muted mb-4">
					<img
						src={imageUrl}
						alt={language === 'es' ? altImageEs ?? product.name_es : altImageEn ?? product.name_en}
						className="w-full h-full object-cover transition-transform duration-500 group-hover-scale"
					/>
				</figure>
				{
					product.isFeatured && (
					<div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs">
						{t('products.singleFeatured')}
					</div>)
				}
				<h3 className="text-lg font-semibold text-foreground uppercase group-hover-text-primary transition-colors mb-1">
					{language === 'es' ? product.name_es : product.name_en}
				</h3>
				<p className="text-muted-foreground">
					{t('products.from')} {formatPrice(product.price)}
				</p>
			</Link>
		</article>
	)
}