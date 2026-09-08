export const GIRL_FABRICS_LIST_QUERY = `
query GirlFabricsList($fabricsFirst: Int = 60) {
  metaobjects(type: "girl_fabrics", first: $fabricsFirst) {
    nodes {
      id
      fields {
        key
        value

        reference {
          __typename
          ... on MediaImage {
            image {
              url
              altText
            }
          }
        }

        references(first: $fabricsFirst) {
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
											altText
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}`;