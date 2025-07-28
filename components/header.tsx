"use client"

import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-800 bg-gray-950/95 backdrop-blur supports-[backdrop-filter]:bg-gray-950/60">
      <div className="w-full max-w-none flex h-16 items-center justify-between px-6 lg:px-8">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
          <span className="text-xl font-bold">Abhi's Portfolio</span>
        </div>
        <nav className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href="#about">About</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="#skills">Skills</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="#projects">Projects</Link>
          </Button>
        </nav>
        <Button variant="outline" size="sm" asChild className="border-gray-700 hover:bg-gray-800 bg-transparent">
          <Link href="#contact">
            <Mail className="h-4 w-4 mr-2" />
            Get in Touch
          </Link>
        </Button>
      </div>
    </header>
  )
}
