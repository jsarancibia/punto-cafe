"use client"

import Link from "next/link"
import { useCart, WHATSAPP_NUMBER } from "@/context/cart-context"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { formatClp } from "@/lib/menu-data"
import { Minus, Plus, Trash2, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { MenuProductImage } from "@/components/menu-product-image"

export function CartDrawer() {
  const {
    lines,
    setQuantity,
    removeLine,
    totalClp,
    cartOpen,
    setOpenCart,
    buildWhatsAppUrl,
    saveAsUsual,
  } = useCart()

  return (
    <Sheet open={cartOpen} onOpenChange={setOpenCart}>
      <SheetContent
        side="right"
        className={cn(
          "glass w-full sm:max-w-md border-l border-border",
          "flex flex-col p-0 gap-0"
        )}
      >
        <SheetHeader className="p-5 pb-3 border-b border-border text-left">
          <SheetTitle className="font-sans text-lg">Tu pedido</SheetTitle>
          <SheetDescription>
            Revisa items y envía el pedido por WhatsApp. Sin pago en web (demo).
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-3 py-4">
          {lines.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-10 px-4">
              Aún no has añadido productos.{" "}
              <Link
                href="#menu"
                className="text-primary underline-offset-2 hover:underline"
                onClick={() => setOpenCart(false)}
              >
                Ir al menú
              </Link>
            </p>
          ) : (
            <ul className="space-y-3">
              {lines.map((line) => (
                <li
                  key={line.id}
                  className="glass flex gap-3 rounded-xl p-3 border border-border/80"
                >
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-muted">
                    <MenuProductImage
                      storagePath={line.image}
                      alt={line.name}
                      sizes="64px"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-foreground text-sm leading-tight">
                      {line.name}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {line.price} c/u
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <Button
                        type="button"
                        size="icon"
                        variant="outline"
                        className="h-8 w-8 rounded-lg"
                        onClick={() =>
                          setQuantity(line.id, line.quantity - 1)
                        }
                        aria-label="Quitar una unidad"
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </Button>
                      <span className="w-6 text-center text-sm font-medium">
                        {line.quantity}
                      </span>
                      <Button
                        type="button"
                        size="icon"
                        variant="outline"
                        className="h-8 w-8 rounded-lg"
                        onClick={() =>
                          setQuantity(line.id, line.quantity + 1)
                        }
                        aria-label="Añadir otra unidad"
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-between">
                    <Button
                      type="button"
                      size="icon"
                      variant="ghost"
                      className="h-8 w-8 text-muted-foreground hover:text-destructive"
                      onClick={() => removeLine(line.id)}
                      aria-label="Quitar del pedido"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                    <p className="text-sm font-semibold text-foreground">
                      {formatClp(line.priceClp * line.quantity)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-border p-4 space-y-3 bg-card/30">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Total aproximado</span>
            <span className="font-semibold text-lg text-foreground">
              {formatClp(totalClp)}
            </span>
          </div>
          {lines.length > 0 ? (
            <Button
              asChild
              className="w-full h-12 rounded-xl text-base font-semibold shadow-md shadow-primary/20 bg-primary text-primary-foreground hover:bg-primary/90 neon-glow"
            >
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5" />
                Enviar pedido por WhatsApp
              </a>
            </Button>
          ) : (
            <Button
              type="button"
              disabled
              className="w-full h-12 rounded-xl text-base"
            >
              <MessageCircle className="h-5 w-5" />
              Añade productos para enviar
            </Button>
          )}
          <p className="text-[11px] text-center text-muted-foreground">
            Número: +{WHATSAPP_NUMBER} · Ajusta el mensaje en WhatsApp si lo
            necesitas.
          </p>
          <Button
            type="button"
            variant="secondary"
            className="w-full rounded-xl"
            onClick={saveAsUsual}
            disabled={lines.length === 0}
          >
            Guardar como &quot;lo de siempre&quot;
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
