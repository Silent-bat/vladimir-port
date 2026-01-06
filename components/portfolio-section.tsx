"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"
import { motion, useScroll, useTransform, MotionValue } from "framer-motion"
import { useRef } from "react"

function ParallaxImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])

  return (
    <div ref={ref} className="relative w-full h-full overflow-hidden">
      <motion.div style={{ y }} className="relative w-full h-[120%] -top-[10%]">
        <Image src={src || "/placeholder.svg"} alt={alt} fill className={className} />
      </motion.div>
    </div>
  )
}

const projects = [
  {
    name: "Delord Cosmetics",
    type: "WORDPRESS + WOOCOMMERCE",
    description: "Custom WordPress e-commerce platform with WooCommerce",
    image: "/images/delord-screenshot.png",
    url: "https://delordcosmetics.com/",
    featured: true,
  },
  {
    name: "NMD ICT Solutions",
    type: "WORDPRESS CORPORATE",
    description: "Custom WordPress theme for corporate website",
    image: "/images/ict-screenshot.png",
    url: "https://ict.nanosatellitemissions.com",
  },
  {
    name: "Nanosatellite Missions",
    type: "WORDPRESS TECH",
    description: "Advanced WordPress site with custom features",
    image: "/images/nanosat-screenshot.png",
    url: "https://nanosatellitemissions.com/",
  },
]

export function PortfolioSection() {
  const { ref, isInView } = useInView()

  return (
    <section ref={ref} id="work" className="py-24 px-6">
      <div className="container mx-auto">
        {/* Section header */}
        <div
          className={cn(
            "flex items-center gap-4 mb-12 transition-all duration-700",
            isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8",
          )}
        >
          <span className="text-muted-foreground">+</span>
          <span className="text-xs tracking-[0.3em] text-muted-foreground">WORDPRESS PORTFOLIO</span>
        </div>

        {/* Featured work grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {/* Main featured project */}
          <div
            className={cn(
              "md:col-span-2 group relative rounded-xl overflow-hidden bg-card border border-border hover-lift transition-all duration-700",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
            )}
          >
            <Link href={projects[0].url} target="_blank" className="block">
              <div className="aspect-video relative overflow-hidden bg-muted">
                <ParallaxImage
                  src={projects[0].image}
                  alt={projects[0].name}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs font-mono text-muted-foreground border border-border px-2 py-1 rounded bg-background/50 backdrop-blur-sm">
                    {projects[0].type}
                  </span>
                  <h3 className="text-xl font-medium mt-2">{projects[0].name}</h3>
                  <p className="text-sm text-muted-foreground">{projects[0].description}</p>
                </div>
              </div>
            </Link>
          </div>

          {/* Side projects */}
          <div className="space-y-6">
            {projects.slice(1, 3).map((project, index) => (
              <div
                key={project.name}
                className={cn(
                  "group relative rounded-xl overflow-hidden bg-card border border-border hover-lift transition-all duration-700",
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12",
                )}
                style={{ transitionDelay: `${(index + 1) * 100}ms` }}
              >
                <Link href={project.url} target="_blank" className="block">
                  <div className="aspect-square relative overflow-hidden bg-muted">
                    <ParallaxImage
                      src={project.image}
                      alt={project.name}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="text-xs font-mono text-muted-foreground">{project.type}</span>
                      <h4 className="text-sm font-medium truncate">{project.name}</h4>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Text content */}
        <div
          className={cn(
            "max-w-2xl transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
          style={{ transitionDelay: "300ms" }}
        >
          <p className="text-xs tracking-[0.3em] text-muted-foreground mb-4">WORDPRESS EXPERT</p>
          <h2 className="text-3xl md:text-4xl font-light mb-6 leading-tight text-foreground">
            100+ WordPress Sites Delivered
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-8">
            Expert WordPress developer specializing in custom theme development, WooCommerce integration, and complex WordPress solutions.
            With 100+ websites successfully delivered, I bring extensive experience in building high-performance,
            secure, and scalable WordPress applications tailored to your business needs.
          </p>
          <Link
            href="/work"
            className="group flex items-center gap-3 text-sm tracking-wider border border-border px-6 py-3 rounded-lg hover:bg-foreground hover:text-background transition-all duration-300 w-fit"
          >
            VIEW WORDPRESS PORTFOLIO
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
