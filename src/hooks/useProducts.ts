import { useEffect, useState } from 'react'
import { shopifyClient } from '../api/shopifyClient.ts'
import { PRODUCTS_LIST_QUERY } from '../api/queries/products.ts'
import type { ProductNew } from '@/types/generalTypes.ts'

export function useProducts(first = 40) {
  const [data, setData] = useState<ProductNew[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<unknown>(null)

  useEffect(() => {
    let cancelled = false

    async function fetchProducts() {
      setLoading(true)
      try {
        const response = await shopifyClient.request(PRODUCTS_LIST_QUERY, {
          variables: { first },
        })

        if (!cancelled) {
          const edges = response?.data?.products?.edges ?? []
          setData(edges.map((e: { node: ProductNew }) => e.node))
        }
      } catch (err) {
        if (!cancelled) setError(err)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchProducts()
    return () => {
      cancelled = true
    };
  }, [first])

  return { products: data, loading, error }
}