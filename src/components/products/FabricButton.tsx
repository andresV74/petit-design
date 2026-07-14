import { ZoomIn } from 'lucide-react'
import { useFabricsStore } from '@/store/fabricsStore.tsx'
import type { Fabric } from './FabricSelector.tsx'
import type { MouseEvent } from 'react'

interface FabricButtonProps {
	fabric: Fabric
	index: number
	handleFabricZoom: (fabric: Fabric, index: number, e: MouseEvent<HTMLButtonElement>) => void
}

export function FabricButton({fabric, index, handleFabricZoom}: FabricButtonProps) {
	const selectedFabric = useFabricsStore((state) => state.fabric)

	return (
		<button
			key={fabric.id}
			onClick={(e) => handleFabricZoom(fabric, index, e)}
			className={
				`group relative aspect-square rounded-xl overflow-hidden border-2 transition-all
				${selectedFabric?.id === fabric.id
					? "border-primary ring-2 ring-primary/30 scale-105"
					: "border-transparent hover:border-primary/50 hover:scale-105"}`
			}
		>
			<img
				src={fabric.image}
				alt={fabric.name_es}
				className="w-full h-full object-cover"
				loading="lazy"
			/>
			{/* Zoom button on hover */}
			<div
				className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
			>
				<ZoomIn className="h-5 w-5 text-white" />
			</div>
			{/* Selection indicator */}
			{selectedFabric?.id === fabric.id && (
				<div className="absolute top-1 right-1 w-5 h-5 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs">
					✓
				</div>
			)}
		</button>
	)
}