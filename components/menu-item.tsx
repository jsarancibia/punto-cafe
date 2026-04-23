"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ParallaxTiltImage } from "@/components/parallax-tilt-image"

interface MenuItemProps {
  name: string
  price: string
  image: string
  description?: string
}

export function MenuItem({ name, price, image, description }: MenuItemProps) {
  return (
    <motion.div
      className="group futuristic-glass rounded-2xl overflow-hidden shadow-md ring-1 ring-border/50 hover:ring-primary/30 hover:shadow-2xl transition-all cursor-pointer"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="aspect-[4/3] relative overflow-hidden">
        <ParallaxTiltImage
          containerClassName="h-full w-full"
          tiltMax={7}
          kenBurns={false}
        >
          <div className="relative h-full w-full">
            <Image
              src={image || "/placeholder.svg"}
              alt={name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute top-4 right-4 z-10 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
              {price}
            </div>
          </div>
        </ParallaxTiltImage>
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
