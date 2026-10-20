export const COLLECTIONS_LIST_QUERY = `
  query CollectionsList($first: Int = 5) {
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
