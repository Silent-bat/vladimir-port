import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"

const services = [
  {
    icon: "🎯",
    title: "WordPress Development & Customization",
    description:
      "Expert WordPress developer with 100+ sites delivered. Specializing in custom themes, advanced plugins, WooCommerce integration, and complex WordPress solutions.",
    skills: ["WordPress", "Custom Themes", "Plugin Development", "WooCommerce", "ACF", "Gutenberg"],
  },
  {
    icon: "🛒",
    title: "WooCommerce & E-Commerce",
    description: "Building complete e-commerce solutions with WooCommerce, payment gateway integration, and custom shopping experiences.",
    skills: ["WooCommerce", "Payment Gateways", "Product Management", "Shipping Integration"],
  },
  {
    icon: "⚡",
    title: "WordPress Optimization & Security",
    description: "Performance optimization, security hardening, migration services, and ongoing WordPress maintenance.",
    skills: ["Performance Optimization", "Security", "Migration", "Maintenance"],
  },
  {
    icon: "⚙",
    title: "Backend Development",
    description: "Creating robust server-side applications with PHP, Symphony, and Node.js with database integration.",
    skills: ["PHP", "Symphony", "Node.js", "Elastic Search"],
  },
  {
    icon: "⚛",
    title: "Frontend Development",
    description:
      "Building responsive, interactive web applications using React, Next.js, and modern JavaScript frameworks.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    description: "Designing intuitive user interfaces and creating mockups for web and mobile applications.",
    skills: ["Figma", "Mockups", "Prototyping", "User Research"],
  },
]

const tools = ["VS Code", "Git & GitHub", "CMS Builders", "Figma", "Docker", "AWS", "MySQL", "PostgreSQL"]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-muted-foreground">+</span>
            <span className="text-xs tracking-[0.3em] text-muted-foreground">SERVICES</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-light mb-8">WordPress Development Services</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Expert WordPress development and customization with 100+ websites delivered - from concept to deployment
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 rounded-xl border border-border bg-card hover-lift transition-all duration-300"
              >
                <div className="text-3xl mb-6">{service.icon}</div>
                <h3 className="text-xl font-medium mb-4">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-6">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.skills.map((skill, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded border border-border text-muted-foreground">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl font-light mb-8">Tools & Technologies</h2>
          <div className="flex flex-wrap gap-4">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="px-6 py-3 rounded-full border border-border text-sm hover:bg-card transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-light mb-8">Ready to start a project?</h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 text-sm tracking-wider border border-foreground bg-foreground text-background px-8 py-4 rounded hover:bg-transparent hover:text-foreground transition-all duration-300"
          >
            GET IN TOUCH
            <span>→</span>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
