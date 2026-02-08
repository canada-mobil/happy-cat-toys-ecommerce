"use client"

import { useRef, useState, useCallback } from "react"
import { Play } from "lucide-react"

export default function LovedByFamilies() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = useCallback(() => {
    if (!videoRef.current) return
    if (isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
    } else {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }, [isPlaying])

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight mb-4">
          Loved by Pet Families Worldwide
        </h2>
        <p className="text-neutral-500 text-sm md:text-base mb-8 max-w-xl mx-auto">
          Découvrez pourquoi des milliers de familles font confiance à Purrball pour le bonheur de leurs compagnons.
        </p>

        <div
          className="relative rounded-2xl overflow-hidden bg-neutral-900 cursor-pointer group max-w-sm mx-auto"
          onClick={handlePlay}
        >
          <video
            ref={videoRef}
            src="https://res.cloudinary.com/dhhdhilja/video/upload/v1770517796/purrball/tiktok1.mp4"
            className="w-full aspect-[9/16] object-cover"
            playsInline
            preload="metadata"
            onEnded={() => setIsPlaying(false)}
          />
          {!isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
              <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Play className="w-6 h-6 text-neutral-900 ml-1" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
