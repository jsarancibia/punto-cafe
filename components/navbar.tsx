"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const reduce = useReducedMotion()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Experiencia", href: "#experiencia" },
    { label: "Tu café ideal", href: "#cafe-ideal" },
    { label: "Menú", href: "#menu" },
    { label: "Beneficios", href: "#beneficios" },
    { label: "Galería", href: "#galeria-polaroid" },
    { label: "Contacto", href: "#contacto" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      setIsMobileMenuOpen(false)
    }
  }

  const linkTransition = reduce
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 380, damping: 28 }

  return (
    <>
      <motion.nav
        initial={reduce ? false : { y: -100, opacity: 0 }}
        animate={reduce ? undefined : { y: 0, opacity: 1 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-[background,box-shadow,border-color,backdrop-filter] duration-500",
          isScrolled
            ? "futuristic-glass border-b border-primary/15 shadow-lg shadow-primary/5"
            : "bg-transparent"
        )}
      >
        {/* Barra superior luminosa */}
        <div
          className="h-[2px] w-full overflow-hidden bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-90"
          aria-hidden
        >
          <div className="futuristic-nav-sweep h-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <motion.button
              type="button"
              whileHover={reduce ? undefined : { scale: 1.02 }}
              className="group flex flex-col items-start text-left"
              onClick={() => scrollToSection("#inicio")}
            >
              <span className="font-serif text-2xl font-bold tracking-tight text-foreground">
                PUNTO CAFÉ
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground/80 group-hover:text-primary/90 transition-colors">
                experiencia // local
              </span>
            </motion.button>

            <div className="hidden md:flex items-center gap-1 lg:gap-2">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.href}
                  type="button"
                  initial={reduce ? false : { opacity: 0, y: -8 }}
                  animate={reduce ? undefined : { opacity: 1, y: 0 }}
                  transition={{ ...linkTransition, delay: 0.04 * i }}
                  onClick={() => scrollToSection(item.href)}
                  className="group relative px-2.5 py-2 text-xs font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground lg:text-sm"
                >
                  <span className="relative z-10">{item.label}</span>
                  <span className="absolute inset-0 -z-0 rounded-lg bg-primary/0 transition-colors group-hover:bg-primary/8" />
                  <span className="absolute bottom-1 left-3 right-3 h-px scale-x-0 bg-gradient-to-r from-transparent via-primary/80 to-transparent transition-transform duration-300 group-hover:scale-x-100" />
                </motion.button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative p-2.5 text-foreground rounded-lg border border-border/50 bg-background/40 backdrop-blur-sm hover:border-primary/30 transition-colors"
              aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={reduce ? false : { opacity: 0, height: 0 }}
              animate={reduce ? undefined : { opacity: 1, height: "auto" }}
              exit={reduce ? undefined : { opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden border-t border-primary/10 bg-background/95 backdrop-blur-xl"
            >
              <div className="px-4 py-4 space-y-1">
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.href}
                    type="button"
                    initial={reduce ? false : { opacity: 0, x: -12 }}
                    animate={reduce ? undefined : { opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * i, ...linkTransition }}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left text-sm font-medium uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors py-3 px-2 rounded-lg hover:bg-primary/5 border border-transparent hover:border-primary/10"
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  )
}
