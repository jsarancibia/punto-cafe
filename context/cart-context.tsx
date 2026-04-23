"use client"

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react"
import { toast } from "sonner"
import { getProductById, type MenuProduct } from "@/lib/menu-data"

const USUAL_KEY = "punto-cafe-pedido-usual-v1"
const WHATSAPP = "56912345678"
export { WHATSAPP as WHATSAPP_NUMBER }

export type CartLine = {
  id: string
  name: string
  price: string
  priceClp: number
  image: string
  quantity: number
}

type CartContextValue = {
  lines: CartLine[]
  addProduct: (product: MenuProduct, quantity?: number) => void
  setQuantity: (id: string, quantity: number) => void
  removeLine: (id: string) => void
  clear: () => void
  totalClp: number
  count: number
  openCart: () => void
  setOpenCart: (v: boolean) => void
  cartOpen: boolean
  saveAsUsual: () => void
  loadUsual: () => boolean
  buildWhatsAppUrl: () => string
}

const CartContext = createContext<CartContextValue | null>(null)

function linesToUsualJson(lines: CartLine[]): string {
  return JSON.stringify(
    lines.map(({ id, quantity }) => ({ id, quantity }))
  )
}

function usualToLines(json: string): CartLine[] {
  try {
    const raw = JSON.parse(json) as { id: string; quantity: number }[]
    if (!Array.isArray(raw)) return []
    return raw
      .map((r) => {
        const p = getProductById(r.id)
        if (!p || r.quantity < 1) return null
        return {
          id: p.id,
          name: p.name,
          price: p.price,
          priceClp: p.priceClp,
          image: p.image,
          quantity: r.quantity,
        } satisfies CartLine
      })
      .filter((x): x is CartLine => x !== null)
  } catch {
    return []
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([])
  const [cartOpen, setOpen] = useState(false)

  const totalClp = useMemo(
    () => lines.reduce((s, l) => s + l.priceClp * l.quantity, 0),
    [lines]
  )
  const count = useMemo(
    () => lines.reduce((s, l) => s + l.quantity, 0),
    [lines]
  )

  const addProduct = useCallback((product: MenuProduct, quantity = 1) => {
    setLines((prev) => {
      const i = prev.findIndex((l) => l.id === product.id)
      if (i >= 0) {
        const next = [...prev]
        next[i] = {
          ...next[i]!,
          quantity: next[i]!.quantity + quantity,
        }
        return next
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          priceClp: product.priceClp,
          image: product.image,
          quantity,
        },
      ]
    })
    toast.success("Añadido al pedido", {
      description: `${product.name} · ${product.price}`,
      duration: 2200,
    })
  }, [])

  const setQuantity = useCallback((id: string, quantity: number) => {
    if (quantity < 1) {
      setLines((prev) => prev.filter((l) => l.id !== id))
      return
    }
    setLines((prev) =>
      prev.map((l) => (l.id === id ? { ...l, quantity } : l))
    )
  }, [])

  const removeLine = useCallback((id: string) => {
    setLines((prev) => prev.filter((l) => l.id !== id))
  }, [])

  const clear = useCallback(() => setLines([]), [])

  const saveAsUsual = useCallback(() => {
    if (lines.length === 0) {
      toast.message("Carrito vacío", {
        description: "Añade productos antes de guardar tu pedido frecuente.",
      })
      return
    }
    try {
      localStorage.setItem(USUAL_KEY, linesToUsualJson(lines))
      toast.success("Listo: “lo de siempre” guardado")
    } catch {
      toast.error("No se pudo guardar (almacenamiento lleno o bloqueado).")
    }
  }, [lines])

  const loadUsual = useCallback((): boolean => {
    if (typeof window === "undefined") return false
    const raw = localStorage.getItem(USUAL_KEY)
    if (!raw) {
      toast.message("Aún no tienes un pedido guardado", {
        description: "Arma un pedido y pulsa “Guardar para después”.",
      })
      return false
    }
    const loaded = usualToLines(raw)
    if (loaded.length === 0) {
      toast.error("No se pudo recuperar el pedido guardado.")
      return false
    }
    setLines(loaded)
    setOpen(true)
    toast.success("Cargaste tu pedido habitual")
    return true
  }, [])

  const buildWhatsAppUrl = useCallback(() => {
    if (lines.length === 0) {
      return `https://wa.me/${WHATSAPP}`
    }
    const title = "Hola Punto Café, quisiera pedir:\n"
    const body = lines
      .map(
        (l) =>
          `· ${l.quantity}× ${l.name} — ${l.price} c/u  (${(l.priceClp * l.quantity).toLocaleString("es-CL")})`
      )
      .join("\n")
    const total = `\n\nTotal aprox: ${totalClp.toLocaleString("es-CL", { style: "currency", currency: "CLP", maximumFractionDigits: 0 })}`
    const text = encodeURIComponent(title + body + total)
    return `https://wa.me/${WHATSAPP}?text=${text}`
  }, [lines, totalClp])

  // Hidrata “usual” al montar (opcional: no auto-cargar; solo botón)
  // Persistencia del carrito en session sería otra opción; aquí solo in-memory

  const value = useMemo(
    () => ({
      lines,
      addProduct,
      setQuantity,
      removeLine,
      clear,
      totalClp,
      count,
      openCart: () => setOpen(true),
      setOpenCart: setOpen,
      cartOpen,
      saveAsUsual,
      loadUsual,
      buildWhatsAppUrl,
    }),
    [
      lines,
      addProduct,
      setQuantity,
      removeLine,
      clear,
      totalClp,
      count,
      cartOpen,
      saveAsUsual,
      loadUsual,
      buildWhatsAppUrl,
    ]
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const c = useContext(CartContext)
  if (!c) throw new Error("useCart dentro de CartProvider")
  return c
}

