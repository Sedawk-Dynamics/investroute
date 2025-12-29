"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { TrendingUp, BarChart3, Shield, Clock, Award, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function ShareTradingPage() {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features")
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const features = [
    {
      icon: TrendingUp,
      title: "Real-Time Trading",
      description: "Execute trades instantly with real-time market data and lightning-fast order execution.",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Make informed decisions with comprehensive charts, technical indicators, and market analysis.",
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Trade with confidence on our secure, regulated platform with bank-level encryption.",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Get expert assistance whenever you need it with our round-the-clock customer support.",
    },
    {
      icon: Award,
      title: "Low Brokerage",
      description: "Save more with our competitive brokerage rates and transparent pricing structure.",
    },
    {
      icon: Zap,
      title: "Instant Account",
      description: "Open your demat account in minutes and start trading immediately.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/50 via-white to-gray-50/30">
      <Header />

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="pt-40 pb-20 px-4"
      >
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-gradient-primary">Share Trading Made Simple</h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Start your investment journey with India's most trusted trading platform. Trade stocks, derivatives, and
                commodities with zero complexity.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://angel-one.onelink.me/Wjgr/vaakmjyn" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] hover:from-[#1E40AF] hover:to-[#3B82F6] px-8 py-6 text-lg shadow-brand-lg hover:shadow-brand-xl transition-all duration-300">
                    Start Trading Now
                  </Button>
                </a>
                <Button
                  onClick={scrollToFeatures}
                  variant="outline"
                  className="px-8 py-6 text-lg border-2 border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white transition-all duration-300 bg-transparent"
                >
                  Learn More
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <Image
                src="/stock-market-trading.jpg"
                alt="Share Trading Platform"
                width={600}
                height={400}
                className="rounded-2xl shadow-brand-xl"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Why Choose Our Trading Platform?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience seamless trading with cutting-edge technology and expert support
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="bg-gradient-to-br from-blue-50/80 to-indigo-50/50 p-8 rounded-2xl hover:shadow-brand-xl transition-all duration-500 border border-blue-100/50 group hover:scale-105"
              >
                <div className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-[#1E3A8A] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#1E3A8A] via-[#2563EB] to-[#3B82F6] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B2C]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#22C55E]/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Start Trading?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
              Open your demat account today and get access to powerful trading tools and market insights
            </p>
            <a href="https://angel-one.onelink.me/Wjgr/vaakmjyn" target="_blank" rel="noopener noreferrer">
              <Button className="bg-white text-[#1E3A8A] hover:bg-gray-100 px-10 py-6 text-lg font-semibold shadow-2xl hover:scale-105 transition-all duration-300">
                Open Free Account
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
