import { useMemo } from 'react'

interface ProductPreviewProps {
  imageUrl: string | undefined
  babyName: string
  embroideryColor: string
  fontType: string
  alt: string | undefined
}

const colorMap: Record<string, string> = {
  blanco: '#FFFFFF',
  beige: '#D4C4B0',
  rosa_claro: '#E8B4B8',
  verde_salvia: '#7A9A7A',
  azul_cielo: '#7EB6D8',
  gris_perla: '#A8A8A8',
}

// Font mapping for embroidery fonts
const fontMap: Record<string, string> = {
  great_vibes: '"Great Vibes", cursive',
  alex_brush: '"Alex Brush", cursive',
  satisfy: '"Satisfy", cursive',
  pacifico: '"Pacifico", cursive',
  sacramento: '"Sacramento", cursive',
  // Legacy font mappings for backward compatibility
  script: '"Great Vibes", cursive',
  serif: '"Playfair Display", Georgia, serif',
  sans_serif: '"Lato", Arial, sans-serif',
  cursiva: '"Dancing Script", cursive',
}

export function ProductPreview({
  imageUrl,
  babyName,
  embroideryColor,
  fontType,
  alt
}: ProductPreviewProps) {
  const textColor = useMemo(() => colorMap[embroideryColor] || '#FFFFFF', [embroideryColor])
  const fontFamily = useMemo(() => fontMap[fontType] || fontMap.script, [fontType])
  const displayName = babyName.trim() || ''

  // Calculate text shadow for embroidery effect based on color
  const textShadow = useMemo(() => {
    const isLight = ['blanco', 'beige'].includes(embroideryColor)
    if (isLight) {
      return `
        1px 1px 0 rgba(0,0,0,0.2),
        -1px -1px 0 rgba(0,0,0,0.1),
        2px 2px 4px rgba(0,0,0,0.15)
      `
    }
    return `
      1px 1px 0 rgba(255,255,255,0.3),
      -1px -1px 0 rgba(0,0,0,0.2),
      2px 2px 4px rgba(0,0,0,0.2)
    `
  }, [embroideryColor])

  return (
    <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted">
      {/* Product Image */}
      <img
        src={imageUrl}
        alt={alt}
        className="h-full w-full object-cover"
      />

      {/* Name Overlay - positioned in bottom third of image */}
      {displayName && (
        <div
          className="absolute left-0 right-0 flex items-center justify-center pointer-events-none"
          style={{ bottom: '15%', top: 'auto' }}
        >
          <div
            className="relative animate-fade-in px-4"
            style={{
              fontFamily,
              fontSize: 'clamp(1.5rem, 6vw, 3rem)',
              fontWeight: 400,
              letterSpacing: '0.04em',
            }}
          >
            {/* Main text with embroidery effect */}
            <span
              className="relative block text-center"
              style={{
                color: textColor,
                textShadow,
                WebkitTextStroke: ['blanco', 'beige'].includes(embroideryColor)
                  ? '0.5px rgba(150, 150, 150, 0.4)'
                  : 'none',
              }}
            >
              {displayName}
            </span>
          </div>
        </div>
      )}

      {/* Subtle vignette overlay for better text visibility */}
      {displayName && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.15) 0%, transparent 40%)',
          }}
        />
      )}
    </div>
  )
}
