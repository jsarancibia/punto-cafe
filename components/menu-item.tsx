"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface MenuItemProps {
  name: string
  price: string
  image: string
  description?: string
}

export function MenuItem({ name, price, image, description }: MenuItemProps) {
  return (
    <motion.div
      className="group bg-card/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all cursor-pointer border border-border/50 hover:border-primary/50"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="aspect-[4/3] relative overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
          {price}
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{name}</h3>
        {description && (
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        )}
      </div>
    </motion.div>
  )
}
