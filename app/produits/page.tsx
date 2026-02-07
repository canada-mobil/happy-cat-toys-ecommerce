"use client"

import Image from "next/image"
import Link from "next/link"
import { Star, ShoppingCart } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import BenefitsSection from "@/components/benefits-section"
import { products } from "@/lib/products"
import { useCart } from "@/lib/cart-context"

export default function ProductsPage() {
  const { addItem } = useCart()
  const product = products[0]

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.image,
    })
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Banner */}
      <section className="relative h-[140px] md:h-[200px] overflow-hidden">
        <Image
          src="/CollectionPage-cat-banner.jpg.webp"
          alt="Cat Toys"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/20 to-transparent" />
        <div className="absolute bottom-6 left-6 md:left-12 z-10">
          <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 tracking-tight">
            Cat Toys
          </h1>
        </div>
      </section>

      {/* Trending This Month */}
      <section className="py-10 md:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-6 md:mb-14">
            Trending This Month
          </h2>

          {/* Mobile: Photo first, then simple info below like Cheerble */}
          <div className="md:hidden">
            {/* Big lifestyle photo */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
              <Image
                src="/Section2_-_Featured_Cat_Toy.jpg.webp"
                alt="Smart Interactive Ball"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>

            {/* Simple product info below */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="border border-neutral-200 text-neutral-500 text-[10px] font-medium px-2.5 py-0.5 rounded-full uppercase tracking-wide">Cat</span>
                <span className="bg-red-500 text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full">Save {Math.round((1 - product.price / product.originalPrice) * 100)}%</span>
              </div>

              <h3 className="text-lg font-bold text-neutral-900 tracking-tight">{product.name}</h3>

              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-neutral-900">${product.price.toFixed(2)}</span>
                <span className="text-sm text-neutral-300 line-through">${product.originalPrice.toFixed(2)}</span>
                <div className="flex items-center gap-1 ml-auto">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-[10px] text-neutral-400">{product.rating}({product.reviewCount})</span>
                </div>
              </div>

              <p className="text-neutral-500 text-xs leading-relaxed">{product.description}</p>

              <div className="flex items-center gap-2 pt-2">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-blue-800 hover:bg-blue-900 text-white py-3 rounded-full font-medium text-xs uppercase tracking-wider transition-all"
                >
                  ADD TO CART
                </button>
                <Link
                  href={`/produits/${product.id}`}
                  className="flex-1 border border-blue-800 text-blue-800 py-3 rounded-full font-medium text-xs uppercase tracking-wider transition-all text-center"
                >
                  VIEW DETAILS
                </Link>
              </div>
            </div>
          </div>

          {/* Desktop: Side by side layout */}
          <div className="hidden md:grid grid-cols-2 gap-12 items-start">
            {/* Left: Product Info */}
            <div>
              <div className="flex items-center gap-2 mb-5">
                <span className="border border-neutral-200 text-neutral-500 text-[11px] font-medium px-3 py-1 rounded-full uppercase tracking-wide">Cat</span>
                <span className="bg-red-500 text-white text-[11px] font-semibold px-3 py-1 rounded-full uppercase tracking-wide">Save {Math.round((1 - product.price / product.originalPrice) * 100)}%</span>
              </div>

              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-3xl font-bold text-neutral-900 tracking-tight leading-tight">{product.name}</h3>
                <div className="flex items-center gap-1 flex-shrink-0 mt-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-xs text-neutral-400 ml-1">{product.rating}({product.reviewCount})</span>
                </div>
              </div>

              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl font-bold text-neutral-900">${product.price.toFixed(2)}</span>
                <span className="text-base text-neutral-300 line-through">${product.originalPrice.toFixed(2)}</span>
              </div>

              <div className="flex items-center gap-2 mb-6">
                {product.colors.map((color, i) => (
                  <div key={i} className={`w-7 h-7 rounded-full border-2 ${i === 0 ? 'border-neutral-900' : 'border-neutral-200'}`} style={{ backgroundColor: color.value }} title={color.name} />
                ))}
              </div>

              <div className="border-t border-neutral-100 mb-6" />

              <p className="text-neutral-600 text-sm leading-relaxed mb-4">{product.description}</p>

              <ul className="text-neutral-600 text-sm space-y-1.5 mb-8">
                {product.features.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul>

              <div className="flex items-center gap-3">
                <button onClick={handleAddToCart} className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-3.5 rounded-full font-medium text-sm uppercase tracking-wider transition-all">ADD TO CART</button>
                <Link href={`/produits/${product.id}`} className="border border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-white px-8 py-3.5 rounded-full font-medium text-sm uppercase tracking-wider transition-all">LEARN MORE</Link>
              </div>
            </div>

            {/* Right: Lifestyle photo */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/Section2_-_Featured_Cat_Toy.jpg.webp"
                alt="Chat jouant avec la Smart Interactive Ball"
                fill
                sizes="50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* All Products Grid */}
      <section className="py-16 px-4 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight mb-10">
            All Products
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {product.colors.map((color, index) => (
              <Link key={index} href={`/produits/${product.id}`} className="group block">
                <div className="relative aspect-square bg-white rounded-2xl overflow-hidden mb-4 border border-neutral-100">
                  <span className="absolute top-3 right-3 z-10 bg-red-500 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">
                    -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                  </span>
                  <Image
                    src={color.image}
                    alt={`${product.name} - ${color.name}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 33vw"
                    className="object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="px-1">
                  <h3 className="font-semibold text-neutral-900 text-sm mb-1">
                    {product.name}
                  </h3>
                  <p className="text-neutral-400 text-xs mb-2">{color.name}</p>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-base font-bold text-neutral-900">${product.price.toFixed(2)}</span>
                    <span className="text-sm text-neutral-300 line-through">${product.originalPrice.toFixed(2)}</span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      addItem({
                        id: `${product.id}-${color.name}`,
                        name: `${product.name} (${color.name})`,
                        price: product.price,
                        originalPrice: product.originalPrice,
                        image: color.image,
                      })
                    }}
                    className="w-full bg-blue-800 hover:bg-blue-900 text-white px-4 py-2.5 rounded-full font-medium text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                  >
                    ADD TO CART
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <BenefitsSection />
      <Footer />
    </div>
  )
}
