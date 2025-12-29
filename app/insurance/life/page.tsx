"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Shield, Heart, Users, TrendingUp, CheckCircle2, Phone } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function LifeInsurancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50/50 via-white to-gray-50/30">
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
              <div className="mb-6">
<Image
  src="/sabse-pehle-life-insurance-logo.jpg"
  alt="Sabse Pehle Life Insurance"
  width={3000}
  height={1000}
  className="h-64 w-auto object-contain"
  priority
/>



              </div>
              <h1 className="text-5xl font-bold mb-6 text-gradient-secondary">Life Insurance</h1>
              <p className="text-xl text-gray-600 mb-8">
                Secure your family's future with comprehensive life insurance plans. Get financial protection and peace
                of mind for your loved ones.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/#contact">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#FF6B2C] to-[#FF8C5C] hover:from-[#FF5517] hover:to-[#FF7647] text-lg px-8 shadow-brand-lg hover:shadow-brand-xl transition-all duration-300"
                  >
                    Get a Quote
                  </Button>
                </a>
                <a href="/#contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 border-2 border-[#FF6B2C] text-[#FF6B2C] hover:bg-[#FF6B2C] hover:text-white transition-all duration-300 bg-transparent"
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
              <Image
                src="/family-protection-insurance.jpg"
                alt="Life Insurance Protection"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          >
            {[
              { icon: Shield, title: "Complete Protection", desc: "Comprehensive coverage for life's uncertainties" },
              { icon: Heart, title: "Family Security", desc: "Financial support for your loved ones" },
              { icon: Users, title: "Multiple Plans", desc: "Term, whole life, and endowment options" },
              { icon: TrendingUp, title: "Tax Benefits", desc: "Save taxes under Section 80C & 10(10D)" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-orange-50/80 to-red-50/50 p-6 rounded-xl shadow-brand-md hover:shadow-brand-lg transition-all duration-500 border border-orange-100/50 group hover:scale-105"
              >
                <feature.icon className="w-12 h-12 text-[#FF6B2C] mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold mb-2 group-hover:text-[#FF6B2C] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-brand-lg mb-20"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Our Life Insurance?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Customizable coverage amounts based on your needs",
                "Flexible premium payment options",
                "Rider benefits for critical illness and accidental death",
                "Quick and hassle-free claim settlement",
                "Expert guidance from certified advisors",
                "Comprehensive coverage at competitive premiums",
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
            className="bg-gradient-to-r from-[#FF6B2C] via-[#FF8C5C] to-[#FFB088] rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#1E3A8A]/20 rounded-full blur-3xl" />

            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Family's Future?</h2>
              <p className="text-xl mb-8 opacity-95">Get a personalized life insurance quote in minutes</p>
              <a href="/#contact">
                <Button
                  size="lg"
                  className="bg-white text-[#FF6B2C] hover:bg-gray-100 text-lg px-12 shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Get Started Now
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
