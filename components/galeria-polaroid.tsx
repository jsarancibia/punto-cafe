"use client"

import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animation"
import Image from "next/image"
import { motion } from "framer-motion"
import { ParallaxTiltImage } from "@/components/parallax-tilt-image"

const imagenesAmbiente = [
  { src: "/images/espresso.jpg", rotacion: -2, delay: 0 },
  { src: "/images/cappuccino.jpg", rotacion: 3, delay: 0.1 },
  { src: "/images/latte.jpg", rotacion: -1.5, delay: 0.2 },
  { src: "/images/croissant.jpg", rotacion: 2.5, delay: 0.3 },
  { src: "/images/kuchen.jpg", rotacion: -2.5, delay: 0.4 },
  { src: "/images/sandwich.jpg", rotacion: 1.5, delay: 0.5 },
]

export function GaleriaPolaroid() {
  return (
    <section
      id="galeria-polaroid"
      className="relative py-24 px-4 bg-gradient-to-b from-background to-card/30 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,oklch(0.55_0.08_60/0.08),transparent)]" />
      <div className="max-w-7xl mx-auto relative z-10">
        <ScrollAnimation direction="down" delay={0.2} duration={0.8}>
          <div className="text-center mb-16">
            <p className="font-mono text-xs uppercase tracking-[0.4em] text-primary/80 mb-3">
              memoria visual
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Galería de ambiente
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Momentos capturados en Punto Café
            </p>
          </div>
        </ScrollAnimation>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12" staggerDelay={0.15}>
          {imagenesAmbiente.map((item, index) => (
            <StaggerItem key={index} direction="scale">
              <motion.div
                initial={{ rotate: item.rotacion, scale: 0.9, opacity: 0 }}
                animate={{ rotate: item.rotacion, scale: 1, opacity: 1 }}
                transition={{ delay: item.delay, duration: 0.5 }}
                whileHover={{
                  rotate: item.rotacion + 2,
                  scale: 1.05,
                  zIndex: 10,
                }}
                className="relative bg-white dark:bg-card p-4 shadow-lg ring-1 ring-primary/10 hover:shadow-2xl hover:ring-primary/25 transition-all cursor-pointer"
                style={{
                  transform: `rotate(${item.rotacion}deg)`,
                }}
              >
                {/* Marco polaroid + imagen con tilt y Ken Burns */}
                <ParallaxTiltImage
                  containerClassName="relative aspect-[4/5] w-full"
                  tiltMax={9}
                >
                  <div className="relative h-full w-full overflow-hidden bg-white dark:bg-card">
                    <Image
                      src={item.src}
                      alt={`Ambiente ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/10 via-transparent to-transparent" />
                  </div>
                </ParallaxTiltImage>

                {/* Espacio inferior tipo polaroid */}
                <div className="h-16 bg-white dark:bg-card flex items-center justify-center">
                  <div className="w-12 h-1 bg-muted-foreground/20 rounded-full" />
                </div>

                {/* Sombra realista */}
                <div 
                  className="absolute inset-0 bg-black/10 blur-xl -z-10"
                  style={{
                    transform: `rotate(${item.rotacion}deg) translateY(10px)`,
                  }}
                />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
