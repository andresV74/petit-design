import { useState} from 'react'
import { useLanguage } from '@/lib/i18n.tsx'
import type { ProductImage } from '@/types/generalTypes.ts'

interface ProductPreviewProps {
  images: ProductImage[]
}

export function ProductPreview({
  images
}: ProductPreviewProps) {
  const { language } = useLanguage()
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <>
      {/* Main Image */}
      <figure className="relative aspect-square overflow-hidden rounded-2xl bg-muted">
        <img
          src={images?.[selectedImage]?.imageUrl}
          alt={language === 'es'
            ? images?.[selectedImage]?.altText_es ?? ''
            : images?.[selectedImage]?.altText_en ?? ''
          }
          className="h-full w-full object-cover"
        />
      </figure>

      {/* Thumbnails */}
      {images?.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={image.id}
              onClick={() => setSelectedImage(index)}
              className={
                `shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors cursor-pointer
                ${selectedImage === index ? 'border-primary' : 'border-transparent hover:border-primary/50'}`

              }
            >
              <img
                src={image.imageUrl}
                alt={language === 'es'
                  ? image.altText_es ?? ''
                  : image.altText_en ?? ''
                }
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </>
  )
}
