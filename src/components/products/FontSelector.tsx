import { useProductCustomsStore } from '@/store/productCustoms.tsx'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
	DropdownMenuItem,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'
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
	const removeFont = useProductCustomsStore((state) => state.removeCustom)
	const { t } = useLanguage()

	const handleFont = (newFont: string) => {
		return (
			selectedFont === newFont
				? removeFont('font')
				: setFont({font: newFont})
		)
	}

	return (
		<div className="space-y-2">
			<p>{t('product.fontTitle')}</p>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button
						className="text-sm font-medium text-muted-foreground border-2 border-border rounded-xl hover:text-primary-foreground hover:border-primary gap-1 px-4 py-2"
					>
						Escoge tipo de letra para el nombre
						<ChevronDown className="h-4 w-4" />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="center" className="w-64 bg-background">
						{buttons.map(({ name }) => (
							<DropdownMenuItem asChild key={name} >
							<button
								className={`font-${name.toLowerCase()} ${name === 'Hello' ? 'text-2xl/10!' : 'text-3xl/8!'} w-full h-fit justify-center rounded-md cursor-pointer mb-2 pt-3 hover:bg-primary hover:text-primary-foreground`}
								onClick={() => handleFont(name)}
							>
								{name}
							</button>
							</DropdownMenuItem>
						))}
				</DropdownMenuContent>
			</DropdownMenu>
			{/* Fix strange behavior with the fonts called in the template literals */}
			<span className='hidden font-barbie'></span>
			<span className='hidden font-hello'></span>
			<span className='hidden font-vogue'></span>
		</div>
	)
}