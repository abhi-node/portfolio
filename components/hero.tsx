"use client"

import { Badge } from "@/components/ui/badge"
import { Github, MapPin, Linkedin } from "lucide-react"
import Image from "next/image"

const skills = ["Python", "JavaScript", "React", "Node.js", "Machine Learning", "AWS", "C/C++", "Java"]

export function Hero() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="relative mb-6 inline-block">
            <Image
              src="/abhi.png?height=150&width=150"
              alt="Profile"
              width={150}
              height={150}
              className="rounded-full mx-auto border-4 border-purple-500/30"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Abhi
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
            Computer Engineering student at University of Toronto with expertise in data science, machine learning, and full-stack development. 
            Passionate about building intelligent systems and autonomous systems solutions.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-400 mb-8">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              Boston, MA
            </div>
            <div className="flex items-center gap-1">
              <Github className="h-4 w-4" />
              @abhi-node
            </div>
            <div className="flex items-center gap-1">
              <Linkedin className="h-4 w-4" />
              <a href="https://www.linkedin.com/in/abhijith-balagurusamy-46ab47248/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {skills.map((tech) => (
              <Badge key={tech} variant="secondary" className="bg-gray-800 text-gray-200 hover:bg-gray-700">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
