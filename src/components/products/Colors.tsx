import { useProductCustomsStore } from '@/store/productCustomsStore'
import { useLanguage } from '@/lib/i18n.tsx'

export interface SingleColorProps {
	id: string
	name: string | undefined
	hex: string | undefined
	border?: string | undefined
}
interface ColorsProps {
	colors: SingleColorProps[]
	handleSelectColor: (colorId: string) => void
}

export function Colors({ colors, handleSelectColor }: ColorsProps) {
	const selectedColor = useProductCustomsStore((state) => state.customs?.color)
	const { t } = useLanguage()

	return (
		<div className="space-y-3">
			<label>{t('product.embroideryColor')}</label>
			<div className="flex-balance gap-3 mt-3">
				{colors.map((color) => {
					const isSelected = selectedColor?.name === color.name

					return (
						<button
							key={color.name}
							onClick={() => handleSelectColor(color.id)}
							className={
								`w-12 h-12 rounded-full transition-all relative cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
								${color.border ? 'border-2 border-border' : ''}
								${isSelected
									? "ring-2 ring-primary ring-offset-2 scale-110"
									: "hover:scale-105"}`
							}
							style={{ backgroundColor: color.hex }}
							title={t(`color.${color.name}`)}
						>
							{isSelected && (
								<span className="absolute inset-0 flex items-center justify-center">
									<span className={
										`w-2 h-2 rounded-full
										${color.name === 'blanco' ? "bg-gray-400" : "bg-white"}`
									} />
								</span>
							)}
						</button>
					)
				})}
			</div>
			<p className="text-sm text-muted-foreground font-medium">
				{selectedColor && t(`color.${selectedColor.name}`)}
			</p>
		</div>
	)
}
