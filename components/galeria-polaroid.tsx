"use client"

import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animation"
import Image from "next/image"
import { motion } from "framer-motion"

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
    <section id="galeria-polaroid" className="relative py-24 px-4 bg-gradient-to-b from-background to-card/30">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation direction="down" delay={0.2} duration={0.8}>
          <div className="text-center mb-16">
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
                className="relative bg-white dark:bg-card p-4 shadow-lg hover:shadow-2xl transition-shadow cursor-pointer"
                style={{
                  transform: `rotate(${item.rotacion}deg)`,
                }}
              >
                {/* Marco polaroid */}
                <div className="relative aspect-[4/5] bg-white dark:bg-card overflow-hidden">
                  <Image
                    src={item.src}
                    alt={`Ambiente ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>

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
