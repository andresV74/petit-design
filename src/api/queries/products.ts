export const PRODUCTS_LIST_QUERY = `
  query ProductsList($first: Int = 1) {
    products(first: $first) {
      edges {
        node {
          id
          title
          handle
          media(first: 15) {
            edges {
              node {
                ... on MediaImage {
                  image {
                    url
                    altText
                  }
                }
              }
            }
          }
          collections(first: 10) {
            edges {
              node {
                id
                title
                description
              }
            }
          }
          nameEn: metafield(key: "name_en", namespace: "custom") {
            value
          }
          longDescription: metafield(key: "long_description_en", namespace: "custom") {
            value
          }
          isFeatured: metafield(key: "is_featured", namespace: "custom") {
            value
          }
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
`
