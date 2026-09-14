import { create } from 'zustand'

interface CartState {
	cartId: string | null
	totalQuantity: number | null
	setCartId: (id: string) => void
	setTotalQuantity: (qty: number) => void
}

export const useCartStore = create<CartState>((set) => ({
	cartId: null,
	totalQuantity: null,
	setCartId: (id) => set({ cartId: id }),
	setTotalQuantity: (qty) => set({ totalQuantity: qty })
}))
