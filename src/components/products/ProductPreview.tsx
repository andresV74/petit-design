interface ProductPreviewProps {
  imageUrl: string | undefined
  alt: string | undefined
}

export function ProductPreview({
  imageUrl,
  alt
}: ProductPreviewProps) {
  return (
    <figure className="relative aspect-square overflow-hidden rounded-2xl bg-muted">
      <img
        src={imageUrl}
        alt={alt}
        className="h-full w-full object-cover"
      />
    </figure>
  )
}
