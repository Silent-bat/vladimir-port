"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const clients = [
  { id: "01", name: "STUDIO 74", icon: "S74" },
  { id: "02", name: "GLOSTER", icon: "GL" },
  { id: "03", name: "LINEA VOL.1", icon: "LN", featured: true },
  { id: "04", name: "CUBE 3.0", icon: "CB" },
]

export function ClientsSection() {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {clients.map((client, index) => (
            <div
              key={client.id}
              className={cn(
                "group relative p-8 rounded-xl border border-border bg-card backdrop-blur-sm transition-all duration-500 hover-lift cursor-pointer",
                client.featured && "md:row-span-2",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {client.featured ? (
                <div className="h-full flex flex-col">
                  <div className="flex-1 flex items-center justify-center mb-4">
                    <div className="w-full aspect-square rounded-lg bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center overflow-hidden">
                      <div className="w-3/4 h-3/4 bg-gradient-to-br from-black/10 to-transparent rounded-full animate-morph" />
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-foreground mb-1">{client.name}</p>
                    <p className="text-xs text-muted-foreground">{client.id}</p>
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors">
                      {client.icon}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors mb-1">
                    {client.name}
                  </p>
                  <p className="text-xs text-muted-foreground/60">{client.id}</p>
                </div>
              )}

              <div className="absolute inset-0 rounded-xl bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
