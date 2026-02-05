import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=1200&h=800&fit=crop&crop=center"
        alt="Chats jouant avec des jouets"
        fill
        className="object-cover"
        priority
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl">
        <h2 className="text-white text-3xl md:text-5xl font-serif font-semibold leading-tight text-balance mb-8">
          Des Jouets Choisis avec Soin pour des Chats Plus Heureux
        </h2>
        
        <a
          href="/produits"
          className="inline-block bg-white/90 hover:bg-white text-foreground font-medium px-8 py-3 rounded-full transition-all hover:scale-105 tracking-wide"
        >
          DÉCOUVRIR
        </a>
      </div>
    </section>
  )
}
