"use client"

import { projects } from "@/data/projects"
import { ProjectCard } from "./project-card"

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-900/50">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A collection of projects that showcase my skills in web development, from full-stack applications to
            creative experiments. Watch the demos below!
          </p>
        </div>

        <div className="space-y-20">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
