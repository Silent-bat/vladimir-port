"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import Link from "next/link"

export function EventsSection() {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="container mx-auto text-center">
        <div
          className={cn(
            "transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-muted-foreground">+</span>
            <span className="text-xs tracking-[0.3em] text-muted-foreground">AVAILABLE FOR HIRE</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-light mb-8 text-foreground">Need a developer?</h2>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 text-sm tracking-wider border border-border px-8 py-4 rounded hover:bg-foreground hover:text-background transition-all duration-300"
          >
            LET'S TALK
            <span className="group-hover:translate-x-1 transition-transform">+</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
