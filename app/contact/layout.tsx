import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contactez-nous | Service Client Purrball',
  description: 'Contactez l\'equipe Purrball pour toute question sur nos jouets pour chat, commandes, livraison ou retours. Service client rapide et amical. Boutique chat en ligne Quebec.',
  keywords: [
    'contact purrball', 'service client chat', 'boutique chat en ligne Quebec',
    'questions jouets chat', 'support client', 'contact cat store Canada',
  ],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contactez-nous | Purrball - Service Client',
    description: 'Contactez notre equipe pour toute question. Service client rapide et amical.',
    url: 'https://purrball.ca/contact',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
