import { ThemeProvider } from "@/context/theme-context"
import "./globals.css"

export const metadata = {
  title: "Manish's Portfolio",
  description: "A minimalistic developer portfolio",
  icons:{icon:'/favicon.png'},
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-500">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
