import { create } from 'zustand'
import type { Fabric } from '@/components/products/FabricSelector.tsx'
import type { SingleColorProps } from '@/components/products/Colors'

interface Customizables {
	name?: string
	color?: SingleColorProps
	font?: string
	fabric?: Fabric | null
	observations?: string
	cribSize?: 'Cuna Estándar' | 'Cama Cuna' | 'Cama Monteros'
	bumpers?:
		'Clásico bordado — delicado y elegante' |
		'Cabecero bordado — detalle focal en la cabeza' |
		'Estampado clásico — más fresco y decorativo' |
		'Con apliques — mayor volumen y textura' |
		'Premium con boleros y alforzas — acabado más elaborado'
}

interface CustomsState {
	customs: Customizables | null
	setCustom: (custom: Customizables) => void
	removeCustom: (property: keyof Customizables) => void
}

export const useProductCustomsStore = create<CustomsState>((set) => ({
	customs: null,

	setCustom: (newCustom: Customizables) =>
		set((state) => ({
				customs: state.customs ? { ...state.customs, ...newCustom } : newCustom,
			})
		),

	removeCustom: (property: keyof Customizables) =>
		set((state) => {
			if (!state.customs) return { customs: null }

			const { [property]: _removed, ...remainingCustoms } = state.customs
			void _removed
			return { customs: remainingCustoms }
		})
}))
