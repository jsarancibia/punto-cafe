"use client"

import { Clock, MapPin } from "lucide-react"
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animation"

export function Hours() {
  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-2xl mx-auto text-center">
        <ScrollAnimation direction="blur" delay={0.2} duration={0.8}>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-foreground mb-6">
            Horarios y ubicación
          </h2>
        </ScrollAnimation>
        
        <ScrollAnimation direction="blur" delay={0.3} duration={0.8}>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-12" />
        </ScrollAnimation>

        <StaggerContainer className="grid md:grid-cols-2 gap-8" staggerDelay={0.2}>
          {/* Horarios */}
          <StaggerItem direction="blur">
            <div className="flex flex-col items-center">
              <Clock className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-serif text-xl font-medium text-foreground mb-4">
                Horarios
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <span className="font-medium text-foreground">Lunes a Viernes:</span>{" "}
                  8:00 a 20:00
                </p>
                <p>
                  <span className="font-medium text-foreground">Sábado:</span>{" "}
                  9:00 a 18:00
                </p>
                <p>
                  <span className="font-medium text-foreground">Domingo:</span>{" "}
                  Cerrado
                </p>
              </div>
            </div>
          </StaggerItem>

          {/* Ubicación */}
          <StaggerItem direction="blur">
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-serif text-xl font-medium text-foreground mb-4">
                Ubicación
              </h3>
              <div className="text-muted-foreground">
                <p>Av. Providencia 1234, Local 5</p>
                <p>Providencia, Santiago</p>
                <p>Región Metropolitana, Chile</p>
              </div>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  )
}
