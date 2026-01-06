"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const education = [
  {
    degree: "Blockchain Studies (BSTUD)",
    school: "Althash University",
    period: "02/2023 - Present",
    location: "Chicago, Illinois",
  },
  {
    degree: "Bachelor in Internet Network Developer Designer",
    school: "JFN-HUI",
    period: "10/2022 - 07/2023",
    location: "Douala, Cameroon",
  },
  {
    degree: "DUT in Computer Engineering - Software Engineering",
    school: "JFN-HUI",
    period: "10/2021 - 07/2022",
    location: "Douala, Cameroon",
  },
]

const certificates = [
  { name: "AWS Cloud Practitioner", year: "2023" },
  { name: "Blockchain Professional", year: "2024" },
  { name: "Full Stack Developer (Qwasar)", year: "2021" },
  { name: "FUEL AFRICA x2", year: "2022 & 2023" },
]

const assets = [
  "Teamwork",
  "Open-minded",
  "Autonomy",
  "Leadership",
  "Analytical skills",
  "Versatility",
  "Rigour",
  "Quality control",
  "Project management",
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden selection:bg-foreground selection:text-background">
      <Header />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(0,0,0,0.05),transparent)] dark:bg-[radial-gradient(circle_at_50%_10%,rgba(255,255,255,0.05),transparent)] pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-4 mb-8">
              <span className="text-muted-foreground">+</span>
              <span className="text-xs tracking-[0.3em] text-muted-foreground">ABOUT ME</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-light mb-8 tracking-tight">
              Vladimir <span className="gradient-text font-normal">Djambou</span>
            </h1>
            <div className="glass p-8 rounded-2xl max-w-3xl backdrop-blur-md border border-border/50 bg-background/50">
              <p className="text-xl text-muted-foreground leading-relaxed">
                Expert WordPress Developer with 100+ websites delivered. Holder of a degree in software engineering
                with specialized expertise in WordPress development, custom themes, WooCommerce solutions, and complex WordPress integrations.
                My passion for WordPress and my know-how in web development are my main assets.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-light mb-12 flex items-center gap-4"
          >
            <span className="w-12 h-[1px] bg-gradient-to-r from-foreground to-transparent" />
            Education
          </motion.h2>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-6"
          >
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={item}
                className="group p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:bg-card transition-all duration-500 hover:shadow-glow hover:border-border"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <h3 className="text-xl font-medium text-foreground group-hover:gradient-text transition-all">
                    {edu.degree}
                  </h3>
                  <span className="text-xs font-mono px-3 py-1 rounded-full border border-border bg-muted/50 text-muted-foreground">
                    {edu.period}
                  </span>
                </div>
                <p className="text-lg text-muted-foreground mb-2">{edu.school}</p>
                <p className="text-sm text-muted-foreground/60 flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-foreground/50" />
                  {edu.location}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Certificates */}
      <section className="py-20 px-6 bg-foreground/[0.02]">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-light mb-12 flex items-center gap-4"
          >
            <span className="w-12 h-[1px] bg-gradient-to-r from-foreground to-transparent" />
            Certificates
          </motion.h2>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                variants={item}
                className="p-6 rounded-xl border border-border/50 bg-card/50 hover:bg-card hover:shadow-glow transition-all duration-500 text-center group"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-foreground/5 to-transparent flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <span className="text-xl">📜</span>
                </div>
                <p className="font-medium mb-2 group-hover:text-foreground transition-colors">{cert.name}</p>
                <p className="text-xs text-muted-foreground font-mono">{cert.year}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills & Languages */}
      <section className="py-20 px-6">
        <div className="container mx-auto grid md:grid-cols-2 gap-16">
          {/* Soft Skills */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-light mb-12 flex items-center gap-4"
            >
              <span className="w-12 h-[1px] bg-gradient-to-r from-foreground to-transparent" />
              Soft Skills
            </motion.h2>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {assets.map((asset, index) => (
                <motion.span
                  key={index}
                  variants={item}
                  className="px-4 py-2 rounded-full border border-border/50 bg-card/50 text-sm hover:bg-card hover:border-border transition-all duration-300 cursor-default hover:shadow-glow-gold"
                >
                  {asset}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* Languages */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-light mb-12 flex items-center gap-4"
            >
              <span className="w-12 h-[1px] bg-gradient-to-r from-foreground to-transparent" />
              Languages
            </motion.h2>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                { lang: "French", level: "Native / Full Professional" },
                { lang: "English", level: "Full Professional Proficiency" },
              ].map((lang, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm flex items-center justify-between group hover:bg-card transition-all duration-300"
                >
                  <div>
                    <h3 className="font-medium mb-1">{lang.lang}</h3>
                    <p className="text-sm text-muted-foreground">{lang.level}</p>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
