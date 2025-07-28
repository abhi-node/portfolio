"use client"

import { Button } from "@/components/ui/button"
import { Github, Mail, Linkedin } from "lucide-react"
import Link from "next/link"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="container max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          I'm always interested in new opportunities and exciting projects. Feel free to reach out if you'd like to
          collaborate!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            asChild
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
          >
            <Link href="mailto:vbalagurusamys@gmail.com">
              <Mail className="h-5 w-5 mr-2" />
              Send Email
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="border-gray-700 hover:bg-gray-800 bg-transparent">
            <Link href="https://github.com/abhi-node" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
              View GitHub
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild className="border-gray-700 hover:bg-gray-800 bg-transparent">
            <Link href="https://www.linkedin.com/in/abhijith-balagurusamy-46ab47248/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 mr-2" />
              Connect on LinkedIn
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
