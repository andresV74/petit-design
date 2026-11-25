export const HOME_BANNER_QUERY = `
query ObtenerBannerPrincipal {
  metaobjects(type: "banner_principal", first: 10) {
    nodes {
      id
      handle
      imagen: field(key: "imagen") {
        reference {
          ... on MediaImage {
            image {
              url
              width
              height
            }
          }
        }
      }
    }
  }
}`
