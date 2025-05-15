"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const projectsRef = useRef(null)
  const titleRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in")
        }
      },
      { threshold: 0.1 },
    )

    const titleObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-slide-up")
        }
      },
      { threshold: 0.1 },
    )

    if (projectsRef.current) {
      observer.observe(projectsRef.current)
    }

    if (titleRef.current) {
      titleObserver.observe(titleRef.current)
    }

    return () => {
      if (projectsRef.current) observer.unobserve(projectsRef.current)
      if (titleRef.current) titleObserver.unobserve(titleRef.current)
    }
  }, [])

  const projects = [
    {
      id: 1,
      title: "🏠 Housing Markets Analysis",
      description: "A data-driven dashboard analyzing housing trends across India with interactive visualizations.",
      image: "/images/housing-market.png",
      tech: ["Python", "Streamlit", "Pandas", "Matplotlib", "Plotly"],
      github: "https://github.com/m-manish03/Indian-Housing-Markets-Analysis-and-Visualization",
      demo: "https://indian-housing-markets-analysis-and-visualization.streamlit.app/",
    },
    {
      id: 2,
      title: "🧠 Brain Hemorrhage Detection",
      description: "Deep learning-based tool to detect brain hemorrhages in CT scans using CNN architectures.",
      image: "/images/brain-hemorrhage.png",
      tech: ["Python", "Flask", "Keras", "Numpy"],
      github: "https://github.com/m-manish03/Brain-Hemorrhage-Detection",
      demo: "https://github.com/m-manish03/Brain-Hemorrhage-Detection",
    },
    {
      id: 3,
      title: "☁️ Weather App",
      description: "A sleek and responsive weather forecasting app showing real-time weather info for any location.",
      image: "/images/weather-app.png",
      tech: ["React", "Vite", "JavaScript", "CSS"],
      github: "https://github.com/m-manish03/Weather-App",
      demo: "https://earnest-tiramisu-c1119c.netlify.app/",
    },
    {
      id: 4,
      title: "🔢 Sorting Algorithms Visualizer",
      description: "Interactive visualizer that animates various sorting algorithms to aid understanding.",
      image: "/images/sorting-algorithms.png",
      tech: ["React", "Vite", "JavaScript", "CSS"],
      github: "https://github.com/m-manish03/Sorting-Algorithms-Visualizer",
      demo: "https://sorting-algorithms-visualizer-blue.vercel.app/",
    },
    {
      id: 5,
      title: "💰 Expense Tracker",
      description: "A simple tool to track and manage expenses with real-time total calculation.",
      image: "/images/expense-tracker.png",
      tech: ["HTML", "CSS (Bootstrap)", "JavaScript"],
      github: "https://github.com/m-manish03/Expense-Tracker",
      demo: "https://expense-tracker-navy-nine.vercel.app/",
    },
    {
      id: 6,
      title: "⌨️ TypeRush",
      description: "Typing game designed to improve speed and accuracy with live performance tracking.",
      image: "/images/type-rush.png",
      tech: ["HTML", "JavaScript", "CSS"],
      github: "https://github.com/m-manish03/TypeRush",
      demo: "https://type-rush-fawn.vercel.app/",
    },
  ]

  return (
    <section
      id="projects"
      ref={projectsRef}
      className="py-20 dot-grid dark:bg-gray-950 transition-colors duration-300 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 ref={titleRef} className="text-3xl font-bold text-center mb-16 dark:text-white opacity-0">
            My Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-scale")
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={cardRef}
      className={`group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 opacity-0 stagger-${index + 1}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-56 overflow-hidden">
        {/* Using standard img tag instead of Next.js Image component */}
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
          onError={(e) => {
            e.target.src = "/placeholder.svg?height=300&width=500"
          }}
        />
        <div
          className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-4 transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"}`}
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white rounded-full text-gray-900 hover:bg-gray-200 transition-all duration-300 transform hover:scale-110"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub Repository</span>
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white rounded-full text-gray-900 hover:bg-gray-200 transition-all duration-300 transform hover:scale-110"
          >
            <ExternalLink className="h-5 w-5" />
            <span className="sr-only">Live Demo</span>
          </a>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 dark:text-white">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm font-medium transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
