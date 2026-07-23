import { useLanguage } from '@/lib/i18n.tsx'
import { useProductCustomsStore } from '@/store/productCustoms.tsx'
export function CustomInfo() {
	const { t, language } = useLanguage()
	const customs = useProductCustomsStore((state) => state.customs)

	return (
		customs && (
			<div
				className='custom-container w-full bg-mint-light/40 border border-mint/50 rounded-2xl px-4 py-3 text-mint-dark pointer-events-none'
			>
				{customs.name && (
					<p>{t('product.name')} <span>{customs.name}</span></p>
				)}
				{customs.font && (
					<p>{t('product.fontTitle')}: <span className='font-bold '>{customs.font}</span></p>
				)}
				{customs.color && (
					<p>Color: <span className='font-bold'>{t(`color.${customs.color}`)}</span></p>
				)}
				{customs.fabric && (
					<p>{t('product.fabricSelected')}
						<span className='font-bold ps-1'>
							{language === 'es' ? customs.fabric.name_es : customs.fabric.name_en}
						</span>
						<span className='italic text-sm ps-1.5'>
							({language === 'es'
								? customs.fabric.gender === 'boy' ? 'niño' : 'niña'
								: customs.fabric.gender
							})
						</span>
					</p>
				)}
				{customs.observations && (
					<p>{t('product.observations')} <span className='font-bold'>{customs.observations}</span></p>
				)}
			</div>
		)
	)
}