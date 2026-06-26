export interface Product {
  id: string
  name_es: string
  name_en: string
  slug: string
  shortDescription_es: string | null
  shortDescription_en: string | null
  longDescription_es: string | null
  longDescription_en: string | null
  price: number
  isFeatured: boolean
  images?: ProductImage[]
  category: string
  subcategory: string
}

export interface ProductImage {
  id: string
  imageUrl: string
  altText_es: string | null
  altText_en: string | null
  isPrimary: boolean
}
