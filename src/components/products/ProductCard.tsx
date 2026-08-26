import { Link } from 'react-router-dom';
import { useLanguage } from '@/lib/i18n.tsx'
import type { ProductNew } from '@/types/generalTypes.ts'

interface ProductCardProps {
	product: ProductNew
	language: 'es' | 'en'
}

export function ProductCard({ product, language }: ProductCardProps) {
	const { t } = useLanguage()
  const image = product.media?.edges[0]?.node.image;
  const minPrice = product.priceRange?.minVariantPrice;


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
			<Link to={`/producto/${product.handle}`}
				className="group block relative"
			>
				<figure className="aspect-square overflow-hidden rounded-2xl bg-muted mb-4">
					<img
						src={image?.url}
						alt={image?.altText ?? product.title}
						className="w-full h-full object-cover transition-transform duration-500 group-hover-scale"
					/>
				</figure>
				{
					product.isFeatured?.value === 'true' && (
					<div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs">
						{t('products.singleFeatured')}
					</div>)
				}
				<h3 className="text-lg font-semibold text-balance text-foreground group-hover-text-primary transition-colors mb-1">
					{language === 'es' ? product.title : product.nameEn?.value}
				</h3>
				<p className="text-muted-foreground">
					{t('products.from')} {formatPrice(parseFloat(minPrice?.amount || '0'))}
				</p>
			</Link>
		</article>
	)
}