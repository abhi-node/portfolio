export interface Technology {
  name: string;
  category: string;
  description: string;
  icon?: string;
  color: string; // Tailwind color class
  bgGradient: string; // Gradient for card background
  borderColor: string; // Border color for card
}

export const technologies: Technology[] = [
  {
    name: "Python",
    category: "Programming Language",
    description: "Expertise in data science, machine learning, and backend development. Proficient with pandas, numpy, matplotlib, and scikit-learn for data analysis and ML models.",
    color: "blue",
    bgGradient: "from-blue-900/20 to-blue-800/20",
    borderColor: "border-blue-700/50"
  },
  {
    name: "JavaScript/TypeScript",
    category: "Programming Language",
    description: "Full-stack development with React, Node.js, and modern frameworks. Building responsive web applications and RESTful APIs.",
    color: "yellow",
    bgGradient: "from-yellow-900/20 to-amber-800/20",
    borderColor: "border-yellow-700/50"
  },
  {
    name: "React & Next.js",
    category: "Frontend Framework",
    description: "Building modern, performant web applications with React and Next.js. Creating modular components and managing complex state.",
    color: "cyan",
    bgGradient: "from-cyan-900/20 to-blue-800/20",
    borderColor: "border-cyan-700/50"
  },
  {
    name: "Machine Learning",
    category: "AI/ML",
    description: "Applied ML experience with PyTorch, TensorFlow, and scikit-learn. Developed deepfake detection models and worked on computer vision projects.",
    color: "purple",
    bgGradient: "from-purple-900/20 to-pink-800/20",
    borderColor: "border-purple-700/50"
  },
  {
    name: "AWS Cloud Services",
    category: "Cloud Platform",
    description: "Deployed applications on AWS using Lambda, DynamoDB, CloudFront, and S3. Experience with serverless architectures and cloud-native development.",
    color: "orange",
    bgGradient: "from-orange-900/20 to-amber-800/20",
    borderColor: "border-orange-700/50"
  },
  {
    name: "C/C++",
    category: "Programming Language",
    description: "Systems programming and embedded development. Created chess engine with advanced algorithms and worked on robotics control systems.",
    color: "slate",
    bgGradient: "from-slate-800/20 to-gray-700/20",
    borderColor: "border-slate-600/50"
  },
  {
    name: "Java",
    category: "Programming Language",
    description: "Object-oriented programming and algorithm implementation. Strong foundation in data structures and software design patterns.",
    color: "red",
    bgGradient: "from-red-900/20 to-orange-800/20",
    borderColor: "border-red-700/50"
  },
  {
    name: "Data Science",
    category: "Domain Expertise",
    description: "EEG data analysis, visualization, and pipeline development. Creating insights from complex datasets using pandas, matplotlib, and seaborn.",
    color: "emerald",
    bgGradient: "from-emerald-900/20 to-green-800/20",
    borderColor: "border-emerald-700/50"
  },
  {
    name: "Git & Version Control",
    category: "Development Tools",
    description: "Collaborative development using Git workflows. Managing code repositories and coordinating team contributions.",
    color: "gray",
    bgGradient: "from-gray-800/20 to-gray-700/20",
    borderColor: "border-gray-600/50"
  },
  {
    name: "Linux & Bash",
    category: "Operating System",
    description: "Command-line proficiency and shell scripting. System administration and automation for development workflows.",
    color: "green",
    bgGradient: "from-green-900/20 to-emerald-800/20",
    borderColor: "border-green-700/50"
  },
  {
    name: "ROS (Robot OS)",
    category: "Robotics",
    description: "Robotics development with ROS for control systems and path planning. Integration with embedded systems and sensors.",
    color: "indigo",
    bgGradient: "from-indigo-900/20 to-blue-800/20",
    borderColor: "border-indigo-700/50"
  },
  {
    name: "Node.js & Express",
    category: "Backend Framework",
    description: "Building scalable APIs and server-side applications. RESTful services with TypeScript and database integration.",
    color: "lime",
    bgGradient: "from-lime-900/20 to-green-800/20",
    borderColor: "border-lime-700/50"
  }
];