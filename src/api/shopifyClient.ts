import { createStorefrontApiClient } from '@shopify/storefront-api-client'

const shopDomain = import.meta.env.VITE_SHOPIFY_STORE_DOMAIN
const storefrontToken = import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN
const apiVersion = '2026-07'

export const shopifyClient = createStorefrontApiClient({
  storeDomain: shopDomain,
  apiVersion,
  publicAccessToken: storefrontToken,
})