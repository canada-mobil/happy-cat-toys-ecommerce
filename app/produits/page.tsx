"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { SlidersHorizontal, Grid2X2, Square } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import BenefitsSection from "@/components/benefits-section"
import { products } from "@/lib/products"

const categories = ["Tous", "Jouets Interactifs", "Peluches", "Balles & Grelots", "Jouets Automatiques", "Tunnels & Cachettes", "Griffoirs", "Jouets Intelligents"]

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tous")
  const [gridView, setGridView] = useState<"grid" | "list">("grid")

  const filteredProducts = selectedCategory === "Tous" 
    ? products 
    : products.filter(p => p.category === selectedCategory)

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
        <div className={`grid gap-4 ${gridView === "grid" ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4" : "grid-cols-1"}`}>
          {filteredProducts.map(product => (
            <Link 
              key={product.id} 
              href={`/produits/${product.id}`}
              className="group block"
            >
              <div className="relative bg-card rounded-lg overflow-hidden">
                {/* Stock Badge */}
                {!product.inStock && (
                  <span className="absolute top-2 left-2 z-10 bg-background/90 text-foreground text-xs font-medium px-2 py-1 rounded">
                    ÉPUISÉ
                  </span>
                )}
                
                {/* Product Image */}
                <div className="relative aspect-square bg-white">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Product Info */}
              <div className="mt-3">
                <h3 className="text-secondary font-medium text-sm md:text-base leading-snug group-hover:text-secondary/80 transition-colors">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm mt-1 line-clamp-2">
                  {product.description}
                </p>
                <p className="text-secondary font-semibold mt-2">
                  {product.price.toFixed(2)} $
                </p>
              </div>
            </Link>
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
