"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Shield, Heart, Car, Home, ArrowRight, CheckCircle2, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const insuranceTypes = [
  {
    title: "Life Insurance",
    icon: Heart,
    description: "Secure your family's financial future with comprehensive life coverage",
    link: "/insurance/life",
    image: "/family-protection-insurance.jpg",
    features: ["Term Insurance", "Whole Life Plans", "ULIP", "Child Plans"],
    color: "from-orange-50 to-red-50",
    iconColor: "text-[#FF6B2C]",
    buttonColor: "bg-[#FF6B2C] hover:bg-[#FF5517]",
  },
  {
    title: "Health Insurance",
    icon: Shield,
    description: "Protect yourself and your loved ones from medical emergencies",
    link: "/insurance/health",
    image: "/happy-family-planning-finances.jpg",
    features: ["Individual Plans", "Family Floater", "Senior Citizen", "Critical Illness"],
    color: "from-blue-50 to-indigo-50",
    iconColor: "text-[#2563EB]",
    buttonColor: "bg-[#2563EB] hover:bg-[#1E40AF]",
  },
  {
    title: "Vehicle Insurance",
    icon: Car,
    description: "Complete protection for your car and two-wheeler",
    link: "/insurance/vehicle",
    image: "/dream-home-loan.jpg",
    features: ["Comprehensive Cover", "Third Party", "Zero Depreciation", "Roadside Assistance"],
    color: "from-emerald-50 to-teal-50",
    iconColor: "text-[#22C55E]",
    buttonColor: "bg-[#22C55E] hover:bg-[#16A34A]",
  },
]

export default function InsurancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/50 via-white to-orange-50/30">
      <Header />

      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary/10 to-accent/10 px-6 py-2 rounded-full mb-6">
              <Shield className="w-5 h-5 text-secondary" />
              <span className="text-sm font-medium text-secondary">Comprehensive Coverage</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-gradient-primary text-pretty">
              Insurance Solutions for Every Need
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Protect what matters most with our range of insurance products. From life and health to vehicle coverage,
              we've got you covered with the best plans from leading insurers.
            </p>
          </motion.div>

          {/* Insurance Types */}
          <div className="space-y-12 mb-20">
            {insuranceTypes.map((insurance, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${insurance.color} rounded-2xl overflow-hidden shadow-brand-lg hover:shadow-brand-xl transition-all duration-500 group hover:scale-[1.02]`}
              >
                <div
                  className={`grid lg:grid-cols-2 gap-8 p-8 md:p-12 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <insurance.icon
                      className={`w-16 h-16 ${insurance.iconColor} mb-6 group-hover:scale-110 transition-transform duration-300`}
                    />
                    <h2 className="text-4xl font-bold mb-4 text-gray-900">{insurance.title}</h2>
                    <p className="text-lg text-gray-600 mb-6">{insurance.description}</p>

                    <div className="space-y-3 mb-8">
                      {insurance.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle2 className={`w-5 h-5 ${insurance.iconColor} flex-shrink-0`} />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-4">
                      <Link href={insurance.link}>
                        <Button
                          size="lg"
                          className={`${insurance.buttonColor} text-white text-lg px-8 shadow-brand-lg hover:shadow-brand-xl transition-all duration-300`}
                        >
                          Learn More
                          <ArrowRight className="ml-2" size={20} />
                        </Button>
                      </Link>
                      <Link href="/#contact">
                        <Button
                          size="lg"
                          variant="outline"
                          className={`text-lg px-8 border-2 ${insurance.iconColor} hover:bg-white/50 transition-all duration-300`}
                        >
                          <Phone className="mr-2" size={20} />
                          Get Quote
                        </Button>
                      </Link>
                    </div>
                  </div>

                  <div
                    className={`relative h-[400px] rounded-xl overflow-hidden shadow-brand-lg ${index % 2 === 1 ? "lg:order-1" : ""}`}
                  >
                    <Image
                      src={insurance.image || "/placeholder.svg"}
                      alt={insurance.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-brand-lg mb-20"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Why Choose Investroute for Insurance?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Shield, title: "Best Coverage", desc: "Plans from top insurance providers" },
                { icon: CheckCircle2, title: "Quick Claims", desc: "Fast and hassle-free claim settlement" },
                { icon: Heart, title: "Expert Advice", desc: "Personalized recommendations from certified advisors" },
                { icon: ArrowRight, title: "Easy Process", desc: "Simple documentation and quick policy issuance" },
                { icon: Phone, title: "24/7 Support", desc: "Round-the-clock assistance for all your queries" },
                { icon: Home, title: "Trusted Partner", desc: "17+ years of experience in financial services" },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="text-center"
                >
                  <benefit.icon className="w-12 h-12 text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.desc}</p>
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
            className="bg-gradient-to-r from-secondary via-[#2563EB] to-accent rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/30 rounded-full blur-3xl" />

            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Need Help Choosing the Right Insurance?</h2>
              <p className="text-xl mb-8 opacity-95">Our experts are here to guide you</p>
              <Link href="/#contact">
                <Button
                  size="lg"
                  className="bg-white text-secondary hover:bg-gray-100 text-lg px-12 shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Talk to an Expert
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
