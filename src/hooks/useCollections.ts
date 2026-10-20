import { useEffect, useState } from 'react'
import { shopifyClient } from '../api/shopifyClient.ts'
import { COLLECTIONS_LIST_QUERY } from '../api/queries/collections.ts'

type Collection = {
  id: string
  title: string
  description: string
  handle: string
  image: {
    altText: string
    url: string
  }
}

export function useCollections(first = 5) {
  const [data, setData] = useState<Collection[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<unknown>(null)

  useEffect(() => {
    let cancelled = false

    async function fetchCollections() {
      setLoading(true)
      try {
        const response = await shopifyClient.request(COLLECTIONS_LIST_QUERY, {
          variables: { first },
        })

        if (!cancelled) {
          const edges = response?.data?.collections?.edges ?? []
          setData(edges.map((e: { node: Collection }) => e.node))
        }
      } catch (err) {
        if (!cancelled) setError(err)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchCollections()
    return () => {
      cancelled = true
    }
  }, [first])

  return { collections: data, loading, error }
}