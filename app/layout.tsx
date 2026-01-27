import React from "react"
import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });
const lato = Lato({ subsets: ["latin"], weight: ["300", "400", "700"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: 'Punto Café - Tu pausa perfecta',
  description: 'Cafetería de barrio en Chile. Disfruta un buen café en un ambiente tranquilo y cercano.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${playfair.variable} ${lato.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
