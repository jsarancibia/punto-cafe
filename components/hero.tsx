"use client"

import Image from "next/image"
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"

export function Hero() {
  const scrollToNext = () => {
    const element = document.querySelector("#experiencia")
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 via-background to-amber-100/30 dark:from-amber-950/20 dark:via-background dark:to-amber-900/10" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-200/20 dark:bg-amber-800/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <ScrollAnimation direction="scale" delay={0.2} duration={0.8}>
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="mb-8"
          >
            <Image
              src="/images/logo.jpeg"
              alt="Punto Café - Logo de un gato tomando café"
              width={320}
              height={320}
              className="mx-auto rounded-2xl shadow-2xl border-4 border-primary/10"
              priority
            />
          </motion.div>
        </ScrollAnimation>
        
        <ScrollAnimation direction="fade" delay={0.4} duration={0.8}>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 text-balance leading-tight">
            PUNTO CAFÉ
          </h1>
        </ScrollAnimation>
        
        <ScrollAnimation direction="fade" delay={0.6} duration={0.8}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light max-w-2xl mx-auto">
            Tu pausa perfecta, en Punto Café
          </p>
          <p className="text-lg text-muted-foreground/80 mb-12 max-w-xl mx-auto">
            Donde cada taza cuenta una historia y cada momento se convierte en un recuerdo
          </p>
        </ScrollAnimation>
        
        <ScrollAnimation direction="up" delay={0.8} duration={0.6}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.a
              href="#menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded-full text-lg font-medium hover:bg-accent transition-all shadow-lg hover:shadow-xl"
            >
              Ver nuestro menú
            </motion.a>
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block border-2 border-primary text-primary px-10 py-4 rounded-full text-lg font-medium hover:bg-primary/5 transition-all"
            >
              Visítanos
            </motion.a>
          </div>
        </ScrollAnimation>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToNext}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-6 h-6" />
        </motion.button>
      </div>
    </section>
  )
}
