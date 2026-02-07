export interface ProductColor {
  name: string
  value: string
  image: string
  stockCount: number
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
      { name: "Rouge", value: "#e53e3e", image: "/smart_interactive_cats_ball_toy_red.png.webp", stockCount: 18 },
      { name: "Gris", value: "#a0aec0", image: "/smart_interactive_cats_ball_toy_gray.png.avif", stockCount: 3 },
      { name: "Vert", value: "#48bb78", image: "/smart_interactive_cats_ball_toy_green.png.avif", stockCount: 7 }
    ],
    packages: [
      { quantity: 1, label: "1x", pricePerUnit: 4.99 },
      { quantity: 2, label: "2x", pricePerUnit: 4.49 },
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
  },
  {
    id: "wicked-ball-m3",
    name: "Wicked Ball M3",
    description: "La balle douce et robuste pour chats avec jeu multi-scénarios. Stimule l'instinct de chasse avec des mouvements imprévisibles.",
    longDescription: "Le Wicked Ball M3 est le compagnon de jeu ultime pour votre chat. Sa surface douce en peluche protège les pattes délicates tout en offrant des mouvements intelligents et imprévisibles. Avec plusieurs modes de jeu, il garde votre chat actif et stimulé même quand vous n'êtes pas là. Rechargeable par USB, silencieux et durable.",
    price: 6.99,
    originalPrice: 15.75,
    image: "/Section1-Productimages-M3Red1-monderncat_jpg.jpg.webp",
    images: [
      "/Section1-Productimages-M3Red1-monderncat_jpg.jpg.webp",
      "/Section1-ProductImages-M3Red2.jpg.webp",
      "/Section1-ProductImages-M3Red4.jpg.webp",
      "/Section1_-_Product_Images_-_M3_Beige_1.png.webp",
      "/Section1_-_Product_Images_-_M3_Beige_2.jpg.webp",
      "/Section1_-_Product_Images_-_M3_Beige_3.jpg.webp",
      "/Section1_-_Product_Images_-_M3_Beige_4.png.webp"
    ],
    colors: [
      { name: "Vintage Red", value: "#c0392b", image: "/Section1-Productimages-M3Red1-monderncat_jpg.jpg.webp", stockCount: 12 },
      { name: "Beige", value: "#d4b896", image: "/Section1_-_Product_Images_-_M3_Beige_1.png.webp", stockCount: 9 }
    ],
    packages: [
      { quantity: 1, label: "1x", pricePerUnit: 6.99 },
      { quantity: 2, label: "2x", pricePerUnit: 5.99 },
      { quantity: 3, label: "3x", pricePerUnit: 4.99, badge: "Meilleur Deal" }
    ],
    category: "Jouets Interactifs",
    inStock: true,
    stockCount: 21,
    features: [
      "Surface douce en peluche - protège les pattes",
      "Mouvements intelligents multi-scénarios",
      "Rechargeable par USB (3h d'autonomie)",
      "Mode silencieux intégré",
      "Matériaux non toxiques et durables",
      "Active l'instinct de chasse naturel"
    ],
    materials: "Peluche douce premium, plastique ABS écologique, batterie lithium rechargeable. Sans BPA, non toxique.",
    shipping: "Expédition en 24h. Livraison garantie avec Canada Post. Livraison gratuite pour les commandes de 2+ unités.",
    reviewCount: 198,
    rating: 4.7
  },
  {
    id: "mouse-plus",
    name: "Mouse PLUS",
    description: "Jouet souris interactive qui imite les mouvements d'une vraie souris. Stimule l'instinct de chasse avec des déplacements imprévisibles.",
    longDescription: "Le Mouse PLUS offre une expérience de chasse réaliste pour votre chat grâce à ses mouvements aléatoires qui imitent une vraie souris. Avec 2 modes de vitesse, un système anti-perte par bip sonore, et un équilibre jeu/repos automatique (10 min de jeu, 30 min de repos), il garde votre chat actif et stimulé. Rechargeable par USB-C, roues détachables et évitement d'obstacles automatique.",
    price: 7.99,
    originalPrice: 17.99,
    image: "/mouse1.jpg",
    images: [
      "/mouse1.jpg",
      "/mouse5.webp",
      "/mouse7.webp",
      "/mouse8.webp",
      "/mouse9.webp",
      "/mouse3.webp",
      "/mouse4.webp",
      "/mouse6.webp"
    ],
    colors: [
      { name: "Milky Blue", value: "#b8d4e3", image: "/mouse1.jpg", stockCount: 15 },
      { name: "Vert", value: "#8fbc8f", image: "/mouse3.webp", stockCount: 10 }
    ],
    packages: [
      { quantity: 1, label: "1x", pricePerUnit: 7.99 },
      { quantity: 2, label: "2x", pricePerUnit: 6.99 },
      { quantity: 3, label: "3x", pricePerUnit: 5.99, badge: "Meilleur Deal" }
    ],
    category: "Jouets Interactifs",
    inStock: true,
    stockCount: 25,
    features: [
      "Imite les mouvements d'une vraie souris",
      "2 modes de vitesse (Normal & Doux)",
      "Alerte bip anti-perte intégrée",
      "Équilibre jeu/repos (10 min jeu, 30 min repos)",
      "Rechargeable par USB-C",
      "Évitement d'obstacles automatique",
      "Roues facilement détachables",
      "Batterie 48% plus grande que la Gen 1"
    ],
    materials: "Plastique ABS écologique, roues en silicone, batterie lithium rechargeable USB-C. Sans BPA, non toxique.",
    shipping: "Expédition en 24h. Livraison garantie avec Canada Post. Livraison gratuite pour les commandes de 2+ unités.",
    reviewCount: 156,
    rating: 4.9
  },
  {
    id: "purr-fountain-f1",
    name: "Purr Fountain F1",
    description: "Fontaine à eau intelligente sans pompe pour chats. Design sans fil, filtration multi-couches et capteur intelligent pour une eau toujours fraîche.",
    longDescription: "La Purr Fountain F1 révolutionne l'hydratation de votre chat grâce à sa technologie MagDrive™ sans pompe. Silencieuse, facile à nettoyer et dotée d'un capteur intelligent qui détecte la présence de votre chat. Double mode de distribution, séparation eau-électricité pour la sécurité, et filtration multi-couches pour une eau pure et fraîche en permanence.",
    price: 27.15,
    originalPrice: 84.00,
    image: "/e__pumpless_design.jpg",
    images: [
      "/e__pumpless_design.jpg",
      "/e1__dual_mode_dispensing.jpg.webp",
      "/e1__multi-layer__filtration.jpg.webp",
      "/e1__no_cleaning_hassle.jpg.webp",
      "/e1__water-elecrical_separation.jpg.webp",
      "/e1__battery_life.jpg.webp",
      "/e1__flexible_power_options.jpg.webp",
      "/set-up_guide_pc2.jpg.webp",
      "/water_stainless_steel_pc.jpg.webp",
      "/knowleage_slide3_pc.jpg.webp",
      "/in_the_box_pc.jpg.webp",
      "/Double_Protection_pc.jpg.webp"
    ],
    colors: [
      { name: "American", value: "#f5f5f5", image: "/e__pumpless_design.jpg", stockCount: 14 },
      { name: "European", value: "#e8e8e8", image: "/e__pumpless_design.jpg", stockCount: 12 },
      { name: "British", value: "#dcdcdc", image: "/e__pumpless_design.jpg", stockCount: 8 },
      { name: "Australian", value: "#d0d0d0", image: "/e__pumpless_design.jpg", stockCount: 6 }
    ],
    packages: [
      { quantity: 1, label: "1x", pricePerUnit: 27.15 },
      { quantity: 2, label: "2x", pricePerUnit: 24.99, badge: "Meilleur Deal" }
    ],
    category: "Fournitures",
    inStock: true,
    stockCount: 14,
    features: [
      "Design sans pompe (Pumpless) - ultra silencieux",
      "Technologie MagDrive™ brevetée",
      "Capteur intelligent - détecte votre chat",
      "Double mode de distribution d'eau",
      "Filtration multi-couches",
      "Séparation eau-électricité sécuritaire",
      "Nettoyage facile - aucun tracas",
      "Options d'alimentation flexibles (USB / batterie)",
      "Autonomie longue durée de la batterie"
    ],
    materials: "Plastique alimentaire sans BPA, filtre à charbon actif multi-couches, moteur MagDrive silencieux. Certifié sécuritaire pour animaux.",
    shipping: "Expédition en 24h. Livraison garantie avec Canada Post. Livraison gratuite.",
    reviewCount: 89,
    rating: 4.8
  }
]

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id)
}

export function getRelatedProducts(currentId: string, limit = 4): Product[] {
  return products.filter(p => p.id !== currentId).slice(0, limit)
}
