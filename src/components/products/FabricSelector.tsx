import { useState, useRef } from 'react'
import { Baby, MessageCircle, X } from 'lucide-react'
import { FabricButton } from './FabricButton.tsx'
import { Dialog, type DialogRef } from '@/components/ui/dialog.tsx'
import { useLanguage } from '@/lib/i18n.tsx'
import { getWhatsAppUrl } from '@/lib/whatsapp.ts'
import { useFabricsStore } from '@/store/fabricsStore.tsx'

export interface Fabric {
  id: string
  gender: 'boy' | 'girl'
  imageUrl: string | undefined
  name_es: string | undefined
  name_en: string | undefined
}

interface FabricSelectorProps {
	initialGender?: 'boy' | 'girl' | null,
	girlFabrics: Fabric[],
	boyFabrics: Fabric[],
	maxFabrics?: number,
}

export function FabricSelector({
	initialGender = null,
	girlFabrics = [],
	boyFabrics = [],
	maxFabrics = 1,
}: FabricSelectorProps) {
	const { t, language } = useLanguage()
	const [selectedGender, setSelectedGender] = useState<'boy' | 'girl' | null>(initialGender)
	const [zoomFabric, setZoomFabric] = useState<Fabric | null>(null)
	const [zoomIndex, setZoomIndex] = useState(0)
	const dialogRef = useRef<DialogRef | null>(null)
	const selectedFabrics = useFabricsStore((state) => state.fabrics)
	const setFabric = useFabricsStore((state) => state.setFabric)
	const toggleFabric = useFabricsStore((state) => state.toggleFabric)
	const removeFabric = useFabricsStore((state) => state.removeFabric)

	const isMultiFabric = maxFabrics > 1

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

	// TODO: check if this logic can be inside the Dialog component.
  /**
   * Handle the selected fabric and stores the fabric in the global context
   */
  const handleSelectedFabric = () => {
    if (!zoomFabric) return

    if (isMultiFabric) {
      toggleFabric(zoomFabric, maxFabrics)
    } else {
      setFabric(zoomFabric)
    }

    dialogRef.current?.close()
  }

	const fabricName = (fabric: Fabric) => (language === 'es' ? fabric.name_es : fabric.name_en)

	return (
		<div className="space-y-4">
			{/* Label */}
			<div className="flex items-center justify-between gap-2">
				<span className="text-sm font-medium flex items-center gap-2">
					🧵 {t('product.select')}{isMultiFabric ? 's' : ''}
				</span>
				{isMultiFabric && (
					<span className="text-xs text-muted-foreground">
						{selectedFabrics.length} / {maxFabrics}
					</span>
				)}
			</div>

			{/* Selected fabrics */}
			{selectedFabrics.length > 0 && (
				<div className="space-y-1.5">
					{isMultiFabric && (
						<p className="text-xs text-muted-foreground">{t('product.fabricsSelected')}</p>
					)}
					<div className="flex flex-wrap gap-1.5">
						{selectedFabrics.map((fabric) => (
							<span
								key={fabric.id}
								className="inline-flex items-center gap-1 text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded-full"
							>
								{fabricName(fabric)}
								<button
									type="button"
									onClick={() => removeFabric(fabric.id)}
									aria-label={`${t('product.removeFabric')}: ${fabricName(fabric)}`}
									className="cursor-pointer hover:text-destructive transition-colors"
								>
									<X className="h-3 w-3" />
								</button>
							</span>
						))}
					</div>
					{isMultiFabric && selectedFabrics.length === maxFabrics && (
						<p className="text-xs text-muted-foreground">
							{t('product.fabricsLimit').replace('{max}', String(maxFabrics))}
						</p>
					)}
				</div>
			)}

			{/* Gender Toggle */}
			<div className="flex gap-2">
				<button
					onClick={() => setSelectedGender(selectedGender === 'boy' ? null : 'boy')}
					className={
						`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
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
						`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
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
						className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
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
				handleSelectFromZoom={handleSelectedFabric}
				zoomIndex={zoomIndex}
				setZoomIndex={setZoomIndex}
				setZoomFabric={setZoomFabric}
				maxFabrics={maxFabrics}
			/>
		</div>
	)
}
