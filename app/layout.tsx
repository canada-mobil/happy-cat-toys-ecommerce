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
  title: {
    default: 'Purrball - Jouets Premium pour Chats | Accessoires Chat Canada',
    template: '%s | Purrball',
  },
  description: 'Boutique en ligne de jouets pour chat, fontaines a eau et accessoires premium. Livraison gratuite au Canada. Jouets interactifs, fournitures chat, produits naturels. Satisfaction garantie.',
  keywords: [
    'jouets pour chat', 'jouets chat interactifs', 'accessoires chat', 'fontaine eau chat',
    'jouets stimulants chat', 'balle jouet chat', 'produits chat Canada', 'fournitures chat',
    'jouets pour chat interieur', 'jouets pour chaton', 'produits naturels pour chat',
    'boutique chat en ligne Quebec', 'livraison gratuite chat Canada', 'jouets chat Canada',
    'cat toys', 'interactive cat toys', 'cat accessories', 'cat water fountain',
    'premium cat toys Canada', 'cat supplies online', 'best cat toys',
  ],
  authors: [{ name: 'Purrball' }],
  creator: 'Purrball',
  publisher: 'Purrball',
  metadataBase: new URL('https://purrball.ca'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_CA',
    alternateLocale: 'en_CA',
    url: 'https://purrball.ca',
    siteName: 'Purrball',
    title: 'Purrball - Jouets Premium pour Chats | Livraison Gratuite Canada',
    description: 'Decouvrez notre collection de jouets premium et accessoires pour chats. Fontaines a eau, jouets interactifs, produits naturels. Livraison gratuite au Canada.',
    images: [
      {
        url: 'https://res.cloudinary.com/dhhdhilja/image/upload/v1770517604/purrball/Section2_-_Featured_Cat_Toy.jpg.webp',
        width: 1200,
        height: 630,
        alt: 'Purrball - Jouets Premium pour Chats',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Purrball - Jouets Premium pour Chats',
    description: 'Jouets interactifs, fontaines a eau et accessoires premium pour chats. Livraison gratuite au Canada.',
    images: ['https://res.cloudinary.com/dhhdhilja/image/upload/v1770517604/purrball/Section2_-_Featured_Cat_Toy.jpg.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
  verification: {},
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
        <link rel="preload" as="video" href="https://res.cloudinary.com/dhhdhilja/video/upload/q_auto:best,f_mp4,w_1080/v1770517656/purrball/hoeme1.mp4" type="video/mp4" />
        <link rel="preload" as="image" href="https://res.cloudinary.com/dhhdhilja/image/upload/q_auto,w_800,f_webp/v1770517604/purrball/Section2_-_Featured_Cat_Toy.jpg.webp" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${poppins.variable} ${playfair.variable} antialiased`}
      >
        <Providers>
          {children}
        </Providers>
        {/* Anti-DevTools / Anti-inspect protection */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                // Disable right-click context menu
                document.addEventListener('contextmenu', function(e){ e.preventDefault(); });

                // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+S
                document.addEventListener('keydown', function(e){
                  if(e.key === 'F12') { e.preventDefault(); return false; }
                  if(e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i')) { e.preventDefault(); return false; }
                  if(e.ctrlKey && e.shiftKey && (e.key === 'J' || e.key === 'j')) { e.preventDefault(); return false; }
                  if(e.ctrlKey && e.shiftKey && (e.key === 'C' || e.key === 'c')) { e.preventDefault(); return false; }
                  if(e.ctrlKey && (e.key === 'U' || e.key === 'u')) { e.preventDefault(); return false; }
                  if(e.ctrlKey && (e.key === 'S' || e.key === 's')) { e.preventDefault(); return false; }
                  if(e.metaKey && e.altKey && (e.key === 'I' || e.key === 'i')) { e.preventDefault(); return false; }
                  if(e.metaKey && e.altKey && (e.key === 'J' || e.key === 'j')) { e.preventDefault(); return false; }
                  if(e.metaKey && e.altKey && (e.key === 'C' || e.key === 'c')) { e.preventDefault(); return false; }
                  if(e.metaKey && (e.key === 'U' || e.key === 'u')) { e.preventDefault(); return false; }
                });

                // Disable drag
                document.addEventListener('dragstart', function(e){ e.preventDefault(); });

                // Disable text selection on the whole page (optional, can be removed)
                document.addEventListener('selectstart', function(e){
                  if(e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.tagName === 'SELECT')) return;
                  e.preventDefault();
                });

                // Detect DevTools open via debugger timing
                (function detect(){
                  var t = performance.now();
                  debugger;
                  if(performance.now() - t > 100){
                    document.body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100vh;font-family:sans-serif;"><h1>Access Denied</h1></div>';
                  }
                  setTimeout(detect, 1000);
                })();
              })();
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                var Tawk_API=window.Tawk_API||{}, Tawk_LoadStart=new Date();
                Tawk_API.customStyle = {
                  visibility: {
                    desktop: { position: 'br', xOffset: 15, yOffset: 15 },
                    mobile: { position: 'br', xOffset: 10, yOffset: 10 }
                  },
                  zIndex: 999
                };
                function shouldShow(){ var p=window.location.pathname; return p==='/' || p==='/contact'; }
                Tawk_API.onLoad = function(){
                  var iframe = document.querySelector('iframe[title="chat widget"]');
                  if(iframe) { iframe.style.transform = 'scale(0.8)'; iframe.style.transformOrigin = 'bottom right'; }
                  if(!shouldShow()) Tawk_API.hideWidget();
                };
                window.Tawk_API = Tawk_API;
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/6988a0c34f57c41c38997abe/1jgur7vnh';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);

                // Show/hide on client-side navigation
                var _pushState = history.pushState;
                history.pushState = function(){
                  _pushState.apply(this, arguments);
                  setTimeout(function(){ try { if(shouldShow()) Tawk_API.showWidget(); else Tawk_API.hideWidget(); } catch(e){} }, 100);
                };
                window.addEventListener('popstate', function(){
                  setTimeout(function(){ try { if(shouldShow()) Tawk_API.showWidget(); else Tawk_API.hideWidget(); } catch(e){} }, 100);
                });
              })();
            `,
          }}
        />
      </body>
    </html>
  )
}
