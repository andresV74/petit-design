export const BOY_FABRICS_LIST_QUERY = `
query BoyFabricsList($fabricsFirst: Int = 60) {
  metaobjects(type: "boyFabrics", first: $fabricsFirst) {
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