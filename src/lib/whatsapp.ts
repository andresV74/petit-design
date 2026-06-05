const WHATSAPP_NUMBER = '573105453701';

const DEFAULT_MESSAGE_ES = '¡Hola! Me interesa conocer más sobre los productos en la página web!';
const DEFAULT_MESSAGE_EN = "Hi! I'm interested in learning more about the products on the website!";

function getUtmParams(): Record<string, string> {
  const params = new URLSearchParams(window.location.search);
  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
  const utm: Record<string, string> = {};
  utmKeys.forEach(key => {
    const value = params.get(key);
    if (value) utm[key] = value;
  });

  const stored = sessionStorage.getItem('petit_utm');
  if (stored) {
    try {
      const storedUtm = JSON.parse(stored);
      utmKeys.forEach(key => {
        if (!utm[key] && storedUtm[key]) utm[key] = storedUtm[key];
      });
    } catch {
			console.warn('Failed to parse stored UTM params');
		}
  }

  return utm;
}

export function storeUtmParams() {
  const params = new URLSearchParams(window.location.search);
  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
  const utm: Record<string, string> = {};
  let hasUtm = false;
  utmKeys.forEach(key => {
    const value = params.get(key);
    if (value) {
      utm[key] = value;
      hasUtm = true;
    }
  });
  if (hasUtm) {
    sessionStorage.setItem('petit_utm', JSON.stringify(utm));
  }
}

function buildRefCode(source?: string, utm?: Record<string, string>): string {
  const parts: string[] = [];
  if (source) parts.push(source);
  if (utm?.utm_source) parts.push(utm.utm_source);
  if (utm?.utm_medium) parts.push(utm.utm_medium);
  if (utm?.utm_campaign) parts.push(utm.utm_campaign);
  if (parts.length === 0) return '';
  return parts.join('/');
}

export function getWhatsAppUrl(options?: {
  message?: string;
  language?: 'es' | 'en';
  source?: string;
}): string {
  const lang = options?.language || 'es';
  const baseMessage = options?.message || (lang === 'es' ? DEFAULT_MESSAGE_ES : DEFAULT_MESSAGE_EN);

  const utm = getUtmParams();
  const ref = buildRefCode(options?.source, utm);

  let fullMessage = baseMessage;
  if (ref) {
    fullMessage += `\n\n[ref: ${ref}]`;
  }

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(fullMessage)}`;
}

export function getWhatsAppNumber(): string {
  return WHATSAPP_NUMBER;
}
