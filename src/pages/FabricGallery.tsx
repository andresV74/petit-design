import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Sparkles, MessageCircle } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'
import { getWhatsAppUrl } from '@/lib/whatsapp.ts'
import { trackWhatsAppClick } from '@/hooks/useMetaPixel.ts'
import { Dialog, type DialogRef } from '@/components/ui/dialog.tsx'
import { useFabricsStore } from '@/store/fabricsStore.tsx'
import type { Fabric } from '@/components/products/FabricSelector.tsx'

import boyFabrics from '@/data/boyFabrics.json'
import girlFabrics from '@/data/girlFabrics.json'

interface FabricGalleryProps {
  gender: 'boy' | 'girl'
}

export function FabricGallery({ gender }: FabricGalleryProps) {
  const { language } = useLanguage()
	const [zoomFabric, setZoomFabric] = useState<Fabric | null>(null)
	const [zoomIndex, setZoomIndex] = useState(0)
	const dialogRef = useRef<DialogRef | null>(null)
  const selectedFabric = useFabricsStore((state) => state.fabric)
  const setFabric = useFabricsStore((state) => state.setFabric)

	const fabrics: Fabric[] = (gender === 'boy'
		? boyFabrics
		: gender === 'girl'
			? girlFabrics
			: []) as unknown as Fabric[]

  // TODO: move all translations of this page to the translation const
	const title = gender === 'boy'
    ? (language === 'es' ? 'Catálogo de Telas - Niño' : 'Fabric Catalog - Boy')
    : (language === 'es' ? 'Catálogo de Telas - Niña' : 'Fabric Catalog - Girl')

  const subtitle = language === 'es'
    ? 'Haz clic en una tela para seleccionarla y ver los productos disponibles'
    : 'Click on a fabric to select it and see available products'

  const fabricTitle = gender === 'boy'
    ? 'Catálogo de Telas - Niño | Petit Design'
    : 'Catálogo de Telas - Niña | Petit Design';
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
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {subtitle}
          </p>

          {/* More fabrics notice */}
          <div className="mt-6 inline-flex items-center gap-3 px-5 py-3 bg-mint/10 border border-mint/20 rounded-xl">
            <MessageCircle className="h-5 w-5 text-mint-dark shrink-0" />
            <p className="text-sm text-foreground">
              {language === 'es'
                ? '¡Tenemos muchos más diseños disponibles! Consulta por WhatsApp para ver más opciones.'
                : 'We have many more designs available! Ask on WhatsApp to see more options.'}
            </p>
            <Link
              to={getWhatsAppUrl({ message: language === 'es' ? '¡Hola! Me gustaría ver más diseños de telas' : 'Hello! I would like to see more fabric designs', source: 'Catálogo de Telas', language })}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('Catálogo de Telas', { content_category: 'Fabrics' })}
              className="text-sm font-medium text-mint-dark hover:text-mint underline shrink-0"
            >
              {language === 'es' ? 'Ver más' : 'See more'}
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
                    src={fabric.image}
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
                <h3 className="mt-3 text-center font-medium text-foreground group-hover:text-primary transition-colors">
                  {language === 'es' ? fabric.name_es : fabric.name_en}
                </h3>
              </button>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              {language === 'es'
                ? 'Próximamente nuevas telas disponibles'
                : 'New fabrics coming soon'}
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
