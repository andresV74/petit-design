import { useLanguage } from '@/lib/i18n.tsx'
import { useFabricsStore } from '@/store/fabricsStore.tsx'
import { useProductCustomsStore } from '@/store/productCustomsStore.tsx'

interface CustomInfoProps {
	useFabrics?: boolean
}

export function CustomInfo({ useFabrics = true }: CustomInfoProps) {
	const { t, language } = useLanguage()
	const customs = useProductCustomsStore((state) => state.customs)
	const fabric = useFabricsStore((state) => state.fabric)

	return (
		!!fabric && !customs && useFabrics
			? (
				<div className='fixed md:sticky top-20 md:top-25 left-0 md:left-[unset] z-30 backdrop-blur supports-backdrop-filter:bg-background/80 w-full p-4 md:p-0 text-sm md:text-base shadow-md md:shadow-none'>
					<div
						className='custom-container w-full bg-mint-light/40 border border-mint/50 rounded-xl px-4 py-3 text-mint-dark pointer-events-none'
					>
							<p>{t('product.fabricSelected')}
								<span className='font-bold ps-1'>
									{language === 'es' ? fabric.name_es : fabric.name_en}
								</span>
								<span className='italic text-sm ps-1.5'>
									({language === 'es'
										? fabric.gender === 'boy' ? 'niño' : 'niña'
										: fabric.gender
									})
								</span>
							</p>
					</div>
				</div>
			)
			: (
				customs && (
					<div className='fixed md:sticky top-20 md:top-25 left-0 md:left-[unset] z-30 backdrop-blur supports-backdrop-filter:bg-background/80 w-full p-4 md:p-0 text-sm md:text-base shadow-md md:shadow-none'>
						<div
							className='custom-container w-full bg-mint-light/40 border border-mint/50 rounded-xl px-4 py-3 text-mint-dark pointer-events-none'
						>
							{customs.name && (
								<p>{t('product.name')} <span className='font-bold'>{customs.name}</span></p>
							)}
							{customs.font && (
								<p>{t('product.fontTitle')}: <span className='font-bold'>{customs.font}</span></p>
							)}
							{customs.color && (
								<p>Color: <span className='font-bold'>{t(`color.${customs.color.value}`)}</span></p>
							)}
							{!!fabric && useFabrics && (
								<p>{t('product.fabricSelected')}
									<span className='font-bold ps-1'>
										{language === 'es' ? fabric.name_es : fabric.name_en}
									</span>
									<span className='italic text-sm ps-1.5'>
										({language === 'es'
											? fabric.gender === 'boy' ? 'niño' : 'niña'
											: fabric.gender
										})
									</span>
								</p>
							)}
							{customs.observations && (
								<p>{t('product.observations')} <span className='font-bold'>{customs.observations}</span></p>
							)}
						</div>

						{customs.name && customs.font && customs.color && (
							<div className='mt-3 md:mt-6'>
								<p
								className={`emboss pt-3 text-center rounded-xl bg-size-[60%] bg-center border border-border font-${customs.font.toLowerCase()}
									${customs.color.value === 'blanco' ? 'bg-primary/70' : ''}
									${customs.font === 'Hello' ? 'text-4xl/20 tracking-tighter' : 'text-5xl/20'}`
								}
									style={{ color: customs.color.color, backgroundImage: `url(${fabric?.image})` }}
								>
									{customs.name}
								</p>
								<p className='mt-1 text-center text-xs'>
									Esto es una representación gráfica, el producto final puede variar.
								</p>
							</div>
						)}
					</div>
				)
			)
	)
}