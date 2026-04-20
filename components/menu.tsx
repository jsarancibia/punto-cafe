"use client"

import { MenuItem } from "./menu-item"
import { ScrollAnimation, StaggerContainer, StaggerItem } from "@/components/ui/scroll-animation"

const cafes = [
  { name: "Espresso", price: "$2.000", image: "/images/espresso.jpg", description: "Intenso y aromático" },
  { name: "Americano", price: "$2.200", image: "/images/americano.jpg", description: "Suave y equilibrado" },
  { name: "Cappuccino", price: "$2.500", image: "/images/cappuccino.jpg", description: "Espumoso y cremoso" },
  { name: "Latte", price: "$2.700", image: "/images/latte.jpg", description: "Dulce y sedoso" },
  { name: "Caffè Mocha", price: "$3.100", image: "/images/mocha.jpg", description: "Chocolate y espresso en armonía" },
  { name: "Flat White", price: "$3.000", image: "/images/flat-white.jpg", description: "Microespuma suave e intenso sabor" },
  { name: "Caramel Macchiato", price: "$3.300", image: "/images/caramel-macchiato.jpg", description: "Capas cremosas con toque de caramelo" },
  { name: "Affogato", price: "$3.400", image: "/images/affogato.jpg", description: "Espresso caliente con helado de vainilla" },
  { name: "Café helado", price: "$2.800", image: "/images/cafe-helado.jpg", description: "Refrescante y delicioso" },
  { name: "Té", price: "$1.800", image: "/images/te.jpg", description: "Selección de tés premium" },
]

const comida = [
  { name: "Croissant", price: "$2.200", image: "/images/croissant.jpg", description: "Recién horneado" },
  { name: "Kuchen", price: "$3.000", image: "/images/kuchen.jpg", description: "Tradición alemana" },
  { name: "Sandwich", price: "$3.500", image: "/images/sandwich.jpg", description: "Ingredientes frescos" },
]

export function Menu() {
  return (
    <section id="menu" className="relative py-24 px-4 bg-gradient-to-b from-background to-card/50">
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation direction="down" delay={0.2} duration={0.8}>
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Nuestro Menú
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Cada preparación es una obra de arte, cada ingrediente cuidadosamente seleccionado
            </p>
          </div>
        </ScrollAnimation>

        {/* Cafés */}
        <div className="mb-20">
          <ScrollAnimation direction="right" delay={0.2} duration={0.6}>
            <h3 className="font-serif text-3xl font-semibold text-foreground mb-12 text-center">
              Bebidas
            </h3>
          </ScrollAnimation>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {cafes.map((item) => (
              <StaggerItem key={item.name} direction="scale">
                <MenuItem {...item} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Comida */}
        <div>
          <ScrollAnimation direction="left" delay={0.2} duration={0.6}>
            <h3 className="font-serif text-3xl font-semibold text-foreground mb-12 text-center">
              Comida
            </h3>
          </ScrollAnimation>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.15}>
            {comida.map((item) => (
              <StaggerItem key={item.name} direction="scale">
                <MenuItem {...item} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
