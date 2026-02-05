"use client"

import Image from "next/image"
import { useCart } from "@/lib/cart-context"
import { toast } from "sonner"

const products = [
  {
    id: "plume-magique-interactive",
    name: "Plume Magique Interactive",
    description: "Jouet plume premium pour des heures de jeu",
    price: 12.99,
    originalPrice: 16.99,
    image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=400&h=400&fit=crop&crop=center",
    soldOut: false
  },
  {
    id: "souris-peluche-douce",
    name: "Souris en Peluche Douce",
    description: "Souris réaliste avec herbe à chat",
    price: 8.99,
    originalPrice: 11.99,
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop&crop=center",
    soldOut: true
  },
  {
    id: "balle-laser-automatique",
    name: "Balle Laser Automatique",
    description: "Stimulation mentale et exercice garantis",
    price: 24.99,
    originalPrice: 34.99,
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=400&fit=crop&crop=center",
    soldOut: false
  },
  {
    id: "tunnel-crinkle-premium",
    name: "Tunnel Crinkle Premium",
    description: "Tunnel pliable avec sons craquants",
    price: 19.99,
    originalPrice: 24.99,
    image: "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?w=400&h=400&fit=crop&crop=center",
    soldOut: false
  }
]

export default function BestSellers() {
  return (
    <section className="bg-[#5a7a66] py-12 px-4">
      <div className="max-w-6xl mx-auto text-center text-white">
        <p className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-pretty">
          Des jouets pour chats premium conçus pour stimuler l&apos;instinct de jeu de votre félin, 
          favoriser l&apos;exercice et renforcer le lien avec votre compagnon. 
          Parce qu&apos;un chat qui joue est un chat heureux.
        </p>
      </div>
    </section>
  )
}

export function BestSellersProducts() {
  return (
    <section id="best-sellers" className="bg-[#f5f2ed] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center text-foreground mb-6">
          Meilleures Ventes
        </h2>
        
        <p className="text-center text-muted-foreground max-w-xl mx-auto mb-4 text-pretty">
          Découvrez nos jouets les plus populaires qui font le bonheur des chats 
          et de leurs propriétaires depuis des années.
        </p>

        <a href="#" className="block text-center text-[#c8847a] hover:underline mb-8">
          Voir tout
        </a>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          {products.map((product) => (
            <ProductCard key={`${product.id}-2`} product={{...product, id: `${product.id}-duplicate`}} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductCard({ product }: { product: typeof products[0] }) {
  console.log('ProductCard rendering:', product.name)
  
  const { addItem } = useCart()
  console.log('Cart context available:', !!addItem)

  const handleAddToCart = () => {
    console.log('=== BUTTON CLICKED ===', product.name)
    
    try {
      if (!product.soldOut) {
        console.log('Product not sold out, adding to cart...')
        addItem({
          id: product.id,
          name: product.name,
          price: product.price,
          originalPrice: product.originalPrice,
          image: product.image,
        })
        console.log('addItem called successfully')
        
        toast.success(`${product.name} ajouté au panier!`, {
          description: `Prix: $${product.price.toFixed(2)} CAD`,
          duration: 3000,
        })
        console.log('Toast shown')
      } else {
        console.log('Product is sold out:', product.name)
      }
    } catch (error) {
      console.error('ERROR in handleAddToCart:', error)
    }
  }

  return (
    <div className="group"
      onMouseEnter={() => console.log('Hover:', product.name)}
    >
      <div className="relative aspect-square bg-white rounded-lg overflow-hidden mb-3">
        {product.soldOut && (
          <span className="absolute top-2 left-2 z-10 text-xs font-semibold text-foreground bg-white/80 px-2 py-1 rounded">
            ÉPUISÉ
          </span>
        )}
        {!product.soldOut && (
          <button 
            onClick={handleAddToCart}
            disabled={product.soldOut}
            className="absolute bottom-2 right-2 bg-[#6b8e7b] hover:bg-[#5a7a66] text-white px-3 py-1 rounded-full text-xs font-medium transition-colors z-20 cursor-pointer"
            style={{ pointerEvents: 'auto' }}
          >
            + Panier
          </button>
        )}
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="text-[#c8847a] font-medium text-sm md:text-base leading-tight mb-1">
        {product.name}
      </h3>
      <p className="text-muted-foreground text-xs md:text-sm mb-1">
        {product.description}
      </p>
      <div className="flex items-center gap-2">
        <p className="text-foreground font-semibold">
          ${product.price.toFixed(2)} CAD
        </p>
        {product.originalPrice > product.price && (
          <p className="text-muted-foreground text-xs line-through">
            ${product.originalPrice.toFixed(2)} CAD
          </p>
        )}
      </div>
    </div>
  )
}
