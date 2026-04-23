"use client"

import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { menuAll, type MenuProduct } from "@/lib/menu-data"
import { Button } from "@/components/ui/button"
import { Sparkles, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

type Q1 = "intenso" | "equilibrado" | "suave" | null
type Q2 = "mucho" | "poco" | "nada" | null
type Q3 = "frio" | "caliente" | null

/**
 * Recomendador heurístico: sin backend, puntuación simple por atributos.
 */
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
  const [showResult, setShowResult] = useState(false)

  const result = useMemo(
    () => (q1 && q2 && q3 ? pickCoffee(q1, q2, q3) : null),
    [q1, q2, q3]
  )

  const scrollToProduct = (id: string) => {
    const el = document.getElementById(`product-${id}`)
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" })
    }
  }

  const canShow =
    q1 !== null && q2 !== null && q3 !== null && result !== null

  return (
    <section
      className="relative py-20 md:py-28 px-4 border-t border-border/50"
      aria-labelledby="recomendador-titulo"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <p className="font-mono text-xs text-primary uppercase tracking-widest mb-2">
            30 segundos
          </p>
          <h2
            id="recomendador-titulo"
            className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight"
          >
            ¿Qué café te conviene ahora?
          </h2>
          <p className="text-muted-foreground mt-2 text-sm md:text-base max-w-lg mx-auto">
            Tres respuestas. Te sugerimos un producto del menú y te llevamos
            directo a él.
          </p>
        </div>

        <div className="glass rounded-2xl p-5 md:p-8 space-y-8">
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
                  className={cn("rounded-lg", q1 === o.k && "neon-glow")}
                  onClick={() => {
                    setQ1(o.k)
                    setShowResult(false)
                  }}
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
                  className="rounded-lg"
                  onClick={() => {
                    setQ2(o.k)
                    setShowResult(false)
                  }}
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
                  className="rounded-lg"
                  onClick={() => {
                    setQ3(o.k)
                    setShowResult(false)
                  }}
                >
                  {o.l}
                </Button>
              ))}
            </div>
          </div>

          {canShow && (
            <div className="pt-2">
              <Button
                type="button"
                onClick={() => {
                  setShowResult(true)
                }}
                className="w-full h-12 rounded-xl gap-2 bg-secondary text-secondary-foreground hover:bg-secondary/90 border border-border"
              >
                <Sparkles className="h-4 w-4 text-accent" />
                Ver sugerencia
              </Button>
            </div>
          )}

          <AnimatePresence mode="wait">
            {showResult && result && (
              <motion.div
                key={result.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="rounded-xl border border-primary/30 bg-primary/5 p-4 md:p-5"
              >
                <p className="text-xs font-mono uppercase tracking-widest text-primary mb-1">
                  Te recomendamos
                </p>
                <p className="text-xl font-semibold text-foreground">
                  {result.name}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {result.description} — {result.price}
                </p>
                <div className="mt-4 flex flex-col sm:flex-row gap-2">
                  <Button
                    type="button"
                    onClick={() => scrollToProduct(result.id)}
                    className="flex-1 rounded-xl gap-1 neon-glow"
                  >
                    Ir al producto
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
