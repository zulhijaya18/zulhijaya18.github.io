import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

export const metadata: Metadata = {
  title: "Zulhijaya - React Frontend & Flutter Mobile Developer",
  description:
    "React Frontend & Flutter Mobile Developer with 5+ years delivering modern, scalable, and user-friendly apps across e-commerce, fintech, and healthcare. Product Engineer at Zero One Group (Jakarta, Remote). Skilled in React, Next.js, TypeScript, Flutter, Shopify, WordPress, Laravel, Node.js, and Golang.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
