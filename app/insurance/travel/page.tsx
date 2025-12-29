"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Plane, Heart, Briefcase, CheckCircle2, Phone, Globe } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function TravelInsurancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50/50 via-white to-gray-50/30">
      <Header />

      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="grid lg:grid-cols-2 gap-12 items-center mb-20"
          >
            <div>
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Travel Insurance
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Travel Insurance protects you from unexpected problems that can occur during your trips. It covers
                medical emergencies, trip cancellations, travel delays, lost baggage, and other travel-related risks.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                With travel insurance, you can explore new places without stress and enjoy a safe, worry-free journey
                anywhere in the world.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/#contact">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-lg px-8 shadow-brand-lg hover:shadow-brand-xl transition-all duration-300"
                  >
                    Get a Quote
                  </Button>
                </a>
                <a href="/#contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white transition-all duration-300 bg-transparent"
                  >
                    <Phone className="mr-2" size={20} />
                    Talk to Expert
                  </Button>
                </a>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-brand-xl"
            >
              <Image src="/happy-airport-travelers.png" alt="Travel Insurance" fill className="object-cover" />
            </motion.div>
          </motion.div>

          {/* Key Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          >
            {[
              {
                icon: Heart,
                title: "Medical Emergency Coverage",
                desc: "Comprehensive healthcare protection during travel",
              },
              {
                icon: Plane,
                title: "Trip Protection",
                desc: "Coverage for cancellations and travel delays",
              },
              {
                icon: Briefcase,
                title: "Lost Baggage Compensation",
                desc: "Financial protection for lost or delayed luggage",
              },
              { icon: Globe, title: "24/7 Worldwide Assistance", desc: "Round-the-clock support anywhere you travel" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-cyan-50/80 to-blue-50/50 p-6 rounded-xl shadow-brand-md hover:shadow-brand-lg transition-all duration-500 border border-cyan-100/50 group hover:scale-105"
              >
                <feature.icon className="w-12 h-12 text-cyan-600 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Detailed Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-brand-lg mb-20"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why You Need Travel Insurance?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Emergency medical treatment coverage abroad",
                "Trip cancellation due to unforeseen circumstances",
                "Flight delay and missed connection compensation",
                "Lost, stolen, or delayed baggage protection",
                "Emergency evacuation and repatriation services",
                "24/7 emergency assistance helpline worldwide",
                "Personal accident and liability coverage",
                "Coverage for adventure sports and activities",
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#22C55E] flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl" />

            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Travel with Complete Peace of Mind</h2>
              <p className="text-xl mb-8 opacity-95">
                Get comprehensive travel insurance coverage for your next adventure
              </p>
              <a href="/#contact">
                <Button
                  size="lg"
                  className="bg-white text-cyan-600 hover:bg-gray-100 text-lg px-12 shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Get Travel Insurance Now
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
