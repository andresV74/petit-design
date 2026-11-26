import { useEffect, useState } from 'react'
import { shopifyClient } from '../api/shopifyClient.ts'
import { SEARCH_PRODUCTS } from '../api/queries/searchProducts'
import type { Product } from '@/types/generalTypes.ts'

type searchTermType = string | null | undefined

export function useProductSearch(searchTerm: searchTermType) {
  const [products, setProducts] = useState<Product[] | null>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<unknown | null>(null)

  useEffect(() => {
		let cancelled = false
    const words = searchTerm
			?.normalize('NFD')
			.replace(/[\u0300-\u036f]/g, '')
			.match(/[\p{L}\p{N}]+/gu) ?? []

		async function loadProducts() {
			setProducts([])
			setError(null)
			setLoading(true)

			try {
				const query = words
					.map((word) => `(title:${word}* OR tag:${word}*)`)
					.join(" ")

				const response = await shopifyClient.request(SEARCH_PRODUCTS, {
					variables: { query, first: 20 },
				})

				if (!cancelled) {
					const result = await response.data.products.nodes ?? []
					setProducts(result)
				}
			} catch (err) {
				if (!cancelled) setError(err)
			} finally {
				if (!cancelled) setLoading(false)
			}
		}

		loadProducts()
    return () => {
      cancelled = true
    };
  }, [searchTerm]);

  return { products, loading, error };
}
