"use client"

import Image from "next/image"
import { useCart } from "@/lib/cart-context"
import { toast } from "sonner"
import { ShoppingCart } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

const products = [
  {
    id: "smart-interactive-ball",
    name: "Smart Interactive Cats Ball Toy",
    description: "Balle intelligente auto-roulante pour chat",
    price: 4.99,
    originalPrice: 11.99,
    image: "https://res.cloudinary.com/dhhdhilja/image/upload/v1770517783/purrball/smart_interactive_cats_ball_toy_red.png.webp",
    soldOut: false,
    color: "Rouge"
  },
  {
    id: "smart-interactive-ball",
    name: "Smart Interactive Cats Ball Toy",
    description: "Balle intelligente auto-roulante pour chat",
    price: 4.99,
    originalPrice: 11.99,
    image: "https://res.cloudinary.com/dhhdhilja/image/upload/v1770517775/purrball/smart_interactive_cats_ball_toy_gray.png.webp",
    soldOut: false,
    color: "Gris"
  },
  {
    id: "smart-interactive-ball",
    name: "Smart Interactive Cats Ball Toy",
    description: "Balle intelligente auto-roulante pour chat",
    price: 4.99,
    originalPrice: 11.99,
    image: "https://res.cloudinary.com/dhhdhilja/image/upload/v1770517777/purrball/smart_interactive_cats_ball_toy_green.png.webp",
    soldOut: false,
    color: "Vert"
  }
]

export default function BestSellers() {
  const { locale } = useI18n()
  const isFr = locale === 'fr'
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-neutral-500 text-base md:text-lg leading-relaxed">
          {isFr ? "Des jouets pour chats premium conçus pour stimuler l'instinct de jeu de votre félin, favoriser l'exercice et renforcer le lien avec votre compagnon. Parce qu'un chat qui joue est un chat heureux." : "Premium cat toys designed to stimulate your feline's play instinct, promote exercise and strengthen the bond with your companion. Because a cat that plays is a happy cat."}
        </p>
      </div>
    </section>
  )
}

export function BestSellersProducts() {
  const { locale } = useI18n()
  const isFr = locale === 'fr'
  return (
    <section id="best-sellers" className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-medium tracking-[0.2em] uppercase text-neutral-400 text-center mb-3">
          {isFr ? 'Nos produits' : 'Our products'}
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center text-neutral-900 mb-4">
          {isFr ? 'Meilleures Ventes' : 'Best Sellers'}
        </h2>
        
        <p className="text-center text-neutral-500 max-w-xl mx-auto mb-12">
          {isFr ? 'Découvrez nos jouets les plus populaires qui font le bonheur des chats et de leurs propriétaires.' : 'Discover our most popular toys that bring joy to cats and their owners.'}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product }: { product: typeof products[0] }) {
  const { addItem } = useCart()
  const { locale, formatPrice } = useI18n()
  const isFr = locale === 'fr'

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    if (!product.soldOut) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        originalPrice: product.originalPrice,
        image: product.image,
      })
    }
  }

  return (
    <div className="group">
      {/* Product Image */}
      <div className="relative aspect-square bg-neutral-50 rounded-2xl overflow-hidden mb-4">
        {product.soldOut && (
          <span className="absolute top-3 left-3 z-10 bg-neutral-900 text-white text-[10px] font-medium px-2.5 py-1 rounded-full">
            {isFr ? 'ÉPUISÉ' : 'SOLD OUT'}
          </span>
        )}
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 33vw"
          className="object-contain p-8 group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Product Info */}
      <div className="px-1">
        <p className="text-[11px] text-neutral-400 uppercase tracking-wider mb-1">{product.color}</p>
        <h3 className="font-medium text-neutral-900 text-sm leading-snug mb-2">
          {product.name}
        </h3>
        
        {/* Price */}
        <div className="mb-4 flex items-center gap-2">
          <span className="text-base font-semibold text-neutral-900">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice > product.price && (
            <span className="text-sm text-neutral-400 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
        
        {/* Add Button */}
        <button
          onClick={handleAddToCart}
          disabled={product.soldOut}
          className="w-full bg-brand hover:bg-brand-dark text-white px-4 py-2.5 rounded-full font-medium text-xs tracking-wide transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          <ShoppingCart className="w-3.5 h-3.5" />
          {isFr ? 'Ajouter au panier' : 'Add to cart'}
        </button>
      </div>
    </div>
  )
}
