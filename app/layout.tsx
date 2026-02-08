import React from "react"
import type { Metadata } from 'next'
import { Poppins, Playfair_Display } from 'next/font/google'
import { CartProvider } from "@/lib/cart-context"
import { Toaster } from "sonner"
import { SpeedInsights } from "@vercel/speed-insights/next"

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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${poppins.variable} ${playfair.variable} antialiased`}
      >
        <CartProvider>
          {children}
          <Toaster 
            position="top-right"
            richColors
            closeButton
          />
          <SpeedInsights />
        </CartProvider>
      </body>
    </html>
  )
}
