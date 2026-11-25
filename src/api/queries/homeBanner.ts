export const HOME_BANNER_QUERY = `
query ObtenerBannerPrincipal {
  metaobjects(type: "banner_principal", first: 10) {
    nodes {
      id
      handle
      titulo: field(key: "titulo_de_la_imagen") {
        value
      }
      imagen: field(key: "imagen") {
        reference {
          ... on MediaImage {
            image {
              url
              altText
              width
              height
            }
          }
        }
      }
    }
  }
}`
