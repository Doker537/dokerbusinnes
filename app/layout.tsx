import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin", "cyrillic"] })

export const metadata: Metadata = {
  title: "Doker - Профессиональная фото и видео съемка",
  description:
    "Создаем качественный контент для бизнеса: фото, видео, Reels, Stories. Полный цикл производства от съемки до готового результата.",
  keywords: "фотограф, видеограф, съемка, контент, реклама, социальные сети, бизнес",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
