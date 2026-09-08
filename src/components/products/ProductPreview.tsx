import { useState} from 'react'
import type { ProductImage } from '@/types/generalTypes.ts'

interface ProductPreviewProps {
  images: ProductImage[] | undefined
}

export function ProductPreview({
  images
}: ProductPreviewProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <>
      {/* Main Image */}
      <figure className="relative aspect-square overflow-hidden rounded-2xl bg-muted">
        <img
          src={images?.[selectedImage]?.node?.url || ''}
          alt={images?.[selectedImage]?.node?.altText || ''}
          className="h-full w-full object-cover"
        />
      </figure>
      {/* Thumbnails */}
      {images && images?.length > 1 && (
        <div className="flex gap-2 overflow-x-auto max-w-[calc(100vw-32px)] md:max-w-none pb-3">
          {images.map((image, index) => (
            <button
              key={image.node.url}
              onClick={() => setSelectedImage(index)}
              className={
                `shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors cursor-pointer
                ${selectedImage === index ? 'border-primary' : 'border-transparent hover:border-primary/50'}`

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
