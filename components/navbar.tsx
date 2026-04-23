"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { Menu, X, ShoppingBag } from "lucide-react"
import { cn } from "@/lib/utils"
import { useCart } from "@/context/cart-context"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const reduce = useReducedMotion()
  const { count, openCart } = useCart()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Destacados", href: "#destacados" },
    { label: "Menú", href: "#menu" },
    { label: "Pedido", href: "#pedido" },
    { label: "Contacto", href: "#contacto" },
  ]

  const go = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" })
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.nav
      initial={reduce ? false : { y: -20, opacity: 0.9 }}
      animate={reduce ? undefined : { y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        isScrolled
          ? "glass border-b border-border/80 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => go("#inicio")}
          className="text-left shrink-0"
        >
          <span className="font-semibold text-base md:text-lg tracking-tight text-foreground">
            Punto Café
          </span>
          <span className="block font-mono text-[10px] text-muted-foreground tracking-widest">
            listo en minutos
          </span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Button
              key={item.href}
              type="button"
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-foreground font-normal rounded-lg"
              onClick={() => go(item.href)}
            >
              {item.label}
            </Button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="secondary"
            size="icon"
            className="relative rounded-xl border border-border/60 h-10 w-10"
            onClick={openCart}
            aria-label="Abrir carrito"
          >
            <ShoppingBag className="h-4 w-4" />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-0.5 text-[10px] font-semibold text-primary-foreground">
                {count > 9 ? "9+" : count}
              </span>
            )}
          </Button>
          <Button
            asChild
            className="hidden sm:inline-flex rounded-xl font-semibold h-9 px-4 text-sm neon-glow"
          >
            <a href="#pedido">Pedir ahora</a>
          </Button>
          <button
            type="button"
            className="md:hidden p-2 rounded-lg border border-border/60"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={reduce ? undefined : { height: "auto", opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-border/60 glass"
          >
            <div className="px-4 py-3 flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  type="button"
                  className="text-left py-3 text-sm text-foreground rounded-lg hover:bg-muted/50"
                  onClick={() => go(item.href)}
                >
                  {item.label}
                </button>
              ))}
              <Button
                asChild
                className="mt-2 rounded-xl w-full font-semibold neon-glow"
              >
                <a href="#pedido" onClick={() => setIsMobileMenuOpen(false)}>
                  Pedir ahora
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
