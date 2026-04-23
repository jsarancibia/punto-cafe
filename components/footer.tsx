"use client"

import { Instagram } from "lucide-react"
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

const links: { href: string; label: string }[] = [
  { href: "#inicio", label: "Inicio" },
  { href: "#destacados", label: "Destacados" },
  { href: "#menu", label: "Menú" },
  { href: "#pedido", label: "Cómo pedir" },
  { href: "#contacto", label: "Contacto" },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border/60 py-12 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-semibold text-foreground">Punto Café</p>
            <p className="text-sm text-muted-foreground mt-2 max-w-xs leading-relaxed">
              Cafetería de barrio. Menú y pedido claros, para que pases a buscar
              o disfrutes en la mesa.
            </p>
          </div>
          <div>
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">
              En esta página
            </p>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-3">
              Redes
            </p>
            <div className="flex gap-3">
              <motion.a
                href="https://wa.me/56912345678"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#25D366] text-white"
                whileHover={{ scale: 1.05 }}
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </motion.a>
              <motion.a
                href="https://instagram.com/puntocafe"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border glass text-foreground"
                whileHover={{ scale: 1.05 }}
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
            </div>
          </div>
        </div>
        <p className="mt-10 text-center text-xs text-muted-foreground">
          © {year} Punto Café. Pedidos vía demostración (sin pago en web).
        </p>
      </div>
    </footer>
  )
}
