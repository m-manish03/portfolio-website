"use client"

import { useEffect, useRef, useState } from "react"
import { Download, Github, Linkedin, Twitter, Mail } from "lucide-react"

export default function Hero() {
  const heroRef = useRef(null)
  const [typedText, setTypedText] = useState("")
  const fullText = "A passionate full-stack developer crafting elegant solutions to complex problems."
  const typingSpeed = 50 // milliseconds per character (slowed down)

  // For the headline animation
  const [isAnimating, setIsAnimating] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in")
          setIsAnimating(true)

          // Start the typewriter effect after a short delay
          setTimeout(() => {
            let charIndex = 0
            const typeInterval = setInterval(() => {
              if (charIndex < fullText.length) {
                setTypedText(fullText.substring(0, charIndex + 1))
                charIndex++
              } else {
                clearInterval(typeInterval)
              }
            }, typingSpeed)
          }, 500)
        }
      },
      { threshold: 0.1 },
    )

    if (heroRef.current) {
      observer.observe(heroRef.current)
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current)
      }
    }
  }, [])

  return (
    <section
      id="hero"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center pt-16 opacity-0 transition-opacity duration-1000 dot-grid dark:bg-gray-950"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6">
            <div className="flex flex-wrap justify-center gap-x-4 mb-2">
              <span className="text-gray-700 dark:text-gray-300 opacity-100 transition-opacity duration-1000">
                Hello,
              </span>
              <span className="text-gray-700 dark:text-gray-300 opacity-100 transition-opacity duration-1000">I'm</span>
            </div>
            <div
              className={`mt-2 transition-transform duration-300 ${isAnimating ? "animate-fade-in" : "opacity-0"}`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{
                transform: isHovered ? "scale(1.05)" : "scale(1)",
              }}
            >
              <span className="bg-gradient-to-r from-[#FC466B] to-[#3F5EFB] text-transparent bg-clip-text">
                Manish Reddy
              </span>
            </div>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed h-[60px] sm:h-[40px]">
            {typedText}
            <span
              className={`inline-block w-1 h-6 ml-1 bg-gray-400 dark:bg-gray-500 ${typedText.length === fullText.length ? "animate-pulse" : ""}`}
            ></span>
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 opacity-0 animate-slide-up stagger-3">
            <a
              href="/resume/manish-reddy-resume.pdf"
              download="Manish_Reddy_Resume.pdf"
              className="px-6 py-3 relative group overflow-hidden rounded-md font-medium flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105"
            >
              {/* Animated border background */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#FC466B] to-[#3F5EFB] animate-gradient-x"></span>

              {/* Inner background with cutout effect */}
              <span className="absolute inset-[2px] bg-white dark:bg-gray-950 rounded-md"></span>

              {/* Content */}
              <span className="relative flex items-center justify-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-[#FC466B] to-[#3F5EFB] font-semibold">
                <Download className="h-4 w-4 text-[#FC466B]" />
                Download Resume
              </span>
            </a>

            <button
              onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-md font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Contact Me
            </button>
          </div>

          <div className="flex justify-center gap-6 opacity-0 animate-slide-up stagger-4">
            <a
              href="https://github.com/madimanish14"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 transform hover:scale-125"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/manish-reddy-390b7825b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 transform hover:scale-125"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 transform hover:scale-125"
            >
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="mailto:manish14.official@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 transform hover:scale-125"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
