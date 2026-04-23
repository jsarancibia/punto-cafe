import React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { AppProviders } from "@/components/app-providers"
import "./globals.css"

const space = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
})

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Punto Café — Pedir café en segundos",
  description:
    "Café de barrio: menú claro, pedido por WhatsApp y experiencia simple. Pausa perfecta, sin fricción.",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth dark" suppressHydrationWarning>
      <body
        className={`${space.className} ${space.variable} ${mono.variable} min-h-dvh font-sans antialiased text-base`}
      >
        <AppProviders>{children}</AppProviders>
        <Analytics />
      </body>
    </html>
  )
}
