"use client"

import { useEffect, useRef } from "react"
import {
  Code,
  Server,
  Terminal,
  Database,
  Cloud,
  Braces,
  Cpu,
  PenTool,
  BarChart,
  Globe,
  Coffee,
  FileCode,
  Layout,
  Layers,
  GitBranch,
  LineChart,
  Bot,
  Network,
  Workflow,
  Camera,
} from "lucide-react"

export default function Skills() {
  const skillsRef = useRef(null)
  const headingRef = useRef(null)
  const categoryRefs = {
    languages: useRef(null),
    frontend: useRef(null),
    backend: useRef(null),
    ml: useRef(null),
    devops: useRef(null),
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in")
        }
      },
      { threshold: 0.1 },
    )

    const elementObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-slide-up")
        }
      },
      { threshold: 0.1 },
    )

    if (skillsRef.current) observer.observe(skillsRef.current)
    if (headingRef.current) elementObserver.observe(headingRef.current)

    Object.values(categoryRefs).forEach((ref) => {
      if (ref.current) elementObserver.observe(ref.current)
    })

    return () => {
      if (skillsRef.current) observer.unobserve(skillsRef.current)
      if (headingRef.current) elementObserver.unobserve(headingRef.current)

      Object.values(categoryRefs).forEach((ref) => {
        if (ref.current) elementObserver.unobserve(ref.current)
      })
    }
  }, [])

  const skillCategories = [
    {
      name: "Programming Languages",
      ref: categoryRefs.languages,
      icon: <Terminal className="h-6 w-6" />,
      color:
        "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800",
      skills: [
        { name: "Java", icon: "java" },
        { name: "Python", icon: "python" },
        { name: "JavaScript", icon: "javascript" },
        { name: "C", icon: "c" },
        { name: "SQL", icon: "sql" },
        { name: "PHP", icon: "php" },
      ],
    },
    {
      name: "Frontend Development",
      ref: categoryRefs.frontend,
      icon: <Layout className="h-6 w-6" />,
      color: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800",
      skills: [
        { name: "React", icon: "react" },
        { name: "HTML", icon: "html" },
        { name: "CSS", icon: "css" },
        { name: "Tailwind CSS", icon: "tailwind" },
        { name: "Bootstrap", icon: "bootstrap" },
        { name: "jQuery", icon: "jquery" },
      ],
    },
    {
      name: "Backend Development",
      ref: categoryRefs.backend,
      icon: <Server className="h-6 w-6" />,
      color:
        "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800",
      skills: [
        { name: "Node.js", icon: "nodejs" },
        { name: "Flask", icon: "flask" },
        { name: "FastAPI", icon: "fastapi" },
        { name: "PostgreSQL", icon: "postgresql" },
        { name: "MySQL", icon: "mysql" },
        { name: "SQLite", icon: "sqlite" },
        { name: "Redis", icon: "redis" },
        { name: "Firebase", icon: "firebase" },
        { name: "Supabase", icon: "supabase" },
        { name: "GraphQL", icon: "graphql" },
        { name: "REST APIs", icon: "rest" },
      ],
    },
    {
      name: "Machine Learning & Data Science",
      ref: categoryRefs.ml,
      icon: <BarChart className="h-6 w-6" />,
      color:
        "bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 border-orange-200 dark:border-orange-800",
      skills: [
        { name: "TensorFlow", icon: "tensorflow" },
        { name: "Keras", icon: "keras" },
        { name: "Scikit-Learn", icon: "scikit" },
        { name: "Pandas", icon: "pandas" },
        { name: "NumPy", icon: "numpy" },
        { name: "Matplotlib", icon: "matplotlib" },
        { name: "Seaborn", icon: "seaborn" },
        { name: "OpenCV", icon: "opencv" },
        { name: "XGBoost", icon: "xgboost" },
        { name: "Hugging Face", icon: "huggingface" },
        { name: "Plotly", icon: "plotly" },
        { name: "MLflow", icon: "mlflow" },
      ],
    },
    {
      name: "Cloud & DevOps",
      ref: categoryRefs.devops,
      icon: <Cloud className="h-6 w-6" />,
      color:
        "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800",
      skills: [
        { name: "AWS EC2", icon: "aws-ec2" },
        { name: "AWS S3", icon: "aws-s3" },
        { name: "AWS Lambda", icon: "aws-lambda" },
        { name: "Docker", icon: "docker" },
        { name: "GitHub Actions", icon: "github" },
        { name: "Firebase", icon: "firebase" },
        { name: "Kubernetes", icon: "kubernetes" },
        { name: "CI/CD", icon: "cicd" },
        { name: "Git", icon: "git" },
        { name: "Linux", icon: "linux" },
      ],
    },
  ]

  // Function to get icon component based on skill name
  const getSkillIcon = (skillName) => {
    const icons = {
      // Programming Languages
      Java: <Coffee className="h-5 w-5" />,
      Python: <Terminal className="h-5 w-5" />,
      JavaScript: <Braces className="h-5 w-5" />,
      C: <Terminal className="h-5 w-5" />,
      SQL: <Database className="h-5 w-5" />,
      PHP: <FileCode className="h-5 w-5" />,

      // Frontend
      React: <Braces className="h-5 w-5" />,
      HTML: <Code className="h-5 w-5" />,
      CSS: <PenTool className="h-5 w-5" />,
      "Tailwind CSS": <PenTool className="h-5 w-5" />,
      "Next.js": <Layers className="h-5 w-5" />,
      Bootstrap: <Layout className="h-5 w-5" />,
      jQuery: <Braces className="h-5 w-5" />,

      // Backend
      "Node.js": <Server className="h-5 w-5" />,
      Flask: <Server className="h-5 w-5" />,
      FastAPI: <Server className="h-5 w-5" />,
      PostgreSQL: <Database className="h-5 w-5" />,
      MySQL: <Database className="h-5 w-5" />,
      SQLite: <Database className="h-5 w-5" />,
      Redis: <Database className="h-5 w-5" />,
      Firebase: <Database className="h-5 w-5" />,
      Supabase: <Database className="h-5 w-5" />,
      GraphQL: <Network className="h-5 w-5" />,
      "REST APIs": <Network className="h-5 w-5" />,

      // ML & Data Science
      TensorFlow: <Cpu className="h-5 w-5" />,
      Keras: <Cpu className="h-5 w-5" />,
      "Scikit-Learn": <BarChart className="h-5 w-5" />,
      Pandas: <BarChart className="h-5 w-5" />,
      NumPy: <BarChart className="h-5 w-5" />,
      Matplotlib: <LineChart className="h-5 w-5" />,
      Seaborn: <LineChart className="h-5 w-5" />,
      OpenCV: <Camera className="h-5 w-5" />,
      XGBoost: <BarChart className="h-5 w-5" />,
      "Hugging Face": <Bot className="h-5 w-5" />,
      Plotly: <LineChart className="h-5 w-5" />,
      MLflow: <Workflow className="h-5 w-5" />,

      // Cloud & DevOps
      "AWS EC2": <Server className="h-5 w-5" />,
      "AWS S3": <Database className="h-5 w-5" />,
      "AWS Lambda": <Code className="h-5 w-5" />,
      Docker: <Globe className="h-5 w-5" />,
      "GitHub Actions": <Workflow className="h-5 w-5" />,
      Kubernetes: <Globe className="h-5 w-5" />,
      "CI/CD": <Workflow className="h-5 w-5" />,
      Git: <GitBranch className="h-5 w-5" />,
      Linux: <Terminal className="h-5 w-5" />,
    }

    return icons[skillName] || <Code className="h-5 w-5" />
  }

  return (
    <section
      id="skills"
      ref={skillsRef}
      className="py-20 dot-grid dark:bg-gray-950 transition-colors duration-300 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2
            ref={headingRef}
            className="text-3xl font-bold text-center mb-16 text-blue-600 dark:text-blue-400 opacity-0"
          >
            My Skills
          </h2>

          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <div key={category.name} ref={category.ref} className="opacity-0 stagger-1">
                <div className={`inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full ${category.color}`}>
                  {category.icon}
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill.name}
                      className={`stagger-${skillIndex + 1} animate-fade-in-delay`}
                      style={{ animationDelay: `${(skillIndex + 1) * 100}ms` }}
                    >
                      <div className="group relative">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FC466B] to-[#3F5EFB] rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                        <div className="relative flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                          <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 mb-3 group-hover:scale-110 transition-transform duration-300">
                            {getSkillIcon(skill.name)}
                          </div>
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                            {skill.name}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
