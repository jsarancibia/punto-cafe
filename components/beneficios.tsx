"use client"

import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animation"
import { Award, Home, MapPin } from "lucide-react"

export function Beneficios() {
  const beneficios = [
    {
      icon: Award,
      title: "Calidad Premium",
      description: "Trabajamos exclusivamente con granos de especialidad, tostados artesanalmente para garantizar el mejor sabor en cada taza. Cada café es una experiencia única.",
      color: "from-amber-500 to-orange-600",
    },
    {
      icon: Home,
      title: "Ambiente Acogedor",
      description: "Un espacio diseñado para que te sientas como en casa. Ambiente cálido, música suave y decoración que invita a quedarse y disfrutar del momento.",
      color: "from-amber-400 to-amber-600",
    },
    {
      icon: MapPin,
      title: "Ubicación Privilegiada",
      description: "En el corazón del barrio, fácil acceso y estacionamiento cercano. El lugar perfecto para tu pausa diaria o para encontrarte con amigos.",
      color: "from-orange-500 to-amber-600",
    },
  ]

  return (
    <section
      id="beneficios"
      className="relative py-24 px-4 bg-gradient-to-b from-card/50 via-background to-card/50 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <ScrollAnimation direction="down" delay={0.2} duration={0.8}>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              ¿Por qué elegirnos?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tres razones que nos hacen únicos y que nuestros clientes valoran día a día
            </p>
          </div>
        </ScrollAnimation>

        <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.2}>
          {beneficios.map((beneficio, index) => {
            const Icon = beneficio.icon
            return (
              <StaggerItem key={index} direction="up">
                <div className="relative h-full bg-card/80 backdrop-blur-sm p-8 rounded-3xl border border-border/50 hover:border-primary/50 transition-all hover:shadow-2xl group">
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${beneficio.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity`} />
                  
                  <div className="relative z-10">
                    <div className={`w-20 h-20 bg-gradient-to-br ${beneficio.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                      {beneficio.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {beneficio.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
