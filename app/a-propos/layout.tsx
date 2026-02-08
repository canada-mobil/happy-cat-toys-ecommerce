import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'A Propos | Notre Histoire & Mission',
  description: 'Decouvrez Purrball, boutique canadienne de jouets et accessoires premium pour chats. Notre mission: rendre chaque chat heureux avec des produits de qualite. Fabrique au Canada.',
  keywords: [
    'a propos purrball', 'boutique chat Canada', 'jouets chat fabriques au Canada',
    'produits chat naturels', 'boutique chat Quebec', 'about purrball', 'canadian cat store',
  ],
  alternates: {
    canonical: '/a-propos',
  },
  openGraph: {
    title: 'A Propos de Purrball | Boutique Chat Canadienne',
    description: 'Notre mission: rendre chaque chat heureux avec des jouets et accessoires premium fabriques au Canada.',
    url: 'https://purrball.ca/a-propos',
  },
}

export default function AProposLayout({ children }: { children: React.ReactNode }) {
  return children
}
