"use client"

import { useState, useRef, useCallback } from "react"
import VideoHero from "./video-hero"

const slides = [
  {
    video: "https://res.cloudinary.com/dhhdhilja/video/upload/v1770517656/purrball/hoeme1.mp4",
    title: "Smart Interactive Ball",
    subtitle: "Le jouet intelligent pour chats curieux",
    href: "/produits/smart-interactive-ball",
  },
]

export default function HeroSection() {
  const slide = slides[0]

  return (
    <>
      {/* Mobile: Full-screen video hero */}
      <section className="relative md:hidden w-full h-[100svh] overflow-hidden bg-neutral-900">
        {/* Video Background */}
        <VideoHero
          src={slide.video}
          className="absolute inset-0 w-full h-full object-cover"
          preload="metadata"
          poster="https://res.cloudinary.com/dhhdhilja/image/upload/v1770517604/purrball/Section2_-_Featured_Cat_Toy.jpg.webp"
        />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-[2]" />

        {/* Content overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6 pb-10 z-10">
          <h1 className="text-3xl font-semibold text-white leading-tight tracking-tight mb-2">
            {slide.title}
          </h1>
          <p className="text-white/70 text-sm mb-6">
            {slide.subtitle}
          </p>
          <a
            href={slide.href}
            className="inline-block bg-brand text-white font-medium px-8 py-3.5 rounded-full text-sm tracking-wide hover:bg-brand-dark transition-all"
          >
            SHOP NOW
          </a>
        </div>
      </section>

      {/* Desktop: Side-by-side layout with video */}
      <section className="relative hidden md:block bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 flex flex-row items-center gap-12">
          {/* Content */}
          <div className="flex-1 text-left">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-400 mb-4">
              Conçu pour les chats curieux
            </p>
            <h1 className="text-4xl md:text-6xl font-semibold leading-[1.1] tracking-tight text-neutral-900 mb-6">
              Le jouet que votre chat mérite.
            </h1>
            <p className="text-lg md:text-xl text-neutral-500 leading-relaxed mb-8 max-w-lg">
              Stimulez l'instinct naturel de votre félin avec notre balle interactive intelligente. Livraison rapide partout au Canada.
            </p>
            
            <div className="flex items-start gap-4">
              <a
                href="/produits/smart-interactive-ball"
                className="bg-brand hover:bg-brand-dark text-white font-medium px-8 py-3.5 rounded-full transition-all hover:scale-[1.02] text-sm tracking-wide"
              >
                Acheter — CA$4.99
              </a>
              <a
                href="/produits"
                className="text-neutral-500 hover:text-neutral-900 font-medium px-8 py-3.5 text-sm transition-colors"
              >
                En savoir plus →
              </a>
            </div>
          </div>

          {/* Video on desktop */}
          <div className="flex-1 relative">
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl bg-neutral-900">
              <VideoHero
                src={slide.video}
                className="absolute inset-0 w-full h-full object-cover"
                preload="metadata"
                poster="https://res.cloudinary.com/dhhdhilja/image/upload/v1770517604/purrball/Section2_-_Featured_Cat_Toy.jpg.webp"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
