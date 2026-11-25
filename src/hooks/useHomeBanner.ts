import { useEffect, useState } from 'react'
import { shopifyClient } from '../api/shopifyClient'
import { HOME_BANNER_QUERY } from '../api/queries/homeBanner.ts'

interface HomeBanner {
  id: string
  imagen: {
    reference: {
      __typename: string
      image: {
        url: string
      }
    }
  }
}

export function useHomeBanner(first = 10) {
  const [imagesData, setImagesData] = useState<HomeBanner[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<unknown>(null)

  useEffect(() => {
    let cancelled = false;

    async function run() {
      setLoading(true)
      try {
        const res = await shopifyClient.request(HOME_BANNER_QUERY, {
          variables: { first }
        })
        const nodes = res.data.metaobjects?.nodes ?? []
        if (!cancelled) setImagesData(nodes)
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
  }, [first])

  return { imagesData, loading, error }
}
