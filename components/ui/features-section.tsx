import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Calendar, type LucideIcon, Workflow } from "lucide-react"
import type { ReactNode } from "react"

export function FeaturesSection() {
  return (
    <section className="bg-[#FFFBFA] py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Built for Modern Development Teams</h2>
          <p className="mt-3 text-lg text-muted-foreground max-w-3xl mx-auto">
            Accelerate your development cycle with tools designed for speed, collaboration, and reliability
          </p>
        </div>

        <div className="mx-auto grid gap-4 lg:grid-cols-2">
          <FeatureCard>
            <CardHeader className="pb-3">
              <CardHeading
                icon={Workflow}
                title="Intelligent Workflow Automation"
                description="Automate repetitive tasks and streamline your development pipeline with smart workflows that adapt to your team's needs."
              />
            </CardHeader>

            <CardContent>
              <div className="relative mb-6 sm:mb-0">
                <div className="absolute -inset-6 [background:radial-gradient(50%_50%_at_75%_50%,transparent,hsl(var(--background))_100%)]"></div>
                <div className="aspect-[76/59] border">
                  {/* Force light theme image only */}
                  <img
                    src="https://tailark.com/_next/image?url=%2Fpayments-light.png&w=3840&q=75"
                    className="shadow w-full h-full object-cover"
                    alt="workflow dashboard illustration"
                    width={1207}
                    height={929}
                  />
                </div>
              </div>
            </CardContent>
          </FeatureCard>

          <FeatureCard>
            <CardHeader className="pb-3">
              <CardHeading
                icon={Calendar}
                title="Predictive Project Planning"
                description="Leverage AI-powered insights to forecast project timelines and resource allocation with 95% accuracy."
              />
            </CardHeader>

            <CardContent>
              <div className="relative mb-6 sm:mb-0">
                <div className="absolute -inset-6 [background:radial-gradient(50%_50%_at_75%_50%,transparent,hsl(var(--background))_100%)]"></div>
                <div className="aspect-[76/59] border">
                  {/* Force light theme image only */}
                  <img
                    src="https://tailark.com/_next/image?url=%2Forigin-cal.png&w=3840&q=75"
                    className="shadow w-full h-full object-cover"
                    alt="project timeline illustration"
                    width={1207}
                    height={929}
                  />
                </div>
              </div>
            </CardContent>
          </FeatureCard>

          <FeatureCard className="p-6 lg:col-span-2">
            <div className="text-center space-y-4">
              <p className="text-2xl font-semibold text-foreground">
                Trusted by engineering teams at scale
              </p>
              <p className="text-muted-foreground">
                Join thousands of developers who ship better code, faster
              </p>
            </div>

            <div className="flex justify-center gap-6 overflow-hidden">
              <CircularUI label="Planning" circles={[{ pattern: "border" }, { pattern: "border" }]} />

              <CircularUI label="Development" circles={[{ pattern: "none" }, { pattern: "primary" }]} />

              <CircularUI label="Testing" circles={[{ pattern: "blue" }, { pattern: "none" }]} />

              <CircularUI
                label="Deployment"
                circles={[{ pattern: "primary" }, { pattern: "none" }]}
                className="hidden sm:block"
              />
            </div>
          </FeatureCard>
        </div>
      </div>
    </section>
  )
}

interface FeatureCardProps {
  children: ReactNode
  className?: string
}

function FeatureCard({ children, className }: FeatureCardProps) {
  return (
    <Card className={cn("relative overflow-hidden bg-white/70 backdrop-blur-sm border-amber-100 shadow-sm hover:shadow-md transition-shadow", className)}>
      <CardDecorator />
      {children}
    </Card>
  )
}

const CardDecorator = () => (
  <>
    <span className="border-primary absolute -left-px -top-px block size-2 border-l-2 border-t-2"></span>
    <span className="border-primary absolute -right-px -top-px block size-2 border-r-2 border-t-2"></span>
    <span className="border-primary absolute -bottom-px -left-px block size-2 border-b-2 border-l-2"></span>
    <span className="border-primary absolute -bottom-px -right-px block size-2 border-b-2 border-r-2"></span>
  </>
)

interface CardHeadingProps {
  icon: LucideIcon
  title: string
  description: string
}

function CardHeading({ icon: Icon, title, description }: CardHeadingProps) {
  return (
    <div className="flex gap-4">
      <div className="mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-lg bg-muted text-muted-foreground">
        <Icon className="h-5 w-5" />
      </div>
      <div className="text-left">
        <h3 className="text-lg font-semibold leading-6 text-foreground">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}

interface CircleConfig {
  pattern: "none" | "border" | "primary" | "blue"
}

interface CircularUIProps {
  label: string
  circles: CircleConfig[]
  className?: string
}

const CircularUI = ({ label, circles, className }: CircularUIProps) => (
  <div className={className}>
    <div className="bg-gradient-to-b from-border size-fit rounded-2xl to-transparent p-px">
      <div className="bg-gradient-to-b from-background to-muted/25 relative flex aspect-square w-fit items-center -space-x-4 rounded-[15px] p-4">
        {circles.map((circle, i) => (
          <div
            key={i}
            className={cn("size-7 rounded-full border sm:size-8", {
              "border-primary": circle.pattern === "none",
              "border-primary bg-[repeating-linear-gradient(-45deg,hsl(var(--border)),hsl(var(--border))_1px,transparent_1px,transparent_4px)]":
                circle.pattern === "border",
              "border-primary bg-background bg-[repeating-linear-gradient(-45deg,hsl(var(--primary)),hsl(var(--primary))_1px,transparent_1px,transparent_4px)]":
                circle.pattern === "primary",
              "bg-background z-1 border-blue-500 bg-[repeating-linear-gradient(-45deg,theme(colors.blue.500),theme(colors.blue.500)_1px,transparent_1px,transparent_4px)]":
                circle.pattern === "blue",
            })}
          ></div>
        ))}
      </div>
    </div>
    <span className="text-muted-foreground mt-1.5 block text-center text-sm">{label}</span>
  </div>
)
