"use client"

import { ScrollAnimation } from "@/components/ui/scroll-animation"
import { motion } from "framer-motion"
import { Star, Plus } from "lucide-react"
import Image from "next/image"
import { getProductById, featuredProductIds } from "@/lib/menu-data"
import { useCart } from "@/context/cart-context"
import { Button } from "@/components/ui/button"

const destacados = featuredProductIds
  .map((id) => getProductById(id))
  .filter((p): p is NonNullable<ReturnType<typeof getProductById>> => p != null)

/**
 * Productos destacados: conversión directa (añadir al pedido).
 */
export function HoyRecomendamos() {
  const { addProduct, openCart } = useCart()

  return (
    <section
      id="destacados"
      className="scroll-mt-20 relative py-20 md:py-24 px-4 border-t border-border/50"
    >
      <div className="max-w-6xl mx-auto">
        <ScrollAnimation direction="down" delay={0.1} duration={0.5}>
          <div className="text-center mb-10 md:mb-12">
            <p className="font-mono text-xs text-primary uppercase tracking-widest mb-2">
              favoritos
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight">
              Selección del equipo
            </h2>
            <p className="text-muted-foreground text-sm md:text-base mt-2 max-w-lg mx-auto">
              Los pedidos que más vuelan en barra. Añadidos en un clic.
            </p>
          </div>
        </ScrollAnimation>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {destacados.map((p, i) => (
            <motion.li
              key={p.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: 0.05 * i, duration: 0.4 }}
            >
              <div className="flex flex-col h-full glass rounded-2xl overflow-hidden border border-border/60">
                <div className="relative aspect-square bg-muted">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                  <span className="absolute top-2 right-2 inline-flex h-7 items-center rounded-full border border-border/50 bg-background/80 px-2 text-xs font-mono backdrop-blur-sm">
                    {p.price}
                  </span>
                </div>
                <div className="p-4 flex flex-1 flex-col">
                  <div className="flex items-center gap-1.5 text-xs text-amber-400/90 mb-1">
                    <Star className="h-3.5 w-3.5 fill-amber-400/80" />
                    Destacado
                  </div>
                  <h3 className="font-semibold text-foreground">{p.name}</h3>
                  <p className="text-sm text-muted-foreground mt-0.5 flex-1">
                    {p.description}
                  </p>
                  <div className="mt-3 flex flex-col gap-2">
                    <Button
                      type="button"
                      onClick={() => {
                        addProduct(p, 1)
                        openCart()
                      }}
                      className="w-full rounded-xl gap-1.5 h-10 font-semibold neon-glow"
                    >
                      <Plus className="h-4 w-4" />
                      Añadir y pedir
                    </Button>
                  </div>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
