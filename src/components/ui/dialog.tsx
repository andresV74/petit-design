import { forwardRef, useImperativeHandle, useRef } from 'react'
import { Button } from '@/components/ui/button.tsx'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'
import type { Fabric } from '@/components/products/FabricSelector.tsx'

export interface DialogRef {
	open: () => void
	close: () => void
}

export interface DialogProps {
	zoomFabric: Fabric | null
	currentFabrics: Fabric[]
	handleSelectFromZoom: () => void
	handleClearSelection: () => void
	selectedFabric: string
	zoomIndex: number
	setZoomIndex: (index: number) => void
	setZoomFabric: (fabric: Fabric | null) => void
}

export const Dialog = forwardRef<DialogRef, DialogProps>(
	({
		zoomFabric,
		currentFabrics,
		handleSelectFromZoom,
		handleClearSelection,
		selectedFabric,
		zoomIndex,
		setZoomIndex,
		setZoomFabric,
	}, ref) => {
	const { language } = useLanguage()
	const dialogRef = useRef<HTMLDialogElement | null>(null)

	useImperativeHandle(ref, () => ({
		open: () => dialogRef.current?.showModal(),
		close: () => dialogRef.current?.close(),
	}))

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


	return (
		<dialog
			ref={dialogRef}
			className="sm:max-w-md p-0 overflow-hidden fixed top-0 right-0 bottom-0 left-0 z-20 m-auto rounded-xl backdrop:bg-foreground/80 "
		>
			{zoomFabric && (
				<div className="p-6 relative">
					{/* Close button */}
					<Button
						className="absolute right-3 top-3 z-10 p-1 bg-white opacity-85 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
						onClick={() => dialogRef.current?.close()}
					>
						<X />
					</Button>

					{/* Navigation arrows */}
					{currentFabrics.length > 1 && (
						<>
							<button
								onClick={() => handleZoomNavigate('prev')}
								className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 shadow-lg hover:bg-white transition-colors z-10 cursor-pointer"
							>
								<ChevronLeft className="h-5 w-5" />
							</button>
							<button
								onClick={() => handleZoomNavigate('next')}
								className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 shadow-lg hover:bg-white transition-colors z-10 cursor-pointer"
							>
								<ChevronRight className="h-5 w-5" />
							</button>
						</>
					)}

					{/* Large fabric preview */}
					<div className="relative aspect-square rounded-2xl overflow-hidden mb-4 shadow-lg">
						<img
							src={zoomFabric.image}
							alt={language === 'es' ? zoomFabric.name_es : zoomFabric.name_en}
							className="w-full h-full object-cover"
						/>
					</div>

					{/* Fabric info */}
					<div className="text-center mb-4">
						<h3 className="font-display text-xl font-semibold">
							{language === 'es' ? zoomFabric.name_es : zoomFabric.name_en}
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
	)
})
