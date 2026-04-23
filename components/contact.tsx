"use client"

import { Instagram, MapPin, Clock, Phone } from "lucide-react"
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animation"
import { motion } from "framer-motion"

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export function Contact() {
  return (
    <section
      id="contacto"
      className="relative scroll-mt-20 py-20 md:py-24 px-4 border-t border-border/50"
    >
      <div className="max-w-6xl mx-auto">
        <ScrollAnimation direction="down" delay={0.2} duration={0.8}>
          <div className="text-center mb-10 md:mb-12">
            <p className="font-mono text-xs text-primary uppercase tracking-widest mb-2">ubicación</p>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight">
              Contacto
            </h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-md mx-auto mt-2">
              Retiro en el local o escríbenos. Respondemos al tiro.
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Información de contacto */}
          <StaggerContainer className="space-y-6" staggerDelay={0.1}>
            <StaggerItem direction="left">
              <div className="flex items-start gap-4 glass p-5 rounded-2xl border border-border/60">
                <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Ubicación</h3>
                  <p className="text-muted-foreground">
                    Av. Providencia 1234, Local 5<br />
                    Providencia, Santiago<br />
                    Región Metropolitana, Chile
                  </p>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem direction="left">
              <div className="flex items-start gap-4 glass p-5 rounded-2xl border border-border/60">
                <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Horarios</h3>
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">Lunes a Viernes:</span> 8:00 - 20:00<br />
                    <span className="font-medium text-foreground">Sábado:</span> 9:00 - 18:00<br />
                    <span className="font-medium text-foreground">Domingo:</span> Cerrado
                  </p>
                </div>
              </div>
            </StaggerItem>

            <StaggerItem direction="left">
              <div className="flex items-start gap-4 glass p-5 rounded-2xl border border-border/60">
                <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Teléfono</h3>
                  <p className="text-muted-foreground">+56 9 1234 5678</p>
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* Redes sociales */}
          <StaggerContainer className="space-y-4" staggerDelay={0.1}>
            <StaggerItem direction="right">
              <motion.a
                href="https://wa.me/56912345678"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                className="flex items-center gap-4 bg-[#25D366] text-white p-6 rounded-xl font-semibold hover:bg-[#128C7E] transition-all shadow-lg hover:shadow-xl"
              >
                <WhatsAppIcon className="w-8 h-8" />
                <div className="text-left">
                  <p className="text-lg">WhatsApp</p>
                  <p className="text-sm opacity-90">Escríbenos directamente</p>
                </div>
              </motion.a>
            </StaggerItem>

            <StaggerItem direction="right">
              <motion.a
                href="https://instagram.com/puntocafe"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, y: -2 }}
                className="flex items-center gap-4 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white p-6 rounded-xl font-semibold hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl"
              >
                <Instagram className="w-8 h-8" />
                <div className="text-left">
                  <p className="text-lg">Instagram</p>
                  <p className="text-sm opacity-90">Síguenos y comparte</p>
                </div>
              </motion.a>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
