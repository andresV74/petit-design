export const CART_QUERY = `
  query CartQuery($cartId: ID!) {
    cart(id: $cartId) {
      id
      checkoutUrl
      totalQuantity
      lines(first: 50) {
        edges {
          node {
            id
            quantity
            attributes { key value }
            cost { subtotalAmount { amount currencyCode } }
            merchandise {
              __typename
              ... on ProductVariant {
                id
                title
                product {
                  title
                  handle
                  featuredImage { url altText }
                }
                price { amount currencyCode }
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
  }
`

export const CART_LINES_UPDATE_MUTATION = `
  mutation CartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        id
        checkoutUrl
        totalQuantity
        cost {
          subtotalAmount { amount currencyCode }
          totalAmount { amount currencyCode }
        }
        lines(first: 50) {
          edges {
            node {
              id
              quantity
              attributes { key value }
              merchandise {
                __typename
                ... on ProductVariant {
                  id
                  title
                  product {
                    title
                    handle
                    featuredImage { url altText }
                  }
                  price { amount currencyCode }
                }
              }
            }
          }
        }
      }
      userErrors { field message }
    }
  }
`

export const CART_LINES_REMOVE_MUTATION = `
  mutation CartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        id
        checkoutUrl
        totalQuantity
        cost {
          subtotalAmount { amount currencyCode }
          totalAmount { amount currencyCode }
        }
        lines(first: 50) {
          edges {
            node {
              id
              quantity
              attributes { key value }
              merchandise {
                __typename
                ... on ProductVariant {
                  id
                  title
                  product {
                    title
                    handle
                    featuredImage { url altText }
                  }
                  price { amount currencyCode }
                }
              }
            }
          }
        }
      }
      userErrors { field message }
    }
  }
`
