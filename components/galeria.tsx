"use client"

import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animation"
import Image from "next/image"
import { motion } from "framer-motion"

const imagenes = [
  "/images/espresso.jpg",
  "/images/cappuccino.jpg",
  "/images/latte.jpg",
  "/images/croissant.jpg",
  "/images/kuchen.jpg",
  "/images/sandwich.jpg",
]

export function Galeria() {
  return (
    <section
      id="galeria"
      className="relative py-24 px-4 bg-gradient-to-b from-card/30 to-background"
    >
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation direction="down" delay={0.2} duration={0.8}>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Galería
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Un vistazo a nuestros productos y el ambiente que creamos para ti
            </p>
          </div>
        </ScrollAnimation>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6" staggerDelay={0.1}>
          {imagenes.map((src, index) => (
            <StaggerItem key={index} direction="scale">
              <motion.div
                className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={src}
                  alt={`Galería ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
