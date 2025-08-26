import { cn } from "@/lib/utils"

interface GlowProps {
  variant?: "top" | "bottom" | "center"
  className?: string
}

export function Glow({ variant = "center", className }: GlowProps) {
  const variantClasses = {
    top: "top-0 -translate-y-1/2",
    bottom: "bottom-0 translate-y-1/2",
    center: "top-1/2 -translate-y-1/2",
  }

  return (
    <div
      className={cn(
        "pointer-events-none absolute left-1/2 -translate-x-1/2",
        "h-[400px] w-[600px] rounded-full",
        "bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20",
        "blur-3xl",
        variantClasses[variant],
        className,
      )}
    />
  )
}
