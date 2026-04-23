"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type FuturisticShellProps = {
  children: ReactNode
  className?: string
}

/**
 * Fondo global: rejilla, orbes, ruido y línea de escaneo; entrada suave al cargar.
 * pointer-events: none en capas de fondo para no bloquear clics.
 */
export function FuturisticShell({ children, className }: FuturisticShellProps) {
  const reduce = useReducedMotion()

  return (
    <div className={cn("relative min-h-dvh", className)}>
      {/* Capas fijas bajo el contenido */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
        aria-hidden
      >
        <div className="absolute inset-0 bg-background" />
        <div
          className="futuristic-grid-bg animate-futuristic-grid absolute inset-0 opacity-70"
          style={{ willChange: "auto" }}
        />
        <div
          className="futuristic-orb animate-futuristic-orb absolute -left-[15%] top-[10%] h-[50vmin] w-[50vmin] rounded-full"
        />
        <div
          className="futuristic-orb animate-futuristic-orb-slow absolute -right-[10%] bottom-[5%] h-[60vmin] w-[60vmin] rounded-full opacity-80"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-amber-50/40 via-transparent to-amber-100/20 dark:from-amber-950/25 dark:to-amber-900/10"
        />
        <div className="futuristic-noise" />
        <div className="futuristic-scanline" />
      </div>

      <motion.div
        className="relative z-0"
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={reduce ? undefined : { opacity: 1, y: 0 }}
        transition={{
          duration: 0.85,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}
