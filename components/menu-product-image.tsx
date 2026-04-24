"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { PLACEHOLDER_IMAGE, resolveMenuImageUrl } from "@/lib/resolve-assets"
import { cn } from "@/lib/utils"

type Props = {
  /** Ruta en menú, p. ej. `/images/latte.jpg` */
  storagePath: string
  alt: string
  sizes: string
  className?: string
  /** Solo hero / primera vista */
  priority?: boolean
}

/**
 * Foto de producto: aplica `resolve-assets` y fallback si 404 o placeholder forzado.
 */
export function MenuProductImage({ storagePath, alt, sizes, className, priority }: Props) {
  const [src, setSrc] = useState(() => resolveMenuImageUrl(storagePath))

  useEffect(() => {
    setSrc(resolveMenuImageUrl(storagePath))
  }, [storagePath])

  return (
    <Image
      key={src}
      src={src}
      alt={alt}
      fill
      className={cn("object-cover", className)}
      sizes={sizes}
      priority={priority}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      onError={() => setSrc(PLACEHOLDER_IMAGE)}
    />
  )
}
