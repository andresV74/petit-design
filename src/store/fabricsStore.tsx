import { create } from 'zustand'
import type { Fabric } from '@/components/products/FabricSelector.tsx'

interface FabricState {
	fabric: Fabric | null
	setFabric: (fabric: Fabric) => void
	clearFabric: () => void
}

export const useFabricsStore = create<FabricState>((set) => ({
	fabric: null,

	setFabric: (newFabric: Fabric) => set({ fabric: newFabric }),

	clearFabric: () => set({ fabric: null })
}))