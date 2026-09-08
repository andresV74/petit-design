import { shopifyClient } from './shopifyClient'
import { PRODUCT_PAGE_QUERY } from './queries/product'

export async function getProductByHandle(handle: string | undefined) {
  const response = await shopifyClient.request(PRODUCT_PAGE_QUERY, {
    variables: { handle },
  });
  return response.data.product
}
