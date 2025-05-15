"use client"

import { useEffect, useRef, useState } from "react"
import { Calendar, GitBranch, GitCommit, GitPullRequest, Star, GitlabIcon as GitHub } from "lucide-react"

export default function GitHubActivity() {
  const sectionRef = useRef(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in")
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    // Simulate loading time for the GitHub graph
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
      clearTimeout(timer)
    }
  }, [])

  // GitHub stats (these would normally come from an API)
  const githubStats = {
    repos: 21,
    stars: 31,
    commits: 423,
    prs: 74,
  }

  // Generate a simulated contribution graph
  const generateContributionData = () => {
    const days = 52 * 7 // 52 weeks, 7 days per week
    const data = []

    for (let i = 0; i < days; i++) {
      // Random contribution count (0-4)
      const count = Math.floor(Math.random() * 5)
      data.push(count)
    }

    return data
  }

  const contributionData = generateContributionData()

  // Function to determine cell color based on contribution count
  const getCellColor = (count) => {
    if (count === 0) return "bg-gray-100 dark:bg-gray-800"
    if (count === 1) return "bg-green-100 dark:bg-green-900"
    if (count === 2) return "bg-green-300 dark:bg-green-700"
    if (count === 3) return "bg-green-500 dark:bg-green-500"
    return "bg-green-700 dark:bg-green-300"
  }

  return (
    <section
      id="github-activity"
      ref={sectionRef}
      className="py-20 dot-grid dark:bg-gray-950 transition-colors duration-300 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white">GitHub Activity</h2>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
            <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
              <div className="flex items-center">
                <img
                  src="https://github.com/m-manish03.png"
                  alt="GitHub Profile"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">m-manish03</h3>
                  <a
                    href="https://github.com/m-manish03"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-300 text-sm"
                  >
                    View Profile
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 mr-2">
                    <GitBranch className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Repositories</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{githubStats.repos}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 mr-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Stars</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{githubStats.stars}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 mr-2">
                    <GitCommit className="h-4 w-4 text-green-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Commits</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{githubStats.commits}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 mr-2">
                    <GitPullRequest className="h-4 w-4 text-purple-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Pull Requests</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{githubStats.prs}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-md font-medium mb-2 flex items-center text-gray-700 dark:text-gray-300">
                <Calendar className="h-4 w-4 mr-2" />
                Contribution Activity
              </h4>

              {loading ? (
                <div className="h-32 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <div className="min-w-max">
                    <div className="grid grid-cols-52 gap-1">
                      {Array.from({ length: 52 }).map((_, weekIndex) => (
                        <div key={weekIndex} className="grid grid-rows-7 gap-1">
                          {Array.from({ length: 7 }).map((_, dayIndex) => {
                            const dataIndex = weekIndex * 7 + dayIndex
                            const count = contributionData[dataIndex]
                            return (
                              <div
                                key={dayIndex}
                                className={`w-3 h-3 rounded-sm ${getCellColor(count)} transition-colors duration-300`}
                                title={`${count} contributions`}
                              ></div>
                            )
                          })}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 mt-2">
              <span>Less</span>
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-sm bg-gray-100 dark:bg-gray-800"></div>
                <div className="w-3 h-3 rounded-sm bg-green-100 dark:bg-green-900"></div>
                <div className="w-3 h-3 rounded-sm bg-green-300 dark:bg-green-700"></div>
                <div className="w-3 h-3 rounded-sm bg-green-500"></div>
                <div className="w-3 h-3 rounded-sm bg-green-700 dark:bg-green-300"></div>
              </div>
              <span>More</span>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://github.com/m-manish03"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-300"
            >
              <GitHub className="h-4 w-4 mr-2" />
              View Full GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
