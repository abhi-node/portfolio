export interface Project {
  id: number
  title: string
  description: string
  loomVideoId: string
  repoUrl: string
  liveUrl?: string // Made optional
  technologies: string[]
  hue: string
  gradient: string
  border: string
  accent: string
  button: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: "HoloCoach",
    description:
      "An interactive AI-powered chess coach that transforms post-game analysis from a tedious manual process into an instant, conversational learning experience. Automatically syncs chess games, analyzes every move with Stockfish, and provides AI-generated insights to accelerate improvement.",
    loomVideoId: "d813c974593c4fd09b97867c3cedd2e4",
    repoUrl: "https://github.com/abhi-node/holocoach",
    technologies: ["React", "TypeScript", "Electron", "Stockfish", "OpenAI", "Docker", "SQLite"],
    hue: "emerald",
    gradient: "from-emerald-500/20 to-emerald-600/20",
    border: "border-emerald-500/30",
    accent: "text-emerald-400",
    button: "bg-emerald-600 hover:bg-emerald-700",
  },
  {
    id: 2,
    title: "WordWise",
    description:
      "An AI-powered writing companion that helps students craft clear, compelling documents with real-time guidance. Features grammar checking, style assistance, readability metrics, AI feedback generation, and research tools to turn every assignment into a learning opportunity.",
    loomVideoId: "fd7605a5227b4794a77b876a51060d57",
    repoUrl: "https://github.com/abhi-node/wordwise",
    liveUrl: "https://wordwise-orpin.vercel.app/",
    technologies: ["Next.js", "React", "TypeScript", "TailwindCSS", "Firebase", "OpenAI GPT-4", "TipTap"],
    hue: "blue",
    gradient: "from-blue-500/20 to-blue-600/20",
    border: "border-blue-500/30",
    accent: "text-blue-400",
    button: "bg-blue-600 hover:bg-blue-700",
  },
  {
    id: 3,
    title: "ScioScribe",
    description:
      "An open-source AI research partner that acts as your intelligent scribe. Helps structure hypotheses, transcribes unstructured data from voice or images, and automates the generation of analyses and reports. Features multi-agent AI systems, real-time collaboration, and intelligent data cleaning.",
    loomVideoId: "dcb3cda21d6543a799994e5599deb333",
    repoUrl: "https://github.com/ScioScribe/ScioScribe",
    technologies: ["React", "TypeScript", "FastAPI", "LangGraph", "OpenAI GPT-4", "SQLite", "WebSockets"],
    hue: "orange",
    gradient: "from-orange-500/20 to-orange-600/20",
    border: "border-orange-500/30",
    accent: "text-orange-400",
    button: "bg-orange-600 hover:bg-orange-700",
  },
  {
    id: 4,
    title: "Dueled",
    description:
      "A ray-casted engine powered dueling game with medieval classes. Features 1v1 arena combat with custom raycasting engine, real-time multiplayer networking, and unique character classes including Gunslinger, Demolitionist, and Buckshot. Built with modern web technologies for retro-style 3D gameplay.",
    loomVideoId: "c8e7b9b5ceb44b8e90af0cc346ee3a3a",
    repoUrl: "https://github.com/abhi-node/dueled",
    liveUrl: "https://dueled-frontend.onrender.com",
    technologies: ["React", "TypeScript", "Node.js", "WebSockets", "PostgreSQL", "Redis", "Custom Engine"],
    hue: "purple",
    gradient: "from-purple-500/20 to-purple-600/20",
    border: "border-purple-500/30",
    accent: "text-purple-400",
    button: "bg-purple-600 hover:bg-purple-700",
  },
  {
    id: 5,
    title: "Finance Office AI",
    description:
      "An AI-powered LibreOffice fork featuring an intelligent writing assistant for financial documents. Integrates LangGraph multi-agent systems with LibreOffice core to automate financial report generation, document analysis, and content creation through a conversational chat interface within the office suite.",
    loomVideoId: "f549342d2dfb49f0b5de6e94a2ed94bb",
    repoUrl: "https://github.com/abhi-node/finance-office",
    technologies: ["C++", "Python", "LangGraph", "OpenAI", "LibreOffice UNO", "Multi-Agent Systems", "Qt/VCL"],
    hue: "pink",
    gradient: "from-pink-500/20 to-pink-600/20",
    border: "border-pink-500/30",
    accent: "text-pink-400",
    button: "bg-pink-600 hover:bg-pink-700",
  },
]
