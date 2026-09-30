const WHATSAPP_NUMBER = '573218813416'
// const WHATSAPP_NUMBER_2 = '573105453701';

const DEFAULT_MESSAGE_ES = '¡Hola! Me interesa conocer más sobre los productos en la página web!';
const DEFAULT_MESSAGE_EN = "Hi! I'm interested in learning more about the products on the website!";

export function storeUtmParams() {
  const params = new URLSearchParams(window.location.search)
  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']
  const utm: Record<string, string> = {}
  let hasUtm = false
  utmKeys.forEach(key => {
    const value = params.get(key)
    if (value) {
      utm[key] = value
      hasUtm = true
    }
  });
  if (hasUtm) {
    sessionStorage.setItem('petit_utm', JSON.stringify(utm))
  }
}

export function getWhatsAppUrl(options?: {
  message?: string
  language?: 'es' | 'en'
  source?: string
  whatsAppNumber?: string
}): string {
  const lang = options?.language || 'es'
  const baseMessage = options?.message || (lang === 'es' ? DEFAULT_MESSAGE_ES : DEFAULT_MESSAGE_EN)

  const fullMessage = baseMessage

  const url = new URL('https://api.whatsapp.com/send')
  url.searchParams.set('phone', options?.whatsAppNumber || WHATSAPP_NUMBER)
  url.searchParams.set('text', fullMessage)

  return url.toString()
}

export function getWhatsAppNumber(): string {
  return WHATSAPP_NUMBER
}
