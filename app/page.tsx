import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Experiencia } from "@/components/experiencia"
import { CafeIdeal } from "@/components/cafe-ideal"
import { Menu } from "@/components/menu"
import { HoyRecomendamos } from "@/components/hoy-recomendamos"
import { Beneficios } from "@/components/beneficios"
import { PerfilSabores } from "@/components/perfil-sabores"
import { Testimonios } from "@/components/testimonios"
import { GaleriaPolaroid } from "@/components/galeria-polaroid"
import { CTA } from "@/components/cta"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Experiencia />
      <CafeIdeal />
      <Menu />
      <HoyRecomendamos />
      <Beneficios />
      <PerfilSabores />
      <Testimonios />
      <GaleriaPolaroid />
      <CTA />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
