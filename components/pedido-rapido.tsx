"use client"

import { useCart } from "@/context/cart-context"
import { Button } from "@/components/ui/button"
import { formatClp } from "@/lib/menu-data"
import { Package, MessageCircle, Repeat, ArrowRight } from "lucide-react"

const steps = [
  { n: "1", t: "Elige", d: "Desde el menú o el recomendador." },
  { n: "2", t: "Revisa", d: "Abre el carrito y ajusta cantidades." },
  { n: "3", t: "Confirma", d: "Enviamos el mensaje a WhatsApp." },
]

/**
 * Sección de conversión: deja claro el flujo y el CTA de pedido.
 */
export function PedidoRapido() {
  const { count, totalClp, openCart, loadUsual, buildWhatsAppUrl, lines } =
    useCart()

  return (
    <section
      id="pedido"
      className="scroll-mt-20 relative py-20 md:py-28 px-4 border-t border-border/50"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-semibold text-foreground tracking-tight">
            Pedir no tiene por qué ser complicado
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm md:text-base">
            Sin cuentas ni apps: arma tu carrito y envíalo por WhatsApp. Nosotros
            lo recibimos tal cual.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-12">
          {steps.map((s) => (
            <div
              key={s.n}
              className="glass rounded-2xl p-5 text-left border border-border/60"
            >
              <span className="font-mono text-xs text-primary">{s.n}</span>
              <h3 className="font-semibold text-foreground mt-1">{s.t}</h3>
              <p className="text-sm text-muted-foreground mt-1">{s.d}</p>
            </div>
          ))}
        </div>

        <div className="glass rounded-2xl p-6 md:p-8 border border-border max-w-2xl mx-auto space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Tu pedido actual</p>
              <p className="text-2xl font-semibold text-foreground tabular-nums">
                {count > 0 ? (
                  <>
                    {count} {count === 1 ? "item" : "items"} ·{" "}
                    {formatClp(totalClp)}
                  </>
                ) : (
                  "Vacío — explora el menú"
                )}
              </p>
            </div>
            <div className="flex flex-col xs:flex-row gap-2 w-full sm:w-auto">
              <Button
                type="button"
                onClick={openCart}
                className="rounded-xl h-12 px-6 gap-2 font-semibold neon-glow"
              >
                <Package className="h-4 w-4" />
                Abrir carrito
                <ArrowRight className="h-4 w-4 opacity-80" />
              </Button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-2">
            <Button
              type="button"
              variant="secondary"
              className="h-12 rounded-xl justify-center gap-2"
              onClick={loadUsual}
            >
              <Repeat className="h-4 w-4" />
              Pedir lo de siempre
            </Button>
            <Button
              type="button"
              variant="outline"
              className="h-12 rounded-xl justify-center gap-2 border-border"
              asChild
            >
              <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                {lines.length > 0 ? "WhatsApp (pedido en curso)" : "Escribir por WhatsApp"}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
