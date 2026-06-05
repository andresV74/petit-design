import { useCallback } from 'react';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

const GA_EVENT_MAP: Record<string, string> = {
  'ViewContent': 'view_item',
  'Lead': 'generate_lead',
  'CustomizeProduct': 'customize_product',
  'Search': 'search',
  'FormSubmit': 'form_submit',
};

function sendGa4Event(eventName: string, params: Record<string, unknown>) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, {
      send_to: import.meta.env.VITE_GA_MEASUREMENT_ID,
      transport_type: 'beacon',
      ...params,
    });
  }
}

function sendMetaPixel(event: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', event, params);
  }
}

function trackEvent(event: string, params?: Record<string, unknown>) {
  if (typeof window === 'undefined') return;

  sendMetaPixel(event, params);

  const gaEvent = GA_EVENT_MAP[event] || event.toLowerCase();
  const gaParams: Record<string, unknown> = {};
  if (params) {
    if (params.content_name) gaParams.item_name = params.content_name;
    if (params.content_category) gaParams.item_category = params.content_category;
    if (params.content_ids) gaParams.item_id = (params.content_ids as string[])[0];
    if (params.currency) gaParams.currency = params.currency;
    if (params.value) gaParams.value = params.value;
    if (params.content_type) gaParams.content_type = params.content_type;
    if (params.search_string) gaParams.search_term = params.search_string;
    if (params.form_name) gaParams.form_name = params.form_name;
    if (params.form_destination) gaParams.form_destination = params.form_destination;
    if (params.event_category) gaParams.event_category = params.event_category;
    if (params.event_label) gaParams.event_label = params.event_label;
  }
  sendGa4Event(gaEvent, gaParams);
}

function trackWhatsAppClick(label: string, extraParams?: Record<string, unknown>) {
  if (typeof window === 'undefined') return;

  sendMetaPixel('Contact', {
    content_name: label,
    content_category: extraParams?.content_category || 'WhatsApp',
    ...extraParams,
  });

  sendGa4Event('whatsapp_click', {
    event_category: 'engagement',
    event_label: label,
    link_url: 'https://wa.me/573105453701',
    ...(extraParams?.content_ids ? { item_id: (extraParams.content_ids as string[])[0] } : {}),
    ...(extraParams?.currency ? { currency: extraParams.currency } : {}),
    ...(extraParams?.value ? { value: extraParams.value } : {}),
  });
}

function trackFormSubmission(formName: string, extraParams?: Record<string, unknown>) {
  if (typeof window === 'undefined') return;

  sendMetaPixel('Lead', {
    content_name: formName,
    content_category: extraParams?.content_category || 'Form',
  });

  sendGa4Event('generate_lead', {
    event_category: 'conversion',
    event_label: formName,
    form_name: formName,
    contact_method: 'whatsapp',
    ...(extraParams?.currency ? { currency: extraParams.currency } : {}),
    ...(extraParams?.value ? { value: extraParams.value } : {}),
  });

  sendGa4Event('form_submit', {
    event_category: 'form',
    event_label: formName,
    form_name: formName,
    form_destination: 'whatsapp',
  });
}

export function useMetaPixel() {
  const trackPageView = useCallback(() => {
    trackEvent('PageView');
  }, []);

  const trackViewContent = useCallback((params: {
    content_ids?: string[];
    content_name?: string;
    content_type?: string;
    content_category?: string;
    currency?: string;
    value?: number;
  }) => {
    trackEvent('ViewContent', params);
  }, []);

  const trackCustomizeProduct = useCallback((params?: {
    content_name?: string;
    content_category?: string;
    content_ids?: string[];
  }) => {
    trackEvent('CustomizeProduct', params);
  }, []);

  const trackSearch = useCallback((params?: {
    search_string?: string;
    content_category?: string;
  }) => {
    trackEvent('Search', params);
  }, []);

  return {
    trackPageView,
    trackViewContent,
    trackCustomizeProduct,
    trackSearch,
  };
}

export { trackEvent, trackWhatsAppClick, trackFormSubmission };
