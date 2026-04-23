"use client"

import { useCart } from "@/context/cart-context"
import { formatClp } from "@/lib/menu-data"
import { Button } from "@/components/ui/button"
import { ShoppingBag } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

/**
 * Barra fija móvil/desktop cuando hay productos: acceso directo al carrito.
 */
export function FloatingPedidoBar() {
  const { count, totalClp, openCart } = useCart()

  return (
    <AnimatePresence>
      {count > 0 && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 32 }}
          className="fixed bottom-0 left-0 right-0 z-[90] p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pointer-events-none"
        >
          <div className="pointer-events-auto max-w-lg mx-auto">
            <Button
              type="button"
              onClick={openCart}
              className="w-full h-14 rounded-2xl justify-between gap-3 px-5 bg-primary text-primary-foreground shadow-lg shadow-primary/25 font-semibold text-base"
            >
              <span className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5" />
                Ver pedido
                <span className="inline-flex h-6 min-w-6 px-1.5 items-center justify-center rounded-full bg-primary-foreground/20 text-sm">
                  {count}
                </span>
              </span>
              <span className="text-primary-foreground/95">
                {formatClp(totalClp)}
              </span>
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
