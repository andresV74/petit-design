import { useProductCustomsStore } from '@/store/productCustomsStore'
import { useLanguage } from '@/lib/i18n.tsx'

export interface EmbroideryColorsProps {
	value: string
	color: string
	border?: boolean
}
interface ProductEmbroideryColorProps {
	embroideryColors: EmbroideryColorsProps[]
}

export function ProductEmbroideryColor({
	embroideryColors,
}: ProductEmbroideryColorProps) {
	const selectedColor = useProductCustomsStore((state) => state.customs?.color)
	const setColor = useProductCustomsStore((state) => state.setCustom)
	const removeColor = useProductCustomsStore((state) => state.removeCustom)
	const { t } = useLanguage()

	const handleColor = (newColor: EmbroideryColorsProps) => {
		return (
			selectedColor === newColor
				? removeColor('color')
				: setColor({color: newColor})
		)
	}

	return (
		<div className="space-y-3">
			<label>{t('product.embroideryColor')}</label>
			<div className="flex flex-wrap gap-3 mt-3">
				{embroideryColors.map((color) => (
					<button
						key={color.value}
						onClick={() => handleColor(color)}
						className={
							`w-12 h-12 rounded-full transition-all relative cursor-pointer
							${color.border ? 'border-2 border-border' : ''}
							${selectedColor?.color === color.value
								? "ring-2 ring-primary ring-offset-2 scale-110"
								: "hover:scale-105"}`
						}
						style={{ backgroundColor: color.color }}
						title={t(`color.${color.value}`)}
					>
						{selectedColor === color && (
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
				{selectedColor && t(`color.${selectedColor.value}`)}
			</p>
		</div>
	)
}