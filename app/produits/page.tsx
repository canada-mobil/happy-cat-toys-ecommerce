"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { SlidersHorizontal, Grid2X2, Square, ShoppingCart } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import BenefitsSection from "@/components/benefits-section"
import { products } from "@/lib/products"
import { useCart } from "@/lib/cart-context"

const categories = ["Tous", "Jouets Interactifs", "Peluches", "Balles & Grelots", "Jouets Automatiques", "Tunnels & Cachettes", "Griffoirs", "Jouets Intelligents"]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tous")
  const [gridView, setGridView] = useState<"grid" | "list">("grid")
  const { addItem } = useCart()

  const filteredProducts = selectedCategory === "Tous" 
    ? products 
    : products.filter(p => p.category === selectedCategory)

  const handleAddToCart = (product: any, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.price,
      image: product.image,
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="px-4 py-8 max-w-7xl mx-auto">
        {/* Page Title */}
        <h1 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-8">
          Produits
        </h1>

        {/* Filter Bar */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 text-foreground hover:opacity-70 transition-opacity">
              <SlidersHorizontal className="w-5 h-5" />
              <span className="text-sm font-medium">Filtrer</span>
            </button>
          </div>

          {/* Category Filter - Mobile Scroll */}
          <div className="hidden md:flex items-center gap-2 overflow-x-auto">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 text-sm rounded-full whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* View Toggle */}
          <div className="flex items-center gap-1">
            <button 
              onClick={() => setGridView("list")}
              className={`p-2 rounded transition-colors ${gridView === "list" ? "bg-muted" : ""}`}
              aria-label="Vue liste"
            >
              <Square className="w-5 h-5 text-foreground" />
            </button>
            <button 
              onClick={() => setGridView("grid")}
              className={`p-2 rounded transition-colors ${gridView === "grid" ? "bg-muted" : ""}`}
              aria-label="Vue grille"
            >
              <Grid2X2 className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>

        {/* Mobile Category Scroll */}
        <div className="flex md:hidden gap-2 overflow-x-auto pb-4 mb-4 -mx-4 px-4">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 text-sm rounded-full whitespace-nowrap transition-colors ${
                selectedCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className={`grid gap-6 ${gridView === "grid" ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4" : "grid-cols-1"}`}>
          {filteredProducts.map(product => (
            <div key={product.id} className="group relative">
              <Link 
                href={`/produits/${product.id}`}
                className="block"
              >
                <div className="relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                  {/* Stock Badge */}
                  {!product.inStock && (
                    <span className="absolute top-3 left-3 z-10 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                      ÉPUISÉ
                    </span>
                  )}
                  
                  {/* Best Seller Badge */}
                  {product.price > 20 && (
                    <span className="absolute top-3 right-3 z-10 bg-orange-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                      BEST SELLER
                    </span>
                  )}
                  
                  {/* Product Image */}
                  <div className="relative aspect-square bg-gray-50">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </Link>

              {/* Product Info */}
              <div className="mt-4 px-2">
                <Link href={`/produits/${product.id}`}>
                  <h3 className="font-semibold text-gray-900 text-sm leading-tight group-hover:text-[#6b8e7b] transition-colors line-clamp-2 mb-3">
                    {product.name}
                  </h3>
                </Link>
                
                {/* Price */}
                <div className="mb-3">
                  <span className="text-lg font-bold text-[#6b8e7b]">
                    ${product.price.toFixed(2)} CAD
                  </span>
                </div>
                
                {/* Add Button */}
                <button
                  onClick={(e) => handleAddToCart(product, e)}
                  disabled={!product.inStock}
                  className="w-full bg-[#6b8e7b] hover:bg-[#5a7a66] text-white px-4 py-2.5 rounded-lg font-medium text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
                >
                  <ShoppingCart className="w-4 h-4" />
                  AJOUTER
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Aucun produit trouvé dans cette catégorie.</p>
          </div>
        )}
      </main>

      <BenefitsSection />
      <Footer />
    </div>
  )
}
