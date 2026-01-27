"use client"

import { ScrollAnimation } from "@/components/ui/scroll-animation"
import { motion } from "framer-motion"
import { Coffee } from "lucide-react"

const sabores = [
  { nombre: "Chocolate", porcentaje: 85, color: "from-amber-900 to-amber-700" },
  { nombre: "Caramelo", porcentaje: 70, color: "from-amber-600 to-amber-500" },
  { nombre: "Avellana", porcentaje: 60, color: "from-amber-500 to-amber-400" },
  { nombre: "Frutal", porcentaje: 45, color: "from-amber-400 to-amber-300" },
]

export function PerfilSabores() {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-card/30 via-background to-card/30">
      <div className="max-w-4xl mx-auto">
        <ScrollAnimation direction="down" delay={0.2} duration={0.8}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4">
              <Coffee className="w-6 h-6 text-primary" />
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
                Perfil de sabores
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Descubre las notas de sabor que caracterizan nuestros cafés
            </p>
          </div>
        </ScrollAnimation>

        <div className="space-y-8">
          {sabores.map((sabor, index) => (
            <ScrollAnimation key={sabor.nombre} direction="left" delay={0.3 + index * 0.1} duration={0.8}>
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold text-foreground text-lg">{sabor.nombre}</span>
                  <span className="text-muted-foreground text-sm">{sabor.porcentaje}%</span>
                </div>
                <div className="relative h-4 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${sabor.porcentaje}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: index * 0.2, ease: "easeOut" }}
                    className={`h-full bg-gradient-to-r ${sabor.color} rounded-full shadow-md`}
                  >
                    {/* Efecto de brillo */}
                    <motion.div
                      initial={{ x: "-100%" }}
                      whileInView={{ x: "200%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: index * 0.2 + 0.5, ease: "easeInOut" }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    />
                  </motion.div>
                </div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        <ScrollAnimation direction="fade" delay={0.8} duration={0.8}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center p-8 bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50"
          >
            <p className="text-muted-foreground leading-relaxed">
              Cada café tiene su propio perfil único. Ven y descubre cuál se adapta mejor a tu paladar.
            </p>
          </motion.div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
