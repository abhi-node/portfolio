import { Github } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="container max-w-7xl mx-auto px-4 text-center text-gray-400">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            <Link 
              href="https://github.com/abhi-node" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
              View on GitHub
            </Link>
          </div>
          <p>© 2024 Abhijith Balagurusamy. Built with Next.js and deployed on Vercel.</p>
        </div>
      </div>
    </footer>
  )
}
