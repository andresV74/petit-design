import { create } from 'zustand'
import type { Fabric } from '@/components/products/FabricSelector.tsx'

interface Customizables {
	name?: string
	color?: string
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
	removeCustom: () => void
}

export const useProductCustomsStore = create<CustomsState>((set) => ({
	customs: null,

	setCustom: (newCustom: Customizables) => set({ customs: newCustom }),

	removeCustom: () => set({ customs: null })
}))
