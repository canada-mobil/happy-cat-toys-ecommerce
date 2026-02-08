import { NextRequest, NextResponse } from 'next/server'

const TURNSTILE_SECRET_KEY = process.env.TURNSTILE_SECRET_KEY || '0x4AAAAAACZT4y8ym1l6A5WszqIVxBYw1lc'

export async function POST(req: NextRequest) {
  try {
    const { token } = await req.json()

    if (!token) {
      return NextResponse.json({ success: false, error: 'Missing token' }, { status: 400 })
    }

    const formData = new URLSearchParams()
    formData.append('secret', TURNSTILE_SECRET_KEY)
    formData.append('response', token)
    formData.append('remoteip', req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || '')

    const result = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData.toString(),
    })

    const outcome = await result.json()

    if (outcome.success) {
      return NextResponse.json({ success: true })
    } else {
      return NextResponse.json({ success: false, error: 'Verification failed' }, { status: 403 })
    }
  } catch (e) {
    console.error('Turnstile verification error:', e)
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 })
  }
}
