"use client"

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion"
import { useRef, type MouseEvent, type ReactNode, type CSSProperties } from "react"
import { cn } from "@/lib/utils"

type ParallaxTiltImageProps = {
  children: ReactNode
  className?: string
  /** Contenedor con perspectiva (tamaño del área interactiva) */
  containerClassName?: string
  tiltMax?: number
  kenBurns?: boolean
  style?: CSSProperties
}

/**
 * Inclinación 3D suave al mover el cursor + opcional “respirado” (Ken Burns) en la imagen.
 * Respeta prefers-reduced-motion.
 */
export function ParallaxTiltImage({
  children,
  className,
  containerClassName,
  tiltMax = 10,
  kenBurns = true,
  style,
}: ParallaxTiltImageProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()

  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const spring = { stiffness: 320, damping: 28, mass: 0.4 }
  const rotateX = useSpring(
    useTransform(my, [-0.5, 0.5], [tiltMax, -tiltMax]),
    spring
  )
  const rotateY = useSpring(
    useTransform(mx, [-0.5, 0.5], [-tiltMax, tiltMax]),
    spring
  )

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduce || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleLeave = () => {
    mx.set(0)
    my.set(0)
  }

  if (reduce) {
    return (
      <div className={cn("relative", containerClassName)} style={style}>
        {kenBurns ? (
          <div className="relative h-full w-full overflow-hidden rounded-[inherit]">
            {children}
          </div>
        ) : (
          children
        )}
      </div>
    )
  }

  return (
    <div
      ref={ref}
      className={cn("touch-manipulation", containerClassName)}
      style={{ ...style, perspective: 1200 }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <motion.div
        className={cn("relative h-full w-full will-change-transform", className)}
        style={{
          rotateX: rotateX,
          rotateY: rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        {kenBurns ? (
          <motion.div
            className="relative h-full w-full overflow-hidden rounded-[inherit]"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{
              duration: 14,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            {children}
          </motion.div>
        ) : (
          children
        )}
      </motion.div>
    </div>
  )
}
