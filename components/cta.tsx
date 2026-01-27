"use client"

import { ScrollAnimation } from "@/components/ui/scroll-animation"
import { motion } from "framer-motion"
import { ArrowRight, MapPin, Clock } from "lucide-react"

export function CTA() {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-amber-500/10 to-primary/10" />
      <div className="absolute inset-0 bg-[url('/images/logo.jpeg')] bg-cover bg-center opacity-5" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <ScrollAnimation direction="scale" delay={0.2} duration={0.8}>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">
            ¿Listo para tu pausa perfecta?
          </h2>
        </ScrollAnimation>
        
        <ScrollAnimation direction="fade" delay={0.4} duration={0.8}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Ven a visitarnos y descubre por qué somos el lugar favorito del barrio.
            Te esperamos con los brazos abiertos y una taza de café perfecta.
          </p>
        </ScrollAnimation>

        <ScrollAnimation direction="up" delay={0.6} duration={0.8}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-semibold hover:bg-accent transition-all shadow-lg hover:shadow-xl"
            >
              Visítanos hoy
              <ArrowRight className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://wa.me/56912345678"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary/5 transition-all"
            >
              Reserva tu mesa
            </motion.a>
          </div>
        </ScrollAnimation>

        <ScrollAnimation direction="fade" delay={0.8} duration={0.8}>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 bg-card/80 backdrop-blur-sm p-6 rounded-xl border border-border/50">
              <MapPin className="w-6 h-6 text-primary" />
              <div className="text-left">
                <p className="font-semibold text-foreground">Ubicación</p>
                <p className="text-sm text-muted-foreground">Av. Providencia 1234</p>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 bg-card/80 backdrop-blur-sm p-6 rounded-xl border border-border/50">
              <Clock className="w-6 h-6 text-primary" />
              <div className="text-left">
                <p className="font-semibold text-foreground">Horarios</p>
                <p className="text-sm text-muted-foreground">Lun-Vie: 8:00 - 20:00</p>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
