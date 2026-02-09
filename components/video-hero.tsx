"use client"

import { useRef, useEffect, useCallback } from "react"

interface VideoHeroProps {
  src: string
  poster?: string
  className?: string
  preload?: "auto" | "metadata" | "none"
}

export default function VideoHero({ src, poster, className = "", preload = "auto" }: VideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  const forcePlay = useCallback(() => {
    const video = videoRef.current
    if (!video) return
    video.muted = true
    const p = video.play()
    if (p) p.catch(() => {})
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Try to play immediately
    forcePlay()

    // Also try on canplay / loadeddata for slower connections
    video.addEventListener('canplay', forcePlay)
    video.addEventListener('loadeddata', forcePlay)

    // Fallback: retry on user interaction (iOS sometimes needs this)
    const onInteraction = () => {
      forcePlay()
      document.removeEventListener('touchstart', onInteraction)
      document.removeEventListener('click', onInteraction)
    }
    document.addEventListener('touchstart', onInteraction, { passive: true })
    document.addEventListener('click', onInteraction)

    // Visibility change: resume when tab becomes visible
    const onVisibility = () => {
      if (!document.hidden) forcePlay()
    }
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      video.removeEventListener('canplay', forcePlay)
      video.removeEventListener('loadeddata', forcePlay)
      document.removeEventListener('touchstart', onInteraction)
      document.removeEventListener('click', onInteraction)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [forcePlay])

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload={preload}
      poster={poster}
      className={className}
    >
      <source src={src} type="video/mp4" />
    </video>
  )
}
