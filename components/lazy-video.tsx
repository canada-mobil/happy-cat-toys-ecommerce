"use client"

import { useState, useRef } from "react"
import { Play } from "lucide-react"

interface LazyVideoProps {
  src: string
  poster?: string
  className?: string
  containerClassName?: string
}

export default function LazyVideo({ src, poster, className = "", containerClassName = "" }: LazyVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlay = () => {
    setIsPlaying(true)
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch(() => {})
      }
    }, 100)
  }

  if (isPlaying) {
    return (
      <div className={containerClassName}>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className={className}
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>
    )
  }

  return (
    <div className={`${containerClassName} relative cursor-pointer group`} onClick={handlePlay}>
      {poster ? (
        <img src={poster} alt="Video thumbnail" className={className} loading="lazy" />
      ) : (
        <div className={`${className} bg-neutral-900`} />
      )}
      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
        <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
          <Play className="w-7 h-7 text-neutral-900 ml-1" />
        </div>
      </div>
    </div>
  )
}
