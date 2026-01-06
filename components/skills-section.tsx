"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import Image from "next/image"

const skills = [
  { id: "01", name: "WORDPRESS", logo: "/wordpress-logo.png", level: 95 },
  { id: "02", name: "PHP", logo: "/php-logo.png", level: 92 },
  { id: "03", name: "WOOCOMMERCE", logo: "/woocommerce-logo.png", level: 90 },
  { id: "04", name: "REACT/NEXT.JS", icon: "⚛", level: 85 },
]

export function SkillsSection() {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={skill.id}
              className={cn(
                "group relative p-8 rounded-xl border border-border bg-card backdrop-blur-sm transition-all duration-500 hover-lift cursor-pointer",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                  {skill.logo ? (
                    <Image
                      src={skill.logo}
                      alt={skill.name}
                      width={48}
                      height={48}
                      className="object-contain opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                    />
                  ) : (
                    <span className="text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors">
                      {skill.icon}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors mb-1">
                  {skill.name}
                </p>
                <p className="text-xs text-muted-foreground/60">{skill.id}</p>
                {/* Progress bar */}
                <div className="mt-4 h-1 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-foreground transition-all duration-1000"
                    style={{ width: isInView ? `${skill.level}%` : "0%" }}
                  />
                </div>
              </div>

              <div className="absolute inset-0 rounded-xl bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
