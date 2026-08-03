import { useState, useRef } from 'react'
import { Baby, MessageCircle } from 'lucide-react'
import { FabricButton } from './FabricButton.tsx'
import { Dialog, type DialogRef } from '@/components/ui/dialog.tsx'
import { useLanguage } from '@/lib/i18n.tsx'
import { getWhatsAppUrl } from '@/lib/whatsapp.ts'
import { useFabricsStore } from '@/store/fabricsStore.tsx'

import boyFabrics from '@/data/boyFabrics.json'
import girlFabrics from '@/data/girlFabrics.json'

export interface Fabric {
  id: string
  slug: string
  name_es: string
  name_en: string
  image: string
  gender: 'boy' | 'girl'
  page: number
}

interface FabricSelectorProps {
	initialGender?: 'boy' | 'girl' | null
}

export function FabricSelector({
	initialGender = null,
}: FabricSelectorProps) {
	const { t, language } = useLanguage()
	const [selectedGender, setSelectedGender] = useState<'boy' | 'girl' | null>(initialGender)
	const [zoomFabric, setZoomFabric] = useState<Fabric | null>(null)
	const [zoomIndex, setZoomIndex] = useState(0)
	const dialogRef = useRef<DialogRef | null>(null)
	const selectedFabric = useFabricsStore((state) => state.fabric)

	const currentFabrics: Fabric[] = (selectedGender === 'boy'
		? boyFabrics
		: selectedGender === 'girl'
			? girlFabrics
			: []) as unknown as Fabric[]

	/**
	 * Opens the Dialog modal with the chosen fabric from the grid
	 *
	 * @param fabric the chosen fabric
	 * @param index the index of the fabric form the list
	 * @param e the click event of the button
	 */
	const handleFabricZoom = (fabric: Fabric, index: number, e: React.MouseEvent) => {
		e.stopPropagation()
		setZoomFabric(fabric)
		setZoomIndex(index)
		dialogRef.current?.open()
	}

	// Find selected fabric name
	const selectedFabricObj = [...boyFabrics, ...girlFabrics].find(fabric => fabric.id === selectedFabric?.id)

	return (
		<div className="space-y-4">
			{/* Label */}
			<div className="flex items-center justify-between">
				<span className="text-sm font-medium flex items-center gap-2">
					🧵 {t('product.select')}
				</span>
				{selectedFabricObj && (
					<span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded-full">
						{language === 'es' ? selectedFabricObj.name_es : selectedFabricObj.name_en}
					</span>
				)}
			</div>

			{/* Gender Toggle */}
			<div className="flex gap-2">
				<button
					onClick={() => setSelectedGender(selectedGender === 'boy' ? null : 'boy')}
					className={
						`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 transition-all cursor-pointer
						${selectedGender === 'boy'
							? 'border-blue-400 bg-blue-50 text-blue-700'
							: 'border-border hover:border-blue-300 hover:bg-blue-50/50'}`

					}
				>
					<Baby className={`h-5 w-5 ${selectedGender === 'boy' ? "text-blue-500" : "text-muted-foreground"}`} />
					<span className="font-medium">{t('product.boy')}</span>
					<span className="text-xs text-muted-foreground">({boyFabrics.length})</span>
				</button>
				<button
					onClick={() => setSelectedGender(selectedGender === 'girl' ? null : 'girl')}
					className={
						`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 transition-all cursor-pointer
						${selectedGender === 'girl'
							? 'border-pink-400 bg-pink-50 text-pink-700'
							: 'border-border hover:border-pink-300 hover:bg-pink-50/50'}`
					}
				>
					<Baby className={`h-5 w-5 ${selectedGender === 'girl' ? "text-pink-500" : "text-muted-foreground"}`} />
					<span className="font-medium">{t('product.girl')}</span>
					<span className="text-xs text-muted-foreground">({girlFabrics.length})</span>
				</button>
			</div>

			{/* Fabric Grid */}
			{selectedGender && currentFabrics.length > 0 && (
				<div className="space-y-3 animate-fade-in-from-bottom">
					<div className="max-h-70 overflow-y-auto bg-background rounded-xl border">
						<div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-3 p-3">
							{currentFabrics.map((fabric, index) => (
								<FabricButton key={index} fabric={fabric as Fabric} index={index} handleFabricZoom={handleFabricZoom} />
							))}
						</div>
					</div>

					{/* WhatsApp CTA */}
					<a
						href={getWhatsAppUrl({ message: '¡Hola! Me gustaría ver más diseños de telas', source: 'Producto - Telas' })}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
					>
						<MessageCircle className="h-4 w-4 text-mint" />
						{t('product.moreOptions')}
					</a>
				</div>
			)}

			{!selectedGender && (
				<p className="text-sm text-muted-foreground text-center py-4">
					{t('product.selectGender')}
				</p>
			)}

			{/* Zoom Modal */}
			<Dialog
				ref={dialogRef}
				zoomFabric={zoomFabric}
				currentFabrics={currentFabrics}
				zoomIndex={zoomIndex}
				setZoomIndex={setZoomIndex}
				setZoomFabric={setZoomFabric}
			/>
		</div>
	)
}
