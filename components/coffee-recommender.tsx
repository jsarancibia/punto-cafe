"use client"

import { useState, useMemo, useCallback } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { menuAll, type MenuProduct } from "@/lib/menu-data"
import { Button } from "@/components/ui/button"
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import { Sparkles, ChevronRight, Coffee } from "lucide-react"
import { cn } from "@/lib/utils"

type Q1 = "intenso" | "equilibrado" | "suave" | null
type Q2 = "mucho" | "poco" | "nada" | null
type Q3 = "frio" | "caliente" | null

function pickCoffee(q1: Q1, q2: Q2, q3: Q3): MenuProduct {
  if (q3 === "frio") {
    return menuAll.find((p) => p.id === "cold-brew")!
  }
  if (q1 === "intenso" && q2 === "nada") {
    return menuAll.find((p) => p.id === "espresso")!
  }
  if (q1 === "intenso" && q2 === "poco") {
    return menuAll.find((p) => p.id === "cortado")!
  }
  if (q1 === "intenso" && q2 === "mucho") {
    return menuAll.find((p) => p.id === "flat-white")!
  }
  if (q2 === "mucho" && q1 === "suave") {
    return menuAll.find((p) => p.id === "latte")!
  }
  if (q2 === "mucho" && q1 === "equilibrado") {
    return menuAll.find((p) => p.id === "cappuccino")!
  }
  if (q2 === "poco" && (q1 === "equilibrado" || q1 === "suave")) {
    return menuAll.find((p) => p.id === "cortado")!
  }
  return menuAll.find((p) => p.id === "americano")!
}

