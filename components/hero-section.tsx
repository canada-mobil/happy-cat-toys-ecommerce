import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 flex flex-col md:flex-row items-center gap-12">
        {/* Content */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-400 mb-4">
            Conçu pour les chats curieux
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold leading-[1.1] tracking-tight text-neutral-900 mb-6">
            Le jouet que votre chat mérite.
          </h1>
          <p className="text-lg md:text-xl text-neutral-500 leading-relaxed mb-8 max-w-lg">
            Stimulez l'instinct naturel de votre félin avec notre balle interactive intelligente. Livraison rapide partout au Canada.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center md:items-start gap-4">
            <a
              href="/produits/smart-interactive-ball"
              className="bg-neutral-900 hover:bg-black text-white font-medium px-8 py-3.5 rounded-full transition-all hover:scale-[1.02] text-sm tracking-wide"
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

        {/* Image */}
        <div className="flex-1 relative">
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <Image
              src="/smart_interactive_cats_ball_toy_red.png.webp"
              alt="Smart Interactive Cats Ball Toy"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
