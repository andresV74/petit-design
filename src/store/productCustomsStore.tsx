import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Fabric } from '@/components/products/FabricSelector.tsx'
import type { SingleColorProps } from '@/components/products/Colors'

interface Customizables {
	name?: string
	color?: SingleColorProps
	font?: string
	fabric?: Fabric | null
	observations?: string
}

interface CustomsState {
	customs: Customizables | null
	setCustom: (custom: Customizables) => void
	removeCustom: (property: keyof Customizables) => void
}

export const useProductCustomsStore = create<CustomsState>()(
	persist(
		(set) => ({
			customs: null,

			setCustom: (newCustom: Customizables) =>
				set((state) => ({
					customs: state.customs ? { ...state.customs, ...newCustom } : newCustom,
				})),

			removeCustom: (property: keyof Customizables) =>
				set((state) => {
					if (!state.customs) return { customs: null }

					const { [property]: _removed, ...remainingCustoms } = state.customs
					void _removed
					return { customs: remainingCustoms }
				}),
		}),
		{
			name: 'customs-storage',
		}
	)
)
