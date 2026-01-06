import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import Image from "next/image"

const experiences = [
  {
    title: "WordPress Developer & Tech Lead",
    company: "Eagle Consulting Group",
    period: "10/2021 - Present",
    location: "Douala, Cameroon",
    achievements: [
      "Overhauled 100+ WordPress websites for clients",
      "Expert in WordPress custom theme development and customization",
      "WooCommerce integration and e-commerce solutions specialist",
      "WordPress security, optimization, and performance tuning",
      "Led development teams as technical lead and project manager",
      "Developed complex WordPress solutions using Symphony, Elastic Search and PHP8",
    ],
  },
  {
    title: "WordPress Developer Intern",
    company: "Globotical IT Consulting",
    period: "10/2022 - 11/2022",
    location: "Douala, Cameroon",
    achievements: [
      "WordPress website development and customization",
      "Collaborated with team members on WordPress projects",
      "Design and implementation of event ticketing website",
      "Advanced WordPress tools and plugin configuration",
    ],
  },
  {
    title: "WordPress Development Intern",
    company: "KELMASS",
    period: "04/2022 - 06/2022",
    location: "Douala, Cameroon",
    achievements: [
      "WordPress theme and plugin development training",
      "Implementation of online payment solution for training company",
      "WordPress e-commerce integration on KELMASS.COM",
    ],
  },
]

const websiteProjects = [
  {
    name: "Delord Cosmetics",
    type: "WORDPRESS + WOOCOMMERCE",
    description: "Custom WordPress e-commerce platform with WooCommerce, full product catalog and advanced shopping features",
    url: "https://delordcosmetics.com/",
    image: "/cosmetics-beauty-ecommerce-website-african-woman-h.jpg",
  },
  {
    name: "NMD ICT Solutions",
    type: "WORDPRESS CORPORATE",
    description: "Custom WordPress theme for corporate ICT solutions, security, and digital transformation services",
    url: "https://ict.nanosatellitemissions.com",
    image: "/ict-technology-corporate-website-blue-theme-digita.jpg",
  },
  {
    name: "Nanosatellite Missions Design",
    type: "WORDPRESS TECH",
    description: "Advanced WordPress website for Cameroon's first space tech company with custom features and integrations",
    url: "https://nanosatellitemissions.com/",
    image: "/space-technology-satellite-company-website-earth-g.jpg",
  },
  {
    name: "Spotless Only Clean",
    type: "WORDPRESS SERVICES",
    description: "WordPress website for professional vehicle cleaning services in France with booking system",
    url: "https://spotlessonlyclean.com/",
    image: "/car-cleaning-service-website-french-professional-b.jpg",
  },
  {
    name: "NextVenture Tech",
    type: "WORDPRESS AGENCY",
    description: "WordPress website for digital transformation agency with custom design and service showcase",
    url: "https://nextventure.tech/",
    image: "/digital-agency-website-tech-startup-modern-design-.jpg",
  },
]

const otherProjects = [
  {
    name: "JFN-HUI University Website",
    type: "WEB",
    description: "Creation of the JFN HUI website visible on jfn-univ.com",
    link: "https://jfn-univ.com",
  },
  {
    name: "Archiving & Notification System",
    type: "APP",
    description: "Implementation of an archiving and notification system for a university case of JFN-HUI",
  },
  {
    name: "Smart Electrical Management",
    type: "IOT",
    description:
      "Implementation of an intelligent electrical current management system in a house by a mobile application",
  },
  {
    name: "Access Control System",
    type: "IOT",
    description: "Implementation of an access control system in a building by facial recognition and RFID card",
  },
]

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-muted-foreground">+</span>
            <span className="text-xs tracking-[0.3em] text-muted-foreground">WORK EXPERIENCE</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-light mb-4">WordPress Portfolio</h1>
          <p className="text-muted-foreground max-w-2xl">
            Explore my WordPress development projects and professional experience - 100+ websites delivered.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-2xl font-light mb-2">WordPress Website Projects</h2>
          <p className="text-muted-foreground text-sm mb-8">Live WordPress websites I have developed and deployed</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {websiteProjects.map((project, index) => (
              <Link
                key={project.name}
                href={project.url}
                target="_blank"
                className="group rounded-xl overflow-hidden bg-card border border-border hover-lift transition-all duration-300"
              >
                <div className="aspect-video relative overflow-hidden bg-muted">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs bg-foreground text-background px-2 py-1 rounded">Visit Site →</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">{project.name}</h3>
                    <span className="text-xs font-mono text-muted-foreground border border-border px-2 py-0.5 rounded">
                      {project.type}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl font-light mb-8">Work Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="p-8 rounded-xl border border-border bg-card hover-lift transition-all duration-300"
              >
                <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-medium mb-2">{exp.title}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <p>{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-foreground">•</span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl font-light mb-8">Other Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl border border-border bg-card hover-lift transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-medium">{project.name}</h3>
                  <span className="text-xs font-mono text-muted-foreground border border-border px-2 py-1 rounded">
                    {project.type}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                {project.link && (
                  <Link
                    href={project.link}
                    target="_blank"
                    className="text-xs tracking-wider text-foreground hover:text-muted-foreground transition-colors flex items-center gap-2"
                  >
                    VIEW PROJECT <span>→</span>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
