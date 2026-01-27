"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ScrollAnimation } from "@/components/ui/scroll-animation"
import { Coffee, Sparkles } from "lucide-react"
import Image from "next/image"

interface Respuesta {
  pregunta: string
  opcion: string
}

const resultados = {
  "fuerte-con-caliente": {
    nombre: "Espresso",
    descripcion: "Intenso y concentrado, perfecto para los amantes del café puro.",
    imagen: "/images/espresso.jpg",
    color: "from-amber-900 to-amber-700",
  },
  "fuerte-con-frio": {
    nombre: "Espresso Helado",
    descripcion: "La intensidad del espresso con la frescura del hielo.",
    imagen: "/images/espresso.jpg",
    color: "from-amber-800 to-amber-600",
  },
  "suave-con-leche-caliente": {
    nombre: "Cappuccino",
    descripcion: "Equilibrio perfecto entre espresso, leche vaporizada y espuma cremosa.",
    imagen: "/images/cappuccino.jpg",
    color: "from-amber-200 to-amber-400",
  },
  "suave-con-leche-frio": {
    nombre: "Café Helado",
    descripcion: "Refrescante y suave, ideal para disfrutar en cualquier momento del día.",
    imagen: "/images/cafe-helado.jpg",
    color: "from-amber-300 to-amber-500",
  },
  "suave-sin-leche-caliente": {
    nombre: "Americano",
    descripcion: "Suave y equilibrado, espresso diluido con agua caliente.",
    imagen: "/images/americano.jpg",
    color: "from-amber-400 to-amber-600",
  },
  "suave-sin-leche-frio": {
    nombre: "Americano Helado",
    descripcion: "Fresco y ligero, perfecto para los días cálidos.",
    imagen: "/images/americano.jpg",
    color: "from-amber-300 to-amber-500",
  },
  "fuerte-con-leche-caliente": {
    nombre: "Latte",
    descripcion: "Espresso intenso con leche vaporizada suave y cremosa.",
    imagen: "/images/latte.jpg",
    color: "from-amber-300 to-amber-500",
  },
  "fuerte-con-leche-frio": {
    nombre: "Latte Helado",
    descripcion: "La cremosidad del latte con la frescura del hielo.",
    imagen: "/images/latte.jpg",
    color: "from-amber-400 to-amber-600",
  },
}

export function CafeIdeal() {
  const [paso, setPaso] = useState(0)
  const [respuestas, setRespuestas] = useState<Respuesta[]>([])
  const [resultado, setResultado] = useState<keyof typeof resultados | null>(null)

  const preguntas = [
    {
      id: "intensidad",
      pregunta: "¿Te gusta el café fuerte o suave?",
      opciones: [
        { valor: "fuerte", label: "Fuerte", icon: "☕" },
        { valor: "suave", label: "Suave", icon: "🌿" },
      ],
    },
    {
      id: "leche",
      pregunta: "¿Con leche o sin leche?",
      opciones: [
        { valor: "con-leche", label: "Con leche", icon: "🥛" },
        { valor: "sin-leche", label: "Sin leche", icon: "⚫" },
      ],
    },
    {
      id: "temperatura",
      pregunta: "¿Caliente o helado?",
      opciones: [
        { valor: "caliente", label: "Caliente", icon: "🔥" },
        { valor: "frio", label: "Helado", icon: "❄️" },
      ],
    },
  ]

  const handleRespuesta = (preguntaId: string, valor: string) => {
    const nuevaRespuesta: Respuesta = {
      pregunta: preguntaId,
      opcion: valor,
    }

    const nuevasRespuestas = [...respuestas, nuevaRespuesta]
    setRespuestas(nuevasRespuestas)

    if (paso < preguntas.length - 1) {
      setTimeout(() => setPaso(paso + 1), 300)
    } else {
      // Calcular resultado
      const intensidad = nuevasRespuestas.find((r) => r.pregunta === "intensidad")?.opcion || "suave"
      const leche = nuevasRespuestas.find((r) => r.pregunta === "leche")?.opcion || "sin-leche"
      const temperatura = nuevasRespuestas.find((r) => r.pregunta === "temperatura")?.opcion || "caliente"

      const clave = `${intensidad}-${leche}-${temperatura}` as keyof typeof resultados
      
      // Fallback si la combinación no existe
      const resultadoFinal = resultados[clave] ? clave : "suave-con-leche-caliente"
      setResultado(resultadoFinal)
      setTimeout(() => setPaso(3), 500)
    }
  }

  const reiniciar = () => {
    setPaso(0)
    setRespuestas([])
    setResultado(null)
  }

  return (
    <section id="cafe-ideal" className="relative py-24 px-4 bg-gradient-to-b from-background via-card/30 to-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-200/20 dark:bg-amber-800/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <ScrollAnimation direction="down" delay={0.2} duration={0.8}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-primary" />
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
                Descubre tu café ideal
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6" />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Responde estas preguntas y te recomendaremos el café perfecto para ti
            </p>
          </div>
        </ScrollAnimation>

        <div className="bg-card/80 backdrop-blur-sm rounded-3xl border border-border/50 p-8 md:p-12 shadow-xl">
          {/* Progress bar */}
          {paso < 3 && (
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-muted-foreground">
                  Pregunta {paso + 1} de {preguntas.length}
                </span>
                <span className="text-sm text-muted-foreground">
                  {Math.round(((paso + 1) / preguntas.length) * 100)}%
                </span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-amber-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${((paso + 1) / preguntas.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          )}

          <AnimatePresence mode="wait">
            {paso < 3 ? (
              <motion.div
                key={paso}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-8">
                  {preguntas[paso].pregunta}
                </h3>

                <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                  {preguntas[paso].opciones.map((opcion) => (
                    <motion.button
                      key={opcion.valor}
                      onClick={() => handleRespuesta(preguntas[paso].id, opcion.valor)}
                      whileHover={{ scale: 1.05, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className="group bg-background border-2 border-border hover:border-primary rounded-2xl p-6 md:p-8 transition-all hover:shadow-lg"
                    >
                      <div className="text-4xl mb-3">{opcion.icon}</div>
                      <div className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                        {opcion.label}
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ) : resultado ? (
              <motion.div
                key="resultado"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <motion.div
                  initial={{ rotate: -10, scale: 0.8 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="mb-6"
                >
                  <Coffee className="w-16 h-16 text-primary mx-auto mb-4" />
                </motion.div>

                <motion.h3
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4"
                >
                  Tu café ideal es:
                </motion.h3>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className={`inline-block bg-gradient-to-r ${resultados[resultado].color} text-white px-8 py-3 rounded-full text-2xl md:text-3xl font-bold mb-6 shadow-lg`}
                >
                  {resultados[resultado].nombre}
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-6"
                >
                  <Image
                    src={resultados[resultado].imagen}
                    alt={resultados[resultado].nombre}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                </motion.div>

                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
                >
                  {resultados[resultado].descripcion}
                </motion.p>

                <motion.button
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  onClick={reiniciar}
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-accent transition-colors"
                >
                  Volver a intentar
                </motion.button>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
