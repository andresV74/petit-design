import { useEffect, useState, useRef, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { useProduct } from '@/hooks/useProduct.ts'
import { addToCart } from '@/api/cart.ts'
import { Heart, Clock, Shield, Sparkles, ShoppingBag, Send } from 'lucide-react'
import { ProductLongDescription } from '@/components/products/ProductLongDescription.tsx'
import { ProductPreview } from '@/components/products/ProductPreview.tsx'
import { CustomInfo } from '@/components/products/CustomInfo.tsx'
import { FontSelector } from '@/components/products/FontSelector.tsx'
import { Colors } from '@/components/products/Colors.tsx'
import { FabricSelector, type Fabric } from '@/components/products/FabricSelector.tsx'
import { Breadcrumbs } from '@/components/ui/breadcrumbs.tsx'
import { Button } from '@/components/ui/button.tsx'
import { useLanguage } from '@/lib/i18n.tsx'
import { trackEvent, trackWhatsAppClick } from '@/hooks/useMetaPixel.ts'
import { getWhatsAppUrl } from '@/lib/whatsapp';
import { useFabricsStore } from '@/store/fabricsStore.tsx'
import { useProductCustomsStore } from '@/store/productCustomsStore'
import { inputClasses } from '@/components/ContactForm.tsx'
import { jsonToHtml } from '@/components/utils/jsonToHtml.ts'
import { formatPrice } from '@/components/utils/formatPrice.ts'
import { normalizeColorName } from '@/components/utils/normalizeColorName.ts'
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipPortal, TooltipContent, TooltipArrow } from '@radix-ui/react-tooltip'
import { LoadingIndicator } from '@/components/ui/loadingIndicator.tsx'
import { ErrorMessage } from '@/components/ui/errorMessage.tsx'

type SelectedOptions = {
  [key: string]: string | undefined
}

