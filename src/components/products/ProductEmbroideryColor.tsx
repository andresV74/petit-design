import { useLanguage } from '@/lib/i18n.tsx'

interface EmbroideryColorsProps {
	value: string
	color: string
	border?: boolean
}
interface ProductEmbroideryColorProps {
	embroideryColors: EmbroideryColorsProps[]
	embroideryColor: string
	setEmbroideryColor: (color: string) => void
}

export function ProductEmbroideryColor({
	embroideryColors,
	embroideryColor,
	setEmbroideryColor
}: ProductEmbroideryColorProps) {
	const { t } = useLanguage()

	return (
		<div className="space-y-3">
			<label>{t('product.embroideryColor')}</label>
			<div className="flex flex-wrap gap-3 mt-3">
				{embroideryColors.map((color) => (
					<button
						key={color.value}
						onClick={() => setEmbroideryColor(color.value)}
						className={
							`w-12 h-12 rounded-full transition-all relative cursor-pointer
							${color.border ? 'border-2 border-border' : ''}
							${embroideryColor === color.value
								? "ring-2 ring-primary ring-offset-2 scale-110"
								: "hover:scale-105"}`
						}
						style={{ backgroundColor: color.color }}
						title={t(`color.${color.value}`)}
					>
						{embroideryColor === color.value && (
							<span className="absolute inset-0 flex items-center justify-center">
								<span className={
									`w-2 h-2 rounded-full
									${color.value === 'blanco' ? "bg-gray-400" : "bg-white"}`
								} />
							</span>
						)}
					</button>
				))}
			</div>
			<p className="text-sm text-muted-foreground font-medium">
				{embroideryColor && t(`color.${embroideryColor}`)}
			</p>
		</div>
	)
}