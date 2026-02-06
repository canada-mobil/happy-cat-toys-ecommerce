"use client"

import { useState, use, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ShoppingCart, Star, Truck, Leaf, Shield, Clock, ChevronLeft, ChevronRight, Minus, Plus } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { getProductById, getRelatedProducts } from "@/lib/products"
import { notFound } from "next/navigation"
import { useCart } from "@/lib/cart-context"

interface ProductPageProps {
  params: Promise<{ id: string }>
}

export default function ProductPage({ params }: ProductPageProps) {
  const { id } = use(params)
  const product = getProductById(id)
  const relatedProducts = getRelatedProducts(id)
  const { addItem } = useCart()
  
  const [selectedColor, setSelectedColor] = useState(0)
  const [selectedPackage, setSelectedPackage] = useState(0)
  const [selectedImage, setSelectedImage] = useState(0)
  const [openSection, setOpenSection] = useState<string | null>("details")

  // Countdown timer
  const [timeLeft, setTimeLeft] = useState({ hours: 5, minutes: 56, seconds: 23 })
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev
        seconds--
        if (seconds < 0) { seconds = 59; minutes-- }
        if (minutes < 0) { minutes = 59; hours-- }
        if (hours < 0) { hours = 23; minutes = 59; seconds = 59 }
        return { hours, minutes, seconds }
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  if (!product) {
    notFound()
  }

  const currentPrice = product.packages[selectedPackage].pricePerUnit
  const totalPrice = currentPrice * product.packages[selectedPackage].quantity

  const handleAddToCart = () => {
    for (let i = 0; i < product.packages[selectedPackage].quantity; i++) {
      addItem({
        id: `${product.id}-${product.colors[selectedColor].name}`,
        name: `${product.name} (${product.colors[selectedColor].name})`,
        price: currentPrice,
        originalPrice: product.originalPrice,
        image: product.colors[selectedColor].image,
      })
    }
  }

  const handleColorChange = (index: number) => {
    setSelectedColor(index)
    setSelectedImage(0)
  }

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* LEFT: Image Gallery */}
          <div>
            {/* Main Image */}
            <div className="relative aspect-square bg-[#f8f8f8] rounded-xl overflow-hidden mb-4">
              {!product.inStock && (
                <span className="absolute top-4 left-4 z-10 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded">
                  ÉPUISÉ
                </span>
              )}
              <span className="absolute top-4 right-4 z-10 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                -{Math.round((1 - product.price / product.originalPrice) * 100)}%
              </span>
              <Image
                src={product.colors[selectedColor].image}
                alt={product.name}
                fill
                className="object-contain p-8"
                priority
              />
              {/* Nav arrows */}
              <button 
                onClick={() => setSelectedImage(Math.max(0, selectedImage - 1))}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button 
                onClick={() => setSelectedImage(Math.min(product.images.length - 1, selectedImage + 1))}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Thumbnail Gallery */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index ? 'border-[#6b8e7b] shadow-md' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Image src={img} alt={`Vue ${index + 1}`} fill className="object-contain p-1" />
                </button>
              ))}
            </div>

            {/* Product Description Images */}
            <div className="mt-8 space-y-4">
              <h3 className="text-xl font-bold text-gray-900">Unleash the Fun</h3>
              <p className="text-gray-600 leading-relaxed">
                {product.longDescription}
              </p>
              {product.images.slice(1, 5).map((img, index) => (
                <div key={index} className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
                  <Image src={img} alt={`Détail ${index + 1}`} fill className="object-contain bg-[#f8f8f8]" />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Product Info */}
          <div className="lg:sticky lg:top-4 lg:self-start">
            {/* Reviews */}
            <div className="flex items-center gap-2 mb-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                ))}
              </div>
              <span className="text-sm text-gray-600">{product.reviewCount} avis</span>
            </div>

            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              {product.name}
            </h1>

            {/* Price */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl font-bold text-red-600">CA${currentPrice.toFixed(2)}</span>
              <span className="bg-orange-100 text-orange-700 text-xs font-bold px-2 py-1 rounded">
                -{Math.round((1 - currentPrice / product.originalPrice) * 100)}%
              </span>
              <span className="text-lg text-gray-400 line-through">CA${product.originalPrice.toFixed(2)}</span>
            </div>

            {/* Free Shipping Countdown */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 mb-5 flex items-center gap-2">
              <span className="text-sm font-medium text-gray-700">Livraison Gratuite.</span>
              <span className="bg-black text-white text-xs font-bold px-2 py-1 rounded">{timeLeft.hours}</span>
              <span className="text-xs font-bold">:</span>
              <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">{timeLeft.minutes}</span>
              <span className="text-xs font-bold">:</span>
              <span className="bg-black text-white text-xs font-bold px-2 py-1 rounded">{timeLeft.seconds}</span>
              <span className="text-sm text-red-600 font-medium ml-1">restantes.</span>
            </div>

            {/* Color Selector */}
            <div className="mb-5">
              <p className="text-sm font-bold text-gray-900 mb-3">Couleur: <span className="font-normal text-gray-600">{product.colors[selectedColor].name}</span></p>
              <div className="flex gap-3">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => handleColorChange(index)}
                    className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedColor === index ? 'border-[#6b8e7b] shadow-lg scale-105' : 'border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    <Image src={color.image} alt={color.name} fill className="object-contain p-1" />
                  </button>
                ))}
              </div>
            </div>

            {/* Stock */}
            <div className="flex items-center gap-2 mb-5">
              <span className="text-sm font-bold text-gray-900">Stock:</span>
              <span className="w-2 h-2 rounded-full bg-orange-500"></span>
              <span className="text-sm text-orange-600 font-medium">Seulement {product.stockCount} en stock</span>
            </div>

            {/* Package Selector */}
            <div className="mb-5">
              <p className="text-sm font-bold text-gray-900 mb-3">Quantité:</p>
              <div className="flex gap-3">
                {product.packages.map((pkg, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedPackage(index)}
                    className={`flex-1 py-3 px-4 rounded-lg border-2 text-center transition-all ${
                      selectedPackage === index 
                        ? 'border-[#6b8e7b] bg-[#f0f7f3] shadow-md' 
                        : 'border-gray-200 hover:border-gray-300 bg-white'
                    }`}
                  >
                    <span className="block text-xl font-bold text-gray-900">{pkg.label}</span>
                    {pkg.badge && (
                      <span className={`block text-xs font-medium mt-1 ${
                        pkg.badge.includes('Gratuite') ? 'text-[#6b8e7b]' : 'text-red-500'
                      }`}>
                        {pkg.badge}
                      </span>
                    )}
                  </button>
                ))}
                <button className="py-3 px-4 rounded-lg border-2 border-gray-200 hover:border-gray-300 bg-white text-center">
                  <Plus className="w-5 h-5 text-gray-400 mx-auto" />
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="w-full bg-[#6b8e7b] hover:bg-[#5a7a66] text-white py-4 px-6 rounded-lg font-bold text-lg flex items-center justify-center gap-3 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mb-4 shadow-lg"
            >
              <ShoppingCart className="w-6 h-6" />
              AJOUTER AU PANIER — CA${totalPrice.toFixed(2)}
            </button>

            {/* Trust Badges */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <Truck className="w-5 h-5 text-[#6b8e7b] flex-shrink-0" />
                <span><strong>Expédition en 24h</strong> — Plus rapide que la compétition</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <Shield className="w-5 h-5 text-[#6b8e7b] flex-shrink-0" />
                <span><strong>Livraison garantie</strong> avec Canada Post</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <Leaf className="w-5 h-5 text-[#6b8e7b] flex-shrink-0" />
                <span><strong>Éco-responsable</strong> — Matériaux recyclables et non toxiques</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <Clock className="w-5 h-5 text-[#6b8e7b] flex-shrink-0" />
                <span><strong>Garantie 2 mois</strong> — Satisfait ou remboursé</span>
              </div>
            </div>

            {/* Delivery Info */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <p className="text-sm text-gray-700">
                <strong>Livraison:</strong> 5-9 jours ouvrables. 81.4% des livraisons arrivent en 9 jours ou moins.
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Transporteur: Canada Post
              </p>
            </div>

            {/* Accordion Sections */}
            <div className="border-t border-gray-200">
              {/* Details */}
              <div className="border-b border-gray-200">
                <button
                  onClick={() => toggleSection("details")}
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <span className="text-sm font-bold text-gray-900 tracking-wide">DÉTAILS DU PRODUIT</span>
                  {openSection === "details" ? <Minus className="w-5 h-5 text-gray-500" /> : <Plus className="w-5 h-5 text-gray-500" />}
                </button>
                {openSection === "details" && (
                  <div className="pb-6">
                    <p className="text-gray-600 leading-relaxed mb-4">{product.longDescription}</p>
                    <h4 className="font-bold text-gray-900 mb-3">Caractéristiques</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-600">
                          <span className="text-[#6b8e7b] mt-1">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Materials */}
              <div className="border-b border-gray-200">
                <button
                  onClick={() => toggleSection("materials")}
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <span className="text-sm font-bold text-gray-900 tracking-wide">MATÉRIAUX & ENTRETIEN</span>
                  {openSection === "materials" ? <Minus className="w-5 h-5 text-gray-500" /> : <Plus className="w-5 h-5 text-gray-500" />}
                </button>
                {openSection === "materials" && (
                  <div className="pb-6">
                    <p className="text-gray-600 leading-relaxed">{product.materials}</p>
                  </div>
                )}
              </div>

              {/* Shipping */}
              <div className="border-b border-gray-200">
                <button
                  onClick={() => toggleSection("shipping")}
                  className="w-full flex items-center justify-between py-4 text-left"
                >
                  <span className="text-sm font-bold text-gray-900 tracking-wide">LIVRAISON & RETOURS</span>
                  {openSection === "shipping" ? <Minus className="w-5 h-5 text-gray-500" /> : <Plus className="w-5 h-5 text-gray-500" />}
                </button>
                {openSection === "shipping" && (
                  <div className="pb-6">
                    <p className="text-gray-600 leading-relaxed">{product.shipping}</p>
                    <p className="text-gray-600 leading-relaxed mt-4">
                      Retours acceptés dans les 30 jours suivant la réception. 
                      L'article doit être dans son emballage d'origine et non utilisé.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Sticky Bottom Bar (mobile) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 flex items-center gap-3 lg:hidden z-50 shadow-[0_-4px_12px_rgba(0,0,0,0.1)]">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <div className="relative w-10 h-10 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0">
            <Image
              src={product.colors[selectedColor].image}
              alt={product.name}
              fill
              className="object-contain p-1"
            />
          </div>
          <div className="min-w-0">
            <p className="text-gray-900 font-bold text-sm truncate">{product.name}</p>
            <p className="text-red-600 font-bold text-xs">CA${totalPrice.toFixed(2)}</p>
          </div>
        </div>
        <button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className="bg-[#6b8e7b] hover:bg-[#5a7a66] text-white py-3 px-5 rounded-lg font-bold text-sm flex items-center gap-2 disabled:opacity-50 shadow-md"
        >
          <ShoppingCart className="w-4 h-4" />
          AJOUTER
        </button>
      </div>

      <div className="h-20 lg:hidden" />

      <Footer />
    </div>
  )
}
