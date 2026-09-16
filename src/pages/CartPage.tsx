import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../hooks/useCart'
import { useLanguage } from '@/lib/i18n.tsx'
import { formatPrice } from '@/components/utils/formatPrice.ts'
import { Minus, PlusIcon, Trash2Icon, BabyIcon, PaletteIcon, TypeOutline, Shell, Notebook  } from 'lucide-react'

export const CartPage: React.FC = () => {
  const { cart, loading, error, changeQuantity, removeLine } = useCart()
  const { t } = useLanguage()

  if (loading) return <p>Cargando carrito...</p>;
  if (error) return <p>Error al cargar el carrito.</p>;
  if (!cart || cart.totalQuantity === 0) {
    return (
      <main>
        <h1>Carrito</h1>
        <p>Tu carrito está vacío.</p>
        <Link to="/">Volver a la tienda</Link>
      </main>
    );
  }

  const lines = cart.lines?.edges ?? []

  return (
    <section className="container px-4 py-12 md:py-16">
      <header className="text-center mb-8">
        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
          {t('cart.title')}
        </h1>
      </header>

      <ul className='space-y-6'>
        {lines.map((edges) => {
          const line = edges.node
          const merch = line.merchandise
          const variant = merch?.__typename === 'ProductVariant' ? merch : null
          const product = variant?.product
          const image = product?.featuredImage
          const price = line.merchandise.price.amount

          const attrs = line.attributes ?? [];
          const babyName = attrs.find((a) => a.key === 'baby_name')?.value
          const colorName = attrs.find((a) => a.key === 'selected_color')?.value
          const fontName = attrs.find((a) => a.key === 'selected_font')?.value
          const fabricName = attrs.find((a) => a.key === 'selected_fabric')?.value
          const observations = attrs.find((a) => a.key === 'observations')?.value

          return (
            <li key={line.id} className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[240px_1fr_auto] gap-x-8 rounded-2xl bg-gray-light/50 border border-border overflow-hidden'>
              {image && (
                <figure className='sm:max-w-60 lg:aspect-square rounded-l-2xl bg-muted border-r border-border shrink-0'>
                  <img
                    src={image.url}
                    className='size-full object-cover'
                    alt={image.altText ?? product?.title}
                  />
                </figure>
              )}

              <div className='space-y-4 grow px-6 sm:px-0 py-6'>
                {product && (
                  <h2 className='text-2xl md:text-3xl lg:text-3xl font-semibold text-balance'>
                    <Link to={`/producto/${product.handle}`}>{product.title}</Link>
                  </h2>
                )}
                {variant && variant.title !== 'Default Title' && (
                  <p className='text-muted-foreground'>
                    {t('cart.variation')} {variant.title}
                  </p>
                )}

                <div className='w-fit text-mint-dark'>
                  {babyName && (
                    <p className='flex items-center gap-1 text-sm'>
                      <BabyIcon className='size-4' />
                      {t('cart.babyName')} {babyName}
                    </p>
                  )}
                  {colorName && (
                    <p className='flex items-center gap-1 text-sm'>
                      <PaletteIcon className='size-4' />
                      {t('cart.color')} {t(`color.${colorName}`)}
                    </p>
                  )}
                  {fontName && (
                    <p className='flex items-center gap-1 text-sm'>
                      <TypeOutline className='size-4' />
                      {t('cart.font')} {fontName}
                    </p>
                  )}
                  {fabricName && (
                    <p className='flex items-center gap-1 text-sm'>
                      <Shell className='size-4' />
                      {t('cart.fabric')} {fabricName}
                    </p>
                  )}
                  {observations && (
                    <p className='flex items-center gap-1 text-sm'>
                      <Notebook className='size-4' />
                      {t('cart.observations')} {observations}
                    </p>
                  )}
                </div>
              </div>

              <div className='col-span-full md:col-auto content-end py-6 px-8 bg-mint-light/20 border-t md:border-t-0 md:border-l border-border text-center'>
                <p className='text-[26px] font-semibold text-primary'>
                  {formatPrice(parseInt(price ?? 0, 10) * line.quantity)}
                </p>

                <div className='flex justify-between my-5 border border-border rounded-3xl overflow-hidden'>
                  <button
                    type="button"
                    disabled={line.quantity === 1}
                    className='size-10 flex items-center justify-center cursor-pointer disabled:text-gray-medium disabled:cursor-default  hover:bg-mint-dark hover:text-muted transition-all'
                    onClick={() => changeQuantity(line.id, Math.max(1, line.quantity - 1))}
                  >
                    <Minus />
                  </button>

                  <span className='flex items-center border-x border-border px-4'>
                    {line.quantity}
                  </span>

                  <button
                    type="button"
                    className='size-10 flex items-center justify-center cursor-pointer hover:bg-mint-dark hover:text-muted transition-all'
                    onClick={() => changeQuantity(line.id, line.quantity + 1)}
                  >
                    <PlusIcon />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={() => removeLine(line.id)}
                  className='cursor-pointer transition-all text-gray-medium hover:text-foreground'
                >
                  <Trash2Icon className='size-4' />
                </button>
              </div>
            </li>
          )
        })}
      </ul>

      <section className='space-y-4 mt-10 text-right'>
        {/* <p>
          Subtotal: {cart.cost.subtotalAmount.amount}
        </p> */}
        <p className='text-2xl font-bold text-mint-dark'>
          Total: {formatPrice(parseInt(cart.cost.totalAmount.amount))}
        </p>

        {cart.checkoutUrl && (
          <a
            href={cart.checkoutUrl}
            className='inline-flex items-center justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent cursor-pointer h-11 rounded-md px-10 w-fit bg-primary text-primary-foreground text-xl font-bold py-6'
          >
            {t('cart.checkout')}
          </a>
        )}
      </section>
    </section>
  )
}
