import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jouets pour Chat | Jouets Interactifs & Stimulants',
  description: 'Decouvrez nos jouets premium pour chats: balles interactives, jouets stimulants, jouets pour chat d\'interieur et chaton. Livraison gratuite au Canada. Jouets enrichissement chat.',
  keywords: [
    'jouets pour chat', 'jouets chat interactifs', 'jouets stimulants chat', 'balle jouet chat',
    'jouets pour chat interieur', 'jouets pour chaton', 'jouets enrichissement chat',
    'jouet laser chat', 'souris jouet chat', 'cat toys', 'interactive cat toys', 'best cat toys',
  ],
  alternates: {
    canonical: '/produits',
  },
  openGraph: {
    title: 'Jouets pour Chat | Purrball - Jouets Interactifs Premium',
    description: 'Jouets interactifs et stimulants pour chats. Balles auto-roulantes, jouets d\'enrichissement. Livraison gratuite au Canada.',
    url: 'https://purrball.ca/produits',
  },
}

export default function ProduitsLayout({ children }: { children: React.ReactNode }) {
  return children
}
