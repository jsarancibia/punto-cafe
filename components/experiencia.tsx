"use client"

import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animation"
import { Coffee, Heart, Users } from "lucide-react"
import Image from "next/image"

export function Experiencia() {
  const features = [
    {
      icon: Coffee,
      title: "Café de Especialidad",
      description: "Trabajamos con granos seleccionados y tostados artesanalmente para garantizar el mejor sabor en cada taza.",
    },
    {
      icon: Heart,
      title: "Hecho con Amor",
      description: "Cada preparación es cuidadosamente elaborada por nuestros baristas apasionados por el café.",
    },
    {
      icon: Users,
      title: "Comunidad Local",
      description: "Un espacio donde vecinos y visitantes se encuentran para compartir momentos especiales.",
    },
  ]

  return (
    <section
      id="experiencia"
      className="relative py-24 px-4 bg-gradient-to-b from-background via-card to-background"
    >
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation direction="down" delay={0.2} duration={0.8}>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              La Experiencia Punto Café
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Más que una cafetería, somos un espacio donde el tiempo se detiene y los sentidos se despiertan.
              Cada detalle está pensado para que disfrutes de una experiencia única.
            </p>
          </div>
        </ScrollAnimation>

        <StaggerContainer className="grid md:grid-cols-3 gap-8 mb-16" staggerDelay={0.2}>
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <StaggerItem key={index} direction="up">
                <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all hover:shadow-xl group">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>

        {/* Image Section */}
        <ScrollAnimation direction="fade" delay={0.4} duration={1}>
          <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/logo.jpeg"
              alt="Ambiente de Punto Café"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 80vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 md:left-12 md:right-12">
              <p className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">
                Un lugar donde cada detalle importa
              </p>
              <p className="text-lg text-muted-foreground">
                Ven y descubre por qué somos el favorito del barrio
              </p>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
