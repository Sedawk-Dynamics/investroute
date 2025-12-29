"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, TrendingUp, LineChart, Banknote } from "lucide-react"

const services = [
  {
    icon: TrendingUp,
    title: "Mutual Funds",
    description:
      "Diversified investment portfolios tailored to your risk appetite and financial goals for long-term wealth creation.",
  },
  {
    icon: LineChart,
    title: "Share Trading",
    description:
      "Advanced trading platforms and expert guidance for equity investments in Indian and international markets.",
  },
  {
    icon: Shield,
    title: "Insurance Solutions",
    description:
      "Comprehensive insurance coverage for life, health, and assets to protect what matters most to you and your family.",
  },
  {
    icon: Banknote,
    title: "Loan Services",
    description:
      "Flexible loan solutions for personal, business, and property needs with competitive rates and quick processing.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px", amount: 0.2 })

  return (
    <section id="services" ref={ref} className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Our <span className="text-gradient-brand">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Comprehensive financial solutions designed to help you achieve your wealth management goals
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <motion.div
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="h-full"
              >
                <Card className="h-full flex flex-col border-2 border-border hover:border-primary/50 hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-card to-card/50 backdrop-blur-sm">
                  <CardContent className="p-6 space-y-4 flex flex-col flex-1">
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center shadow-md"
                    >
                      <service.icon className="w-8 h-8 text-primary" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed flex-1 text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
