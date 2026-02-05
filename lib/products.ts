export interface Product {
  id: string
  name: string
  description: string
  longDescription: string
  price: number
  image: string
  category: string
  inStock: boolean
  features: string[]
  materials: string
  shipping: string
}

export const products: Product[] = [
  {
    id: "feather-wand",
    name: "Baguette à Plumes Premium",
    description: "Jouet interactif avec plumes colorées pour stimuler l'instinct de chasse de votre chat.",
    longDescription: "La Baguette à Plumes Premium est conçue pour éveiller l'instinct naturel de chasseur de votre félin. Avec ses plumes multicolores et son mouvement fluide, ce jouet offre des heures de divertissement et d'exercice. Parfait pour renforcer le lien avec votre compagnon tout en lui permettant de dépenser son énergie.",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=400&fit=crop&crop=center",
    category: "Jouets Interactifs",
    inStock: true,
    features: [
      "Plumes naturelles multicolores",
      "Tige flexible et résistante",
      "Poignée ergonomique",
      "Stimule l'instinct de chasse"
    ],
    materials: "Tige en fibre de verre flexible, plumes naturelles teintes, poignée en mousse EVA.",
    shipping: "Livraison gratuite pour les commandes de plus de 35$. Expédition sous 24-48h."
  },
  {
    id: "mouse-toy",
    name: "Souris en Peluche Herbe à Chat",
    description: "Adorable souris en peluche remplie d'herbe à chat biologique.",
    longDescription: "Cette adorable souris en peluche est le compagnon de jeu idéal pour votre chat. Remplie d'herbe à chat 100% biologique, elle attire et captive les félins pendant des heures. Sa taille parfaite permet à votre chat de la transporter, la lancer et la poursuivre.",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop&crop=center",
    category: "Peluches",
    inStock: false,
    features: [
      "Herbe à chat biologique incluse",
      "Tissu doux et résistant",
      "Taille idéale pour attraper",
      "Coutures renforcées"
    ],
    materials: "Peluche polyester, rembourrage fibres recyclées, herbe à chat biologique certifiée.",
    shipping: "Livraison gratuite pour les commandes de plus de 35$. Expédition sous 24-48h."
  },
  {
    id: "ball-toy",
    name: "Balles Grelots Colorées (Lot de 6)",
    description: "Set de 6 balles avec grelots intégrés pour des heures de jeu.",
    longDescription: "Ce lot de 6 balles colorées avec grelots intégrés offre une variété de textures et de sons pour captiver votre chat. Chaque balle produit un son différent qui stimule la curiosité et l'envie de jouer de votre félin. Parfaites pour le jeu solo ou interactif.",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop&crop=center",
    category: "Balles & Grelots",
    inStock: true,
    features: [
      "6 balles de couleurs différentes",
      "Grelots sécurisés à l'intérieur",
      "Plastique non toxique",
      "Rebondissent sur toutes les surfaces"
    ],
    materials: "Plastique ABS non toxique, grelots en métal sécurisés.",
    shipping: "Livraison gratuite pour les commandes de plus de 35$. Expédition sous 24-48h."
  },
  {
    id: "catnip-fish",
    name: "Poisson Dansant à l'Herbe à Chat",
    description: "Poisson interactif qui bouge et contient de l'herbe à chat.",
    longDescription: "Le Poisson Dansant est un jouet révolutionnaire qui combine mouvement et herbe à chat pour une expérience de jeu irrésistible. Rechargeable par USB, il se tortille de manière réaliste lorsque votre chat le touche, stimulant son instinct de prédateur tout en offrant un divertissement sans fin.",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=400&fit=crop&crop=center",
    category: "Jouets Interactifs",
    inStock: true,
    features: [
      "Mouvement automatique au toucher",
      "Rechargeable par USB",
      "Herbe à chat incluse",
      "Tissu lavable"
    ],
    materials: "Peluche polyester, mécanisme électronique, batterie lithium rechargeable.",
    shipping: "Livraison gratuite pour les commandes de plus de 35$. Expédition sous 24-48h."
  },
  {
    id: "laser-toy",
    name: "Pointeur Laser Automatique",
    description: "Jouet laser automatique qui divertit votre chat même en votre absence.",
    longDescription: "Ce pointeur laser automatique offre à votre chat des sessions de jeu stimulantes même lorsque vous êtes occupé. Avec ses mouvements aléatoires et imprévisibles, il maintient l'intérêt de votre félin et l'encourage à faire de l'exercice. Minuterie intégrée pour des sessions de 15 minutes.",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?w=400&h=400&fit=crop&crop=center",
    category: "Jouets Automatiques",
    inStock: true,
    features: [
      "Mouvements aléatoires",
      "Minuterie 15 minutes",
      "3 vitesses réglables",
      "Laser sécuritaire pour les yeux"
    ],
    materials: "Plastique ABS, laser classe 1 (sécuritaire), fonctionne avec 3 piles AA.",
    shipping: "Livraison gratuite pour les commandes de plus de 35$. Expédition sous 24-48h."
  },
  {
    id: "tunnel",
    name: "Tunnel de Jeu Pliable",
    description: "Tunnel coloré avec 3 entrées pour explorer et se cacher.",
    longDescription: "Le Tunnel de Jeu Pliable offre un espace d'aventure fascinant pour votre chat. Avec ses 3 entrées et son intérieur froissé qui produit des sons attrayants, ce tunnel stimule la curiosité naturelle de votre félin. Il se plie facilement pour un rangement pratique.",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?w=400&h=400&fit=crop&crop=center",
    category: "Tunnels & Cachettes",
    inStock: true,
    features: [
      "3 entrées différentes",
      "Intérieur froissé sonore",
      "Se plie en quelques secondes",
      "Anneau en acier flexible"
    ],
    materials: "Polyester résistant, anneaux en acier à ressort, fermeture velcro.",
    shipping: "Livraison gratuite pour les commandes de plus de 35$. Expédition sous 24-48h."
  },
  {
    id: "scratching-post",
    name: "Griffoir Compact avec Jouet",
    description: "Griffoir en sisal avec balle suspendue pour griffes et jeu.",
    longDescription: "Ce griffoir compact en sisal naturel protège vos meubles tout en offrant à votre chat un endroit idéal pour faire ses griffes. La balle suspendue ajoute un élément de jeu irrésistible. Base stable pour une utilisation sécuritaire.",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?w=400&h=400&fit=crop&crop=center",
    category: "Griffoirs",
    inStock: true,
    features: [
      "Sisal 100% naturel",
      "Balle suspendue incluse",
      "Base antidérapante",
      "Compact et stable"
    ],
    materials: "Sisal naturel, bois MDF, base en feutre antidérapant, balle en mousse.",
    shipping: "Livraison gratuite pour les commandes de plus de 35$. Expédition sous 24-48h."
  },
  {
    id: "interactive-puzzle",
    name: "Puzzle Distributeur de Friandises",
    description: "Jouet intelligent qui distribue des friandises pour stimuler l'esprit.",
    longDescription: "Le Puzzle Distributeur de Friandises est conçu pour stimuler l'intelligence de votre chat. En déplaçant les pièces et en résolvant les énigmes, votre félin est récompensé par des friandises. Idéal pour les chats qui mangent trop vite ou qui s'ennuient.",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?w=400&h=400&fit=crop&crop=center",
    category: "Jouets Intelligents",
    inStock: false,
    features: [
      "Plusieurs niveaux de difficulté",
      "Encourage le jeu mental",
      "Base antidérapante",
      "Facile à nettoyer"
    ],
    materials: "Plastique ABS alimentaire, sans BPA, lavable au lave-vaisselle (panier supérieur).",
    shipping: "Livraison gratuite pour les commandes de plus de 35$. Expédition sous 24-48h."
  },
  {
    id: "catnip-gratuit",
    name: "Catnip Gratuit",
    description: "Herbe à chat premium 100% biologique - CADEAU GRATUIT avec tout achat !",
    longDescription: "Notre herbe à chat premium est cultivée de manière biologique et séchée naturellement pour préserver tous ses arômes. Ce petit sachet gratuit accompagne chaque commande pour faire plaisir à votre félin. Qualité garantie, effet irrésistible !",
    price: 0,
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=400&fit=crop&crop=center",
    category: "Cadeaux",
    inStock: true,
    features: [
      "100% biologique et naturel",
      "Séchage traditionnel",
      "Effet relaxant garanti",
      "Sachet refermable"
    ],
    materials: "Herbe à chat (Nepeta cataria) biologique séchée, emballage biodégradable.",
    shipping: "GRATUIT - Ajouté automatiquement à votre commande !"
  }
]

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id)
}

export function getRelatedProducts(currentId: string, limit = 4): Product[] {
  return products.filter(p => p.id !== currentId).slice(0, limit)
}
