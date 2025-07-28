"use client";

import { technologies } from "@/data/technologies";
import { Code2, Cloud, Brain, Database, Terminal, Cpu } from "lucide-react";

const iconMap: { [key: string]: any } = {
  "Programming Language": Code2,
  "Frontend Framework": Code2,
  "Backend Framework": Database,
  "Cloud Platform": Cloud,
  "AI/ML": Brain,
  "Domain Expertise": Brain,
  "Development Tools": Terminal,
  "Operating System": Terminal,
  "Robotics": Cpu,
};

export function Technologies() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-4">
            Technologies & Skills
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and the tools I use to build innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {technologies.map((tech, index) => {
            const Icon = iconMap[tech.category] || Code2;
            
            return (
              <div
                key={tech.name}
                className="relative group animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className={`
                  relative overflow-hidden rounded-xl
                  bg-gradient-to-br ${tech.bgGradient}
                  border ${tech.borderColor}
                  backdrop-blur-sm
                  p-6
                  h-full
                  transition-all duration-300
                  hover:shadow-2xl
                  hover:shadow-${tech.color}-500/20
                  hover:border-${tech.color}-500/70
                  hover:scale-105
                `}>
                  {/* Glow effect on hover */}
                  <div className={`
                    absolute inset-0 opacity-0 group-hover:opacity-100
                    bg-gradient-to-br ${tech.bgGradient}
                    blur-xl transition-opacity duration-500
                  `} />
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`
                        p-3 rounded-lg
                        bg-${tech.color}-500/20
                        border border-${tech.color}-500/30
                        group-hover:bg-${tech.color}-500/30
                        group-hover:border-${tech.color}-500/50
                        transition-all duration-300
                      `}>
                        <Icon className={`w-6 h-6 text-${tech.color}-400`} />
                      </div>
                    </div>
                    
                    <h3 className={`
                      text-xl font-semibold mb-2
                      text-${tech.color}-300
                      group-hover:text-${tech.color}-200
                      transition-colors duration-300
                    `}>
                      {tech.name}
                    </h3>
                    
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">
                      {tech.category}
                    </p>
                    
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {tech.description}
                    </p>
                  </div>
                  
                  {/* Decorative corner gradient */}
                  <div className={`
                    absolute -bottom-8 -right-8 w-24 h-24
                    bg-gradient-to-br from-${tech.color}-500/20 to-transparent
                    rounded-full blur-2xl
                    group-hover:w-32 group-hover:h-32
                    transition-all duration-500
                  `} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}