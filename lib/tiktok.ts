// TikTok Pixel & Events API helper
// Pixel ID: D66J9U3C77U9CBKPQFLG
// Access Token: 9bff125c488ee787aea284ae7d45f3c23dda9e3a

const PIXEL_ID = 'D66J9U3C77U9CBKPQFLG'

// Client-side: fire TikTok Pixel event
export function ttqTrack(eventName: string, params?: Record<string, any>) {
  if (typeof window === 'undefined') return
  const ttq = (window as any).ttq
  if (!ttq) return
  if (params) {
    ttq.track(eventName, params)
  } else {
    ttq.track(eventName)
  }
}

// Client-side: identify user for better matching
export function ttqIdentify(params: { email?: string; phone?: string; external_id?: string }) {
  if (typeof window === 'undefined') return
  const ttq = (window as any).ttq
  if (!ttq) return
  ttq.identify(params)
}

// Server-side: send event via Events API (called from API route)
export async function sendTikTokServerEvent(event: {
  event: string
  event_id?: string
  timestamp?: string
  context?: {
    user_agent?: string
    ip?: string
    page?: {
      url?: string
      referrer?: string
    }
    user?: {
      email?: string
      phone?: string
      external_id?: string
      ttclid?: string
    }
  }
  properties?: {
    value?: number
    currency?: string
    content_id?: string
    content_type?: string
    content_name?: string
    content_category?: string
    contents?: Array<{
      content_id?: string
      content_type?: string
      content_name?: string
      price?: number
      quantity?: number
    }>
    description?: string
  }
}) {
  const ACCESS_TOKEN = process.env.TIKTOK_ACCESS_TOKEN || '9bff125c488ee787aea284ae7d45f3c23dda9e3a'

  const payload = {
    pixel_code: PIXEL_ID,
    event: event.event,
    event_id: event.event_id || `${event.event}_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    timestamp: event.timestamp || new Date().toISOString(),
    context: event.context || {},
    properties: event.properties || {},
  }

  try {
    const res = await fetch('https://business-api.tiktok.com/open_api/v1.3/event/track/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Token': ACCESS_TOKEN,
      },
      body: JSON.stringify({
        pixel_code: PIXEL_ID,
        event: payload.event,
        event_id: payload.event_id,
        timestamp: payload.timestamp,
        context: payload.context,
        properties: payload.properties,
      }),
    })
    const data = await res.json()
    return data
  } catch (error) {
    console.error('TikTok Events API error:', error)
    return null
  }
}
