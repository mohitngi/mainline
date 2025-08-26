import type React from "react"
import { cn } from "@/lib/utils"

interface MockupProps {
  children: React.ReactNode
  type?: "responsive" | "mobile" | "desktop"
  className?: string
}

export function Mockup({ children, type = "responsive", className }: MockupProps) {
  const typeClasses = {
    responsive: "rounded-md border border-border/20 shadow-lg",
    mobile: "rounded-[48px] max-w-[350px] border border-border/20 shadow-lg",
    desktop: "rounded-lg border border-border/20 shadow-xl",
  }

  return 
}

interface MockupFrameProps {
  children: React.ReactNode
  size?: "small" | "medium" | "large"
  className?: string
}

export function MockupFrame({ children, size = "medium", className }: MockupFrameProps) {
  const sizeClasses = {
    small: "max-w-2xl",
    medium: "max-w-4xl",
    large: "max-w-6xl",
  }

  return <div className={cn("mx-auto p-4 bg-accent/5 rounded-2xl", sizeClasses[size], className)}>{children}</div>
}
