import { useState } from 'react'
import { useLanguage } from '@/lib/i18n.tsx'
import type { ProductImage } from '@/types/generalTypes.ts'

interface ProductPreviewProps {
  images: ProductImage[] | undefined
  variantImageUrl?: string
  variantImageAlt?: string
  isFeatured: boolean
}

export function ProductPreview({
  images,
  variantImageUrl,
  variantImageAlt,
  isFeatured
}: ProductPreviewProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [dismissedVariantImageUrl, setDismissedVariantImageUrl] = useState<string | null>(null)
	const { t } = useLanguage()

  const showingVariantImage =
    Boolean(variantImageUrl) && dismissedVariantImageUrl !== variantImageUrl

  const galleryImage = images?.[selectedImage]?.node
  const mainImageUrl = showingVariantImage ? variantImageUrl : galleryImage?.url || ''
  const mainImageAlt = showingVariantImage ? variantImageAlt || '' : galleryImage?.altText || ''

  const handleSelectImage = (index: number) => {
    setSelectedImage(index)
    if (variantImageUrl) setDismissedVariantImageUrl(variantImageUrl)
  }

  return (
    <>
      {/* Main Image */}
      <figure className="relative aspect-square overflow-hidden rounded-2xl bg-muted mb-2">
        {
          isFeatured && (
					<div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-accent text-foreground text-xs">
						{t('products.singleFeatured')}
					</div>)
        }
        <img
          src={mainImageUrl}
          alt={mainImageAlt}
          className="h-full w-full object-cover"
        />
      </figure>
      {/* Thumbnails */}
      {images && images?.length > 1 && (
        <div className="flex gap-2 overflow-x-auto max-w-[calc(100vw-32px)] md:max-w-none py-3">
          {images.map((image, index) => (
            <button
              key={image.node.url}
              onClick={() => handleSelectImage(index)}
              className={
                `shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0
                ${selectedImage === index && !showingVariantImage ? 'border-primary' : 'border-transparent hover:border-primary/50'}`

              }
            >
              <img
                src={image.node.url}
                alt={image.node.altText}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </>
  )
}
