import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Sparkles, Baby, MessageCircle, ZoomIn } from 'lucide-react'
import { Dialog, type DialogRef } from '@/components/ui/dialog.tsx'
import { handleSelectFromZoom } from '@/components/utils/handleSelectFromZoom.ts'
import { handleClearSelection } from '@/components/utils/handleClearSelection.ts'
import { useLanguage } from '@/lib/i18n.tsx'
import { getWhatsAppUrl } from '@/lib/whatsapp.ts'
import { Badge } from '@/components/ui/badge.tsx'
import type { Fabric } from '@/components/products/FabricSelector.tsx'

import boyFabrics from '@/data/boyFabrics.json'
import girlFabrics from '@/data/girlFabrics.json'

export function PersonalizeSection() {
  const { t, language } = useLanguage()
  const navigate = useNavigate()
  const [hoveredGender, setHoveredGender] = useState<'boy' | 'girl' | null>(null)
  const [selectedGender, setSelectedGender] = useState<'boy' | 'girl' | null>(null)
	const [zoomFabric, setZoomFabric] = useState<Fabric | null>(null)
  const [selectedFabric, setSelectedFabric] = useState('')
  const dialogRef = useRef<DialogRef | null>(null)

  const [zoomIndex, setZoomIndex] = useState(0)

  const genderOptions = [
    {
      id: 'boy' as const,
      label_es: 'Niño',
      label_en: 'Boy',
      color: 'bg-blue-100 hover:bg-blue-200',
      borderColor: 'border-blue-300',
      textColor: 'text-blue-700',
			route: '/telas/nino'
    },
    {
      id: 'girl' as const,
      label_es: 'Niña',
      label_en: 'Girl',
      color: 'bg-pink-100 hover:bg-pink-200',
      borderColor: 'border-pink-300',
      textColor: 'text-pink-700',
			route: '/telas/nina'
    },
  ]

  const handleGenderClick = (gender: 'boy' | 'girl') => {
    setSelectedGender(selectedGender === gender ? null : gender);
  };

  const handleFabricZoom = (fabric: Fabric, index: number, e: React.MouseEvent) => {
		e.stopPropagation()
		setZoomFabric(fabric)
		setZoomIndex(index)
		dialogRef.current?.open()
	}

  const currentFabrics: Fabric[] = (selectedGender === 'boy'
    ? boyFabrics
    : selectedGender === 'girl'
      ? girlFabrics : []) as unknown as Fabric[]

  return (
    <section className="py-16 md:py-24 bg-linear-to-b from-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <Badge className="gap-2 px-4 py-2 mb-4 bg-primary/10 text-primary border-transparent">
            <Sparkles className="h-4 w-4 " />
            <span className="text-sm font-medium">
              {t('personalization.badge')}
            </span>
          </Badge>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
            {t('personalization.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('personalization.description')}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 max-w-2xl mx-auto">
          {genderOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => handleGenderClick(option.id)}
              onMouseEnter={() => setHoveredGender(option.id)}
              onMouseLeave={() => setHoveredGender(null)}
              className={
                `group relative w-full sm:w-64 p-8 rounded-3xl border-2 transition-all duration-300 transform cursor-pointer
								${option.color}
								${option.borderColor}
								${selectedGender === option.id && "scale-105 shadow-xl ring-2 ring-primary"}
								${hoveredGender === option.id && selectedGender !== option.id && "scale-105 shadow-xl"}`
              }
            >
              {/* Floating icon */}
              <div className={
                `text-6xl mb-4 transition-transform duration-300
								${(hoveredGender === option.id || selectedGender === option.id) && "scale-110 -translate-y-1"}`
              }>
                <Baby className={`h-16 w-16 mx-auto ${option.textColor}`} />
              </div>

              <h3 className={`font-display text-2xl font-semibold mb-2 ${option.textColor}`}>
                {language === 'es' ? option.label_es : option.label_en}
              </h3>

              <p className={`text-sm opacity-80 ${option.textColor}`}>
                {selectedGender === option.id
                  ? (t('personalization.buttonCtaSelected'))
                  : (t('personalization.buttonCta'))}
              </p>

              {/* Decorative elements */}
              <div className={
                `absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white transition-all duration-300
								${option.id === 'boy' ? 'bg-blue-400' : 'bg-pink-400'}
								${(hoveredGender === option.id || selectedGender === option.id) ? "scale-110" : "scale-0"}`
              }>
                <Sparkles className="h-4 w-4" />
              </div>
            </button>
          ))}
        </div>

        {/* Fabric swatches preview */}
        {selectedGender && currentFabrics.length > 0 && (
          <div className="mt-12 animate-fade-in-from-bottom">
            <h3 className="text-center font-display text-xl font-semibold mb-6">
              {language === 'es'
                ? `Telas para ${selectedGender === 'boy' ? 'Niño' : 'Niña'}`
                : `${selectedGender === 'boy' ? 'Boy' : 'Girl'}'s Fabrics`}
            </h3>

            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
							{currentFabrics.slice(0, 8).map((fabric, index) => (
                <button
                  key={fabric.id}
                  onClick={(e) => handleFabricZoom(fabric, index, e)}
                  className="group relative cursor-pointer"
                >
                  {/* Fabric swatch - larger size with hover effect */}
                  <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white shadow-lg transition-all duration-300 group-hover:scale-125 group-hover:shadow-2xl group-hover:z-10">
                    <img
                      src={fabric.image}
                      alt={language === 'es' ? fabric.name_es : fabric.name_en}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                    {/* Zoom hint on hover */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center
											${selectedGender === 'boy' ? 'bg-blue-400/40' : 'bg-pink-400/40'}`}>
                      <ZoomIn className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  {/* Fabric name tooltip */}
                  <div className="absolute -bottom-9 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    <span className={`text-xs font-medium px-2 py-1 rounded text-white
											${selectedGender === 'boy' ? 'bg-blue-400' : 'bg-pink-400'}`}>
                      {language === 'es' ? fabric.name_es : fabric.name_en}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* View all button */}
            <div className="text-center mt-8">
              <button
                onClick={() => navigate(selectedGender === 'boy' ? '/telas/nino' : '/telas/nina')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium cursor-pointer hover:bg-primary/90 transition-colors"
              >
                {t('personalization.viewAll')}
              </button>
            </div>

            {/* WhatsApp CTA for more designs */}
            <div className="mt-6 flex justify-center">
              <a
                href={getWhatsAppUrl({ message: language === 'es' ? '¡Hola! Me gustaría ver más diseños de telas' : 'Hello! I would like to see more fabric designs', source: 'Inicio - Telas', language })}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-5 py-3 bg-mint/10 border border-mint/20 rounded-xl hover:bg-mint/20 transition-colors"
              >
                <MessageCircle className="h-5 w-5 text-mint-dark shrink-0" />
                <p className="text-sm text-foreground">
                  {t('personalization.whatsAppCta')}
                </p>
              </a>
            </div>
          </div>
        )}

        {!selectedGender && (
          <p className="text-center text-sm text-muted-foreground mt-8">
            {t('personalization.instructions')}
          </p>
        )}
      </div>

      {/* Zoom Modal */}
      <Dialog
        ref={dialogRef}
        zoomFabric={zoomFabric}
        currentFabrics={currentFabrics}
        handleSelectFromZoom={() => handleSelectFromZoom(zoomFabric, setSelectedFabric, setZoomFabric, dialogRef as unknown as React.RefObject<HTMLDialogElement>)}
        handleClearSelection={() => handleClearSelection(setSelectedFabric, dialogRef as unknown as React.RefObject<HTMLDialogElement>)}
        selectedFabric={selectedFabric}
        zoomIndex={zoomIndex}
        setZoomIndex={setZoomIndex}
        setZoomFabric={setZoomFabric}
      />
    </section>
  );
}
