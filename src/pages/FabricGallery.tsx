import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, MessageCircle } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'
import { useFabrics } from '@/hooks/useFabrics'
import { getWhatsAppUrl } from '@/lib/whatsapp.ts'
import { trackWhatsAppClick } from '@/hooks/useMetaPixel.ts'
import { Dialog, type DialogRef } from '@/components/ui/dialog.tsx'
import { GIRL_FABRICS_LIST_QUERY } from '@/api/queries/girlFabrics.ts'
import { BOY_FABRICS_LIST_QUERY } from '@/api/queries/boyFabrics.ts'
import { useFabricsStore } from '@/store/fabricsStore.tsx'
import type { Fabric } from '@/components/products/FabricSelector.tsx'

interface FabricGalleryProps {
  first: number
  gender: 'boy' | 'girl'
}

export function FabricGallery({ first = 60, gender }: FabricGalleryProps) {
  const { t, language } = useLanguage()
  const { fabrics: girlFabricsFull, loading: girlLoading, error: girlError } = useFabrics(first, GIRL_FABRICS_LIST_QUERY)
  const { fabrics: boyFabricsFull, loading: boyLoading, error: boyError } = useFabrics(first, BOY_FABRICS_LIST_QUERY)
	const [zoomFabric, setZoomFabric] = useState<Fabric | null>(null)
	const [zoomIndex, setZoomIndex] = useState(0)
	const dialogRef = useRef<DialogRef | null>(null)
  const selectedFabric = useFabricsStore((state) => state.fabric)
  const setFabric = useFabricsStore((state) => state.setFabric)
  const girlFabrics = girlFabricsFull
    ?.map((fabric) => {
      const fields = fabric.fields ?? []

      const gender = fields.find((f) => f.key === 'gender')
      const nameEs = fields.find((f) => f.key === 'name_es')
      const nameEn = fields.find((f) => f.key === 'name_en')
      const imageField = fields.find((f => f.key === 'image'))

      const imageRef = imageField?.reference
      const imageUrl =
        imageRef?.__typename === 'MediaImage'
          ? imageRef.image.url
          : undefined

      return {
        id: fabric.id,
        gender: gender?.value,
        name_es: nameEs?.value,
        name_en: nameEn?.value,
        imageUrl: imageUrl,
      }
    })
  const boyFabrics = boyFabricsFull
    ?.map((fabric) => {
      const fields = fabric.fields ?? []

      const gender = fields.find((f) => f.key === 'gender')
      const nameEs = fields.find((f) => f.key === 'name_es')
      const nameEn = fields.find((f) => f.key === 'name_en')
      const imageField = fields.find((f => f.key === 'image'))

      const imageRef = imageField?.reference
      const imageUrl =
        imageRef?.__typename === 'MediaImage'
          ? imageRef.image.url
          : undefined

      return {
        id: fabric.id,
        gender: gender?.value,
        name_es: nameEs?.value,
        name_en: nameEn?.value,
        imageUrl: imageUrl,
      }
    })

	const fabrics: Fabric[] = (gender === 'boy'
		? boyFabrics
		: gender === 'girl'
			? girlFabrics
			: []) as unknown as Fabric[]

	const title = gender === 'boy' ? (t('fabricGallery.boysTitle')) : (t('fabricGallery.girlsTitle'))
  const subtitle = t('fabricGallery.subtitle')
  const fabricTitle = gender === 'boy' ? t('fabricGallery.boysTitle2') : t('fabricGallery.girlsTitle2')
  const fabricCanonical = `https://petitdesign.com.co/telas/${gender === 'boy' ? 'nino' : 'nina'}`

	/**
	 * Opens the Dialog modal with the chosen fabric from the fabric grid
	 *
	 * @param fabric the chosen fabric
	 * @param index the index of the fabric form the list
	 * @param e the click event of the button
	 */
	const handleFabricZoom = (fabric: Fabric, index: number, e: React.MouseEvent) => {
		e.stopPropagation()
		setZoomFabric(fabric)
		setZoomIndex(index)
		dialogRef.current?.open()
	}

  // TODO: Move to an util to use it site wide
  /**
   * Handle the selected fabric and stores the fabric in the global context
   */
  const handleSelectedFabric = () => {
    if (!zoomFabric) return

    setFabric(zoomFabric)
    dialogRef.current?.close()
  }

  const fabricName = () => {
    return language === 'es'
      ? selectedFabric?.name_es
      : selectedFabric?.name_en
  }

  if (girlLoading && boyLoading) return <p>Cargando telas para niñas...</p>;
  if (girlError && boyError) return <p>Error al cargar telas.</p>;
  if (!girlFabricsFull || girlFabricsFull.length === 0 || !boyFabricsFull || boyFabricsFull.length === 0) return <p>No hay telas configuradas.</p>

  return (
    <>
			<title>{fabricTitle}</title>
			<meta name="description" content="Explora nuestro catálogo de telas 100% algodón para personalizar la lencería de tu bebé. Diseños exclusivos de Petit Design." />
			<link rel="canonical" href={fabricCanonical} />

			<meta property="og:title" content={fabricTitle} />
			<meta property="og:description" content="Explora nuestro catálogo de telas 100% algodón para personalizar la lencería de tu bebé. Diseños exclusivos de Petit Design." />
			<meta property="og:url" content={fabricCanonical} />

			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={fabricTitle} />
			<meta name="twitter:description" content="Explora nuestro catálogo de telas 100% algodón para personalizar la lencería de tu bebé. Diseños exclusivos de Petit Design." />

      <div className="container px-4 py-8 md:py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
            {title}
          </h1>
          {selectedFabric && (
            <h2 className='text-xl mb-5 font-bold text-mint-dark'>
              {`Tela seleccionada: ${fabricName()}`}
            </h2>
          )}
          {!selectedFabric &&
            (<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}

          {/* More fabrics notice */}
          <div className="mt-6 inline-flex items-center gap-3 px-5 py-3 bg-mint/10 border border-mint/20 rounded-xl">
            <MessageCircle className="h-5 w-5 text-mint-dark shrink-0" />
            <p className="text-sm text-foreground">
              {t('fabricGallery.disclaimer')}
            </p>
            <Link
              to={getWhatsAppUrl({ message: t('fabricGallery.message'), source: 'Catálogo de Telas', language })}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('Catálogo de Telas', { content_category: 'Fabrics' })}
              className="text-sm font-medium text-mint-dark hover:text-mint underline shrink-0"
            >
              {t('fabricGallery.seeMore')}
            </Link>
          </div>
        </div>

        {/* Fabric Grid - Larger cards */}
				{fabrics.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {fabrics.map((fabric, index) => (
              <button
                key={fabric.id}
                onClick={(e) => handleFabricZoom(fabric, index, e)}
                className="group animate-fade-in-up text-left rounded-2xl cursor-pointer place-self-start"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:scale-[1.03] group-focus:outline-none group-focus:ring-2 group-focus:ring-primary group-focus:ring-offset-2">
                  <img
                    src={fabric.imageUrl}
                    alt={language === 'es' ? fabric.name_es : fabric.name_en}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading='lazy'
                  />

                  {/* Selection indicator */}
                  {selectedFabric?.id === fabric.id && (
										<div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
											<Sparkles className="h-3 w-3" />
										</div>
									)}
                </div>

                {/* Name below image */}
                <h3 className="mt-3 text-center font-medium text-foreground text-balance group-hover:text-primary transition-colors">
                  {language === 'es' ? fabric.name_es : fabric.name_en}
                </h3>
              </button>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              {t('fabricGallery.modeFabrics')}
            </p>
          </div>
        )}
      </div>

      {/* Fabric Selection Modal */}
			<Dialog
				ref={dialogRef}
				zoomFabric={zoomFabric}
				currentFabrics={fabrics}
				handleSelectFromZoom={handleSelectedFabric}
				zoomIndex={zoomIndex}
				setZoomIndex={setZoomIndex}
				setZoomFabric={setZoomFabric}
			/>
    </>
  );
}
