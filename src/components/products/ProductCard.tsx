import { Link } from 'react-router-dom';

interface ProductCardProps {
	image: string
	isFeatured: boolean
	title: string
	price: string
}

export function ProductCard({ image, isFeatured, title, price }: ProductCardProps) {
	return (
		<article className='animate-fade-in' >
			<Link to="/kits/kit-0002"
				className="group block relative"
			>
				<figure className="aspect-square overflow-hidden rounded-2xl bg-muted mb-4">
					<img
						src={image}
						alt="Kit Personalizado para Recibir al Bebé"
						className="w-full h-full object-cover transition-transform duration-500 group-hover-scale"
					/>
				</figure>
				{
					isFeatured && (
					<div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs">
						Destacado
					</div>)
				}
				<h3 className="text-lg font-semibold text-foreground uppercase group-hover-text-primary transition-colors mb-1">
					{title}
				</h3>
				<p className="text-muted-foreground">
					Desde {price}
				</p>
			</Link>
		</article>
	)
}