"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github, Play } from "lucide-react"
import Link from "next/link"
import type { Project } from "@/data/projects"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card
      className={`group hover:shadow-2xl hover:shadow-${project.hue}-500/10 transition-all duration-300 overflow-hidden bg-gray-900 border-gray-800 hover:${project.border} relative`}
    >
      {/* Gradient overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10`}
      />

      <div className="flex flex-col">
        {/* Loom Video Section - Now on top with larger resolution */}
        <div className="relative w-full">
          <div className="aspect-video w-full">
            <iframe
              src={`https://www.loom.com/embed/${project.loomVideoId}`}
              frameBorder="0"
              allowFullScreen
              className="w-full h-full"
              title={`${project.title} Demo Video`}
            />
          </div>
          {/* Play button overlay for visual enhancement */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
              <Play className="h-8 w-8 text-white" />
            </div>
          </div>
        </div>

        {/* Content Section - Now below the video */}
        <div className="p-8 relative z-20">
          <div className="mb-6">
            <CardTitle className="text-3xl text-white mb-4">{project.title}</CardTitle>
            <CardDescription className="text-gray-400 text-lg leading-relaxed mb-6">
              {project.description}
            </CardDescription>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="text-sm border-gray-700 text-gray-300 hover:border-gray-600"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <Button
              variant="outline"
              size="lg"
              asChild
              className={`${project.liveUrl ? 'flex-1' : 'w-full'} bg-transparent border-gray-700 hover:bg-white hover:text-black text-white`}
            >
              <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 mr-2" />
                View Code
              </Link>
            </Button>
            {project.liveUrl && (
              <Button size="lg" asChild className={`flex-1 ${project.button} text-white`}>
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-5 w-5 mr-2" />
                  Live Demo
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </Card>
  )
}
