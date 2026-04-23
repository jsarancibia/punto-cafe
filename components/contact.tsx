"use client"

import type { ReactNode } from "react"
import {
  Instagram,
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  ExternalLink,
  Heart,
} from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const ADDRESS = "Av. Providencia 1234, Local 5, Providencia, Santiago, Chile"
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Av.+Providencia+1234+Providencia+Santiago+Chile"
const PHONE_DISPLAY = "+56 9 1234 5678"
const PHONE_TEL = "+56912345678"

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

const schedule = [
  { days: "Lun — Vie", time: "8:00 — 20:00" },
  { days: "Sábado", time: "9:00 — 18:00" },
  { days: "Domingo", time: "Cerrado" },
] as const

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-mono uppercase tracking-widest text-primary mb-1">
      {children}
    </p>
  )
}

export function Contact() {
  return (
    <section
      id="contacto"
      className="relative scroll-mt-20 overflow-hidden border-t border-border/50 py-20 md:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/[0.04] via-transparent to-muted/20 dark:from-primary/[0.06]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-5xl px-4">
        {/* Encabezado: tono cercano */}
        <div className="mx-auto mb-12 max-w-2xl text-center md:mb-14">
          <div className="mb-3 inline-flex items-center justify-center gap-2 text-primary">
            <Heart className="h-4 w-4" aria-hidden />
            <span className="text-xs font-mono uppercase tracking-widest">
              aquí estamos
            </span>
          </div>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Ven por un café o {" "}
            <span className="text-primary">escríbenos</span> cuando quieras
          </h2>
          <p className="mt-3 text-pretty text-base text-muted-foreground md:text-lg">
            Retiro en barra, mesa o para llevar. Si necesitas algo especial,
            un mensaje basta: respondemos con gusto.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-5 md:gap-8">
          {/* Columna info del local: más orden, menos “cajas sueltas” */}
          <div className="md:col-span-3 space-y-5">
            <div className="glass rounded-3xl border border-border/60 p-6 shadow-sm sm:p-7">
              <div className="mb-5 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <MapPin className="h-6 w-6" strokeWidth={1.8} />
                </div>
                <div className="min-w-0 flex-1">
                  <SectionLabel>Dirección</SectionLabel>
                  <h3 className="text-lg font-semibold text-foreground">
                    Pásate a saludar
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {ADDRESS}
                  </p>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                  >
                    Cómo llegar en mapa
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                  </a>
                </div>
              </div>

              <div className="h-px bg-border/80" role="separator" />

              <div className="mt-5 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Clock className="h-6 w-6" strokeWidth={1.8} />
                </div>
                <div className="min-w-0 flex-1">
                  <SectionLabel>Horario</SectionLabel>
                  <h3 className="text-lg font-semibold text-foreground">
                    Te recibimos
                  </h3>
                  <ul className="mt-3 space-y-2.5" aria-label="Horarios de atención">
                    {schedule.map((row) => (
                      <li
                        key={row.days}
                        className="flex items-baseline justify-between gap-4 text-sm"
                      >
                        <span className="text-foreground/90">{row.days}</span>
                        <span
                          className={cn(
                            "tabular-nums",
                            row.time === "Cerrado"
                              ? "text-muted-foreground"
                              : "font-medium text-foreground"
                          )}
                        >
                          {row.time}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="h-px bg-border/80" role="separator" />

              <div className="mt-5 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Phone className="h-6 w-6" strokeWidth={1.8} />
                </div>
                <div>
                  <SectionLabel>Teléfono</SectionLabel>
                  <h3 className="text-lg font-semibold text-foreground">
                    Un llamado y listo
                  </h3>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="mt-2 inline-block text-base font-medium text-primary underline-offset-2 hover:underline"
                  >
                    {PHONE_DISPLAY}
                  </a>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Ideal si vas en camino o quieres reservar mesa.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Panel lateral: acciones, más amigable y compacto */}
          <div className="flex flex-col gap-4 md:col-span-2">
            <div className="glass flex flex-1 flex-col justify-between rounded-3xl border border-border/60 p-6 shadow-sm sm:p-7">
              <div>
                <div className="mb-1 flex items-center gap-2 text-foreground">
                  <MessageCircle className="h-4 w-4 text-primary" />
                  <h3 className="font-semibold">Mejor por mensaje</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Preguntas, pedidos o un “¿siguen abiertos?”. Te contestamos
                  pronto.
                </p>
              </div>
              <div className="mt-6 space-y-3">
                <motion.a
                  href="https://wa.me/56912345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="flex w-full items-center gap-3 rounded-2xl bg-[#25D366] px-4 py-3.5 text-left text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#20bd5a] sm:py-3"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20">
                    <WhatsAppIcon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block">WhatsApp</span>
                    <span className="text-xs font-normal text-white/90">
                      Chatea con el equipo
                    </span>
                  </span>
                </motion.a>

                <Button
                  variant="secondary"
                  className="h-auto w-full flex-col items-start gap-0 rounded-2xl border border-border/80 py-3.5 pl-4 text-left font-semibold"
                  asChild
                >
                  <a
                    href="https://instagram.com/puntocafe"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="flex w-full items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#F77737] text-white">
                        <Instagram className="h-5 w-5" />
                      </span>
                      <span>
                        <span className="block">Instagram</span>
                        <span className="text-xs font-normal text-muted-foreground">
                          Fotos, novedades y horarios
                        </span>
                      </span>
                    </span>
                  </a>
                </Button>
              </div>
            </div>

            <p className="rounded-2xl border border-dashed border-border/70 bg-muted/20 px-4 py-3 text-center text-xs text-muted-foreground leading-snug">
              ¿Pides desde la web? Usa el{" "}
              <a
                href="#pedido"
                className="font-medium text-primary underline-offset-2 hover:underline"
              >
                flujo de pedido
              </a>{" "}
              y te llevamos al carrito o a WhatsApp con tu lista.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
