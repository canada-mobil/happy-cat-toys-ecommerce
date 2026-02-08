import React from "react"
import type { Metadata } from 'next'
import { Poppins, Playfair_Display } from 'next/font/google'
import Providers from "@/components/providers"

import './globals.css'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans'
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif'
})

export const metadata: Metadata = {
  title: "Purrball - Jouets Premium pour Chats",
  description: "Découvrez notre collection de jouets premium pour chats chez Purrball. Livraison gratuite au Canada. Satisfaction garantie.",
  generator: 'v0.app',
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link rel="preload" as="video" href="https://res.cloudinary.com/dhhdhilja/video/upload/q_auto,f_mp4,w_720/v1770517656/purrball/hoeme1.mp4" type="video/mp4" />
        <link rel="preload" as="image" href="https://res.cloudinary.com/dhhdhilja/image/upload/q_auto,w_800,f_webp/v1770517604/purrball/Section2_-_Featured_Cat_Toy.jpg.webp" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${poppins.variable} ${playfair.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/6988a0c34f57c41c38997abe/1jgur7vnh';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
      </body>
    </html>
  )
}
