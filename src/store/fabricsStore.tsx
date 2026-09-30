import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Fabric } from '@/components/products/FabricSelector.tsx'

interface FabricState {
	fabric: Fabric | null
	setFabric: (fabric: Fabric) => void
	clearFabric: () => void
}

export const useFabricsStore = create<FabricState>()(
	persist(
		(set): FabricState => ({
			fabric: null,

			setFabric: (newFabric: Fabric) => set({ fabric: newFabric }),

			clearFabric: () => set({ fabric: null })
		}),
		{
			name: 'fabric-storage'
		}
	)
)