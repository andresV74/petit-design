import { shopifyClient } from './shopifyClient';

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

export async function getOrCreateCart(
  line?: { merchandiseId: string; quantity: number; attributes?: { key: string; value: string }[] }
) {
  const cartId = localStorage.getItem(CART_ID_KEY)

  if (!cartId) {
    const lines = line ? [line] : undefined

    const res = await shopifyClient.request(CART_CREATE_MUTATION, {
      variables: { lines },
    })

    const cart = res.data.cartCreate.cart
    if (cart?.id) {
      localStorage.setItem(CART_ID_KEY, cart.id)
      return cart
    }
    throw new Error('No se pudo crear el carrito')
  }

  return { id: cartId }
}

export async function addToCart(
  variantId: string,
  quantity: number,
  customAttributes?: Record<string, string>
) {
  const attributesArray = customAttributes
    ? Object.entries(customAttributes).map(([key, value]) => ({ key, value }))
    : []

  const initialLine = { merchandiseId: variantId, quantity, attributes: attributesArray }

  const existing = await getOrCreateCart(initialLine)
  const cartId = existing.id

  const res = await shopifyClient.request(CART_LINES_ADD_WITH_ATTRIBUTES, {
    variables: {
      cartId,
      lines: [initialLine],
    },
  })

  const cart = res.data.cartLinesAdd?.cart || null

  if (cart?.id) {
    localStorage.setItem(CART_ID_KEY, cart.id)
  }

  return cart
}
