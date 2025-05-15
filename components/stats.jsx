"use client"

import { useEffect, useRef, useState } from "react"
import {
  Calendar,
  GitBranch,
  GitCommit,
  GitPullRequest,
  Star,
  Github,
  Code,
  Award,
  Trophy,
  ArrowRight,
} from "lucide-react"

export default function Stats() {
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

  // Platform ratings
  const platformRatings = [
    {
      platform: "LeetCode",
      rating: 1651,
      additionalInfo: "top 17%",
      icon: <Code className="h-5 w-5 text-yellow-500" />,
      color: "from-yellow-400 to-orange-500",
      textColor: "text-yellow-500 dark:text-yellow-400",
      profileUrl: "https://leetcode.com/u/manish-madi/",
    },
    {
      platform: "CodeChef",
      rating: 1627,
      additionalInfo: "3★, Division 2",
      icon: <Award className="h-5 w-5 text-green-500" />,
      color: "from-green-400 to-emerald-500",
      textColor: "text-green-500 dark:text-green-400",
      profileUrl: "https://codechef.com/users/manishreddy14",
    },
    {
      platform: "Codeforces",
      rating: 1194,
      additionalInfo: "Rank 5796",
      icon: <Trophy className="h-5 w-5 text-blue-500" />,
      color: "from-blue-400 to-indigo-500",
      textColor: "text-blue-500 dark:text-blue-400",
      profileUrl: "https://codeforces.com/profile/manishreddy14",
    },
  ]

  // GitHub stats (these would normally come from an API)
  const githubStats = {
    repos: 21,
    stars: 31,
    commits: 423,
    prs: 74,
  }

  // Months for GitHub contribution graph
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

  // Days for GitHub contribution graph
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

  // Generate a simulated contribution graph with dates
  const generateContributionData = () => {
    const data = []
    const today = new Date()
    const oneYearAgo = new Date()
    oneYearAgo.setFullYear(today.getFullYear() - 1)

    // Start from one year ago
    const currentDate = new Date(oneYearAgo)

    while (currentDate <= today) {
      // Random contribution count (0-4)
      const count = Math.floor(Math.random() * 5)
      data.push({
        date: new Date(currentDate),
        count: count,
      })

      // Move to next day
      currentDate.setDate(currentDate.getDate() + 1)
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

  // Group contribution data by week
  const getWeeksData = () => {
    const weeks = []
    let currentWeek = []
    let currentDay = 0

    // Fill in empty cells at the beginning to align with the correct day of week
    const firstDayOfWeek = contributionData[0].date.getDay()
    for (let i = 0; i < firstDayOfWeek; i++) {
      currentWeek.push(null)
      currentDay++
    }

    contributionData.forEach((day) => {
      currentWeek.push(day)
      currentDay++

      if (currentDay === 7) {
        weeks.push(currentWeek)
        currentWeek = []
        currentDay = 0
      }
    })

    // Fill in empty cells at the end
    if (currentWeek.length > 0) {
      while (currentWeek.length < 7) {
        currentWeek.push(null)
      }
      weeks.push(currentWeek)
    }

    return weeks
  }

  return (
    <section
      id="github-activity"
      ref={sectionRef}
      className="py-20 dot-grid dark:bg-gray-950 transition-colors duration-300 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white">Stats</h2>

          {/* Platform Ratings */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {platformRatings.map((platform) => (
              <div
                key={platform.platform}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <div className={`h-2 bg-gradient-to-r ${platform.color}`}></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className={`p-2 rounded-full bg-gray-100 dark:bg-gray-700 mr-3`}>{platform.icon}</div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{platform.platform}</h3>
                    </div>
                    <div className="text-right">
                      <span className={`text-xl font-bold ${platform.textColor}`}>{platform.rating}</span>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{platform.additionalInfo}</p>
                    </div>
                  </div>
                  <a
                    href={platform.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 dark:hover:text-blue-300 text-sm inline-flex items-center mt-2"
                  >
                    View Profile <ArrowRight className="h-3 w-3 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* GitHub Stats */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
            <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
              <div className="flex items-center">
                <img
                  src="https://github.com/m-manish03.png"
                  alt="GitHub Profile"
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                  onError={(e) => {
                    e.target.src = "/placeholder.svg?height=48&width=48"
                  }}
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">m-manish03</h3>
                  <a
                    href="https://github.com/m-manish03/"
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
                    {/* Month labels */}
                    <div className="flex text-xs text-gray-500 dark:text-gray-400 mb-1 pl-10">
                      {months.map((month, i) => (
                        <div key={month} className="flex-1 text-center">
                          {month}
                        </div>
                      ))}
                    </div>

                    <div className="flex">
                      {/* Day labels */}
                      <div className="pr-2">
                        {days.map((day, i) => (
                          <div key={day} className="h-3 w-8 text-xs text-gray-500 dark:text-gray-400 text-right pr-1">
                            {i % 2 === 0 ? day : ""}
                          </div>
                        ))}
                      </div>

                      {/* Contribution grid */}
                      <div className="grid grid-cols-52 gap-1">
                        {Array.from({ length: 52 }).map((_, weekIndex) => (
                          <div key={weekIndex} className="grid grid-rows-7 gap-1">
                            {Array.from({ length: 7 }).map((_, dayIndex) => {
                              const dataIndex = weekIndex * 7 + dayIndex
                              const count = contributionData[dataIndex]?.count || 0
                              const date = contributionData[dataIndex]?.date

                              return (
                                <div
                                  key={dayIndex}
                                  className={`w-3 h-3 rounded-sm ${getCellColor(count)} transition-colors duration-300`}
                                  title={date ? `${count} contributions on ${date.toDateString()}` : "No contributions"}
                                ></div>
                              )
                            })}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 mt-2 pl-10">
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
              )}
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://github.com/madimanish14"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-300"
            >
              <Github className="h-4 w-4 mr-2" />
              View Full GitHub Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
