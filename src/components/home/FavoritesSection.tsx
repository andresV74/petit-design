import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { useProducts } from '@/hooks/useProducts.ts'
import { ProductCard } from '@/components/products/ProductCard.tsx'
import { useLanguage } from '@/lib/i18n'
import { Badge } from '@/components/ui/badge.tsx'
import { LoadingIndicator } from '@/components/ui/loadingIndicator.tsx'
import { ErrorMessage } from '@/components/ui/errorMessage.tsx'
import type { ImportsListProps } from '@/types/generalTypes.ts'

const PER_VIEW_QUERIES = [
  { query: '(min-width: 1280px)', perView: 4 },
  { query: '(min-width: 1024px)', perView: 3 },
  { query: '(min-width: 640px)', perView: 2 },
]

function getPerView() {
  if (typeof window === 'undefined') return 1

  return PER_VIEW_QUERIES.find(({ query }) => window.matchMedia(query).matches)?.perView ?? 1
}

export function FavoritesSection({ first = 80 }: ImportsListProps) {
  const { t, language } = useLanguage()
  const { products, loading, error } = useProducts(first)

  const trackRef = useRef<HTMLDivElement | null>(null)
  const [perView, setPerView] = useState(getPerView)
  const [page, setPage] = useState(0)

  useEffect(() => {
    const mediaQueries = PER_VIEW_QUERIES.map(({ query }) => window.matchMedia(query))
    const handleChange = () => setPerView(getPerView())

    mediaQueries.forEach((mediaQuery) => mediaQuery.addEventListener('change', handleChange))

    return () => {
      mediaQueries.forEach((mediaQuery) => mediaQuery.removeEventListener('change', handleChange))
    }
  }, [])

  const featured = products?.filter((product) => product.isFeatured?.value === 'true') ?? []

  // Number of reachable positions: no wrap-around, the last page stops at the end
  const pageCount =
    featured.length > perView
      ? Math.round((featured.length - perView) / perView) + 1
      : 1
  const currentPage = Math.min(page, pageCount - 1)
  const canPrev = currentPage > 0
  const canNext = currentPage < pageCount - 1

  const handleScroll = () => {
    const track = trackRef.current
    if (!track?.clientWidth) return

    setPage(Math.round(track.scrollLeft / track.clientWidth))
  }

  const goToPage = (targetPage: number) => {
    const track = trackRef.current
    if (!track) return

    track.scrollTo({ left: targetPage * track.clientWidth, behavior: 'smooth' })
  }

  if (loading) return <LoadingIndicator type="line-simple" size="lg" label={t('catalog.loading')} />
  if (error) return <ErrorMessage message={t('catalog.error')} />

  return (
    <section className="py-16 md:py-24 bg-gray-light/50 overflow-hidden">
      <div className="container px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 gap-2 px-4 py-2 bg-mint/20 text-mint-dark border-mint/30">
            <Star className="h-4 w-4 fill-current" />
            {t('favorites.badge')}
          </Badge>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">
            {t('favorites.title')}
          </h2>
        </div>

        {/* Favorites Carousel */}
        {featured.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              {t('catalog.noProducts')}
            </p>
            <Link
              to="/catalogo"
              className="inline-block mt-4 text-mint hover:text-mint-dark underline"
            >
              {t('catalog.allProducts')}
            </Link>
          </div>
        ) : (
          <div className="relative">
            <div className="-mx-3 overflow-hidden">
              <div
                ref={trackRef}
                onScroll={handleScroll}
                className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-none] [&::-webkit-scrollbar]:hidden"
              >
                {featured.map((card) => (
                  <div
                    key={card.id}
                    className="w-full shrink-0 snap-start px-3 sm:w-1/2 lg:w-1/3 xl:w-1/4"
                  >
                    <ProductCard product={card} language={language} />
                  </div>
                ))}
              </div>
            </div>

            {/* Arrows */}
            {pageCount > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => goToPage(currentPage - 1)}
                  disabled={!canPrev}
                  aria-label={t('favorites.prev')}
                  className="absolute left-1 top-1/3 z-10 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-border bg-background/90 shadow-md transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-background/90 disabled:hover:text-foreground"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => goToPage(currentPage + 1)}
                  disabled={!canNext}
                  aria-label={t('favorites.next')}
                  className="absolute right-1 top-1/3 z-10 flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-border bg-background/90 shadow-md transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-background/90 disabled:hover:text-foreground"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}

            {/* Bullets */}
            {pageCount > 1 && (
              <div className="mt-8 flex flex-wrap justify-center gap-2">
                {Array.from({ length: pageCount }, (_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => goToPage(index)}
                    aria-label={t('favorites.goTo').replace('{page}', String(index + 1))}
                    aria-current={currentPage === index}
                    className={`h-2 cursor-pointer rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                      currentPage === index
                        ? 'w-5 bg-primary'
                        : 'w-2 bg-primary/30 hover:bg-primary/60'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
