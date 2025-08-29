"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRightIcon } from "lucide-react"
import { Mockup, MockupFrame } from "@/components/ui/mockup"
import { Glow } from "@/components/ui/glow"
import Image from "next/image"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

interface HeroAction {
  text: string
  href: string
  icon?: React.ReactNode
  variant?: "default" | "glow" | "ghost"
  className?: string
}

interface HeroProps {
  badge?: {
    text: string
    action: {
      text: string
      href: string
    }
  }
  title: string
  description: string
  actions: HeroAction[]
  image?: {
    light: string
    dark: string
    alt: string
  }
}

export function HeroSection({ badge, title, description, actions, image }: HeroProps) {
  const { resolvedTheme } = useTheme()
  const imageSrc = image && resolvedTheme === "light" ? image.light : image?.dark

  return (
    <section
      className={cn(
        "text-foreground bg-background",
        "pt-2 pb-12 sm:pt-8 sm:pb-24 md:pt-12 md:pb-32 px-4",
        "fade-bottom overflow-hidden pb-0",
      )}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-12 pt-16 sm:gap-24">
        <div className="flex flex-col items-center gap-6 text-center sm:gap-12">
          {/* Badge */}
          {badge && (
            <Badge variant="outline" className="animate-appear gap-2">
              <span className="text-muted-foreground">{badge.text}</span>
              <a href={badge.action.href} className="flex items-center gap-1">
                {badge.action.text}
                <ArrowRightIcon className="h-3 w-3" />
              </a>
            </Badge>
          )}

          {/* Title */}
          <h1 className="relative z-10 inline-block animate-appear bg-gradient-to-r from-foreground/90 to-foreground/90 bg-clip-text text-4xl font-semibold leading-tight text-transparent drop-shadow-2xl sm:text-6xl sm:leading-tight md:text-8xl md:leading-tight">
            {title}
          </h1>

          {/* Description */}
          <p className="text-md relative z-10 max-w-[550px] animate-appear font-medium text-muted-foreground/80 opacity-0 delay-100 sm:text-xl">
            {description}
          </p>

          {/* Actions */}
          <div className="relative z-10 flex animate-appear justify-center gap-4 opacity-0 delay-300">
            {actions.map((action, index) => {
              const isLearnMore = action.text.toLowerCase().includes('learn more');
              return (
                <Button 
                  key={index} 
                  variant={isLearnMore ? 'ghost' : action.variant} 
                  size="lg" 
                  asChild
                  className={cn(
                    isLearnMore ? 'text-foreground hover:bg-transparent hover:underline' : '',
                    action.className
                  )}
                >
                  <a href={action.href} className="flex items-center gap-2">
                    {action.icon}
                    {action.text}
                  </a>
                </Button>
              );
            })}
          </div>

          {/* Spacer to maintain layout */}
          <div className="pt-22" />
        </div>
      </div>
    </section>
  )
}
