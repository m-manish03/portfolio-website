"use client"

import { createContext, useContext, useEffect, useState } from "react"

// Create a context for the theme
const ThemeContext = createContext(undefined)

// Theme provider component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark") // Default to dark theme
  const [mounted, setMounted] = useState(false)

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  // Initialize theme from localStorage and set up listeners
  useEffect(() => {
    // Check if we're in the browser
    if (typeof window !== "undefined") {
      // Get saved theme from localStorage or use system preference
      const savedTheme = localStorage.getItem("theme")
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

      if (savedTheme) {
        setTheme(savedTheme)
      } else if (prefersDark) {
        setTheme("dark")
      } else {
        setTheme("light")
      }

      setMounted(true)
    }
  }, [])

  // Update the document with the current theme
  useEffect(() => {
    if (!mounted) return

    // Save theme to localStorage
    localStorage.setItem("theme", theme)

    // Update document class
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
      document.documentElement.classList.remove("light")
    } else {
      document.documentElement.classList.add("light")
      document.documentElement.classList.remove("dark")
    }
  }, [theme, mounted])

  // Provide the theme context to children
  return <ThemeContext.Provider value={{ theme, toggleTheme, mounted }}>{children}</ThemeContext.Provider>
}

// Custom hook to use the theme context
export function useTheme() {
  const context = useContext(ThemeContext)

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }

  return context
}
