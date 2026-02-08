import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FAQ | Questions Frequentes',
  description: 'Reponses a toutes vos questions sur les jouets pour chat Purrball. Livraison, retours, garantie, commandes. Comment choisir litiere chat, jouets chat interieur.',
  keywords: [
    'faq jouets chat', 'questions frequentes chat', 'livraison jouets chat Canada',
    'retours jouets chat', 'garantie jouets chat', 'comment choisir litiere chat',
  ],
  alternates: {
    canonical: '/faq',
  },
  openGraph: {
    title: 'FAQ | Purrball - Questions Frequentes',
    description: 'Trouvez les reponses a toutes vos questions sur nos produits, la livraison et les retours.',
    url: 'https://purrball.ca/faq',
  },
}

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children
}
