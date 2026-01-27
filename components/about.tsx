"use client"

import { ScrollAnimation } from "@/components/ui/scroll-animation"

export function About() {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-2xl mx-auto text-center">
        <ScrollAnimation direction="left" delay={0.2} duration={0.8}>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
            Sobre nosotros
          </h2>
        </ScrollAnimation>
        
        <ScrollAnimation direction="left" delay={0.3} duration={0.8}>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-8" />
        </ScrollAnimation>
        
        <ScrollAnimation direction="left" delay={0.4} duration={0.8}>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Punto Café es una cafetería de barrio, pensada para disfrutar un buen café en un ambiente tranquilo y cercano.
          </p>
        </ScrollAnimation>
      </div>
    </section>
  )
}
