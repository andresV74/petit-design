export const PRODUCT_PAGE_QUERY = `
  query ProductPageQuery(
    $handle: String!
  ) {
    product(handle: $handle) {
      id
      title
      description
      descriptionHtml
      availableForSale

      featuredImage {
        url
        altText
      }
      images(first: 15) {
        edges {
          node {
            id
            url
            altText
          }
        }
      }

      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }

      options {
        id
        name
        values
      }

      variants(first: 20) {
        edges {
          node {
            id
            title
            availableForSale
            quantityAvailable
            price {
              amount
              currencyCode
            }
            selectedOptions {
              name
              value
            }
          }
        }
      }

      collections(first: 1) {
        edges {
          node {
            id
            handle
            title
            description
            image {
              altText
              url
            }
          }
        }
      }

      productionDays: metafield(namespace: "custom", key: "production_days") {
        value
      }
      useFabrics: metafield(namespace: "custom", key: "use_fabrics") {
        value
      }
      longDescriptionEn: metafield(namespace: "custom", key: "long_description_en") {
        value
      }
      isFeatured: metafield(namespace: "custom", key: "is_featured") {
        value
      }
      nameEn: metafield(namespace: "custom", key: "name_en") {
        value
      }
      shortDescriptionEs: metafield(namespace: "custom", key: "shortdescription_es") {
        value
      }
      shortDescriptionEn: metafield(namespace: "custom", key: "shortdescription_en") {
        value
      }
      isCharacterPriced: metafield(namespace: "custom", key: "is_character_priced") {
        value
      }
      color: metafield(namespace: "custom", key: "color") {
        references(first: 10) {
          nodes {
            __typename
            ... on Metaobject {
              id
              type
              fields {
                key
                value
              }
            }
          }
        }
      }
      girlFabrics: metafield(namespace: "custom", key: "girl_fabrics") {
        references(first: 60) {
          nodes {
            __typename
            ... on Metaobject {
              id
              type
              fields {
                key
                value
                reference {
                  __typename
                  ... on MediaImage {
                    image {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
      boyFabrics: metafield(namespace: "custom", key: "boy_fabrics") {
        references(first: 60) {
          nodes {
            __typename
            ... on Metaobject {
              id
              type
              fields {
                key
                value
                reference {
                  __typename
                  ... on MediaImage {
                    image {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
      whatsAppButton: metafield(namespace: "custom", key: "whatsApp_button") {
        value
      }
    }
  }
`