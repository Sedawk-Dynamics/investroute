"use client"

import { motion } from "framer-motion"
import { Smartphone, Shield, Zap, TrendingUp } from "lucide-react"
import Image from "next/image"

export function MobileApp() {
  const features = [
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Bank-grade encryption ensures your funds and data remain protected 24/7.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Experience instant transactions and live market updates without delay.",
    },
    {
      icon: TrendingUp,
      title: "Smart Insights",
      description: "Get AI-powered investment insights tailored to your financial goals.",
    },
    {
      icon: Smartphone,
      title: "Seamless Experience",
      description: "A clean, intuitive design that's easy to use — even for first-time investors.",
    },
  ]

  return (
    <section
      id="mobile-app"
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-orange-50/30 py-12 sm:py-16 md:py-20 lg:py-24"
    >
      {/* Background gradient blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-32 left-10 w-96 h-96 bg-orange-200/40 blur-[160px] rounded-full" />
        <div className="absolute bottom-32 right-10 w-[28rem] h-[28rem] bg-blue-200/30 blur-[180px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
            Invest Smarter with Our{" "}
            <span className="bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
              Mobile App
            </span>
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto px-4">
            Track your portfolio, explore insights, and make informed decisions — all from the palm of your hand.
            Designed for modern investors who value security, speed, and simplicity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* App Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center order-2 lg:order-1"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-primary/20 blur-3xl rounded-[3rem] -z-10" />

              <div className="relative rounded-[3rem] bg-gradient-to-br from-slate-900 to-slate-800 p-1 shadow-2xl border border-slate-200/10">
                <div className="overflow-hidden rounded-[2.75rem] bg-black">
                  <Image
                    src="/mobile-investment-app-interface-with-charts.jpg"
                    alt="Investroute Mobile App Interface"
                    width={400}
                    height={800}
                    className="rounded-[2.5rem] w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Floating cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute -top-8 -right-8 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-green-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Portfolio Value</p>
                    <p className="text-sm font-semibold text-slate-900">₹12.5L</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1.5 }}
                className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-orange-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Returns</p>
                    <p className="text-sm font-semibold text-green-600">+18.5%</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Features + Download */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 sm:space-y-10 lg:space-y-12 order-1 lg:order-2"
          >
            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group p-5 bg-white/90 border border-slate-200 rounded-2xl shadow-sm hover:shadow-lg hover:border-primary/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary to-orange-500 mb-3 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">{feature.title}</h3>
                  <p className="text-sm text-slate-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Download Buttons */}
            <div className="space-y-4 pt-4">
              

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                {/* Google Play */}
                <motion.a
                  href="https://play.google.com/store/apps/details?id=com.investroute.financial.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-4 px-6 py-4 bg-black rounded-2xl hover:bg-slate-900 transition-all duration-300 shadow-lg"
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5Z"
                      fill="url(#paint0_linear)"
                    />
                    <path d="M16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12Z" fill="url(#paint1_linear)" />
                    <path
                      d="M3.84 2.15C4.03 2.06 4.23 2 4.45 2C4.66 2 4.86 2.05 5.03 2.15L16.74 8.88L14.49 11.13L3.84 2.15Z"
                      fill="url(#paint2_linear)"
                    />
                    <path
                      d="M16.81 8.88L20.96 11.27C21.54 11.63 21.54 12.37 20.96 12.74L16.81 15.13L14.54 12.86L16.81 8.88Z"
                      fill="url(#paint3_linear)"
                    />
                    <defs>
                      <linearGradient id="paint0_linear" x1="8.35" y1="3.29" x2="2.07" y2="9.57">
                        <stop stopColor="#00D7FE" />
                        <stop offset="1" stopColor="#0091EA" />
                      </linearGradient>
                      <linearGradient id="paint1_linear" x1="15.28" y1="14.09" x2="4.79" y2="24.58">
                        <stop stopColor="#FFD500" />
                        <stop offset="1" stopColor="#F57F17" />
                      </linearGradient>
                      <linearGradient id="paint2_linear" x1="1.59" y1="0.53" x2="11.13" y2="10.07">
                        <stop stopColor="#00F076" />
                        <stop offset="1" stopColor="#00C569" />
                      </linearGradient>
                      <linearGradient id="paint3_linear" x1="13.83" y1="12" x2="22.07" y2="12">
                        <stop stopColor="#FF4141" />
                        <stop offset="1" stopColor="#C20000" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div>
                    <p className="text-xs text-slate-400">GET IT ON</p>
                    <p className="text-lg font-semibold text-white">Google Play</p>
                  </div>
                </motion.a>

                {/* App Store */}
                <motion.a
                  href="https://play.google.com/store/apps/details?id=com.investroute.financial.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-4 px-6 py-4 bg-black rounded-2xl hover:bg-slate-900 transition-all duration-300 shadow-lg"
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white">
                    <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  <div>
                    <p className="text-xs text-slate-400">Download on the</p>
                    <p className="text-lg font-semibold text-white">App Store</p>
                  </div>
                </motion.a>
              </div>

              {/* Ratings */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 lg:gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-orange-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-slate-900">4.8</span>
                  <span className="text-sm text-slate-500">(12K+ reviews)</span>
                </div>
                <div className="h-6 w-px bg-slate-300 hidden sm:block" />
                <div className="text-sm text-slate-600">
                  <span className="font-semibold text-slate-900">50K+</span> Downloads
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
