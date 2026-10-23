import { useEffect, useState } from 'react'
import { getProductByHandle } from '../api/getProductByHandle'
import type { Product } from '@/types/generalTypes.ts'

export function useProduct(handle: string | undefined) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    if (!handle) return;

    let cancelled = false;

    async function run() {
      setLoading(true);
      try {
        const data = await getProductByHandle(handle);
        if (!cancelled) setProduct(data);
      } catch (err) {
        if (!cancelled) setError(err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    run();
    return () => {
      cancelled = true;
    };
  }, [handle]);

  return { product, loading, error };
}
