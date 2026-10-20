import { useEffect, useState } from 'react'
import { shopifyClient } from '../api/shopifyClient.ts'
import { COLLECTIONS_MENU_QUERY } from '../api/queries/collectionsMenu.ts'

type CollectionResource = {
  id: string
  handle: string
}

export type CollectionMenuItem = {
  id: string
  title: string
  resource: CollectionResource | null
  items?: CollectionMenuItem[]
}

type CollectionsMenu = {
  id: string
  title: string
  resource: {
    id: string
    handle: string
  }
  items: CollectionMenuItem[]
}

export function useCollectionsMenu(handle = "storefront-menu") {
  const [menu, setMenu] = useState<CollectionsMenu[] | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<unknown | null>(null)

  useEffect(() => {
    let cancelled = false

    async function loadMenu() {
      setLoading(true)
      setError(null)
      setMenu(null)

      try {
        const response = await shopifyClient.request(COLLECTIONS_MENU_QUERY, {
            variables: { handle },
        })

        if(!cancelled) {
          const items = response?.data?.menu.items ?? []
          setMenu(items)
        }
      } catch (err) {
        if (!cancelled) setError(err)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    loadMenu();
    return () => {
      cancelled = true
    }
  }, [handle]);

  return {
    menu,
    loading,
    error,
  }
}