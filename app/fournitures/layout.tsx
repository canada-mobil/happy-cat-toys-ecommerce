import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fournitures Chat | Fontaine Eau & Accessoires Premium',
  description: 'Fontaines a eau pour chat, accessoires et fournitures premium. Fontaine eau chat silencieuse, gamelles, bols surelevés. Livraison gratuite au Canada.',
  keywords: [
    'fontaine eau chat', 'fournitures chat', 'accessoires chat', 'fontaine eau chat silencieuse',
    'gamelles chat', 'bols surelevés chat', 'cat water fountain', 'cat supplies',
    'accessoires chat Quebec', 'fournitures chat en ligne Canada',
  ],
  alternates: {
    canonical: '/fournitures',
  },
  openGraph: {
    title: 'Fournitures Chat | Purrball - Fontaines & Accessoires Premium',
    description: 'Fontaines a eau intelligentes et accessoires premium pour chats. Livraison gratuite au Canada.',
    url: 'https://purrball.ca/fournitures',
  },
}

export default function FournituresLayout({ children }: { children: React.ReactNode }) {
  return children
}
