import { shopifyClient } from './shopifyClient'
import { useCartStore } from '@/store/cartStore'

const CART_ID_KEY = 'shopify_cart_id';

const CART_CREATE_MUTATION = `
  mutation CartCreate($lines: [CartLineInput!]) {
    cartCreate(input: { lines: $lines }) {
      cart { id checkoutUrl totalQuantity }
      userErrors { field message }
    }
  }
`

const CART_LINES_ADD_WITH_ATTRIBUTES = `
  mutation CartLinesAddWithAttributes($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        id
        totalQuantity
        checkoutUrl
        lines(first: 10) {
          edges {
            node {
              id
              quantity
              attributes {
                key
                value
              }
              merchandise {
                __typename
                ... on ProductVariant {
                  id
                  title
                  product { title }
                }
              }
            }
          }
        }
        cost {
          subtotalAmount { amount currencyCode }
          totalAmount { amount currencyCode }
        }
      }
      userErrors { field message }
    }
  }
`

export async function addToCart(
  variantId: string,
  quantity: number,
  customAttributes?: Record<string, string>
) {
  const attributesArray = customAttributes
    ? Object.entries(customAttributes).map(([key, value]) => ({ key, value }))
    : []

  const initialLine = { merchandiseId: variantId, quantity, attributes: attributesArray }

  const existingId = localStorage.getItem(CART_ID_KEY)

  let cartId = existingId
  if (!cartId) {
    const resCreate = await shopifyClient.request(CART_CREATE_MUTATION, {
      variables: { lines: [initialLine] },
    });
    const createdCart = resCreate.data.cartCreate.cart
    if (!createdCart?.id) throw new Error('No se pudo crear el carrito');
    cartId = createdCart.id;
    localStorage.setItem('shopify_cart_id', cartId!);
    useCartStore.getState().setCartId(cartId!);
    useCartStore.getState().setTotalQuantity(createdCart.totalQuantity || 0);
    return createdCart;
  }

  const res = await shopifyClient.request(CART_LINES_ADD_WITH_ATTRIBUTES, {
    variables: { cartId, lines: [initialLine] },
  });

  const cart = res.data.cartLinesAdd?.cart || null;
  if (cart?.id) {
    localStorage.setItem('shopify_cart_id', cart.id);
    useCartStore.getState().setCartId(cart.id);
    useCartStore.getState().setTotalQuantity(cart.totalQuantity || 0);
  }

  return cart
}
