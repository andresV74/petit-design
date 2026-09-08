import { shopifyClient } from './shopifyClient';
import { GIRL_FABRICS_LIST_QUERY } from './queries/girlFabrics';

export async function getGirlFabrics() {
  const res = await shopifyClient.request(GIRL_FABRICS_LIST_QUERY);
  return res.data.metaobjects;
}