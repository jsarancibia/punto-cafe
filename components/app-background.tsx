import type { ReactNode } from "react"

/**
 * Fondo mínimo: oscuro, sin ruido ni scanlines. Prioriza rendimiento.
 */
export function AppBackground({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-dvh text-foreground">
      <div
        className="pointer-events-none fixed inset-0 -z-20 bg-background"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,oklch(0.55_0.08_200/0.12),transparent_55%)] dark:bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,oklch(0.32_0.12_280/0.35),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_100%_100%,oklch(0.45_0.1_200/0.08),transparent_50%)] dark:bg-[radial-gradient(ellipse_60%_50%_at_100%_100%,oklch(0.4_0.18_200/0.12),transparent_50%)]"
        aria-hidden
      />
      {children}
    </div>
  )
}
