"use client"

import VideoHero from "./video-hero"

export default function HeroSection() {
  return (
    <>
      {/* Mobile: Full-screen video hero like Cheerble */}
      <section className="relative md:hidden w-full h-[100svh] overflow-hidden bg-neutral-900">
        {/* Video Background */}
        <VideoHero
          src="/hoeme1.mp4"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Content overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6 pb-10 z-10">
          <h1 className="text-3xl font-semibold text-white leading-tight tracking-tight mb-2">
            Smart Interactive Ball
          </h1>
          <p className="text-white/70 text-sm mb-6">
            Le jouet intelligent pour chats curieux
          </p>
          <a
            href="/produits/smart-interactive-ball"
            className="inline-block bg-brand text-white font-medium px-8 py-3.5 rounded-full text-sm tracking-wide hover:bg-brand-dark transition-all"
          >
            SHOP NOW
          </a>
        </div>

        {/* Dots indicator */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          <span className="w-1.5 h-1.5 rounded-full bg-white" />
          <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
          <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
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
            <div className="relative w-full aspect-[4/5] max-w-xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-neutral-900">
              <VideoHero
                src="/hoeme1.mp4"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
