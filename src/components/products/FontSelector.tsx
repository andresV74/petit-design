import { useProductCustomsStore } from '@/store/productCustomsStore'
import { useLanguage } from '@/lib/i18n.tsx'

	const buttons = [
		{
			name: 'Barbie',
		},
		{
			name: 'Hello',
		},
		{
			name: 'Vogue',
		},
	]

export function FontSelector() {
  const selectedFont = useProductCustomsStore((state) => state.customs?.font)
	const setFont = useProductCustomsStore((state) => state.setCustom)
	const { t } = useLanguage()

	const handleFont = (newFont: string) => {
		setFont({font: newFont})
	}

	return (
		<fieldset className="space-y-2">
			<label htmlFor="fontSelector">
				{t('product.fontTitle')}
			</label>
			<select
				name="fontSelector"
				id="fontSelector"
				className='w-full'
				value={selectedFont}
				onChange={(event) => handleFont(event.target.value)}
			>
				<option value="">Escoge tipo de letra para el nombre</option>
				{buttons.map(({ name }) => (
					<option
						key={name}
						value={name}
						className={`font-${name.toLowerCase()} ${name === 'Hello' ? 'text-2xl/10! ms-3' : 'text-3xl/8!'} w-full h-fit rounded-md cursor-pointer mb-2 pt-3 hover:bg-primary hover:text-primary-foreground`}
					>
						{name}
					</option>
				))}
			</select>
		</fieldset>
	)
}