"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Coins, TrendingUp, ShieldCheck, Zap, Wallet, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image" 
import Link from "next/link"

export default function GoldSilverPage() {
  const benefits = [
    {
      icon: Coins,
      title: "Digital Gold & Silver",
      description: "Buy, sell, and store gold and silver digitally with 99.9% purity guarantee.",
    },
    {
      icon: Wallet,
      title: "Start from ₹1",
      description: "Begin your precious metals investment journey with as little as ₹1.",
    },
    {
      icon: ShieldCheck,
      title: "Insured & Secure",
      description: "Your gold and silver holdings are fully insured and stored in secure vaults.",
    },
    {
      icon: Zap,
      title: "Instant Liquidity",
      description: "Buy or sell your digital gold and silver anytime with instant settlement.",
    },
    {
      icon: TrendingUp,
      title: "Hedge Against Inflation",
      description: "Precious metals traditionally maintain value during economic uncertainties.",
    },
    {
      icon: BarChart3,
      title: "Real-time Pricing",
      description: "Track live gold and silver prices and make informed investment decisions.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
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
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                Digital Gold & Silver
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Invest in 24K 99.9% pure digital gold and silver with complete safety and convenience. No storage
                worries, no making charges, just pure investment value.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link href="/#contact">
                  <Button className="bg-amber-600 hover:bg-amber-700 px-8 py-6 text-lg">Start Investing</Button>
                </Link>
                <Link href="/calculators">
                  <Button
                    variant="outline"
                    className="px-8 py-6 text-lg bg-transparent border-amber-600 text-amber-700 hover:bg-amber-50"
                  >
                    Calculate Returns
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
                src="/shiny-gold-bars-and-silver-coins-stacked-elegantly.jpg"
                alt="Digital Gold and Silver Investment"
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Why Invest in Digital Gold & Silver?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The modern way to own precious metals - safe, convenient, and accessible
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
                className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-amber-100"
              >
                <div className="bg-amber-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-12 text-center">Gold vs Silver Investment Comparison</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-amber-500 to-yellow-600 text-white rounded-2xl p-8 shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Coins className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold">Gold</h3>
                </div>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <span>Traditional store of value</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <span>Stable during economic downturns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <span>Lower volatility compared to silver</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <span>Historically 10-12% annual returns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <span>Ideal for long-term wealth preservation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-400 to-gray-600 text-white rounded-2xl p-8 shadow-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <Coins className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold">Silver</h3>
                </div>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <span>More affordable entry point</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <span>Industrial demand drives growth</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <span>Higher growth potential</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <span>Historically 15-18% annual returns</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <span>Great for aggressive portfolios</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-amber-600 to-yellow-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Start Your Precious Metals Journey</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Diversify your portfolio with digital gold and silver investments today
            </p>
            <Link href="/#contact">
              <Button className="bg-white text-amber-600 hover:bg-gray-100 px-10 py-6 text-lg font-semibold">
                Get Started Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
