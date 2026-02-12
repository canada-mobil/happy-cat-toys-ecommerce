"use client"

import Image from "next/image"
import { useI18n } from "@/lib/i18n-context"

export default function HeroSection() {
  const { t, formatPrice, locale } = useI18n()

  return (
    <>
      {/* Mobile: Full-screen GIF hero */}
      <section className="relative md:hidden w-full h-[100svh] overflow-hidden bg-neutral-900">
        {/* Static poster for instant load */}
        <div className="absolute inset-0 bg-neutral-900">
          <Image
            src="https://res.cloudinary.com/dhhdhilja/image/upload/q_auto,w_800,f_webp/v1770517604/purrball/Section2_-_Featured_Cat_Toy.jpg.webp"
            alt="Smart Interactive Cat Ball"
            fill
            className="object-cover"
            priority
          />
        </div>
        {/* Lazy GIF that loads after */}
        <Image
          src="/Section7-3_Interactive_Modes.gif"
          alt="Smart Interactive Cat Ball"
          fill
          className="object-cover"
          priority
          unoptimized
          onLoad={(e) => {
            // Hide poster when GIF loads
            const poster = e.currentTarget.parentElement?.querySelector('div')
            if (poster) poster.style.display = 'none'
          }}
        />

        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-[2]" />

        {/* Content overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6 pb-10 z-10">
          <h1 className="text-3xl font-semibold text-white leading-tight tracking-tight mb-2">
            {t.hero.title}
          </h1>
          <p className="text-white/70 text-sm mb-6">
            {t.hero.subtitle}
          </p>
          <a
            href="/produits/smart-interactive-ball"
            className="inline-block bg-brand text-white font-medium px-8 py-3.5 rounded-full text-sm tracking-wide hover:bg-brand-dark transition-all"
          >
            {t.hero.shopNow}
          </a>
        </div>
      </section>

      {/* Desktop: Side-by-side layout with GIF */}
      <section className="relative hidden md:block bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 flex flex-row items-center gap-12">
          {/* Content */}
          <div className="flex-1 text-left">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-400 mb-4">
              {t.hero.desktopSubtitle}
            </p>
            <h1 className="text-4xl md:text-6xl font-semibold leading-[1.1] tracking-tight text-neutral-900 mb-6">
              {t.hero.desktopTitle}
            </h1>
            <p className="text-lg md:text-xl text-neutral-500 leading-relaxed mb-8 max-w-lg">
              {t.hero.desktopDescription}
            </p>
            
            <div className="flex items-start gap-4">
              <a
                href="/produits/smart-interactive-ball"
                className="bg-brand hover:bg-brand-dark text-white font-medium px-8 py-3.5 rounded-full transition-all hover:scale-[1.02] text-sm tracking-wide"
              >
                {locale === 'fr' ? `Acheter — ${formatPrice(4.99)}` : `Buy — ${formatPrice(4.99)}`}
              </a>
              <a
                href="/produits"
                className="text-neutral-500 hover:text-neutral-900 font-medium px-8 py-3.5 text-sm transition-colors"
              >
                {t.hero.learnMore}
              </a>
            </div>
          </div>

          {/* GIF on desktop */}
          <div className="flex-1 relative">
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl bg-neutral-900">
              <Image
                src="/Section7-3_Interactive_Modes.gif"
                alt="Smart Interactive Cat Ball"
                fill
                className="object-cover"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
