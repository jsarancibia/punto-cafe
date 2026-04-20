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

type Intensidad = "fuerte" | "suave"
type Leche = "con-leche" | "sin-leche"
type Temperatura = "caliente" | "frio"
type Estilo = "clasico" | "dulce"

interface CafeRecomendado {
  nombre: string
  descripcion: string
  imagen: string
  color: string
  intensidad: Intensidad
  leche: Leche
  temperatura: Temperatura
  estilo: Estilo
}

const catalogoCafes: CafeRecomendado[] = [
  {
    nombre: "Espresso",
    descripcion: "Intenso y concentrado, ideal si prefieres un café puro y potente.",
    imagen: "/images/espresso.jpg",
    color: "from-amber-900 to-amber-700",
    intensidad: "fuerte",
    leche: "sin-leche",
    temperatura: "caliente",
    estilo: "clasico",
  },
  {
    nombre: "Americano",
    descripcion: "Suave, equilibrado y sin leche, perfecto para tomar a cualquier hora.",
    imagen: "/images/americano.jpg",
    color: "from-amber-600 to-amber-400",
    intensidad: "suave",
    leche: "sin-leche",
    temperatura: "caliente",
    estilo: "clasico",
  },
  {
    nombre: "Cappuccino",
    descripcion: "Espuma cremosa y sabor armonioso para un perfil suave y clásico.",
    imagen: "/images/cappuccino.jpg",
    color: "from-amber-300 to-amber-500",
    intensidad: "suave",
    leche: "con-leche",
    temperatura: "caliente",
    estilo: "clasico",
  },
  {
    nombre: "Latte",
    descripcion: "Textura sedosa y cremosa con notas suaves de café y leche.",
    imagen: "/images/latte.jpg",
    color: "from-amber-300 to-amber-500",
    intensidad: "suave",
    leche: "con-leche",
    temperatura: "caliente",
    estilo: "dulce",
  },
  {
    nombre: "Cortado",
    descripcion: "Balance ideal entre intensidad del espresso y suavidad de leche.",
    imagen: "/images/cortado.jpg",
    color: "from-amber-700 to-amber-500",
    intensidad: "fuerte",
    leche: "con-leche",
    temperatura: "caliente",
    estilo: "clasico",
  },
  {
    nombre: "Caffè Mocha",
    descripcion: "Combinación deliciosa de espresso, leche y chocolate.",
    imagen: "/images/mocha.jpg",
    color: "from-amber-800 to-orange-500",
    intensidad: "suave",
    leche: "con-leche",
    temperatura: "caliente",
    estilo: "dulce",
  },
  {
    nombre: "Flat White",
    descripcion: "Cuerpo intenso, microespuma fina y un acabado elegante.",
    imagen: "/images/flat-white.jpg",
    color: "from-amber-700 to-amber-500",
    intensidad: "fuerte",
    leche: "con-leche",
    temperatura: "caliente",
    estilo: "clasico",
  },
  {
    nombre: "Caramel Macchiato",
    descripcion: "Bebida cremosa y aromática con un toque dulce de caramelo.",
    imagen: "/images/caramel-macchiato.jpg",
    color: "from-amber-500 to-orange-400",
    intensidad: "suave",
    leche: "con-leche",
    temperatura: "caliente",
    estilo: "dulce",
  },
  {
    nombre: "Affogato",
    descripcion: "Postre-café irresistible: helado de vainilla con espresso caliente.",
    imagen: "/images/affogato.jpg",
    color: "from-amber-700 to-orange-500",
    intensidad: "fuerte",
    leche: "con-leche",
    temperatura: "frio",
    estilo: "dulce",
  },
  {
    nombre: "Café helado",
    descripcion: "Refrescante, suave y cremoso para los días cálidos.",
    imagen: "/images/cafe-helado.jpg",
    color: "from-amber-400 to-amber-600",
    intensidad: "suave",
    leche: "con-leche",
    temperatura: "frio",
    estilo: "clasico",
  },
  {
    nombre: "Cold Brew",
    descripcion: "Extracción en frío con sabor profundo, fresco y menos acidez.",
    imagen: "/images/cold-brew.jpg",
    color: "from-amber-800 to-amber-600",
    intensidad: "fuerte",
    leche: "sin-leche",
    temperatura: "frio",
    estilo: "clasico",
  },
]

export function CafeIdeal() {
  const [paso, setPaso] = useState(0)
  const [respuestas, setRespuestas] = useState<Respuesta[]>([])
  const [resultado, setResultado] = useState<CafeRecomendado | null>(null)

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
    {
      id: "estilo",
      pregunta: "¿Prefieres un perfil clásico o más dulce?",
      opciones: [
        { valor: "clasico", label: "Clásico", icon: "⚫" },
        { valor: "dulce", label: "Dulce", icon: "🍯" },
      ],
    },
  ]

  const handleRespuesta = (preguntaId: string, valor: string) => {
    const nuevaRespuesta: Respuesta = {
      pregunta: preguntaId,
      opcion: valor,
    }

    const nuevasRespuestas = [...respuestas.filter((r) => r.pregunta !== preguntaId), nuevaRespuesta]
    setRespuestas(nuevasRespuestas)

    if (paso < preguntas.length - 1) {
      setTimeout(() => setPaso(paso + 1), 300)
    } else {
      const intensidad = (nuevasRespuestas.find((r) => r.pregunta === "intensidad")?.opcion || "suave") as Intensidad
      const leche = (nuevasRespuestas.find((r) => r.pregunta === "leche")?.opcion || "sin-leche") as Leche
      const temperatura = (nuevasRespuestas.find((r) => r.pregunta === "temperatura")?.opcion || "caliente") as Temperatura
      const estilo = (nuevasRespuestas.find((r) => r.pregunta === "estilo")?.opcion || "clasico") as Estilo

      const matchExacto =
        catalogoCafes.find(
          (cafe) =>
            cafe.intensidad === intensidad &&
            cafe.leche === leche &&
            cafe.temperatura === temperatura &&
            cafe.estilo === estilo,
        ) ||
        catalogoCafes.find(
          (cafe) =>
            cafe.intensidad === intensidad &&
            cafe.leche === leche &&
            cafe.temperatura === temperatura,
        ) ||
        catalogoCafes.find((cafe) => cafe.intensidad === intensidad && cafe.temperatura === temperatura) ||
        catalogoCafes[0]

      setResultado(matchExacto)
      setTimeout(() => setPaso(preguntas.length), 500)
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
          {paso < preguntas.length && (
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
            {paso < preguntas.length ? (
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
                  className={`inline-block bg-gradient-to-r ${resultado.color} text-white px-8 py-3 rounded-full text-2xl md:text-3xl font-bold mb-6 shadow-lg`}
                >
                  {resultado.nombre}
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-6"
                >
                  <Image
                    src={resultado.imagen}
                    alt={resultado.nombre}
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
                  {resultado.descripcion}
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
