"use client"

import Link from "next/link"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

export function Footer() {
  const { ref, isInView } = useInView()

  const socialLinks = [
    { id: "li", label: "in", href: "https://linkedin.com/in/djambou-vladimir-989a4b200" },
    { id: "gh", label: "gh", href: "https://github.com" },
    { id: "tw", label: "tw", href: "https://twitter.com" },
  ]

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ]

  return (
    <footer ref={ref} className="py-12 px-6 border-t border-border">
      <div className="container mx-auto">
        <div
          className={cn(
            "flex flex-col md:flex-row items-center justify-between gap-8 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
          )}
        >
          {/* Social links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                target="_blank"
                className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-xs text-muted-foreground hover:text-foreground hover:border-foreground transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Logo */}
          <div className="w-10 h-10 flex items-center justify-center border border-foreground rounded-lg">
            <span className="text-sm font-bold">VD</span>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom text */}
        <div
          className={cn(
            "flex flex-col md:flex-row items-center justify-center gap-4 mt-12 text-xs text-muted-foreground/70 transition-all duration-700",
            isInView ? "opacity-100" : "opacity-0",
          )}
          style={{ transitionDelay: "200ms" }}
        >
          <span>VLADIMIR DJAMBOU</span>
          <span className="hidden md:inline">•</span>
          <span>vladimirdjambou@gmail.com</span>
          <span className="hidden md:inline">•</span>
          <span>© 2025 ALL RIGHTS RESERVED</span>
        </div>
      </div>
    </footer>
  )
}
