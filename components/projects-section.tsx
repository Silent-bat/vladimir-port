"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const projects = [
  { id: "01", name: "JFN-HUI WEBSITE", label: "WEB", description: "University website development" },
  { id: "02", name: "ARCHIVING SYSTEM", label: "APP", description: "Notification system for university" },
  { id: "03", name: "ACCESS CONTROL", label: "IOT", description: "Facial recognition & RFID system" },
]

export function ProjectsSection() {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={cn(
                "group relative transition-all duration-700",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="rounded-xl overflow-hidden bg-gradient-to-br from-muted to-muted-foreground/30 aspect-square mb-4 hover-lift relative">
                {/* Abstract design */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className={cn(
                      "w-32 h-32 rounded-full bg-gradient-to-br from-foreground/15 to-transparent",
                      index === 0 && "animate-morph",
                      index === 1 && "animate-float",
                      index === 2 && "animate-pulse",
                    )}
                  />
                </div>

                {/* Label */}
                <div className="absolute top-4 right-4 text-sm text-foreground/70 font-mono">{project.label}</div>
              </div>

              <button className="text-xs tracking-wider text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                {project.name}
                <span>+</span>
              </button>
              <p className="text-xs text-muted-foreground/60 mt-1">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
