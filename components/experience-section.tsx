"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

export function ExperienceSection() {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left - Image grid */}
          <div
            className={cn(
              "relative transition-all duration-700",
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12",
            )}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden bg-gradient-to-br from-muted to-muted-foreground/30 aspect-[3/4] hover-lift">
                <div className="w-full h-full flex items-center justify-center p-8">
                  <div className="grid grid-cols-3 gap-2 w-full">
                    {[...Array(9)].map((_, i) => (
                      <div
                        key={i}
                        className="aspect-square rounded-full bg-gradient-to-br from-foreground/20 to-transparent animate-pulse"
                        style={{ animationDelay: `${i * 100}ms` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden bg-gradient-to-br from-muted-foreground/20 to-muted aspect-[3/4] hover-lift flex items-center justify-center">
                <div className="text-center px-4">
                  <p className="text-4xl font-light text-foreground/30 mb-2">3+</p>
                  <p className="text-xs text-foreground/40">YEARS EXP</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div
            className={cn(
              "bg-card border border-border rounded-xl p-8 md:p-12 transition-all duration-700",
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12",
            )}
            style={{ transitionDelay: "200ms" }}
          >
            {/* Logo */}
            <div className="w-12 h-12 mb-8 flex items-center justify-center border border-border rounded">
              <span className="text-sm text-foreground font-bold">ECG</span>
            </div>

            <h2 className="text-2xl md:text-3xl font-light mb-2">
              <span className="text-muted-foreground">EAGLE</span>
              <br />
              <span className="text-foreground">CONSULTING</span>
              <br />
              <span className="text-muted-foreground">GROUP</span>
            </h2>

            <p className="text-sm text-muted-foreground mt-6 mb-4">WordPress Developer & Tech Lead since 2021</p>

            <ul className="text-xs text-muted-foreground space-y-2">
              <li>• Overhauled 100+ WordPress websites</li>
              <li>• Expert in WordPress custom theme development</li>
              <li>• WooCommerce integration specialist</li>
              <li>• WordPress security & optimization expert</li>
              <li>• Led development teams as technical lead</li>
            </ul>

            <p className="text-xs tracking-[0.3em] text-muted-foreground mt-8">DOUALA, CAMEROON</p>
          </div>
        </div>
      </div>
    </section>
  )
}
