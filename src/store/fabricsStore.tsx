import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Fabric } from '@/components/products/FabricSelector.tsx'

interface FabricState {
	fabric: Fabric | null
	fabrics: Fabric[]
	setFabric: (fabric: Fabric) => void
	toggleFabric: (fabric: Fabric, maxFabrics?: number) => void
	removeFabric: (fabricId: string) => void
	clearFabric: () => void
}

export const useFabricsStore = create<FabricState>()(
	persist(
		(set): FabricState => ({
			fabric: null,
			fabrics: [],

			/** Single selection: replaces the current selection (home, gallery, un fabric) */
			setFabric: (newFabric: Fabric) => set({ fabric: newFabric, fabrics: [newFabric] }),

			/** Multi selection: adds or removes a fabric, respecting the limit */
			toggleFabric: (newFabric: Fabric, maxFabrics = 1) =>
				set((state) => {
					const isSelected = state.fabrics.some((fabric) => fabric.id === newFabric.id)

					const fabrics = isSelected
						? state.fabrics.filter((fabric) => fabric.id !== newFabric.id)
						: state.fabrics.length >= maxFabrics
							? state.fabrics
							: [...state.fabrics, newFabric]

					return { fabrics, fabric: fabrics[0] ?? null }
				}),

			removeFabric: (fabricId: string) =>
				set((state) => {
					const fabrics = state.fabrics.filter((fabric) => fabric.id !== fabricId)

					return { fabrics, fabric: fabrics[0] ?? null }
				}),

			clearFabric: () => set({ fabric: null, fabrics: [] })
		}),
		{
			name: 'fabric-storage',
			version: 2,
			// v1 stored a single `fabric`; move it into the new `fabrics` array
			migrate: (persistedState) => {
				const persisted = persistedState as { fabric?: Fabric | null } | undefined
				const fabric = persisted?.fabric ?? null

				return { fabric, fabrics: fabric ? [fabric] : [] }
			},
			partialize: (state) => ({ fabric: state.fabric, fabrics: state.fabrics })
		}
	)
)
