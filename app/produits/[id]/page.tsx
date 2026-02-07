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
import ProductReviews from "@/components/product-reviews"

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
        variant: `#PAWPAW -${Math.round((1 - currentPrice / product.originalPrice) * 100)}% appliqué`,
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
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* LEFT: Image Gallery */}
          <div>
            {/* Main Image */}
            <div className="relative aspect-square bg-neutral-50 rounded-2xl overflow-hidden mb-4">
              {!product.inStock && (
                <span className="absolute top-4 left-4 z-10 bg-neutral-900 text-white text-xs font-medium px-3 py-1 rounded-full">
                  ÉPUISÉ
                </span>
              )}
              <span className="absolute top-4 right-4 z-10 bg-blue-800 text-white text-[10px] font-medium px-2.5 py-1 rounded-full">
                -{Math.round((1 - product.price / product.originalPrice) * 100)}%
              </span>
              <Image
                src={product.colors[selectedColor].image}
                alt={product.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain p-8"
                priority
              />
              {/* Nav arrows */}
              <button 
                onClick={() => setSelectedImage(Math.max(0, selectedImage - 1))}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-sm transition-colors"
              >
                <ChevronLeft className="w-4 h-4 text-neutral-600" />
              </button>
              <button 
                onClick={() => setSelectedImage(Math.min(product.images.length - 1, selectedImage + 1))}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-sm transition-colors"
              >
                <ChevronRight className="w-4 h-4 text-neutral-600" />
              </button>
            </div>

            {/* Thumbnail Gallery */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all ${
                    selectedImage === index ? 'border-neutral-900 shadow-sm' : 'border-neutral-100 hover:border-neutral-300'
                  }`}
                >
                  <Image src={img} alt={`Vue ${index + 1}`} fill sizes="64px" className="object-contain p-1" />
                </button>
              ))}
            </div>

            {/* Product Description Images - Desktop only here */}
            <div className="hidden lg:block mt-10 space-y-5">
              <h3 className="text-xl font-semibold text-neutral-900">Unleash the Fun</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                {product.longDescription}
              </p>
              {product.images.slice(1, 5).map((img, index) => (
                <div key={index} className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image src={img} alt={`Détail ${index + 1}`} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain bg-neutral-50" />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Product Info */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            {/* Reviews */}
            <div className="flex items-center gap-2 mb-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(product.rating) ? 'text-neutral-900 fill-neutral-900' : 'text-neutral-200'}`} />
                ))}
              </div>
              <span className="text-xs text-neutral-400">{product.reviewCount} avis</span>
            </div>

            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-semibold text-neutral-900 tracking-tight mb-4">
              {product.name}
            </h1>

            {/* Price */}
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl font-semibold text-neutral-900">CA${currentPrice.toFixed(2)}</span>
              <span className="text-lg text-neutral-300 line-through">CA${product.originalPrice.toFixed(2)}</span>
              <span className="bg-blue-800 text-white text-[10px] font-medium px-2 py-0.5 rounded-full">
                -{Math.round((1 - currentPrice / product.originalPrice) * 100)}%
              </span>
            </div>

            {/* Promo Code Badge */}
            <div className="flex items-center gap-2 mb-5">
              <div className="bg-neutral-50 border border-neutral-200 rounded-full px-3 py-1 flex items-center gap-2">
                <span className="text-neutral-500 text-xs">Code appliqué:</span>
                <span className="bg-blue-800 text-white text-[10px] font-medium px-2 py-0.5 rounded-full tracking-wider">#PAWPAW</span>
              </div>
              <span className="text-xs text-neutral-400">-{Math.round((1 - currentPrice / product.originalPrice) * 100)}% de rabais</span>
            </div>

            {/* Free Shipping Countdown */}
            <div className="bg-neutral-50 rounded-xl px-4 py-2.5 mb-6 flex items-center gap-2">
              <span className="text-xs font-medium text-neutral-600">Livraison Offerte</span>
              <span className="bg-blue-800 text-white text-[10px] font-medium px-1.5 py-0.5 rounded">{timeLeft.hours}</span>
              <span className="text-[10px] text-neutral-300">:</span>
              <span className="bg-blue-800 text-white text-[10px] font-medium px-1.5 py-0.5 rounded">{timeLeft.minutes}</span>
              <span className="text-[10px] text-neutral-300">:</span>
              <span className="bg-blue-800 text-white text-[10px] font-medium px-1.5 py-0.5 rounded">{timeLeft.seconds}</span>
              <span className="text-[10px] text-neutral-400 ml-1">restantes</span>
            </div>

            {/* Color Selector */}
            <div className="mb-6">
              <p className="text-xs font-medium text-neutral-900 mb-3">Couleur — <span className="text-neutral-400">{product.colors[selectedColor].name}</span></p>
              <div className="flex gap-3">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => handleColorChange(index)}
                    className={`relative w-14 h-14 rounded-xl overflow-hidden border-2 transition-all ${
                      selectedColor === index ? 'border-neutral-900 shadow-sm' : 'border-neutral-100 hover:border-neutral-300'
                    }`}
                  >
                    <Image src={color.image} alt={color.name} fill sizes="40px" className="object-contain p-1" />
                  </button>
                ))}
              </div>
            </div>

            {/* Stock */}
            <div className="flex items-center gap-2 mb-6">
              <span className={`w-1.5 h-1.5 rounded-full ${product.colors[selectedColor].stockCount <= 5 ? 'bg-red-500' : 'bg-green-500'}`}></span>
              <span className={`text-xs ${product.colors[selectedColor].stockCount <= 5 ? 'text-red-500' : 'text-neutral-400'}`}>
                {product.colors[selectedColor].stockCount <= 5 
                  ? `Plus que ${product.colors[selectedColor].stockCount} en stock` 
                  : `${product.colors[selectedColor].stockCount} en stock`}
              </span>
            </div>

            {/* Package Selector */}
            <div className="mb-6">
              <p className="text-xs font-medium text-neutral-900 mb-3">Package — <span className="text-neutral-400">{product.packages[selectedPackage].label}</span></p>
              <div className="flex gap-2">
                {product.packages.map((pkg, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedPackage(index)}
                    className={`relative px-5 py-2.5 rounded-full text-center transition-all ${
                      selectedPackage === index 
                        ? 'bg-blue-800 text-white' 
                        : 'bg-neutral-50 text-neutral-600 hover:bg-neutral-100'
                    }`}
                  >
                    <span className="block text-xs font-medium">{pkg.label}</span>
                    {pkg.badge && (
                      <span className={`block text-[9px] mt-0.5 ${
                        selectedPackage === index ? 'text-neutral-300' : 'text-neutral-400'
                      }`}>
                        {pkg.badge}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="w-full bg-blue-800 hover:bg-blue-900 text-white py-4 px-6 rounded-full font-medium text-sm flex items-center justify-center gap-3 transition-all hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed mb-5"
            >
              <ShoppingCart className="w-4 h-4" />
              Ajouter au panier — CA${totalPrice.toFixed(2)}
            </button>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="flex items-center gap-2.5 text-xs text-neutral-500">
                <Truck className="w-4 h-4 text-neutral-400 flex-shrink-0" />
                <span>Expédition 24h</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-neutral-500">
                <Shield className="w-4 h-4 text-neutral-400 flex-shrink-0" />
                <span>Canada Post</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-neutral-500">
                <Leaf className="w-4 h-4 text-neutral-400 flex-shrink-0" />
                <span>Éco-responsable</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-neutral-500">
                <Clock className="w-4 h-4 text-neutral-400 flex-shrink-0" />
                <span>Garantie 2 mois</span>
              </div>
            </div>

            {/* Delivery Info */}
            <div className="bg-neutral-50 rounded-xl p-4 mb-6">
              <p className="text-xs text-neutral-600">
                <span className="font-medium text-neutral-900">Livraison:</span> 24 à 72h ouvrables. Expédition le jour même si commandé avant 14h.
              </p>
              <p className="text-xs text-neutral-400 mt-1">
                Transporteur: Canada Post
              </p>
            </div>

            {/* Accordion Sections */}
            <div className="border-t border-neutral-100">
              {/* Details */}
              <div className="border-b border-neutral-100">
                <button
                  onClick={() => toggleSection("details")}
                  className="w-full flex items-center justify-between py-4 text-left hover:opacity-70 transition-opacity"
                >
                  <span className="text-xs font-medium text-neutral-900 uppercase tracking-wider">Détails du produit</span>
                  {openSection === "details" ? <Minus className="w-4 h-4 text-neutral-400" /> : <Plus className="w-4 h-4 text-neutral-400" />}
                </button>
                {openSection === "details" && (
                  <div className="pb-6">
                    <p className="text-neutral-500 text-sm leading-relaxed mb-4">{product.longDescription}</p>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-neutral-500 text-sm">
                          <span className="text-neutral-300 mt-0.5">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Materials */}
              <div className="border-b border-neutral-100">
                <button
                  onClick={() => toggleSection("materials")}
                  className="w-full flex items-center justify-between py-4 text-left hover:opacity-70 transition-opacity"
                >
                  <span className="text-xs font-medium text-neutral-900 uppercase tracking-wider">Matériaux & Entretien</span>
                  {openSection === "materials" ? <Minus className="w-4 h-4 text-neutral-400" /> : <Plus className="w-4 h-4 text-neutral-400" />}
                </button>
                {openSection === "materials" && (
                  <div className="pb-6">
                    <p className="text-neutral-500 text-sm leading-relaxed">{product.materials}</p>
                  </div>
                )}
              </div>

              {/* Shipping */}
              <div className="border-b border-neutral-100">
                <button
                  onClick={() => toggleSection("shipping")}
                  className="w-full flex items-center justify-between py-4 text-left hover:opacity-70 transition-opacity"
                >
                  <span className="text-xs font-medium text-neutral-900 uppercase tracking-wider">Livraison & Retours</span>
                  {openSection === "shipping" ? <Minus className="w-4 h-4 text-neutral-400" /> : <Plus className="w-4 h-4 text-neutral-400" />}
                </button>
                {openSection === "shipping" && (
                  <div className="pb-6">
                    <p className="text-neutral-500 text-sm leading-relaxed">{product.shipping}</p>
                    <p className="text-neutral-500 text-sm leading-relaxed mt-4">
                      Retours acceptés dans les 30 jours suivant la réception. 
                      L'article doit être dans son emballage d'origine et non utilisé.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Product Description Images - Mobile only, after all product info */}
        <div className="lg:hidden mt-10 space-y-5 px-0">
          <h3 className="text-xl font-semibold text-neutral-900">Unleash the Fun</h3>
          <p className="text-neutral-500 text-sm leading-relaxed">
            {product.longDescription}
          </p>
          {product.images.slice(1, 5).map((img, index) => (
            <div key={index} className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src={img} alt={`Détail ${index + 1}`} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain bg-neutral-50" />
            </div>
          ))}
        </div>

        {/* Product Video */}
        <div className="mt-12 rounded-2xl overflow-hidden bg-neutral-900">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full"
          >
            <source src="/shop1.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Customer Reviews */}
        <ProductReviews />
      </main>

      {/* Sticky Bottom Bar (mobile) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-neutral-100 p-3 flex items-center gap-3 lg:hidden z-50">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <div className="relative w-9 h-9 bg-neutral-50 rounded-xl overflow-hidden flex-shrink-0">
            <Image
              src={product.colors[selectedColor].image}
              alt={product.name}
              fill
              sizes="48px"
              className="object-contain p-1"
            />
          </div>
          <div className="min-w-0">
            <p className="text-neutral-900 font-medium text-xs truncate">{product.name}</p>
            <p className="text-neutral-900 font-semibold text-xs">CA${totalPrice.toFixed(2)}</p>
          </div>
        </div>
        <button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className="bg-blue-800 hover:bg-blue-900 text-white py-2.5 px-5 rounded-full font-medium text-xs flex items-center gap-2 disabled:opacity-50 transition-all"
        >
          <ShoppingCart className="w-3.5 h-3.5" />
          Ajouter
        </button>
      </div>

      <div className="h-20 lg:hidden" />

      <Footer />
    </div>
  )
}
