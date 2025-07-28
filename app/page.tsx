"use client"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Technologies } from "@/components/technologies"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header />
      <Hero />
      <Technologies />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}