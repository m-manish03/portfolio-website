"use client"

import { useEffect, useRef } from "react"

export default function About() {
  const aboutRef = useRef(null)
  const headingRef = useRef(null)
  const textRef = useRef(null)
  const imageRef = useRef(null)

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
      { threshold: 0.01, rootMargin: "0px 0px -50px 0px" },
    )

    if (aboutRef.current) observer.observe(aboutRef.current)
    if (headingRef.current) elementObserver.observe(headingRef.current)
    if (textRef.current) elementObserver.observe(textRef.current)
    if (imageRef.current) elementObserver.observe(imageRef.current)

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current)
      if (headingRef.current) elementObserver.unobserve(headingRef.current)
      if (textRef.current) elementObserver.unobserve(textRef.current)
      if (imageRef.current) elementObserver.unobserve(imageRef.current)
    }
  }, [])

  return (
    <section
      id="about"
      ref={aboutRef}
      className="py-20 dot-grid dark:bg-gray-950 transition-colors duration-300 opacity-0 transition-opacity duration-500 preload-content"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2
            ref={headingRef}
            className="text-3xl font-bold text-center mb-16 text-[#64ffda] dark:text-[#64ffda] opacity-0"
          >
            About Me
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div
              ref={imageRef}
              className="relative h-auto max-w-md mx-auto rounded-lg overflow-hidden border-2 border-gray-200 dark:border-gray-800 opacity-0 animate-scale stagger-1"
            >
              {/* Using standard img tag instead of Next.js Image component */}
              <img
                src="/images/profile.jpg"
                alt="Manish Reddy - Developer portrait"
                className="w-full h-auto object-contain"
              />
            </div>

            <div>
              <div ref={textRef} className="opacity-0 space-y-6">
                <div className="space-y-4">
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed animate-word-fade">
                    I'm Madi Manish Reddy, a{" "}
                    <span className="text-[#64ffda] dark:text-[#64ffda] font-medium">
                      Computer Science and Engineering
                    </span>{" "}
                    undergraduate from{" "}
                    <span className="text-[#64ffda] dark:text-[#64ffda] font-medium">VJIT, Hyderabad</span>. I'm deeply
                    passionate about technology and continuously exploring the fields of{" "}
                    <span className="text-[#64ffda] dark:text-[#64ffda] font-medium">full-stack development</span>,{" "}
                    <span className="text-[#64ffda] dark:text-[#64ffda] font-medium">data science</span>, and{" "}
                    <span className="text-[#64ffda] dark:text-[#64ffda] font-medium">machine learning</span>.
                  </p>

                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed animate-word-fade">
                    I've built projects ranging from{" "}
                    <span className="text-[#64ffda] dark:text-[#64ffda] font-medium">interactive web applications</span>{" "}
                    to <span className="text-[#64ffda] dark:text-[#64ffda] font-medium">analytical tools</span> powered
                    by machine learning. I've completed certifications from{" "}
                    <span className="text-[#64ffda] dark:text-[#64ffda] font-medium">Meta</span>,{" "}
                    <span className="text-[#64ffda] dark:text-[#64ffda] font-medium">Oracle</span>,{" "}
                    <span className="text-[#64ffda] dark:text-[#64ffda] font-medium">IBM</span>, and{" "}
                    <span className="text-[#64ffda] dark:text-[#64ffda] font-medium">Cisco</span>, strengthening my
                    foundation in front-end development, databases, and cloud technologies. I also actively sharpen my
                    problem-solving skills on platforms like{" "}
                    <span className="text-[#64ffda] dark:text-[#64ffda] font-medium">LeetCode</span>, where I've
                    achieved a rating of <span className="text-[#64ffda] dark:text-[#64ffda] font-medium">1662</span>.
                  </p>

                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed animate-word-fade">
                    As a developer, I believe in{" "}
                    <span className="text-[#64ffda] dark:text-[#64ffda] font-medium">clean design</span>,{" "}
                    <span className="text-[#64ffda] dark:text-[#64ffda] font-medium">continuous learning</span>, and
                    building <span className="text-[#64ffda] dark:text-[#64ffda] font-medium">impactful solutions</span>{" "}
                    with code.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
