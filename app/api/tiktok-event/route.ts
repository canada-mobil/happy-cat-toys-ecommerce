import { NextRequest, NextResponse } from 'next/server'

const PIXEL_ID = 'D66J9U3C77U9CBKPQFLG'
const ACCESS_TOKEN = process.env.TIKTOK_ACCESS_TOKEN || '9bff125c488ee787aea284ae7d45f3c23dda9e3a'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { event, event_id, properties, user } = body

    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || req.headers.get('x-real-ip') || ''
    const userAgent = req.headers.get('user-agent') || ''
    const referer = req.headers.get('referer') || ''

    const payload = {
      pixel_code: PIXEL_ID,
      event: event,
      event_id: event_id || `${event}_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      timestamp: new Date().toISOString(),
      context: {
        user_agent: userAgent,
        ip: ip,
        page: {
          url: referer,
          referrer: referer,
        },
        user: {
          ...(user?.email && { email: user.email }),
          ...(user?.phone && { phone: user.phone }),
          ...(user?.external_id && { external_id: user.external_id }),
          ...(user?.ttclid && { ttclid: user.ttclid }),
        },
      },
      properties: properties || {},
    }

    const res = await fetch('https://business-api.tiktok.com/open_api/v1.3/event/track/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Token': ACCESS_TOKEN,
      },
      body: JSON.stringify(payload),
    })

    const data = await res.json()
    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('TikTok event API error:', error)
    return NextResponse.json({ success: false, error: 'Failed to send event' }, { status: 500 })
  }
}
