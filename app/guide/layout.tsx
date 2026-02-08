import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Guide du Chat | Conseils Sante & Bien-etre',
  description: 'Guide complet pour prendre soin de votre chat. Conseils sante, bien-etre, enrichissement environnemental, sante dentaire chat, anxiete chat solutions. Comment divertir son chat.',
  keywords: [
    'comment divertir son chat', 'enrichissement environnemental chat', 'sante dentaire chat',
    'anxiete chat solutions', 'chat qui s\'ennuie que faire', 'bienfaits supplements pour chat',
    'meilleurs jouets pour chat appartement', 'soins chat', 'bien-etre chat',
    'cat care guide', 'cat health tips', 'cat enrichment',
  ],
  alternates: {
    canonical: '/guide',
  },
  openGraph: {
    title: 'Guide du Chat | Purrball - Conseils & Astuces',
    description: 'Tout savoir pour rendre votre chat heureux. Conseils sante, jouets recommandes, enrichissement environnemental.',
    url: 'https://purrball.ca/guide',
  },
}

export default function GuideLayout({ children }: { children: React.ReactNode }) {
  return children
}
