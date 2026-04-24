/**
 * Menú unificado: datos para carta, filtros, recomendador y carrito.
 * Fotos: colócalas en `public/images/` con estos nombres (latte.jpg, etc.)
 * y activa `NEXT_PUBLIC_USE_REAL_IMAGES=1` en `.env.local` (ver `lib/resolve-assets.ts`).
 */

export type MenuCategory = "cafe" | "frio" | "dulce"

export interface MenuProduct {
  id: string
  name: string
  price: string
  priceClp: number
  image: string
  description: string
  category: MenuCategory
}

const cafeItems: MenuProduct[] = [
  { id: "espresso", name: "Espresso", price: "$2.000", priceClp: 2000, image: "/images/espresso.jpg", description: "Intenso y aromático", category: "cafe" },
  { id: "americano", name: "Americano", price: "$2.200", priceClp: 2200, image: "/images/americano.jpg", description: "Suave y equilibrado", category: "cafe" },
  { id: "cappuccino", name: "Cappuccino", price: "$2.500", priceClp: 2500, image: "/images/cappuccino.jpg", description: "Espumoso y cremoso", category: "cafe" },
  { id: "latte", name: "Latte", price: "$2.700", priceClp: 2700, image: "/images/latte.jpg", description: "Dulce y sedoso", category: "cafe" },
  { id: "cortado", name: "Cortado", price: "$2.600", priceClp: 2600, image: "/images/cortado.jpg", description: "Espresso corto con leche", category: "cafe" },
  { id: "mocha", name: "Caffè Mocha", price: "$3.100", priceClp: 3100, image: "/images/mocha.jpg", description: "Chocolate y espresso", category: "cafe" },
  { id: "flat-white", name: "Flat White", price: "$3.000", priceClp: 3000, image: "/images/flat-white.jpg", description: "Microespuma, sabor intenso", category: "cafe" },
  { id: "caramel-macchiato", name: "Caramel Macchiato", price: "$3.300", priceClp: 3300, image: "/images/caramel-macchiato.jpg", description: "Caramelo y capas cremosas", category: "cafe" },
  { id: "affogato", name: "Affogato", price: "$3.400", priceClp: 3400, image: "/images/affogato.jpg", description: "Espresso y helado", category: "cafe" },
  { id: "cold-brew", name: "Cold Brew", price: "$3.200", priceClp: 3200, image: "/images/cold-brew.jpg", description: "Extracción lenta, más fresco", category: "frio" },
  { id: "cafe-helado", name: "Café helado", price: "$2.800", priceClp: 2800, image: "/images/cafe-helado.jpg", description: "Refrescante y delicioso", category: "frio" },
  { id: "te", name: "Té", price: "$1.800", priceClp: 1800, image: "/images/te.jpg", description: "Selección de tés", category: "cafe" },
]

const dulceItems: MenuProduct[] = [
  { id: "croissant", name: "Croissant", price: "$2.200", priceClp: 2200, image: "/images/croissant.jpg", description: "Recién horneado", category: "dulce" },
  { id: "kuchen", name: "Kuchen", price: "$3.000", priceClp: 3000, image: "/images/kuchen.jpg", description: "Tradición alemana", category: "dulce" },
  { id: "sandwich", name: "Sandwich", price: "$3.500", priceClp: 3500, image: "/images/sandwich.jpg", description: "Ingredientes frescos", category: "dulce" },
  { id: "torta-chocolate", name: "Torta de chocolate", price: "$3.600", priceClp: 3600, image: "/images/torta-chocolate.jpg", description: "Húmeda e intensa", category: "dulce" },
  { id: "queque-vainilla", name: "Queque de vainilla", price: "$2.900", priceClp: 2900, image: "/images/queque-vainilla.jpg", description: "Miga suave y aroma casero", category: "dulce" },
  { id: "cheesecake", name: "Cheesecake frutos rojos", price: "$3.900", priceClp: 3900, image: "/images/cheesecake-frutos-rojos.jpg", description: "Cremoso y frutal", category: "dulce" },
]

export const menuCafes = cafeItems
export const menuComida = dulceItems
export const menuAll: MenuProduct[] = [...cafeItems, ...dulceItems]

export function getProductById(id: string): MenuProduct | undefined {
  return menuAll.find((p) => p.id === id)
}

export const featuredProductIds = ["cappuccino", "cold-brew", "affogato", "cheesecake"] as const

export function formatClp(n: number): string {
  return n.toLocaleString("es-CL", { style: "currency", currency: "CLP", maximumFractionDigits: 0 })
}
