"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Plus, Check } from "lucide-react"
import { useState } from "react"
import { useCart } from "@/context/cart-context"
import { Button } from "@/components/ui/button"
import type { MenuProduct } from "@/lib/menu-data"
import { cn } from "@/lib/utils"

export function MenuItem({ product }: { product: MenuProduct }) {
  const { addProduct } = useCart()
  const [addedFlash, setAddedFlash] = useState(false)

  const onAdd = () => {
    addProduct(product, 1)
    setAddedFlash(true)
    window.setTimeout(() => setAddedFlash(false), 900)
  }

  return (
    <article
      id={`product-${product.id}`}
      className="group scroll-mt-32 flex flex-col glass rounded-2xl overflow-hidden border border-border/60 transition-shadow hover:shadow-md hover:shadow-primary/5"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 right-3 rounded-full border border-border/50 bg-background/80 px-2.5 py-0.5 text-xs font-mono text-foreground backdrop-blur-sm">
          {product.price}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-4 md:p-5 gap-3">
        <div>
          <h3 className="font-semibold text-base md:text-lg text-foreground">
            {product.name}
          </h3>
          {product.description && (
            <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
              {product.description}
            </p>
          )}
        </div>
        <motion.div whileTap={{ scale: 0.98 }} className="mt-auto">
          <Button
            type="button"
            onClick={onAdd}
            className={cn(
              "w-full h-11 rounded-xl font-semibold gap-2",
              addedFlash && "bg-accent text-accent-foreground"
            )}
          >
            {addedFlash ? (
              <>
                <Check className="h-4 w-4" />
                Añadido
              </>
            ) : (
              <>
                <Plus className="h-4 w-4" />
                Añadir al pedido
              </>
            )}
          </Button>
        </motion.div>
      </div>
    </article>
  )
}
