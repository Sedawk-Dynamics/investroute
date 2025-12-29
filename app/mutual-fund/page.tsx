"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { PieChart, Target, TrendingUp, Shield, Users, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function MutualFundPage() {
  const benefits = [
    {
      icon: PieChart,
      title: "Diversified Portfolio",
      description: "Invest across multiple stocks and sectors to minimize risk and maximize returns.",
    },
    {
      icon: Target,
      title: "Goal-Based Investing",
      description: "Plan your investments for specific goals like retirement, education, or dream home.",
    },
    {
      icon: TrendingUp,
      title: "Professional Management",
      description: "Expert fund managers handle your investments with proven strategies.",
    },
    {
      icon: Shield,
      title: "SEBI Regulated",
      description: "All funds are regulated by SEBI ensuring transparency and investor protection.",
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Get personalized investment advice from our certified financial advisors.",
    },
    {
      icon: Clock,
      title: "Flexible SIP Options",
      description: "Start investing with as low as ₹500 per month through systematic investment plans.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Header />

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-40 pb-20 px-4"
      >
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Mutual Fund Investments
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Build wealth systematically with India's top-performing mutual funds. Start your SIP journey with expert
                guidance and achieve your financial goals.
              </p>
              <div className="mb-8">
                <Image
                  src="/mutual-fund-sahi-hai-banner.jpg"
                  alt="Mutual Funds Sahi Hai"
                  width={800}
                  height={200}
                  className="w-full max-w-2xl h-auto rounded-lg shadow-md"
                />
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="https://angel-one.onelink.me/Wjgr/vaakmjyn" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-orange-600 hover:bg-orange-700 px-8 py-6 text-lg">Start SIP Today</Button>
                </a>
                <Link href="/mutual-fund/explore-funds">
                  <Button variant="outline" className="px-8 py-6 text-lg bg-transparent">
                    Explore Funds
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <Image
                src="/financial-growth-chart-with-upward-trend.jpg"
                alt="Mutual Fund Growth"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Why Invest in Mutual Funds?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Build long-term wealth with professionally managed diversified portfolios
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-orange-100"
              >
                <div className="bg-orange-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-orange-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Start Your Investment Journey</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Begin with just ₹500 per month and watch your wealth grow over time
            </p>
            <a href="https://angel-one.onelink.me/Wjgr/vaakmjyn" target="_blank" rel="noopener noreferrer">
              <Button className="bg-white text-orange-600 hover:bg-gray-100 px-10 py-6 text-lg font-semibold">
                Start SIP Now
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
