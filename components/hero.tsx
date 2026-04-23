"use client"

import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section
      id="inicio"
      className="relative min-h-[min(100dvh,880px)] flex flex-col justify-center pt-20 pb-12 md:pt-24 md:pb-20 px-4"
    >
      <div className="max-w-6xl mx-auto w-full grid gap-10 lg:gap-16 lg:grid-cols-2 lg:items-center">
        <div>
          <motion.p
            className="font-mono text-xs text-primary uppercase tracking-widest mb-3"
            initial={reduce ? false : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            Pedido claro — sin vueltas
          </motion.p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-foreground leading-[1.05] tracking-tight text-balance">
            Café de barrio,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              sabor a hoy
            </span>
          </h1>
          <p className="mt-4 text-base md:text-lg text-muted-foreground max-w-md leading-relaxed">
            Arma tu carrito, revisa y envíanos el pedido por WhatsApp. Así
            aseguras tu taza o tu dulce sin filas.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md">
            <Button
              asChild
              size="lg"
              className="h-14 rounded-2xl text-base font-semibold neon-glow w-full sm:w-auto"
            >
              <a href="#pedido" className="inline-flex items-center justify-center gap-2">
                Pedir ahora
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="h-14 rounded-2xl text-base w-full sm:w-auto border border-border/80"
            >
              <a href="#menu">Ver menú</a>
            </Button>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            Sin registro. Entrega/retiro según disponibilidad en el local.
          </p>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-md lg:max-w-none"
          initial={reduce ? false : { opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="relative aspect-[4/5] w-full max-w-sm mx-auto rounded-2xl overflow-hidden border border-border/50 glass">
            <Image
              src="/images/logo.jpeg"
              alt="Punto Café"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 40vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
