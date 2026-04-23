"use client"

import Image from "next/image"
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import { motion, useReducedMotion } from "framer-motion"
import { ArrowDown, Sparkles } from "lucide-react"
import { ParallaxTiltImage } from "@/components/parallax-tilt-image"

export function Hero() {
  const reduce = useReducedMotion()

  const scrollToNext = () => {
    const element = document.querySelector("#experiencia")
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-24 md:py-20 overflow-hidden"
    >
      {/* Refuerzo local (compatible con FuturisticShell) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-0 h-80 w-80 rounded-full bg-amber-200/15 dark:bg-amber-800/10 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <ScrollAnimation direction="scale" delay={0.1} duration={0.7}>
          <div className="futuristic-corners mb-10 inline-block rounded-2xl p-1">
            <ParallaxTiltImage
              containerClassName="mx-auto w-[min(100%,280px)] sm:w-[320px] aspect-square"
              tiltMax={14}
            >
              <div className="relative h-full min-h-0 w-full overflow-hidden rounded-2xl shadow-2xl ring-1 ring-primary/20 futuristic-btn-glow">
                <Image
                  src="/images/logo.jpeg"
                  alt="Punto Café - Logo de un gato tomando café"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 280px, 320px"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-amber-400/10" />
              </div>
            </ParallaxTiltImage>
          </div>
        </ScrollAnimation>

        <ScrollAnimation direction="fade" delay={0.25} duration={0.7}>
          <motion.div
            className="mb-2 flex items-center justify-center gap-2"
            initial={reduce ? false : { opacity: 0 }}
            animate={reduce ? undefined : { opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Sparkles className="h-4 w-4 text-primary" aria-hidden />
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-primary/80">
              bienvenida
            </span>
            <Sparkles className="h-4 w-4 text-primary" aria-hidden />
          </motion.div>
        </ScrollAnimation>

        <ScrollAnimation direction="fade" delay={0.3} duration={0.8}>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance leading-tight">
            <span className="bg-gradient-to-r from-foreground via-primary to-amber-700/90 bg-clip-text text-transparent dark:to-amber-500/80">
              PUNTO CAFÉ
            </span>
          </h1>
        </ScrollAnimation>

        <ScrollAnimation direction="fade" delay={0.45} duration={0.7}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light max-w-2xl mx-auto">
            Tu pausa perfecta, en Punto Café
          </p>
          <p className="text-lg text-muted-foreground/85 mb-12 max-w-xl mx-auto">
            Donde cada taza cuenta una historia y cada momento se convierte en un
            recuerdo
          </p>
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={0.55} duration={0.55}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="#menu"
              whileHover={reduce ? undefined : { scale: 1.04, y: -2 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
              className="inline-block rounded-full bg-primary px-10 py-4 text-lg font-medium text-primary-foreground shadow-lg transition-all hover:bg-primary/90 futuristic-btn-glow"
            >
              Ver nuestro menú
            </motion.a>
            <motion.a
              href="#contacto"
              whileHover={reduce ? undefined : { scale: 1.03 }}
              whileTap={reduce ? undefined : { scale: 0.98 }}
              className="futuristic-glass inline-block rounded-full border-2 border-primary/40 px-10 py-4 text-lg font-medium text-primary transition-all hover:border-primary hover:shadow-md"
            >
              Visítanos
            </motion.a>
          </div>
        </ScrollAnimation>

        <motion.button
          type="button"
          onClick={scrollToNext}
          animate={
            reduce
              ? undefined
              : { y: [0, 10, 0] }
          }
          transition={reduce ? undefined : { duration: 2.2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Seguir a la sección experiencia"
        >
          <span className="flex flex-col items-center gap-1">
            <span className="font-mono text-[10px] uppercase tracking-widest opacity-60">
              explorar
            </span>
            <ArrowDown className="h-6 w-6" />
          </span>
        </motion.button>
      </div>
    </section>
  )
}
