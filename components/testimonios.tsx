"use client"

import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animation"
import { Quote } from "lucide-react"
import { motion } from "framer-motion"

const testimonios = [
  {
    name: "María González",
    role: "Cliente frecuente",
    content: "El mejor café del barrio sin duda. Cada mañana paso por mi espresso y siempre es perfecto. El ambiente es acogedor y el personal muy amable.",
    rating: 5,
  },
  {
    name: "Carlos Ramírez",
    role: "Estudiante",
    content: "Mi lugar favorito para estudiar. El WiFi es excelente, el ambiente tranquilo y el café delicioso. Los croissants son increíbles.",
    rating: 5,
  },
  {
    name: "Ana Martínez",
    role: "Trabajadora remota",
    content: "Punto Café se ha convertido en mi oficina. El ambiente es perfecto para trabajar, el café es excepcional y siempre me siento bienvenida.",
    rating: 5,
  },
]

export function Testimonios() {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-background to-card/30">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation direction="down" delay={0.2} duration={0.8}>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Lo que dicen nuestros clientes
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              La mejor publicidad es la recomendación de quienes nos visitan
            </p>
          </div>
        </ScrollAnimation>

        <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
          {testimonios.map((testimonio, index) => (
            <StaggerItem key={index} direction="up">
              <motion.div
                whileHover={{ y: -5 }}
                className="relative h-full bg-card/80 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all hover:shadow-xl"
              >
                <Quote className="w-12 h-12 text-primary/20 mb-4" />
                <div className="flex mb-4">
                  {[...Array(testimonio.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-amber-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonio.content}"
                </p>
                <div>
                  <p className="font-semibold text-foreground">{testimonio.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonio.role}</p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
