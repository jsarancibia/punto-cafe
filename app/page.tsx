import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { CoffeeRecommender } from "@/components/coffee-recommender"
import { Menu } from "@/components/menu"
import { HoyRecomendamos } from "@/components/hoy-recomendamos"
import { PedidoRapido } from "@/components/pedido-rapido"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { AppBackground } from "@/components/app-background"

export default function Home() {
  return (
    <AppBackground>
      <main className="relative pb-4">
        <Navbar />
        <Hero />
        <CoffeeRecommender />
        <HoyRecomendamos />
        <Menu />
        <PedidoRapido />
        <Contact />
        <Footer />
        <WhatsAppButton />
      </main>
    </AppBackground>
  )
}
