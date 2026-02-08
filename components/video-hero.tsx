"use client"

import { useRef, useEffect } from "react"

interface VideoHeroProps {
  src: string
  poster?: string
  className?: string
  preload?: "auto" | "metadata" | "none"
}

export default function VideoHero({ src, poster, className = "", preload = "auto" }: VideoHeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {})
    }
  }, [])

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
