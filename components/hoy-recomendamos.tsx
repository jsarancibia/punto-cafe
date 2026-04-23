"use client"

import { ScrollAnimation } from "@/components/ui/scroll-animation"
import { motion } from "framer-motion"
import { Star, ArrowRight } from "lucide-react"
import Image from "next/image"
import { ParallaxTiltImage } from "@/components/parallax-tilt-image"

// Fácil de cambiar: solo modifica este objeto
const recomendacion = {
  nombre: "Cappuccino Especial",
  descripcion: "Nuestro cappuccino con un toque de canela y cacao, perfecto para empezar el día con energía.",
  precio: "$2.800",
  imagen: "/images/cappuccino.jpg",
  destacado: true,
}

export function HoyRecomendamos() {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-br from-primary/5 via-background to-amber-50/30 dark:to-amber-950/10 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-200/20 dark:bg-amber-800/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <ScrollAnimation direction="down" delay={0.2} duration={0.8}>
          <div className="text-center mb-12">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary/80 mb-2">
              sistema // día
            </p>
            <motion.div
              animate={{
                scale: [1, 1.04, 1],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-flex items-center gap-2 border border-primary/20 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4 shadow-sm shadow-primary/5"
            >
              <Star className="w-4 h-4 fill-primary" />
              <span className="text-sm font-semibold">Recomendación del día</span>
            </motion.div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Hoy recomendamos
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
          </div>
        </ScrollAnimation>

        <ScrollAnimation direction="scale" delay={0.4} duration={0.8}>
          <motion.div
            whileHover={{ y: -4 }}
            className="futuristic-glass rounded-3xl border border-primary/15 overflow-hidden shadow-2xl ring-1 ring-primary/10"
          >
            <div className="grid md:grid-cols-2 gap-0">
              {/* Imagen */}
              <div className="relative min-h-[16rem] md:min-h-[25rem]">
                <ParallaxTiltImage
                  containerClassName="relative h-full min-h-[16rem] w-full md:min-h-[25rem]"
                  tiltMax={8}
                >
                  <div className="relative h-full min-h-[16rem] w-full md:min-h-[25rem]">
                    <Image
                      src={recomendacion.imagen}
                      alt={recomendacion.nombre}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  </div>
                </ParallaxTiltImage>
                {recomendacion.destacado && (
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                    className="absolute top-6 right-6 z-10 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg"
                  >
                    ⭐ Especial
                  </motion.div>
                )}
              </div>

              {/* Contenido */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4"
                >
                  {recomendacion.nombre}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg text-muted-foreground mb-6 leading-relaxed"
                >
                  {recomendacion.descripcion}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center justify-between"
                >
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Precio</p>
                    <p className="text-3xl font-bold text-primary">{recomendacion.precio}</p>
                  </div>

                  <motion.a
                    href="#menu"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-accent transition-colors shadow-lg"
                  >
                    Ver en menú
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
