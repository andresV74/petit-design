export const PRODUCTS_LIST_QUERY = `
  query ProductsList($first: Int = 1) {
    products(first: $first) {
      edges {
        node {
          id
          title
          description
          handle
          featuredImage {
            url
            altText
          }
          media(first: 15) {
            edges {
              node {
                ... on MediaImage {
                  image {
                    id
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
                handle
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
          useFabrics: metafield(key: "use_fabrics", namespace: "custom") {
            value
          }
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          variants(first: 30) {
            edges {
              node {
                id
                title
                selectedOptions {
                  name
                  value
                }
                price {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    }
  }
`
