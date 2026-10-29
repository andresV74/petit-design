export interface ProductImage {
  node: {
    id: string
    url: string
    altText: string
  }
}

export interface Product {
  id: string
  title: string
  description: string
  descriptionHtml: string
  handle: string
  featuredImage?: {
    url: string
    altText?: string | null
  }
  media?: {
    edges: {
      node: {
        image: {
          id: string
          url: string
          altText: string
        }
      }
    }[]
  }
  images?: {
    edges: {
      node: {
        id: string
        url: string
        altText: string
      }
    }[]
  }
  collections: {
    edges: {
      node: {
        id: string
        handle: string
        title: string
        description:string
        image: {
          altText: string
          url: string
        }
      }
    }[]
  }
  options: {
    id: string
    name: string
    values: string[]
  }[]
  variants: {
    edges: {
      node: {
        id: string
        title: string
        image?: {
          url: string
        } | null
        selectedOptions: {
          name: string
          value: string
        }[]
        price: {
          amount: string
          currencyCode: string
        }
      }
    }[]
  }
  productionDays?: {
    value: string
  } | null
  useFabrics?: {
    value: string
  }
  whatsAppButton?: {
    value: string
  }
  fabricsQuantity?: {
    value: string
  }
  longDescriptionEn?: {
    value: string
  } | null
  isFeatured?: {
    value: string
  } | null
  nameEn?: {
    value: string
  } | null
  shortDescriptionEs?: {
    value: string
  } | null
  shortDescriptionEn?: {
    value: string
  } | null
  isCharacterPriced?: {
    value: string
  } | null
  color?: {
    references: {
      nodes: {
        __typename: string
        id: string
        type: string
        fields: {
          key: string
          value: string
        }[]
      }[]
    }
  } | null
  girlFabrics?: {
    references: {
      nodes: {
        __typename: string
        id: string
        type: string
        fields: {
          key: string
          value: string
          reference: {
            __typename: string
            image: {
              url: string
            }
          }
        }[]
      }[]
    }
  } | null
  boyFabrics?: {
    references: {
      nodes: {
        __typename: string
        id: string
        type: string
        fields: {
          key: string
          value: string
          reference: {
            __typename: string
            image: {
              url: string
            }
          }
        }[]
      }[]
    }
  } | null
  priceRange?: {
    minVariantPrice: {
      amount: string
      currencyCode: string
    }
  }
}

export interface ImportsListProps {
  first?: number;
}
