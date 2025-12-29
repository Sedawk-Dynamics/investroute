"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Shield, DollarSign, Clock, FileCheck, CheckCircle2, Phone } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function TermInsurancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/50 via-white to-gray-50/30">
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
              <h1 className="text-5xl font-bold mb-6 text-gradient-primary">Term Insurance</h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Term Insurance is a simple and affordable life insurance plan that provides financial protection to your
                family in case of your untimely death. It ensures that your loved ones can maintain their lifestyle, pay
                off debts, and secure their future even when you are not around.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                This plan offers high coverage at low premiums and gives you complete peace of mind knowing your family
                is financially safe.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/#contact">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#1E3A8A] to-[#3B5BA5] hover:from-[#162D6B] hover:to-[#2A4780] text-lg px-8 shadow-brand-lg hover:shadow-brand-xl transition-all duration-300"
                  >
                    Get a Quote
                  </Button>
                </a>
                <a href="/#contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 border-2 border-[#1E3A8A] text-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white transition-all duration-300 bg-transparent"
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
                alt="Term Insurance Protection"
                fill
                className="object-cover"
              />
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
                icon: DollarSign,
                title: "High Coverage, Low Cost",
                desc: "Get maximum life coverage at minimal premium rates",
              },
              {
                icon: Shield,
                title: "Financial Protection",
                desc: "Secure your family's future and financial stability",
              },
              {
                icon: Clock,
                title: "Flexible Duration",
                desc: "Choose policy terms that match your life goals",
              },
              { icon: FileCheck, title: "Tax Benefits", desc: "Save taxes as per government rules" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50/80 to-indigo-50/50 p-6 rounded-xl shadow-brand-md hover:shadow-brand-lg transition-all duration-500 border border-blue-100/50 group hover:scale-105"
              >
                <feature.icon className="w-12 h-12 text-[#1E3A8A] mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold mb-2 group-hover:text-[#1E3A8A] transition-colors duration-300">
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
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Term Insurance?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Highest life coverage at the lowest premiums in the market",
                "Protect your family from financial burden of debts and loans",
                "Maintain your family's lifestyle even in your absence",
                "Flexible policy terms from 10 to 40 years",
                "Tax deductions under Section 80C and Section 10(10D)",
                "Quick and hassle-free claim settlement process",
                "Option to add riders for critical illness and accidental death",
                "No maturity benefits, pure protection at affordable rates",
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
            className="bg-gradient-to-r from-[#1E3A8A] via-[#2A4A9F] to-[#3B5BA5] rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FF6B2C]/20 rounded-full blur-3xl" />

            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Get Maximum Protection at Minimum Cost</h2>
              <p className="text-xl mb-8 opacity-95">
                Compare term insurance plans and get the best coverage for your family
              </p>
              <a href="/#contact">
                <Button
                  size="lg"
                  className="bg-white text-[#1E3A8A] hover:bg-gray-100 text-lg px-12 shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Get Your Quote Now
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
