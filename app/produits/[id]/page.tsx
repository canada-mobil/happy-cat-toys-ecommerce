"use client"

import { useState, use } from "react"
import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, ShoppingCart, ChevronDown, ChevronUp } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { getProductById, getRelatedProducts } from "@/lib/products"
import { notFound } from "next/navigation"
import { useCart } from "@/lib/cart-context"
import { toast } from "sonner"

interface ProductPageProps {
  params: Promise<{ id: string }>
}

export default function ProductPage({ params }: ProductPageProps) {
  const { id } = use(params)
  const product = getProductById(id)
  const relatedProducts = getRelatedProducts(id)
  const { addItem } = useCart()
  
  const [quantity, setQuantity] = useState(1)
  const [selectedPack, setSelectedPack] = useState("1")
  const [openSection, setOpenSection] = useState<string | null>("details")

  if (!product) {
    notFound()
  }

  const handleAddToCart = () => {
    console.log('=== ADD TO CART CLICKED ===', product.name)
    try {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        originalPrice: product.price,
        image: product.image,
      })
      // Removed toast notification since cart opens automatically
      console.log('Item added to cart successfully')
    } catch (error) {
      console.error('Error adding to cart:', error)
    }
  }

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="px-4 py-6 max-w-7xl mx-auto">
        {/* Product Image */}
        <div className="relative aspect-square bg-white rounded-lg overflow-hidden mb-6 max-w-md mx-auto">
          {!product.inStock && (
            <span className="absolute top-4 left-4 z-10 bg-background/90 text-foreground text-sm font-medium px-3 py-1 rounded">
              ÉPUISÉ
            </span>
          )}
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-contain p-6"
            priority
          />
        </div>

        {/* Product Info */}
        <div className="max-w-2xl mx-auto">
          {/* Title */}
          <h1 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-2">
            {product.name}
          </h1>

          {/* Price */}
          <p className="text-secondary text-xl font-semibold mb-6">
            {product.price.toFixed(2)} $
          </p>

          {/* Pack Selector */}
          <div className="mb-4">
            <label className="block text-foreground font-medium mb-2">
              Quantité Pack
            </label>
            <div className="relative">
              <select
                value={selectedPack}
                onChange={(e) => setSelectedPack(e.target.value)}
                className="w-full p-4 bg-background border border-border rounded-lg appearance-none text-foreground pr-10"
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex gap-3 mb-4">
            {/* Quantity Selector */}
            <div className="flex items-center border border-border rounded-lg">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-4 hover:bg-muted transition-colors"
                aria-label="Diminuer la quantité"
              >
                <Minus className="w-5 h-5 text-foreground" />
              </button>
              <span className="px-6 text-foreground font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-4 hover:bg-muted transition-colors"
                aria-label="Augmenter la quantité"
              >
                <Plus className="w-5 h-5 text-foreground" />
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="flex-1 bg-primary text-primary-foreground py-4 px-6 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ShoppingCart className="w-5 h-5" />
              Ajouter au panier
            </button>
          </div>


          {/* Divider */}
          <div className="border-t border-border mb-4" />

          {/* Accordion Sections */}
          {/* Details */}
          <div className="border-b border-border">
            <button
              onClick={() => toggleSection("details")}
              className="w-full flex items-center justify-between py-4 text-left"
            >
              <span className="text-sm font-semibold text-muted-foreground tracking-wide">
                DÉTAILS
              </span>
              {openSection === "details" ? (
                <Minus className="w-5 h-5 text-foreground" />
              ) : (
                <Plus className="w-5 h-5 text-foreground" />
              )}
            </button>
            {openSection === "details" && (
              <div className="pb-6">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                  Stimulez Votre Chat Naturellement
                </h3>
                <p className="text-foreground leading-relaxed mb-4">
                  {product.longDescription}
                </p>
                
                <h4 className="font-serif text-lg font-semibold text-foreground mb-3">
                  Caractéristiques
                </h4>
                <ul className="list-disc list-inside space-y-2 text-foreground">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Materials */}
          <div className="border-b border-border">
            <button
              onClick={() => toggleSection("materials")}
              className="w-full flex items-center justify-between py-4 text-left"
            >
              <span className="text-sm font-semibold text-muted-foreground tracking-wide">
                MATÉRIAUX & ENTRETIEN
              </span>
              {openSection === "materials" ? (
                <Minus className="w-5 h-5 text-foreground" />
              ) : (
                <Plus className="w-5 h-5 text-foreground" />
              )}
            </button>
            {openSection === "materials" && (
              <div className="pb-6">
                <p className="text-foreground leading-relaxed">
                  {product.materials}
                </p>
              </div>
            )}
          </div>

          {/* Shipping */}
          <div className="border-b border-border">
            <button
              onClick={() => toggleSection("shipping")}
              className="w-full flex items-center justify-between py-4 text-left"
            >
              <span className="text-sm font-semibold text-muted-foreground tracking-wide">
                LIVRAISON & RETOURS
              </span>
              {openSection === "shipping" ? (
                <Minus className="w-5 h-5 text-foreground" />
              ) : (
                <Plus className="w-5 h-5 text-foreground" />
              )}
            </button>
            {openSection === "shipping" && (
              <div className="pb-6">
                <p className="text-foreground leading-relaxed">
                  {product.shipping}
                </p>
                <p className="text-foreground leading-relaxed mt-4">
                  Retours acceptés dans les 30 jours suivant la réception. 
                  L'article doit être dans son emballage d'origine et non utilisé.
                </p>
              </div>
            )}
          </div>

          {/* Related Products */}
          <div className="mt-12">
            <h2 className="font-serif text-2xl italic text-foreground mb-6">
              Vous aimerez aussi...
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {relatedProducts.slice(0, 4).map(related => (
                <Link 
                  key={related.id} 
                  href={`/produits/${related.id}`}
                  className="group block"
                >
                  <div className="relative aspect-square bg-white rounded-lg overflow-hidden">
                    <Image
                      src={related.image || "/placeholder.svg"}
                      alt={related.name}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-secondary font-medium text-sm mt-2 line-clamp-2 group-hover:text-secondary/80 transition-colors">
                    {related.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {related.price.toFixed(2)} $
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 flex items-center gap-4 md:hidden z-50">
        <div className="flex items-center gap-3 flex-1">
          <div className="relative w-12 h-12 bg-white rounded-lg overflow-hidden flex-shrink-0">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-contain p-1"
            />
          </div>
          <div className="min-w-0">
            <p className="text-foreground font-medium text-sm truncate">
              {product.name}
            </p>
            <p className="text-muted-foreground text-xs">
              {selectedPack}
            </p>
          </div>
        </div>
        <p className="text-foreground font-semibold">
          {product.price.toFixed(2)} $
        </p>
        <button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className="bg-primary text-primary-foreground p-3 rounded-lg disabled:opacity-50"
          aria-label="Ajouter au panier"
        >
          <ShoppingCart className="w-5 h-5" />
        </button>
      </div>

      {/* Spacer for sticky bar on mobile */}
      <div className="h-20 md:hidden" />

      <Footer />
    </div>
  )
}