export function CoffeeRecommender() {
  const [q1, setQ1] = useState<Q1>(null)
  const [q2, setQ2] = useState<Q2>(null)
  const [q3, setQ3] = useState<Q3>(null)

  const result = useMemo(
    () => (q1 && q2 && q3 ? pickCoffee(q1, q2, q3) : null),
    [q1, q2, q3]
  )

  const reset = useCallback(() => {
    setQ1(null)
    setQ2(null)
    setQ3(null)
  }, [])

  const scrollToProduct = (id: string) => {
    const el = document.getElementById(`product-${id}`)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }

  return (
    <section
      id="recomendador-cafe"
      className="relative scroll-mt-20 py-20 md:py-28 px-4 border-t border-border/50 overflow-hidden"
      aria-labelledby="recomendador-titulo"
    >
      {/* Fondo suave: estilo “antes” con gradiente y orbes ligeros */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-amber-100/30 via-background to-background dark:from-primary/8 dark:via-background dark:to-background"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 top-1/3 h-72 w-72 rounded-full bg-primary/5 blur-3xl dark:bg-accent/10"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-20 h-56 w-56 rounded-full bg-amber-200/25 blur-3xl dark:bg-primary/5"
        aria-hidden
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <ScrollAnimation direction="down" delay={0.05} duration={0.6}>
          <div className="text-center mb-10 md:mb-12">
            <motion.div
              className="mb-3 inline-flex items-center justify-center gap-2 text-primary"
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Sparkles className="h-4 w-4" aria-hidden />
              <span className="font-mono text-xs uppercase tracking-[0.35em]">
                30 segundos
              </span>
              <Sparkles className="h-4 w-4" aria-hidden />
            </motion.div>
            <h2
              id="recomendador-titulo"
              className="font-semibold text-3xl md:text-4xl text-foreground text-balance tracking-tight"
            >
              <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                Tu café ideal
              </span>
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto my-4 rounded-full" />
            <p className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto leading-relaxed">
              Tres toques. Te mostramos la sugerencia con foto, como antes, y te
              llevamos al producto en el menú.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid gap-8 md:grid-cols-2 md:gap-10 items-stretch">
          {/* Columna: preguntas en tarjeta glass */}
          <ScrollAnimation direction="right" delay={0.1} duration={0.55}>
            <div className="glass rounded-2xl p-5 md:p-7 space-y-7 h-full border border-border/60 shadow-sm">
              <div>
                <p className="text-sm font-medium text-foreground mb-3">
                  1. Tu café ideal es más…
                </p>
                <div className="flex flex-wrap gap-2">
                  {(
                    [
                      { k: "intenso" as const, l: "Intenso" },
                      { k: "equilibrado" as const, l: "Equilibrado" },
                      { k: "suave" as const, l: "Suave" },
                    ] as const
                  ).map((o) => (
                    <Button
                      key={o.k}
                      type="button"
                      variant={q1 === o.k ? "default" : "secondary"}
                      size="sm"
                      className={cn(
                        "rounded-full px-4",
                        q1 === o.k && "neon-glow"
                      )}
                      onClick={() => setQ1(o.k)}
                    >
                      {o.l}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-foreground mb-3">
                  2. Leche o espuma
                </p>
                <div className="flex flex-wrap gap-2">
                  {(
                    [
                      { k: "mucho" as const, l: "Bastante" },
                      { k: "poco" as const, l: "Un poco" },
                      { k: "nada" as const, l: "Sin leche" },
                    ] as const
                  ).map((o) => (
                    <Button
                      key={o.k}
                      type="button"
                      variant={q2 === o.k ? "default" : "secondary"}
                      size="sm"
                      className="rounded-full px-4"
                      onClick={() => setQ2(o.k)}
                    >
                      {o.l}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-foreground mb-3">
                  3. Temperatura
                </p>
                <div className="flex flex-wrap gap-2">
                  {(
                    [
                      { k: "caliente" as const, l: "Caliente" },
                      { k: "frio" as const, l: "Frío" },
                    ] as const
                  ).map((o) => (
                    <Button
                      key={o.k}
                      type="button"
                      variant={q3 === o.k ? "default" : "secondary"}
                      size="sm"
                      className="rounded-full px-4"
                      onClick={() => setQ3(o.k)}
                    >
                      {o.l}
                    </Button>
                  ))}
                </div>
              </div>

              {result && (
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="text-muted-foreground w-full"
                  onClick={reset}
                >
                  Volver a empezar
                </Button>
              )}
            </div>
          </ScrollAnimation>

          {/* Columna: tarjeta visual con foto (diseño anterior) */}
          <ScrollAnimation direction="left" delay={0.12} duration={0.55}>
            <div className="relative h-full min-h-[320px] md:min-h-0">
              <AnimatePresence mode="wait">
                {result ? (
                  <motion.div
                    key={result.id}
                    initial={{ opacity: 0, scale: 0.96, y: 8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 360, damping: 28 }}
                    className="glass flex flex-col h-full min-h-[420px] md:min-h-full rounded-2xl overflow-hidden border border-primary/20 shadow-xl"
                  >
                    <div className="relative flex-1 min-h-[220px] bg-muted">
                      <Image
                        src={result.image}
                        alt={result.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 45vw"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                      <div className="absolute top-3 left-3 rounded-full border border-border/50 bg-background/80 px-3 py-1 text-xs font-mono text-primary backdrop-blur-sm">
                        Sugerencia
                      </div>
                    </div>
                    <div className="p-5 md:p-6 space-y-2">
                      <p className="text-xs font-mono uppercase tracking-widest text-primary">
                        Te recomendamos
                      </p>
                      <h3 className="text-2xl font-semibold text-foreground">
                        {result.name}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {result.description}
                      </p>
                      <p className="text-lg font-semibold text-foreground">
                        {result.price}
                      </p>
                      <Button
                        type="button"
                        onClick={() => scrollToProduct(result.id)}
                        className="w-full h-12 mt-2 rounded-xl gap-2 font-semibold neon-glow"
                      >
                        Ir al producto en el menú
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="glass flex h-full min-h-[420px] flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-border/70 p-8 text-center"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Coffee className="h-8 w-8" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        Aún no hay sugerencia
                      </p>
                      <p className="text-sm text-muted-foreground mt-1 max-w-xs mx-auto">
                        Responde las tres preguntas de la izquierda y aquí verás
                        la taza y el detalle, como en el diseño clásico.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
