import Navbar1 from "@/components/ui/navbar"
import { HeroSection } from "@/components/ui/hero-section"
import { LogoCarousel, allLogos } from "@/components/ui/logo-carousel"
import { FeaturesSection } from "@/components/ui/features-section"
import { Pricing } from "@/components/ui/pricing"
import { Footer } from "@/components/ui/footer"
import ProductShowcaseSection from "@/components/ui/product-showcase-section"
import { TestimonialCarouselDemo } from "@/components/demo/testimonial-carousel-demo"

const demoLogos = [
  { id: 1, name: "Dub", src: "https://www.prismui.tech/logo/dub.svg" },
  { id: 2, name: "Supabase", src: "https://www.prismui.tech/logo/supabase.svg" },
  { id: 3, name: "Vercel", src: "https://www.prismui.tech/logo/vercel.svg" },
  { id: 4, name: "Resend", src: "https://www.prismui.tech/logo/resend.svg" },
  { id: 5, name: "Shadcn", src: "https://www.prismui.tech/logo/shadcn.svg" },
]

export default function Page() {
  return (
    <main className="bg-[#FFFBFA]">
      <Navbar1 />

      <HeroSection
        badge={{
          text: "New in Mainline",
          action: {
            text: "See what's new",
            href: "#",
          },
        }}
        title="Mainline Your Product"
        description="Mainline is the fit-for-purpose tool for planning and building modern software products."
        actions={[
          {
            text: "Get Started",
            href: "#",
            variant: "default",
          },
          {
            text: "Learn More",
            href: "#",
            variant: "glow",
          },
        ]}
        image={{
          light: "/modern-dashboard-light.png",
          dark: "/modern-dashboard-dark.png",
          alt: "Dashboard preview",
        }}
      />
      
      <div className="bg-[#FFFBFA] -mt-12">
        {/* Company Carousel Section */}
        <section className="pt-1 pb-4 px-4 bg-[#FFFBFA] -mt-40">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-2 mb-4">
              <div className="relative inline-block">
                <div className="relative z-10">
                  <h3 
                    className="text-lg sm:text-xl lg:text-2xl font-medium tracking-wide text-foreground/90 
                    animate-fade-in opacity-0 [animation-fill-mode:forwards]"
                    style={{
                      animationDuration: '0.8s',
                      animationDelay: '0.2s',
                      textShadow: '0 1px 2px rgba(0,0,0,0.05)'
                    }}
                  >
                    The best are already here
                  </h3>
                </div>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground/80">join new cult</h2>
            </div>
            <div className="flex justify-center pt-4">
              <LogoCarousel columnCount={3} logos={allLogos} />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <FeaturesSection />

        {/* Divider with Pattern */}
        <div className="relative py-6 overflow-hidden">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-dashed border-gray-200"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="px-4 bg-[#FFFBFA] text-sm text-gray-500">Explore More</span>
          </div>
        </div>
        
        {/* Combined Featured Section */}
        <ProductShowcaseSection />
        
        {/* Testimonials Section */}
        <TestimonialCarouselDemo />
        
        {/* Pricing Section */}
        <div className="-mt-16">
          <Pricing />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </main>
  )
}