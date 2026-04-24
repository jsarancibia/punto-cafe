/**
 * Imágenes bajo `public/images/` (latte.jpg, etc.). En el repo clon a menudo
 * aún no existen: por eso, por **defecto** usamos un solo `placeholder.svg`
 * (rápido, sin 18 peticiones 404).
 *
 * Cuando copies tus fotos a `public/images/` con los mismos nombres del menú,
 * añade en `.env.local`:
 *   NEXT_PUBLIC_USE_REAL_IMAGES=1
 */

export const PLACEHOLDER_IMAGE = "/placeholder.svg" as const

function useRealImageFiles(): boolean {
  return process.env.NEXT_PUBLIC_USE_REAL_IMAGES === "1"
}

export function resolveMenuImageUrl(
  stored: string | undefined | null
): string {
  if (!stored) return PLACEHOLDER_IMAGE
  if (!useRealImageFiles()) return PLACEHOLDER_IMAGE
  return stored
}

export function resolveBrandImageUrl(absolutePath: string): string {
  if (!useRealImageFiles()) return PLACEHOLDER_IMAGE
  return absolutePath
}
