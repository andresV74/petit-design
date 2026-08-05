import { useEffect } from 'react'
import { useProductCustomsStore } from '@/store/productCustomsStore'
import { useLanguage } from '@/lib/i18n.tsx'

export interface EmbroideryColorsProps {
	value: string
	color: string
	border?: boolean
}
interface ProductEmbroideryColorProps {
	embroideryColors: EmbroideryColorsProps[]
	colorFilters: string[] | undefined
}

export function ProductEmbroideryColor({
	embroideryColors,
	colorFilters,
}: ProductEmbroideryColorProps) {
	const selectedColor = useProductCustomsStore((state) => state.customs?.color)
	const setColor = useProductCustomsStore((state) => state.setCustom)
	const removeColor = useProductCustomsStore((state) => state.removeCustom)

	const colors = colorFilters
		? embroideryColors.filter((item) => colorFilters.includes(item.value))
		: embroideryColors

	const { t } = useLanguage()

	useEffect(() => {
		if (selectedColor && !colors.some((item) => item.value === selectedColor.value)) {
			removeColor('color')
		}
	}, [selectedColor, colors, removeColor])

	const handleColor = (newColor: EmbroideryColorsProps) => {
		if (selectedColor?.value === newColor.value) {
      removeColor('color')
    } else {
      setColor({ color: newColor })
    }
	}

	return (
		<div className="space-y-3">
			<label>{t('product.embroideryColor')}</label>
			<div className="flex flex-wrap gap-3 mt-3">
				{colors.map((color) => {
					const isSelected = selectedColor?.value === color.value

					return (
						<button
							key={color.value}
							onClick={() => handleColor(color)}
							className={
								`w-12 h-12 rounded-full transition-all relative cursor-pointer
								${color.border ? 'border-2 border-border' : ''}
								${isSelected
									? "ring-2 ring-primary ring-offset-2 scale-110"
									: "hover:scale-105"}`
							}
							style={{ backgroundColor: color.color }}
							title={t(`color.${color.value}`)}
						>
							{isSelected && (
								<span className="absolute inset-0 flex items-center justify-center">
									<span className={
										`w-2 h-2 rounded-full
										${color.value === 'blanco' ? "bg-gray-400" : "bg-white"}`
									} />
								</span>
							)}
						</button>
					)
				})}
			</div>
			<p className="text-sm text-muted-foreground font-medium">
				{selectedColor && t(`color.${selectedColor.value}`)}
			</p>
		</div>
	)
}
