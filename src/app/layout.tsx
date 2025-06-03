import "./globals.css"
import { Inter } from "next/font/google"
// import { ThemeProvider } from "@/components/theme-provider"
// import Header from "@/components/Header"
// import Footer from "@/components/Footer"
import type { ReactNode } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "GreenLife - Sustainable Living Made Simple",
  description:
    "Discover eco-friendly products and sustainable living tips with GreenLife. Join us in making a positive impact on our planet.",
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {/* ?<ThemeProvider attribute="class" defaultTheme="system" enableSystem> */}
          {/* <Header /> */}
          <main>{children}</main>
          {/* <Footer /> */}
        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}

