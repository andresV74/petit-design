import { useState, useRef } from 'react'
import { Baby, ChevronLeft, ChevronRight, MessageCircle, X } from 'lucide-react'
import { FabricButton } from './FabricButton.tsx'
import { useLanguage } from '@/lib/i18n'
import { getWhatsAppUrl } from '@/lib/whatsapp'
import { Button } from '@/components/ui/button'

import boyFabrics from '@/data/boyFabrics.json'
import girlFabrics from '@/data/girlFabrics.json'

export interface Fabric {
  id: string
  slug: string
  name: string
  nameOriginal: string
  nameNormalized: string
  image: string
  gender: 'boy' | 'girl'
  page: number
}

interface FabricSelectorProps {
	selectedFabric: string
	onFabricSelect: (fabricId: string) => void
	initialGender?: 'boy' | 'girl' | null
}

export function FabricSelector({
	selectedFabric,
	onFabricSelect,
	initialGender = null,
}: FabricSelectorProps) {
	const { language } = useLanguage()
	const [selectedGender, setSelectedGender] = useState<'boy' | 'girl' | null>(initialGender)
	const [zoomFabric, setZoomFabric] = useState<Fabric | null>(null)
	const [zoomIndex, setZoomIndex] = useState(0)
	const dialogRef = useRef<HTMLDialogElement | null>(null)

	const currentFabrics = selectedGender === 'boy'
		? boyFabrics
		: selectedGender === 'girl'
			? girlFabrics
			: []


	/**
	 * Opens the Dialog modal with the chosen fabric from the fabric grid
	 *
	 * @param fabric the chosen fabric
	 * @param index the index of the fabric form the list
	 * @param e the click event of the button
	 */
	const handleFabricZoom = (fabric: Fabric, index: number, e: React.MouseEvent) => {
		e.stopPropagation()
		setZoomFabric(fabric)
		setZoomIndex(index)
		dialogRef.current?.showModal()
	}

	/**
	 * Handles Dialog fabrics navigation
	 *
	 * @param direction forward and backward dialog navigation
	 */
	const handleZoomNavigate = (direction: 'prev' | 'next') => {
		if (direction === 'prev') {
			const newIndex = zoomIndex === 0 ? currentFabrics.length - 1 : zoomIndex - 1
			setZoomIndex(newIndex)
			setZoomFabric(currentFabrics[newIndex] as Fabric)
		} else {
			const newIndex = zoomIndex === currentFabrics.length - 1 ? 0 : zoomIndex + 1
			setZoomIndex(newIndex)
			setZoomFabric(currentFabrics[newIndex] as Fabric)
		}
	}

	/**
	 * Stores the fabric chosen from the dialog modal and closes the modal
	 */
	const handleSelectFromZoom = () => {
		if (zoomFabric) {
			onFabricSelect(zoomFabric.id)
			setZoomFabric(null)
			dialogRef.current?.close()
		}
	}

	const handleClearSelection = () => {
		onFabricSelect('')
		dialogRef.current?.close()
	}

	/**
	 * Closes the dialog modal
	 */
	const handleDialogClose = () => {
		dialogRef.current?.close()
	}

	// Find selected fabric name
	const selectedFabricObj = [...boyFabrics, ...girlFabrics].find(f => f.id === selectedFabric)

	return (
		<div className="space-y-4">
			{/* Label */}
			<div className="flex items-center justify-between">
				<span className="text-sm font-medium flex items-center gap-2">
					🧵 {language === 'es' ? 'Selecciona una tela' : 'Select a fabric'}
				</span>
				{selectedFabricObj && (
					<span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded-full">
						{selectedFabricObj.name}
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
					<span className="font-medium">{language === 'es' ? 'Niño' : 'Boy'}</span>
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
					<span className="font-medium">{language === 'es' ? 'Niña' : 'Girl'}</span>
					<span className="text-xs text-muted-foreground">({girlFabrics.length})</span>
				</button>
			</div>

			{/* Fabric Grid */}
			{selectedGender && currentFabrics.length > 0 && (
				<div className="space-y-3 animate-fade-in-from-bottom">
					<div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-3 p-3 bg-background rounded-xl border max-h-70 overflow-y-auto">
						{currentFabrics.map((fabric, index) => (
							<FabricButton key={index} fabric={fabric as Fabric} index={index} selectedFabric={selectedFabric} handleFabricZoom={handleFabricZoom} />
						))}
					</div>

					{/* WhatsApp CTA */}
					<a
						href={getWhatsAppUrl({ message: '¡Hola! Me gustaría ver más diseños de telas', source: 'Producto - Telas' })}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors"
					>
						<MessageCircle className="h-4 w-4 text-mint" />
						{language === 'es'
							? '¿No encuentras la tela perfecta? ¡Tenemos más opciones!'
							: "Can't find the perfect fabric? We have more options!"}
					</a>
				</div>
			)}

			{!selectedGender && (
				<p className="text-sm text-muted-foreground text-center py-4">
					{language === 'es'
						? '👆 Selecciona niño o niña para ver las telas disponibles'
						: '👆 Select boy or girl to see available fabrics'}
				</p>
			)}

			{/* Zoom Modal */}
			<dialog
				ref={dialogRef}
				className="sm:max-w-md p-0 overflow-hidden fixed top-0 right-0 bottom-0 left-0 z-20 m-auto rounded-xl backdrop:bg-foreground/80 "
			>
				{zoomFabric && (
					<div className="p-6 relative">
						{/* Close button */}
						<Button
							className="absolute right-3 top-3 z-10 p-1 bg-white opacity-85 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
							onClick={handleDialogClose}
						>
							<X />
						</Button>

						{/* Navigation arrows */}
						{currentFabrics.length > 1 && (
							<>
								<button
									onClick={() => handleZoomNavigate('prev')}
									className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 shadow-lg hover:bg-white transition-colors z-10"
								>
									<ChevronLeft className="h-5 w-5" />
								</button>
								<button
									onClick={() => handleZoomNavigate('next')}
									className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 shadow-lg hover:bg-white transition-colors z-10"
								>
									<ChevronRight className="h-5 w-5" />
								</button>
							</>
						)}

						{/* Large fabric preview */}
						<div className="relative aspect-square rounded-2xl overflow-hidden mb-4 shadow-lg">
							<img
								src={zoomFabric.image}
								alt={zoomFabric.name}
								className="w-full h-full object-cover"
							/>
						</div>

						{/* Fabric info */}
						<div className="text-center mb-4">
							<h3 className="font-display text-xl font-semibold">
								{zoomFabric.name}
							</h3>
							<p className="text-sm text-muted-foreground mt-1">
								{zoomIndex + 1} / {currentFabrics.length}
							</p>
						</div>

						{/* Action button */}
						<Button
							className="w-full gap-2 h-11 rounded-md px-8 bg-primary text-primary-foreground"
							onClick={handleSelectFromZoom}
						>
							{language === 'es' ? 'Seleccionar esta tela' : 'Select this fabric'}
						</Button>

						{/* Clears fabric button */}
						{selectedFabric === zoomFabric.id && (
							<Button
								className="w-full gap-2 h-11 rounded-md mt-4 px-8 bg-primary text-primary-foreground"
								onClick={handleClearSelection}
							>
								{language === 'es' ? 'Anular selección de tela' : 'Clears fabric selection'}
							</Button>
						)}
					</div>
				)}
			</dialog>
		</div>
	)
}
