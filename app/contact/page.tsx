"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    window.location.href = `mailto:vladimirdjambou@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`
  }

  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-muted-foreground">+</span>
            <span className="text-xs tracking-[0.3em] text-muted-foreground">CONTACT</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-light mb-8">Let's Connect</h1>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-light mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div>
                  <p className="text-xs tracking-[0.3em] text-muted-foreground mb-2">EMAIL</p>
                  <a
                    href="mailto:vladimirdjambou@gmail.com"
                    className="text-lg hover:text-muted-foreground transition-colors"
                  >
                    vladimirdjambou@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-xs tracking-[0.3em] text-muted-foreground mb-2">LINKEDIN</p>
                  <a
                    href="https://linkedin.com/in/djambou-vladimir-989a4b200"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg hover:text-muted-foreground transition-colors"
                  >
                    linkedin.com/in/djambou-vladimir
                  </a>
                </div>
                <div>
                  <p className="text-xs tracking-[0.3em] text-muted-foreground mb-2">LOCATION</p>
                  <p className="text-lg">Douala, Cameroon</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-light mb-8">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-xs tracking-[0.3em] text-muted-foreground mb-2 block">NAME</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-card border border-border rounded focus:outline-none focus:border-foreground transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs tracking-[0.3em] text-muted-foreground mb-2 block">EMAIL</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-card border border-border rounded focus:outline-none focus:border-foreground transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs tracking-[0.3em] text-muted-foreground mb-2 block">SUBJECT</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 bg-card border border-border rounded focus:outline-none focus:border-foreground transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs tracking-[0.3em] text-muted-foreground mb-2 block">MESSAGE</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-card border border-border rounded focus:outline-none focus:border-foreground transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-foreground text-background text-sm tracking-wider rounded hover:opacity-90 transition-opacity"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
