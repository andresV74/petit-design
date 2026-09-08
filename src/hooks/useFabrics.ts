import { useEffect, useState } from 'react'
import { shopifyClient } from '../api/shopifyClient'

interface FabricsFull {
  id: string
  fields: {
    key: string
    value: string
    reference: {
      __typename: string
      id: string
      type: string
      image: {
        url: string
        altText: string
      }
    }
  }[]
}

export function useFabrics(first = 60, query: string) {
  const [fabrics, setFabrics] = useState<FabricsFull[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<unknown>(null)

  useEffect(() => {
    let cancelled = false;

    async function run() {
      setLoading(true)
      try {
        const res = await shopifyClient.request(query, {
					variables: { fabricsFirst: first },
				})
        const nodes = res.data.metaobjects?.nodes ?? []
        if (!cancelled) setFabrics(nodes)
      } catch (err) {
        if (!cancelled) setError(err)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    run();
    return () => {
      cancelled = true
    };
  }, [first, query])

  return { fabrics, loading, error }
}