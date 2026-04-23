"use client"

import { CartProvider } from "@/context/cart-context"
import { Toaster } from "@/components/ui/sonner"
import { CartDrawer } from "@/components/cart-drawer"
import { FloatingPedidoBar } from "@/components/floating-pedido-bar"
import type { ReactNode } from "react"

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      {children}
      <CartDrawer />
      <FloatingPedidoBar />
      <Toaster
        position="top-center"
        theme="dark"
        closeButton
        richColors
        toastOptions={{ duration: 3200 }}
      />
    </CartProvider>
  )
}
