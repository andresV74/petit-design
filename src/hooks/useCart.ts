import { useEffect, useState } from 'react'
import {
  fetchCart,
  getStoredCartId,
  updateCartLineQuantity,
  removeCartLine,
} from '../api/cartApi'
import { useCartStore } from '@/store/cartStore.tsx'

type CartProps =  {
	checkoutUrl: string
	cost: {
		subtotalAmount: {
			amount: string
			currencyCode: string
		}
		totalAmount: {
			amount: string
			currencyCode: string
		}
	}
	id: string
	lines: {
		edges: [
			{
				node: {
					attributes: [
						{
							key: string,
							value: string
						}
					]
					cost: {
						subtotalAmount: {
							amount: string
							currencyCode: string
						}
					}
					id: string
					merchandise: {
						id: string
						price: {
							amount: string
							currencyCode: string
						}
						product: {
							featuredImage: {
								altText: string
								url: string
							}
							handle: string
							title: string
						}
						title: string
						__typename: string
					}
					quantity: number
				}
			}
		]
	}
	totalQuantity: number
}

export function useCart() {
  const [cart, setCart] = useState<CartProps | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<unknown>(null)

	const setCartId = useCartStore((state) => state.setCartId)
	const setTotalQuantity = useCartStore((state) => state.setTotalQuantity)

  useEffect(() => {
		const cartId = getStoredCartId()
    let cancelled = false

    if (!cartId) {
      queueMicrotask(() => {
        if (cancelled) return
        setCart(null)
        setCartId('')
        setTotalQuantity(0)
        setLoading(false)
      })
      return () => {
        cancelled = true
      }
    }

    const validCartId = cartId

    async function run() {
      setLoading(true)
      try {
        const c = await fetchCart(validCartId)
        if (!cancelled) {
          setCart(c)
          setCartId(c?.id ?? null)
          setTotalQuantity(c?.totalQuantity ?? 0)
        }
      } catch (err) {
        if (!cancelled) setError(err)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    run()
    return () => {
      cancelled = true
    }
  }, [setCartId, setTotalQuantity])

  async function changeQuantity(lineId: string, quantity: number) {
    if (!cart?.id) return
    const result = await updateCartLineQuantity(cart.id, lineId, quantity)
		if (result?.cart) {
      setCart(result.cart);
      setTotalQuantity(result.cart.totalQuantity ?? 0);
    }
  }

  async function removeLine(lineId: string) {
    if (!cart?.id) return
    const result = await removeCartLine(cart.id, lineId)
    if (result?.cart) {
      setCart(result.cart)
      setTotalQuantity(result.cart.totalQuantity ?? 0)
    }
  }

  return { cart, loading, error, changeQuantity, removeLine }
}
