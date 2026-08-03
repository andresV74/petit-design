import { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { Heart, Clock, Shield, Sparkles } from 'lucide-react'
import { ProductLongDescription } from '@/components/products/ProductLongDescription.tsx'
import { ProductPreview } from '@/components/products/ProductPreview.tsx'
import { CustomInfo } from '@/components/products/CustomInfo.tsx'
import { FontSelector } from '@/components/products/FontSelector.tsx'
import { ProductEmbroideryColor } from '@/components/products/ProductEmbroideryColor.tsx'
import { FabricSelector } from '@/components/products/FabricSelector.tsx'
import { Breadcrumbs } from '@/components/ui/breadcrumbs.tsx'
import { Button } from '@/components/ui/button.tsx'
import { useLanguage } from '@/lib/i18n.tsx'
import { trackEvent, /*trackWhatsAppClick*/ } from '@/hooks/useMetaPixel.ts'
// import { getWhatsAppUrl } from '@/lib/whatsapp.ts'
import { useFabricsStore } from '@/store/fabricsStore.tsx'
import { useProductCustomsStore } from '@/store/productCustomsStore'
import { inputClasses } from '@/components/ContactForm.tsx'

import products from '@/data/products.json'

const embroideryColors = [
  { value: 'blanco', color: '#FFFFFF', border: true },
  { value: 'beige', color: '#D4C4B0' },
  { value: 'rosa_claro', color: '#E8B4B8' },
  { value: 'verde_salvia', color: '#7A9A7A' },
  { value: 'azul_cielo', color: '#7EB6D8' },
  { value: 'gris_perla', color: '#A8A8A8' },
]

export function ProductPage() {
  const { slug } = useParams<{ slug: string }>()
  const { t, language } = useLanguage()

  const displayProduct = products.find(product => product.slug === slug)
  const category = displayProduct?.category

  const hasTrackedView = useRef(false)
  const [totalPrice, setTotalPrice] = useState<number | undefined>(displayProduct?.initialPrice)
  const name = useProductCustomsStore((state) => state.customs?.name ?? '')
  const observations = useProductCustomsStore((state) => state.customs?.observations)
  const setCustoms = useProductCustomsStore((state) => state.setCustom)
  useFabricsStore.subscribe((state) => {
    const newFabric = state.fabric

    setCustoms({ fabric: newFabric})
  })

  useEffect(() => {
    if (displayProduct && !hasTrackedView.current) {
      hasTrackedView.current = true
      trackEvent('ViewContent', {
        content_ids: [displayProduct.id],
        content_name: language === 'es' ? displayProduct.name_es : displayProduct.name_en,
        content_type: 'product',
        content_category: displayProduct.category || '',
        currency: 'COP',
        value: displayProduct.price,
      })
    }
  }, [displayProduct, language])

  const formatPrice = (price?: number) => {
    if (price == null) return ''
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  const handlePriceLetters = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    if (!displayProduct?.price) return

    const canHandle = displayProduct?.extraCustomization?.includes('pricePerLetter')

    setCustoms({name: e.target.value})
    setTotalPrice(canHandle ? (displayProduct?.price * e.target.value.length) : displayProduct?.price)
  }

  // const hasTrackedCustomize = useRef(false)
  // useEffect(() => {
  //   if (babyName && !hasTrackedCustomize.current) {
  //     hasTrackedCustomize.current = true
  //     trackEvent('CustomizeProduct', {
  //       content_name: language === 'es' ? displayProduct?.name_es : displayProduct?.name_en,
  //       content_ids: [displayProduct?.id],
  //     })
  //   }
  // }, [babyName, displayProduct, language])

  // const handleWhatsAppOrder = () => {
  //   const colorLabel = t(`color.${embroideryColor}`)
  //   const productUrl = `${window.location.origin}/producto/${displayProduct?.slug}`
  //   const productImage = images[0]?.imageUrl ? `${window.location.origin}${images[0].imageUrl}` : ''

  //   const displayPrice = displayProduct?.price

  //   const messageLines = language === 'es'
  //     ? [
  //         `¡Hola! Me gustaría hacer un pedido:`,
  //         ``,
  //         `📦 *Producto:* ${displayProduct?.name_es}`,
  //         `🔗 *Ver producto:* ${productUrl}`,
  //         `🖼️ *Imagen:* ${productImage}`,
  //       ]
  //     : [
  //         `Hello! I would like to place an order:`,
  //         ``,
  //         `📦 *Product:* ${displayProduct?.name_en}`,
  //         `🔗 *View product:* ${productUrl}`,
  //         `🖼️ *Image:* ${productImage}`,
  //       ]

  //   messageLines.push('')
  //   messageLines.push(language === 'es' ? `✨ *Personalización:*` : `✨ *Personalization:*`)
  //   messageLines.push(language === 'es' ? `👶 Nombre del bebé: ${babyName || 'Por definir'}` : `👶 Baby's name: ${babyName || 'To be defined'}`)
  //   messageLines.push(language === 'es' ? `🎨 Color del bordado: ${colorLabel}` : `🎨 Embroidery color: ${colorLabel}`)
  //   messageLines.push(language === 'es' ? `✍️ Tipo de letra: Por definir vía WhatsApp` : `✍️ Font type: To be defined via WhatsApp`)

  //   messageLines.push(language === 'es'
  //     ? `📝 Observaciones: ${observations || 'Ninguna'}`
  //     : `📝 Observations: ${observations || 'None'}`
  //   )
  //   messageLines.push('')
  //   messageLines.push(language === 'es' ? '¡Gracias!' : 'Thank you!')

  //   trackWhatsAppClick(`Producto: ${language === 'es' ? displayProduct?.name_es : displayProduct?.name_en}`, {
  //     content_category: 'Product Order',
  //     content_ids: [displayProduct?.id],
  //     currency: 'COP',
  //     value: displayPrice,
  //   })

  //   window.open(getWhatsAppUrl({
  //     message: messageLines.join('\n'),
  //     source: `Producto: ${language === 'es' ? displayProduct?.name_es : displayProduct?.name_en}`, language
  //   }), '_blank')
  // }

  const images = displayProduct?.images ?? []

  const productTitle = `${language === 'es' ? displayProduct?.name_es : displayProduct?.name_en} | Petit Design`
  const productDescription = language === 'es' ? displayProduct?.longDescription_es : displayProduct?.longDescription_en
  const productCanonical = `https://petitdesign.com.co/producto/${displayProduct?.slug}`

  // TODO Revisar cómo vienen las imágenes desde Shopify para optimizar esta constante
  const productImageUrl = images[0]?.imageUrl
    ? images[0].imageUrl.startsWith('http') ? images[0].imageUrl : `https://petitdesign.com.co${images[0].imageUrl}`
    : 'https://petitdesign.com.co/logo-full.png'

  return (
    <>
			<title>{productTitle}</title>
			<meta name="description" content={productDescription} />
			<link rel="canonical" href={productCanonical} />

			<meta property="og:title" content={productTitle} />
			<meta property="og:description" content={productDescription} />
			<meta property="og:url" content={productCanonical} />
			<meta property="og:type" content="product" />
			<meta property="og:image" content={productImageUrl} />

			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={productTitle} />
			<meta name="twitter:description" content={productDescription} />

			<script type="application/ld+json">{JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Product",
				"name": language === 'es' ? displayProduct?.name_es : displayProduct?.name_en,
				"description": productDescription,
				"image": productImageUrl,
				"brand": {
					"@type": "Brand",
					"name": "Petit Design"
				},
				"offers": {
					"@type": "Offer",
					"price": displayProduct?.price,
					"priceCurrency": "COP",
					"availability": "https://schema.org/InStock",
					"url": productCanonical
				}
			})}</script>

      <div className="container px-4 py-8 md:py-12">
        {/* Breadcrumb */}
        <Breadcrumbs category={category} isProduct={true} />

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-4 relative">
            <ProductPreview
              images={images}
            />
            <CustomInfo />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-balance mb-2">
              {language === 'es' ? displayProduct?.name_es : displayProduct?.name_en}
            </h1>
            <p className="text-2xl font-semibold text-primary">
              {displayProduct?.extraCustomization === 'pricePerLetter' && name.length > 0
                ? `${formatPrice(displayProduct.price * name.length)} para el nombre: ${name}`
                : displayProduct?.extraCustomization === 'priceByOption'
                  ? formatPrice(totalPrice)
                  : formatPrice(displayProduct?.price)
              }
            </p>

            {displayProduct?.extraCustomization === 'priceByOption' && (
              <fieldset className='space-y-1'>
                <label htmlFor="options" className='block'>
                  {displayProduct.slug === 'muneco-de-apego'
                    ? t('product.quantity')
                    : t('product.size')
                  }
                  </label>
                <select id='options' className='w-70' onChange={(e) => setTotalPrice(parseInt(e.target.value))}>
                  {displayProduct.options?.map(({ name, value}) => (
                    <option key={value} value={value}>{name}</option>
                  ))}
                </select>
              </fieldset>
            )}

            {displayProduct?.additionalOptions && (
              <fieldset>
                <label htmlFor="additionalOptions" className='block mb-1'>
                  Escoge el estilo del bumper
                  </label>
                <select id='additionalOptions' className='w-70'>
                  {displayProduct.additionalOptions?.map(({ name, value}) => (
                    <option key={value} value={value}>{name}</option>
                  ))}
                </select>
              </fieldset>
            )}

            <p className="text-muted-foreground leading-relaxed">
              {language === 'es' ? displayProduct?.shortDescription_es : displayProduct?.shortDescription_en}
            </p>

            {/* Long description - expandable */}
            {displayProduct?.longDescription_es && (
              <ProductLongDescription
                description={language === 'es' ? displayProduct?.longDescription_es : displayProduct?.longDescription_en}
              />
            )}

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4 py-4 border-y border-border">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 text-mint" />
                <span>{t('product.productionTime')}: {displayProduct?.productionDays} {t('product.days')}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4 text-mint" />
                <span>Hecho en Colombia</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Heart className="h-4 w-4 text-mint" />
                <span>Hecho con amor</span>
              </div>
            </div>

            {/* Personalization Form */}
            <div className="space-y-6 p-6 rounded-2xl bg-gray-light/50 border border-border">
              <h3 className="font-display text-lg font-semibold flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-mint" />
                {t('product.personalize')}
              </h3>

              {/* Name input */}
              <fieldset className="space-y-2">
                <label htmlFor="babyName">
                  {t('product.babyName')}
                </label>
                <input
                  id="babyName"
                  placeholder={t('product.babyNamePlaceholder')}
                  value={name}
                  onChange={(event) => handlePriceLetters(event)}
                  className={inputClasses}
                  maxLength={15}
                />
              </fieldset>

              {/* Font selection */}
              <FontSelector />

              <ProductEmbroideryColor
                embroideryColors={embroideryColors}
                colorFilters={displayProduct?.colorFilter}
              />

              <p className='text-sm mb-3'>
                {t('product.namePreview')}
              </p>

							{displayProduct?.useFabrics && <FabricSelector /> }

              <div className="space-y-2">
                <label htmlFor="observations" className='block'>
                  {t('product.observations')}
                </label>
                <textarea
                  id="observations"
                  placeholder={t('product.observationsPlaceholder')}
                  value={observations}
                  onChange={(e) => setCustoms({ observations: e.target.value })}
                  className={`resize-none ${inputClasses}`}
                  rows={3}
                />
              </div>
            </div>

            {/* Trust message */}
            <p className="text-sm text-muted-foreground italic">
              {t('product.trustMessage')}
            </p>

            {/* Order Button */}
            <Button
              className="h-11 rounded-md px-8 w-full bg-primary text-primary-foreground text-xl font-bold py-6"
              // onClick={handleWhatsAppOrder}
            >
              {t('product.buy')}
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