export function ProductPage() {
  const { handle } = useParams<{ handle: string }>()
  const { product, loading, error } = useProduct(handle)
  const { t, language } = useLanguage()

  const [selectedOptions, setSelectedOptions] = useState<SelectedOptions>({})
  const [babyName, setBabyName] = useState('')
  const [adding, setAdding] = useState(false)
  const [added, setAdded] = useState(false)

  const featuredImage = product?.featuredImage
  const baseMinPrice = product?.priceRange?.minVariantPrice
  const category = product?.collections.edges[0]
  const images = product?.images?.edges

  const productionDays = product?.productionDays?.value
  const useFabrics = product?.useFabrics?.value === 'true'
  const longDescriptionEn = jsonToHtml(JSON.parse(product?.longDescriptionEn?.value || '[]'))
  const isFeatured = product?.isFeatured?.value === 'true'
  const nameEn = product?.nameEn?.value
  const shortDescriptionEs = product?.shortDescriptionEs?.value
  const shortDescriptionEn = product?.shortDescriptionEn?.value
  const isCharacterPriced = product?.isCharacterPriced?.value === 'true'
  const fabricsQuantity = parseInt(product?.fabricsQuantity?.value ?? '0', 10)
  const colorNodes = product?.color?.references?.nodes ?? []
  const colors = colorNodes
    .filter((node) => node.__typename === 'Metaobject')
    .map((meta) => {
      const fields = meta.fields ?? []

      return {
        id: meta.id,
        name: fields.find((f) => f.key === 'value')?.value,
        hex: fields.find((f) => f.key === 'color')?.value,
        border: fields.find((f) => f.key === 'border')?.value
      }
    })
  const girlFabricsNodes = product?.girlFabrics?.references?.nodes ?? []
  const girlFabrics = girlFabricsNodes
    .filter((node) => node.__typename === 'Metaobject')
    .map((meta) => {
      const fields = meta.fields ?? []

      const gender = fields.find((f) => f.key === 'gender')
      const nameEs = fields.find((f) => f.key === 'name_es')
      const nameEn = fields.find((f) => f.key === 'name_en')
      const imageField = fields.find((f) => f.key === 'image')

      const imageRef = imageField?.reference
      const imageUrl =
        imageRef?.__typename === 'MediaImage'
          ? imageRef.image?.url
          : undefined

      return {
        id: meta.id,
        gender: gender?.value as 'boy' | 'girl',
        name_es: nameEs?.value,
        name_en: nameEn?.value,
        imageUrl: imageUrl
      }
    })
  const boyFabricsNodes = product?.boyFabrics?.references?.nodes ?? []
  const boyFabrics = boyFabricsNodes
    .filter((node) => node.__typename === 'Metaobject')
    .map((meta) => {
      const fields = meta.fields ?? []

      const gender = fields.find((f) => f.key === 'gender')
      const nameEs = fields.find((f) => f.key === 'name_es')
      const nameEn = fields.find((f) => f.key === 'name_en')
      const imageField = fields.find((f) => f.key === 'image')

      const imageRef = imageField?.reference
      const imageUrl =
        imageRef?.__typename === 'MediaImage'
          ? imageRef.image?.url
          : undefined

      return {
        id: meta.id,
        gender: gender?.value as 'boy' | 'girl',
        name_es: nameEs?.value,
        name_en: nameEn?.value,
        imageUrl: imageUrl
      }
    })

  const productTitle = `${language === 'es' ? product?.title : product?.nameEn?.value} | Petit Design`
  const productDescription = language === 'es'
    ? shortDescriptionEs ?? product?.title
    : shortDescriptionEn ?? product?.nameEn?.value
  const productCanonical = `https://petitdesign.co/producto/${handle}`
  const productImageUrl = featuredImage
    ? featuredImage.url
    : images?.[0].node.url

  const hasTrackedView = useRef(false)

	const babyNameStore = useProductCustomsStore((state) => state.customs?.name)
	const selectedColorStore = useProductCustomsStore((state) => state.customs?.color)
  const selectedFontStore = useProductCustomsStore((state) => state.customs?.font)
  const selectedFabricsStore = useProductCustomsStore((state) => state.customs?.fabrics) ?? []
  const observations = useProductCustomsStore((state) => state.customs?.observations)
  const setCustoms = useProductCustomsStore((state) => state.setCustom)
	const removeCustom = useProductCustomsStore((state) => state.removeCustom)

  useEffect(() => {
    const syncFabrics = (fabrics: Fabric[]) => {
      if (fabrics.length > 0) {
        setCustoms({ fabrics })
        return
      }

      if (useProductCustomsStore.getState().customs?.fabrics) {
        removeCustom('fabrics')
      }
    }

    let current = useFabricsStore.getState().fabrics
    syncFabrics(current)

    return useFabricsStore.subscribe((state) => {
      if (state.fabrics === current) return

      current = state.fabrics
      syncFabrics(state.fabrics)
    })
  }, [setCustoms, removeCustom])

  const maxFabrics = Math.max(1, fabricsQuantity || 1)

  // Drop stored fabrics that are not offered by the current product (or when it does not use fabrics)
  useEffect(() => {
    if (!product) return

    const { fabrics: storedFabrics, clearFabric, removeFabric } = useFabricsStore.getState()
    if (storedFabrics.length === 0) return

    const usesFabrics = product.useFabrics?.value === 'true'
    const maxAllowed = Math.max(1, parseInt(product.fabricsQuantity?.value ?? '0', 10))
    const productFabricIds = new Set(
      [...(product.girlFabrics?.references?.nodes ?? []), ...(product.boyFabrics?.references?.nodes ?? [])]
        .filter((node) => node.__typename === 'Metaobject')
        .map((node) => node.id)
    )

    // A product without fabrics, must not inherit a previous selection
    if (!usesFabrics || productFabricIds.size === 0) {
      clearFabric()
      return
    }

    if (storedFabrics.length > maxAllowed) {
      const fabricsToRemove = storedFabrics.slice(maxAllowed)
      fabricsToRemove.forEach((fabric) => {
        removeFabric(fabric.id)
      })
    }

    storedFabrics.forEach((fabric) => {
      if (!productFabricIds.has(fabric.id)) {
        removeFabric(fabric.id)
      }
    })
  }, [product, fabricsQuantity])

  // Drop a stored color that does not belong to the current product palette (or when it has none)
  useEffect(() => {
    if (!product) return

    const storedColor = useProductCustomsStore.getState().customs?.color
    if (!storedColor) return

    const productColors = (product.color?.references?.nodes ?? []).filter(
      (node) => node.__typename === 'Metaobject'
    )

    if (!productColors.some((color) => color.id === storedColor.id)) {
      removeCustom('color')
    }
  }, [product, removeCustom])

  useEffect(() => {
    if (product && !hasTrackedView.current) {
      hasTrackedView.current = true
      trackEvent('ViewContent', {
        content_ids: [product.id],
        content_name: language === 'es' ? product.title : product?.nameEn?.value,
        content_type: 'product',
        content_category: category?.node.title || '',
        currency: 'COP',
        value: baseMinPrice?.amount,
      })
    }
  }, [language, category, baseMinPrice?.amount, product])

  const variants = (product?.variants?.edges ?? []).map(edge => edge.node)
  const hasVariants = variants.length > 1

  const selectedVariant = useMemo(() => {
    if (!hasVariants) return variants[0] || null

    return (
      variants.find((variant) => {
        const variantOpts = variant.selectedOptions || []
        const options = product?.options ?? []

        return options.every((option) => {
          const optionNameKey = option.name.toLowerCase()
          const selectedValue = selectedOptions[optionNameKey as keyof SelectedOptions]

          if (!selectedValue) return true

          return variantOpts.some(
            (o) =>
              o.name.toLocaleLowerCase() === optionNameKey &&
              o.value === selectedValue
          )
        })
      }) || null
    )
  }, [hasVariants, variants, product?.options, selectedOptions])

  const allOptionsSelected =
    (product?.options ?? []).length > 0 &&
    (product?.options ?? []).every((option) =>
      Boolean(selectedOptions[option.name.toLowerCase()])
    )

  const variantImageUrl = useMemo(() => {
    if (!hasVariants || !allOptionsSelected) return undefined
    const url = selectedVariant?.image?.url
    if (!url || url === featuredImage?.url) return undefined
    return url
  }, [hasVariants, allOptionsSelected, selectedVariant, featuredImage])


  const variantPrice = selectedVariant?.price || null
  const pricePerUnit = variantPrice || baseMinPrice

  const trimmedName = babyName.trim()
  const numChars = isCharacterPriced ? trimmedName.length : 0
  const totalPrice =
    isCharacterPriced && pricePerUnit && numChars > 0
      ? {
          amount: (Number(pricePerUnit.amount) * numChars).toFixed(2),
          currencyCode: pricePerUnit.currencyCode,
        }
      : null

  function handleChangeVariant(variant: string, e: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedOptions((prev) => ({ ...prev, [variant]: e.target.value || undefined }))
    setAdded(false)
  }

  function handleChangeBabyName(e: React.ChangeEvent<HTMLInputElement>) {
    setBabyName(e.target.value)
    setCustoms({ name: e.target.value })
    setAdded(false);
  }

  function handleSelectColor(colorId: string) {
    const color = colors.find((color) => color.id === colorId)

    if (selectedColorStore?.id === colorId) {
      removeCustom('color')
    } else if (color) {
      setCustoms({ color })
    }
    setAdded(false)
  }

  async function handleAddToCart() {
    if (!selectedVariant && hasVariants) return
    const variantId = (selectedVariant || variants[0])?.id
    if (!variantId) return

    let quantity = 1;
    let customAttrs: Record<string, string> | undefined

    if (isCharacterPriced) {
      const trimmedName = babyName.trim()
      const chars = trimmedName.length
      if (!chars) return

      quantity = chars;
    }
    customAttrs = { baby_name: trimmedName ? trimmedName : babyNameStore ?? '' }

    if (selectedColorStore) {
      customAttrs = { ...customAttrs, selected_color: selectedColorStore.name ?? '' }
    }

    if (selectedFontStore) {
      customAttrs = { ...customAttrs, selected_font: selectedFontStore }
    }

    if (selectedFabricsStore.length > 0) {
      const fabricNames = selectedFabricsStore
        .map((fabric) => fabric.name_es ?? '')
        .filter(Boolean)
        .join(' / ')

      if (fabricNames) {
        customAttrs = { ...customAttrs, selected_fabric: fabricNames }
      }
    }

    if (observations) {
      customAttrs = { ...customAttrs, observations }
    }

    const attrsOrUndefined =
      Object.keys(customAttrs ?? {}).length > 0 ? customAttrs : undefined

    setAdding(true)
    setAdded(false)
    try {
      await addToCart(variantId, quantity, attrsOrUndefined)
      setAdded(true)
    } catch (err) {
      console.error(err)
    } finally {
      setAdding(false)
    }
  }

  const addDisabled =
    adding ||
    (!selectedVariant && hasVariants)

  const handleWhatsAppOrder = () => {
    const colorLabel = t(`color.${normalizeColorName(selectedColorStore?.name)}`) || ''
    const fabricName = selectedFabricsStore
      .map((fabric) => language === 'es' ? fabric.name_es : fabric.name_en)
      .filter(Boolean)
      .join(', ')
    const productUrl = `${window.location.origin}/producto/${handle}`
    const price = parseInt(String(product?.priceRange?.minVariantPrice.amount))
    const variantPrice = parseInt(String(selectedVariant?.price.amount))

    const messageLines = language === 'es'
      ? [
          `¡Hola! Me gustaría hacer un pedido:`,
          ``,
          `📦 *Producto:* ${product?.title}`,
          `🔗 *Ver producto:* ${productUrl}`,
        ]
      : [
          `Hello! I would like to place an order:`,
          ``,
          `📦 *Product:* ${product?.nameEn}`,
          `🔗 *View product:* ${productUrl}`,
        ];

    if (selectedVariant?.title !== 'Default Title') {
      messageLines.push('');
      messageLines.push(language === 'es' ? `🛒 *Variante:* ${selectedVariant?.title}` : `🛒 *Variant:* ${selectedVariant?.title}`);
      messageLines.push(language === 'es' ? `💰 *Precio:* ${formatPrice(variantPrice)}` : `💰 *Price:* ${formatPrice(variantPrice)}`);
    } else {
      messageLines.push(language === 'es' ? `💰 *Precio:* ${formatPrice(price)}` : `💰 *Price:* ${formatPrice(price)}`);
    }

    messageLines.push('');
    messageLines.push(language === 'es' ? `✨ *Personalización:*` : `✨ *Personalization:*`);
    messageLines.push(language === 'es' ? `👶 Nombre del bebé: ${babyNameStore || 'Por definir'}` : `👶 Baby's name: ${babyName || 'To be defined'}`);
    messageLines.push(language === 'es' ? `🎨 Color del bordado: ${colorLabel}` : `🎨 Embroidery color: ${colorLabel}`);
    messageLines.push(language === 'es' ? `✍️ Tipo de letra: ${selectedFontStore}` : `✍️ Font type: ${selectedFontStore}`);
    messageLines.push(language === 'es' ? `🧵 Tela: ${fabricName}` : `Fabric: ${fabricName}`);

    messageLines.push(language === 'es'
      ? `📝 Observaciones: ${observations || 'Ninguna'}`
      : `📝 Observations: ${observations || 'None'}`
    );
    messageLines.push('');
    messageLines.push(language === 'es' ? '¡Gracias!' : 'Thank you!');

    trackWhatsAppClick(`Producto: ${language === 'es' ? product?.title : product?.nameEn}`, {
      content_category: 'Product Order',
      content_ids: [product?.id],
      currency: 'COP',
      value: product?.priceRange?.minVariantPrice.amount,
    });

    window.open(getWhatsAppUrl({ message: messageLines.join('\n'), source: `Producto: ${language === 'es' ? product?.title : product?.nameEn}`, language }), '_blank');
  };

  if (!handle) return <p>Falta el handle del producto.</p>
  if (loading) return <LoadingIndicator type="line-simple" size="lg" label={t('catalog.loading')} />
  if (error) return <ErrorMessage message={t('product.error')} />
  if (!product) return <p>Producto no encontrado.</p>

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
				"name": language === 'es' ? product.title : nameEn,
				"description": productDescription,
				"image": productImageUrl,
				"brand": {
					"@type": "Brand",
					"name": "Petit Design"
				},
				"offers": {
					"@type": "Offer",
					"price": baseMinPrice?.amount,
					"priceCurrency": "COP",
					"availability": "https://schema.org/InStock",
					"url": productCanonical
				}
			})}</script>

      <div className="container px-4 py-8">
        {/* Breadcrumb */}
        <Breadcrumbs category={category} isProduct={true} />

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-4 relative">
            <ProductPreview
              key={selectedVariant?.id ?? 'default'}
              images={images}
              variantImageUrl={variantImageUrl}
              variantImageAlt={language === 'es' ? product?.title : product?.nameEn?.value}
              isFeatured={isFeatured}
            />
            <CustomInfo useFabrics={useFabrics} />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-balance mb-2">
              {language === 'es' ? product.title : product.nameEn?.value}
            </h1>

            {/* Precio total calculado */}
            {isCharacterPriced && pricePerUnit && (
              <p className="product-page__price">
                  Precio por carácter: {formatPrice(parseInt(String(pricePerUnit.amount ?? 0), 10))}
              </p>
            )}

            {isCharacterPriced && totalPrice && (
              <p className="flex items-center gap-2">
                <span>Precio total:</span>
                <span className="text-2xl font-semibold text-primary">{formatPrice(parseInt(String(totalPrice?.amount ?? 0), 10))}</span>
              </p>
            )}

            {!isCharacterPriced && pricePerUnit && (
              <p className="text-2xl font-semibold text-primary">
                {formatPrice(parseInt(String(pricePerUnit.amount ?? 0), 10))}
              </p>
            )}

            {/* Selectores de variantes */}
            {hasVariants && (
              <div className="product-page__variants">
                {product.options.map((option) => (
                  <fieldset key={option.id} className='space-y-1 mt-4'>
                    <label htmlFor={option.name} className='block'>
                      {option.name}
                    </label>
                      <select
                        id={option.name}
                        className='w-70'
                        value={selectedOptions[option.name.toLowerCase()] ?? ''}
                        onChange={(e) => handleChangeVariant(option.name.toLowerCase(), e)}
                      >
                        <option value="">Selecciona {option.name}</option>
                        {option.values.map((v: string) => (
                          <option key={v} value={v}>
                            {v}
                          </option>
                        ))}
                      </select>
                  </fieldset>
                ))}
              </div>
            )}

            {/* Short description */}
            {product.shortDescriptionEs && (
              <p className="text-muted-foreground leading-relaxed">
                {language === 'es' ? product?.shortDescriptionEs?.value : product?.shortDescriptionEn?.value}
              </p>
            )}

            {/* Long description - expandable */}
            {product?.description && (
              <ProductLongDescription
                description={language === 'es' ? product.descriptionHtml : longDescriptionEn}
              />
            )}

            {/* Trust badges */}
            <div className="flex-balance gap-4 py-4 border-y border-border">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 text-mint" />
                <span>{t('product.productionTime')}: {productionDays} {t('product.days')}</span>
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
                  type="text"
                  id="babyName"
                  placeholder={t('product.babyNamePlaceholder')}
                  value={(babyName || babyNameStore) ?? ''}
                  onChange={handleChangeBabyName}
                  className={inputClasses}
                  maxLength={15}
                />
              </fieldset>

              {/* Font selection */}
              <FontSelector />

              {/* Color selection */}
              {product.color &&(
                <Colors
                  colors={colors}
                  handleSelectColor={handleSelectColor}
                />)
              }

              <p className='text-sm mb-3'>
                {t('product.namePreview')}
              </p>

              {/* Fabrics selection */}
							{useFabrics && (<FabricSelector girlFabrics={girlFabrics} boyFabrics={boyFabrics} maxFabrics={maxFabrics} />) }

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

            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    onClick={handleAddToCart}
                    disabled={addDisabled}
                    className="h-11 rounded-md px-8 w-full bg-primary text-primary-foreground text-xl font-bold py-6 gap-2"
                  >
                    <ShoppingBag />
                    {adding
                      ? t('product.cta2')
                      : added
                      ? t('product.cta3')
                      : t('product.cta1')}
                  </Button>
                </TooltipTrigger>
                <TooltipPortal>
                  <TooltipContent className="max-w-60 bg-mint-light py-1 px-3 text-accent-foreground text-xs rounded-sm text-balance text-center" sideOffset={-2}>
                    {t('product.tooltip1')}
                    <TooltipArrow className="fill-mint-light" />
                  </TooltipContent>
                </TooltipPortal>
              </Tooltip>
            </TooltipProvider>

            {product.whatsAppButton?.value && (
              <>
                <p className='text-center'>
                  {t('product.o')}
                </p>

                <TooltipProvider delayDuration={0}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        onClick={handleWhatsAppOrder}
                        className="h-11 rounded-md px-8 w-full bg-primary text-primary-foreground text-xl font-bold py-6 gap-2"
                      >
                        <Send /> {t('product.cta4')}
                      </Button>
                    </TooltipTrigger>
                    <TooltipPortal>
                      <TooltipContent className="max-w-45 bg-mint-light py-1 px-3 text-accent-foreground text-xs rounded-sm text-balance text-center" sideOffset={-2}>
                        {t('product.tooltip2')}
                        <TooltipArrow className="fill-mint-light" />
                      </TooltipContent>
                    </TooltipPortal>
                  </Tooltip>
                </TooltipProvider>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
