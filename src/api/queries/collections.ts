export const COLLECTIONS_LIST_QUERY = `
  query CollectionsList($first: Int = 3) {
    collections(first: $first) {
      edges {
        node {
          id
          title
          description
          handle
          image {
            altText
            url
          }
        }
      }
    }
  }
`
