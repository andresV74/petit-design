import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface CartState {
	cartId: string | null
	totalQuantity: number | null
	setCartId: (id: string) => void
	setTotalQuantity: (qty: number) => void
}

export const useCartStore = create<CartState>()(
	persist (
		(set) => ({
			cartId: null,
			totalQuantity: null,
			setCartId: (id) => set({ cartId: id }),
			setTotalQuantity: (qty) => set({ totalQuantity: qty })
		}),
		{
			name: 'cart-storage'
		}
	)
)
