// Meta Pixel helper functions

// Client-side Meta Pixel tracking
export function fbqTrack(eventName: string, params?: Record<string, any>) {
  if (typeof window === 'undefined') return
  const fbq = (window as any).fbq
  if (!fbq) return
  if (params) {
    fbq('track', eventName, params)
  } else {
    fbq('track', eventName)
  }
}

// Client-side Meta Pixel identification
export function fbqIdentify(params: { email?: string; phone?: string; external_id?: string }) {
  if (typeof window === 'undefined') return
  const fbq = (window as any).fbq
  if (!fbq) return
  fbq('init', '1215963014054108', params)
}

// Server-side Conversions API (optional - for advanced matching)
export async function sendMetaServerEvent(event: {
  event_name: string
  event_time: number
  action_source: string
  user_data?: {
    email?: string
    phone?: string
    external_id?: string
  }
  custom_data?: {
    value?: number
    currency?: string
    content_ids?: string[]
    content_type?: string
    contents?: Array<{
      id: string
      quantity: number
      item_price: number
    }>
  }
}) {
  try {
    // This would require Meta Conversions API setup
    // For now, we're just using client-side pixel
    console.log('Meta event:', event)
  } catch (error) {
    console.error('Meta event error:', error)
  }
}
