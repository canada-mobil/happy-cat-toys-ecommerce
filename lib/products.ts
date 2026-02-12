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
  descriptionEn: string
  longDescription: string
  longDescriptionEn: string
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
  featuresEn: string[]
  materials: string
  materialsEn: string
  shipping: string
  shippingEn: string
  reviewCount: number
  rating: number
}

export const products: Product[] = [
  {
    id: "smart-interactive-ball",
    name: "Smart Interactive Cats Ball Toy",
    description: "Jouet balle interactive intelligente qui roule, rebondit et stimule l'instinct de chasse de votre chat.",
    descriptionEn: "Smart interactive ball toy that rolls, bounces and stimulates your cat's hunting instinct.",
    longDescription: "Transformez le temps de jeu de votre chat en une aventure ! La Smart Interactive Cats Ball Toy est conçue pour éveiller la curiosité et l'énergie de votre félin grâce à ses mouvements de roulement, de secousse et de rebond qui imitent une proie naturelle. Rechargeable par USB, matériaux écologiques et sécuritaires.",
    longDescriptionEn: "Transform your cat's playtime into an adventure! The Smart Interactive Cats Ball Toy is designed to awaken your feline's curiosity and energy with rolling, shaking and bouncing movements that mimic natural prey. USB rechargeable, eco-friendly and safe materials.",
    price: 17.99,
    originalPrice: 35.99,
    image: "https://res.cloudinary.com/dhhdhilja/image/upload/v1770517783/purrball/smart_interactive_cats_ball_toy_red.png.webp",
    images: [
      "https://res.cloudinary.com/dhhdhilja/image/upload/v1770517783/purrball/smart_interactive_cats_ball_toy_red.png.webp",
      "https://res.cloudinary.com/dhhdhilja/image/upload/v1770517778/purrball/smart_interactive_cats_ball_toy_intro.png.webp",
      "https://res.cloudinary.com/dhhdhilja/image/upload/v1770517774/purrball/smart_interactive_cats_ball_toy_fun.png.webp",
      "https://res.cloudinary.com/dhhdhilja/image/upload/v1770517772/purrball/smart_interactive_cats_ball_toy_entertainment.png.webp",
      "https://res.cloudinary.com/dhhdhilja/image/upload/v1770517780/purrball/smart_interactive_cats_ball_toy_modes.png.webp",
      "https://res.cloudinary.com/dhhdhilja/image/upload/v1770517771/purrball/smart_interactive_cats_ball_toy_dimension.png.webp",
      "https://res.cloudinary.com/dhhdhilja/image/upload/v1770517781/purrball/smart_interactive_cats_ball_toy_package.png.webp"
    ],
    colors: [
      { name: "Rouge", value: "#e53e3e", image: "https://res.cloudinary.com/dhhdhilja/image/upload/v1770517783/purrball/smart_interactive_cats_ball_toy_red.png.webp", stockCount: 18 },
      { name: "Gris", value: "#a0aec0", image: "https://res.cloudinary.com/dhhdhilja/image/upload/v1770517775/purrball/smart_interactive_cats_ball_toy_gray.png.webp", stockCount: 3 },
      { name: "Vert", value: "#48bb78", image: "https://res.cloudinary.com/dhhdhilja/image/upload/v1770517777/purrball/smart_interactive_cats_ball_toy_green.png.webp", stockCount: 7 }
    ],
    packages: [
      { quantity: 1, label: "1x", pricePerUnit: 17.99, badge: "Aujourd'hui seulement - 50%" },
      { quantity: 2, label: "2x", pricePerUnit: 16.99 },
      { quantity: 3, label: "3x", pricePerUnit: 15.99, badge: "Meilleur Deal" }
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
    featuresEn: [
      "Smart self-rolling movement",
      "3 interactive play modes",
      "USB rechargeable (2h battery life)",
      "Eco-friendly and non-toxic materials",
      "Silent - won't disturb your sleep",
      "Stimulates natural hunting instinct"
    ],
    materials: "Plastique ABS écologique non toxique, silicone alimentaire, batterie lithium rechargeable. Sans BPA.",
    materialsEn: "Eco-friendly non-toxic ABS plastic, food-grade silicone, rechargeable lithium battery. BPA-free.",
    shipping: "Expédition en 24h. Livraison garantie avec Canada Post. Livraison gratuite pour les commandes de 2+ unités.",
    shippingEn: "Ships within 24h. Guaranteed delivery with Canada Post. Free shipping on orders of 2+ units.",
    reviewCount: 325,
    rating: 4.8
  },
  {
    id: "wicked-ball-m3",
    name: "Wicked Ball M3",
    description: "La balle douce et robuste pour chats avec jeu multi-scénarios. Stimule l'instinct de chasse avec des mouvements imprévisibles.",
    descriptionEn: "Soft and durable ball for cats with multi-scenario play. Stimulates hunting instinct with unpredictable movements.",
    longDescription: "Le Wicked Ball M3 est le compagnon de jeu ultime pour votre chat. Sa surface douce en peluche protège les pattes délicates tout en offrant des mouvements intelligents et imprévisibles. Avec plusieurs modes de jeu, il garde votre chat actif et stimulé même quand vous n'êtes pas là. Rechargeable par USB, silencieux et durable.",
    longDescriptionEn: "The Wicked Ball M3 is the ultimate play companion for your cat. Its soft plush surface protects delicate paws while offering smart and unpredictable movements. With multiple play modes, it keeps your cat active and stimulated even when you're not around. USB rechargeable, silent and durable.",
    price: 22.99,
    originalPrice: 45.99,
    image: "https://res.cloudinary.com/dhhdhilja/image/upload/v1770517594/purrball/Section1-Productimages-M3Red1-monderncat_jpg.jpg.webp",
    images: [
      "https://res.cloudinary.com/dhhdhilja/image/upload/v1770517594/purrball/Section1-Productimages-M3Red1-monderncat_jpg.jpg.webp",
      "https://res.cloudinary.com/dhhdhilja/image/upload/v1770517590/purrball/Section1-ProductImages-M3Red2.jpg.webp",
      "https://res.cloudinary.com/dhhdhilja/image/upload/v1770517592/purrball/Section1-ProductImages-M3Red4.jpg.webp",
      "https://res.cloudinary.com/dhhdhilja/image/upload/v1770517595/purrball/Section1_-_Product_Images_-_M3_Beige_1.png.webp",
      "https://res.cloudinary.com/dhhdhilja/image/upload/v1770517599/purrball/Section1_-_Product_Images_-_M3_Beige_2.jpg.webp",
      "https://res.cloudinary.com/dhhdhilja/image/upload/v1770517600/purrball/Section1_-_Product_Images_-_M3_Beige_3.jpg.webp",
      "https://res.cloudinary.com/dhhdhilja/image/upload/v1770517602/purrball/Section1_-_Product_Images_-_M3_Beige_4.png.webp"
    ],
    colors: [
      { name: "Vintage Red", value: "#c0392b", image: "https://res.cloudinary.com/dhhdhilja/image/upload/v1770517594/purrball/Section1-Productimages-M3Red1-monderncat_jpg.jpg.webp", stockCount: 12 },
      { name: "Beige", value: "#d4b896", image: "https://res.cloudinary.com/dhhdhilja/image/upload/v1770517595/purrball/Section1_-_Product_Images_-_M3_Beige_1.png.webp", stockCount: 9 }
    ],
    packages: [
      { quantity: 1, label: "1x", pricePerUnit: 22.99, badge: "Aujourd'hui seulement - 50%" },
      { quantity: 2, label: "2x", pricePerUnit: 21.99 },
      { quantity: 3, label: "3x", pricePerUnit: 20.99, badge: "Meilleur Deal" }
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
    featuresEn: [
      "Soft plush surface - protects paws",
      "Smart multi-scenario movements",
      "USB rechargeable (3h battery life)",
      "Built-in silent mode",
      "Non-toxic and durable materials",
      "Activates natural hunting instinct"
    ],
    materials: "Peluche douce premium, plastique ABS écologique, batterie lithium rechargeable. Sans BPA, non toxique.",
    materialsEn: "Premium soft plush, eco-friendly ABS plastic, rechargeable lithium battery. BPA-free, non-toxic.",
    shipping: "Expédition en 24h. Livraison garantie avec Canada Post. Livraison gratuite pour les commandes de 2+ unités.",
    shippingEn: "Ships within 24h. Guaranteed delivery with Canada Post. Free shipping on orders of 2+ units.",
    reviewCount: 198,
    rating: 4.7
  },
  {
    id: "mouse-plus",
    name: "Mouse PLUS",
    description: "Jouet souris interactive qui imite les mouvements d'une vraie souris. Stimule l'instinct de chasse avec des déplacements imprévisibles.",
    descriptionEn: "Interactive mouse toy that mimics real mouse movements. Stimulates hunting instinct with unpredictable movements.",
    longDescription: "Le Mouse PLUS offre une expérience de chasse réaliste pour votre chat grâce à ses mouvements aléatoires qui imitent une vraie souris. Avec 2 modes de vitesse, un système anti-perte par bip sonore, et un équilibre jeu/repos automatique (10 min de jeu, 30 min de repos), il garde votre chat actif et stimulé. Rechargeable par USB-C, roues détachables et évitement d'obstacles automatique.",
    longDescriptionEn: "The Mouse PLUS offers a realistic hunting experience for your cat with random movements that mimic a real mouse. With 2 speed modes, an anti-loss beep system, and automatic play/rest balance (10 min play, 30 min rest), it keeps your cat active and stimulated. USB-C rechargeable, detachable wheels and automatic obstacle avoidance.",
    price: 25.99,
    originalPrice: 51.99,
    image: "https://res.cloudinary.com/dhhdhilja/image/upload/v1770517668/purrball/mouse1.webp",
    images: [
      "https://res.cloudinary.com/dhhdhilja/image/upload/v1770517668/purrball/mouse1.webp",
      "https://res.cloudinary.com/dhhdhilja/image/upload/v1770517673/purrball/mouse5.webp",
      "https://res.cloudinary.com/dhhdhilja/image/upload/v1770517676/purrball/mouse7.webp",
      "https://res.cloudinary.com/dhhdhilja/image/upload/v1770517678/purrball/mouse8.webp",
      "https://res.cloudinary.com/dhhdhilja/image/upload/v1770517679/purrball/mouse9.webp",
      "https://res.cloudinary.com/dhhdhilja/image/upload/v1770517670/purrball/mouse3.webp",
      "https://res.cloudinary.com/dhhdhilja/image/upload/v1770517671/purrball/mouse4.webp",
      "https://res.cloudinary.com/dhhdhilja/image/upload/v1770517674/purrball/mouse6.webp"
    ],
    colors: [
      { name: "Milky Blue", value: "#b8d4e3", image: "https://res.cloudinary.com/dhhdhilja/image/upload/v1770517668/purrball/mouse1.webp", stockCount: 15 },
      { name: "Vert", value: "#8fbc8f", image: "https://res.cloudinary.com/dhhdhilja/image/upload/v1770517670/purrball/mouse3.webp", stockCount: 10 }
    ],
    packages: [
      { quantity: 1, label: "1x", pricePerUnit: 25.99, badge: "Aujourd'hui seulement - 50%" },
      { quantity: 2, label: "2x", pricePerUnit: 24.99 },
      { quantity: 3, label: "3x", pricePerUnit: 23.99, badge: "Meilleur Deal" }
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
    featuresEn: [
      "Mimics real mouse movements",
      "2 speed modes (Normal & Gentle)",
      "Built-in anti-loss beep alert",
      "Play/rest balance (10 min play, 30 min rest)",
      "USB-C rechargeable",
      "Automatic obstacle avoidance",
      "Easily detachable wheels",
      "48% larger battery than Gen 1"
    ],
    materials: "Plastique ABS écologique, roues en silicone, batterie lithium rechargeable USB-C. Sans BPA, non toxique.",
    materialsEn: "Eco-friendly ABS plastic, silicone wheels, USB-C rechargeable lithium battery. BPA-free, non-toxic.",
    shipping: "Expédition en 24h. Livraison garantie avec Canada Post. Livraison gratuite pour les commandes de 2+ unités.",
    shippingEn: "Ships within 24h. Guaranteed delivery with Canada Post. Free shipping on orders of 2+ units.",
    reviewCount: 156,
    rating: 4.9
  },
  {
    id: "purr-fountain-f1",
    name: "Purr Fountain F1",
    description: "Fontaine à eau intelligente sans pompe pour chats. Design sans fil, filtration multi-couches et capteur intelligent pour une eau toujours fraîche.",
    descriptionEn: "Smart pumpless water fountain for cats. Wireless design, multi-layer filtration and smart sensor for always fresh water.",
    longDescription: "La Purr Fountain F1 révolutionne l'hydratation de votre chat grâce à sa technologie MagDrive™ sans pompe. Silencieuse, facile à nettoyer et dotée d'un capteur intelligent qui détecte la présence de votre chat. Double mode de distribution, séparation eau-électricité pour la sécurité, et filtration multi-couches pour une eau pure et fraîche en permanence.",
    longDescriptionEn: "The Purr Fountain F1 revolutionizes your cat's hydration with its pumpless MagDrive™ technology. Silent, easy to clean and equipped with a smart sensor that detects your cat's presence. Dual dispensing mode, water-electrical separation for safety, and multi-layer filtration for pure and fresh water at all times.",
    price: 27.15,
    originalPrice: 84.00,
    image: "https://res.cloudinary.com/dhhdhilja/image/upload/v1770517651/purrball/e__pumpless_design.webp",
    images: [
      "https://res.cloudinary.com/dhhdhilja/image/upload/v1770517651/purrball/e__pumpless_design.webp",
      "https://res.cloudinary.com/dhhdhilja/image/upload/v1770517607/purrball/e1__dual_mode_dispensing.jpg.webp",
      "https://res.cloudinary.com/dhhdhilja/image/upload/v1770517610/purrball/e1__multi-layer__filtration.jpg.webp",
      "https://res.cloudinary.com/dhhdhilja/image/upload/v1770517612/purrball/e1__no_cleaning_hassle.jpg.webp",
      "https://res.cloudinary.com/dhhdhilja/image/upload/v1770517613/purrball/e1__water-elecrical_separation.jpg.webp",
      "https://res.cloudinary.com/dhhdhilja/image/upload/v1770517605/purrball/e1__battery_life.jpg.webp",
      "https://res.cloudinary.com/dhhdhilja/image/upload/v1770517608/purrball/e1__flexible_power_options.jpg.webp",
      "https://res.cloudinary.com/dhhdhilja/image/upload/v1770517764/purrball/set-up_guide_pc2.jpg.webp",
      "https://res.cloudinary.com/dhhdhilja/image/upload/v1770517806/purrball/water_stainless_steel_pc.jpg.webp",
      "https://res.cloudinary.com/dhhdhilja/image/upload/v1770517667/purrball/knowleage_slide3_pc.jpg.webp",
      "https://res.cloudinary.com/dhhdhilja/image/upload/v1770517664/purrball/in_the_box_pc.jpg.webp",
      "https://res.cloudinary.com/dhhdhilja/image/upload/v1770517588/purrball/Double_Protection_pc.jpg.webp"
    ],
    colors: [
      { name: "American", value: "#f5f5f5", image: "https://res.cloudinary.com/dhhdhilja/image/upload/v1770517651/purrball/e__pumpless_design.webp", stockCount: 14 },
      { name: "European", value: "#e8e8e8", image: "https://res.cloudinary.com/dhhdhilja/image/upload/v1770517651/purrball/e__pumpless_design.webp", stockCount: 12 },
      { name: "British", value: "#dcdcdc", image: "https://res.cloudinary.com/dhhdhilja/image/upload/v1770517651/purrball/e__pumpless_design.webp", stockCount: 8 },
      { name: "Australian", value: "#d0d0d0", image: "https://res.cloudinary.com/dhhdhilja/image/upload/v1770517651/purrball/e__pumpless_design.webp", stockCount: 6 }
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
    featuresEn: [
      "Pumpless design - ultra silent",
      "Patented MagDrive™ technology",
      "Smart sensor - detects your cat",
      "Dual water dispensing mode",
      "Multi-layer filtration",
      "Safe water-electrical separation",
      "Easy cleaning - no hassle",
      "Flexible power options (USB / battery)",
      "Long-lasting battery life"
    ],
    materials: "Plastique alimentaire sans BPA, filtre à charbon actif multi-couches, moteur MagDrive silencieux. Certifié sécuritaire pour animaux.",
    materialsEn: "BPA-free food-grade plastic, multi-layer activated carbon filter, silent MagDrive motor. Certified safe for pets.",
    shipping: "Expédition en 24h. Livraison garantie avec Canada Post. Livraison gratuite.",
    shippingEn: "Ships within 24h. Guaranteed delivery with Canada Post. Free shipping.",
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
