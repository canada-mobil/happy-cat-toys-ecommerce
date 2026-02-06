export interface ProductColor {
  name: string
  value: string
  image: string
}

export interface ProductPackage {
  quantity: number
  label: string
  pricePerUnit: number
  badge?: string
}

export interface Product {
  id: string
  name: string
  description: string
  longDescription: string
  price: number
  originalPrice: number
  image: string
  images: string[]
  colors: ProductColor[]
  packages: ProductPackage[]
  category: string
  inStock: boolean
  stockCount: number
  features: string[]
  materials: string
  shipping: string
  reviewCount: number
  rating: number
}

export const products: Product[] = [
  {
    id: "smart-interactive-ball",
    name: "Smart Interactive Cats Ball Toy",
    description: "Jouet balle interactive intelligente qui roule, rebondit et stimule l'instinct de chasse de votre chat.",
    longDescription: "Transformez le temps de jeu de votre chat en une aventure ! La Smart Interactive Cats Ball Toy est conçue pour éveiller la curiosité et l'énergie de votre félin grâce à ses mouvements de roulement, de secousse et de rebond qui imitent une proie naturelle. Rechargeable par USB, matériaux écologiques et sécuritaires.",
    price: 4.99,
    originalPrice: 11.99,
    image: "/smart_interactive_cats_ball_toy_red.png.webp",
    images: [
      "/smart_interactive_cats_ball_toy_red.png.webp",
      "/smart_interactive_cats_ball_toy_intro.png.webp",
      "/smart_interactive_cats_ball_toy_fun.png.webp",
      "/smart_interactive_cats_ball_toy_entertainment.png.webp",
      "/smart_interactive_cats_ball_toy_modes.png.webp",
      "/smart_interactive_cats_ball_toy_dimension.png.webp",
      "/smart_interactive_cats_ball_toy_package.png.avif"
    ],
    colors: [
      { name: "Rouge", value: "#e53e3e", image: "/smart_interactive_cats_ball_toy_red.png.webp" },
      { name: "Gris", value: "#a0aec0", image: "/smart_interactive_cats_ball_toy_gray.png.avif" },
      { name: "Vert", value: "#48bb78", image: "/smart_interactive_cats_ball_toy_green.png.avif" }
    ],
    packages: [
      { quantity: 1, label: "1x", pricePerUnit: 4.99 },
      { quantity: 2, label: "2x", pricePerUnit: 4.49, badge: "Livraison Offerte" },
      { quantity: 3, label: "3x", pricePerUnit: 3.99, badge: "Meilleur Deal" }
    ],
    category: "Jouets Interactifs",
    inStock: true,
    stockCount: 18,
    features: [
      "Mouvement intelligent auto-roulant",
      "3 modes de jeu interactifs",
      "Rechargeable par USB (2h d'autonomie)",
      "Matériaux écologiques et non toxiques",
      "Silencieux - ne dérange pas votre sommeil",
      "Stimule l'instinct de chasse naturel"
    ],
    materials: "Plastique ABS écologique non toxique, silicone alimentaire, batterie lithium rechargeable. Sans BPA.",
    shipping: "Expédition en 24h. Livraison garantie avec Canada Post. Livraison gratuite pour les commandes de 2+ unités.",
    reviewCount: 325,
    rating: 4.8
  }
]

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id)
}

export function getRelatedProducts(currentId: string, limit = 4): Product[] {
  return products.filter(p => p.id !== currentId).slice(0, limit)
}
