"use client"

import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Calculators } from "@/components/calculators"
import { WhyChooseUs } from "@/components/why-choose-us"
import { TrustedPartners } from "@/components/trusted-partners"
import { MobileApp } from "@/components/mobile-app"
import { Contact } from "@/components/contact"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion, useScroll, useSpring } from "framer-motion"
import { useEffect } from "react"

export default function Home() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === "A" && target.getAttribute("href")?.startsWith("#")) {
        e.preventDefault()
        const id = target.getAttribute("href")?.slice(1)
        const element = document.getElementById(id || "")
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)
    return () => document.removeEventListener("click", handleAnchorClick)
  }, [])

  return (
    <main className="min-h-screen">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50" style={{ scaleX }} />
      <Header />
      <Hero />
      <Calculators />
      <Services />
      <WhyChooseUs />
      <TrustedPartners />
      <MobileApp />
      <Contact />
      <Footer />
    </main>
  )
}
