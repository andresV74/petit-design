import { shopifyClient } from './shopifyClient';
import {
  CART_QUERY,
  CART_LINES_UPDATE_MUTATION,
  CART_LINES_REMOVE_MUTATION,
} from './queries/cartQueries'

const CART_ID_KEY = 'shopify_cart_id'

export function getStoredCartId(): string | null {
  return localStorage.getItem(CART_ID_KEY)
}

export async function fetchCart(cartId: string) {
  const res = await shopifyClient.request(CART_QUERY, {
    variables: { cartId },
  });
  return res.data.cart
}

export async function updateCartLineQuantity(
  cartId: string,
  lineId: string,
  quantity: number
) {
  const res = await shopifyClient.request(CART_LINES_UPDATE_MUTATION, {
    variables: { cartId, lines: [{ id: lineId, quantity }] },
  })
  return res.data.cartLinesUpdate
}

export async function removeCartLine(cartId: string, lineId: string) {
  const res = await shopifyClient.request(CART_LINES_REMOVE_MUTATION, {
    variables: { cartId, lineIds: [lineId] },
  })
  return res.data.cartLinesRemove
}
