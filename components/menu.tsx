"use client"

import { useState, useMemo } from "react"
import { MenuItem } from "@/components/menu-item"
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animation"
import { menuCafes, menuComida, type MenuCategory } from "@/lib/menu-data"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const filters: { id: "all" | MenuCategory; label: string }[] = [
  { id: "all", label: "Todo" },
  { id: "cafe", label: "Café caliente" },
  { id: "frio", label: "Fríos" },
  { id: "dulce", label: "Pastelería" },
]

function filterCafes(cat: "all" | MenuCategory) {
  if (cat === "all") return menuCafes
  if (cat === "dulce") return [] as typeof menuCafes
  return menuCafes.filter((c) => c.category === cat)
}

export function Menu() {
  const [filter, setFilter] = useState<"all" | MenuCategory>("all")

  const { cafes, comida } = useMemo(() => {
    const c = filterCafes(filter)
    return {
      cafes: c,
      comida: filter === "cafe" || filter === "frio" ? [] : menuComida,
    }
  }, [filter])

  return (
    <section id="menu" className="relative scroll-mt-20 py-20 md:py-28 px-4">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation direction="down" delay={0.1} duration={0.5}>
          <div className="text-center mb-8 md:mb-12 max-w-2xl mx-auto">
            <p className="font-mono text-xs text-primary uppercase tracking-widest mb-2">
              carta
            </p>
            <h2 className="text-2xl md:text-4xl font-semibold text-foreground tracking-tight">
              Menú
            </h2>
            <p className="text-muted-foreground mt-2 text-sm md:text-base">
              Toca <span className="text-foreground font-medium">Añadir al pedido</span>{" "}
              y confirma en el carrito. Los precios son referenciales.
            </p>
          </div>
        </ScrollAnimation>

        <div
          className="flex flex-wrap items-center justify-center gap-2 mb-10 md:mb-14"
          role="tablist"
          aria-label="Filtrar menú"
        >
          {filters.map((f) => (
            <Button
              key={f.id}
              type="button"
              size="sm"
              variant={filter === f.id ? "default" : "secondary"}
              className={cn("rounded-full px-4", filter === f.id && "neon-glow")}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </Button>
          ))}
        </div>

        {cafes.length > 0 && (
          <div className="mb-14">
            {filter === "dulce" ? null : (
              <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-4 text-center">
                Bebidas
              </h3>
            )}
            <StaggerContainer
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
              staggerDelay={0.05}
            >
              {cafes.map((p) => (
                <StaggerItem key={p.id} direction="up">
                  <MenuItem product={p} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        )}

        {comida.length > 0 && (
          <div>
            <h3 className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-4 text-center">
              Comida y pastelería
            </h3>
            <StaggerContainer
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
              staggerDelay={0.05}
            >
              {comida.map((p) => (
                <StaggerItem key={p.id} direction="up">
                  <MenuItem product={p} />
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        )}
      </div>
    </section>
  )
}
