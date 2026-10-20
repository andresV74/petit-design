export const COLLECTIONS_MENU_QUERY = `
  query CollectionsMenu($handle: String!) {
    menu(handle: $handle) {
      id
      title
      items {
        id
        title
        resource {
          ... on Collection {
            id
            handle
          }
        }
        items {
          id
          title
          resource {
            ... on Collection {
              id
              handle
            }
          }
          items {
            id
            title
            resource {
              ... on Collection {
                id
                handle
              }
            }
          }
        }
      }
    }
  }
`
