"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const stats = [
  { value: "₹5.50 Lakh Cr", label: "Assets Under Management" },
  { value: "1,772", label: "Branch Network" },
  { value: "3.9 Cr", label: "Active Customer Base" },
  { value: "₹1.78 Lakh Cr", label: "Consolidated Lending Book" },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px", amount: 0.3 })

  return (
    <section id="stats" ref={ref} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div key={index} variants={itemVariants} className="text-center">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                transition={{
                  delay: index * 0.12 + 0.2,
                  duration: 0.6,
                  ease: [0.34, 1.56, 0.64, 1],
                  type: "spring",
                  stiffness: 100,
                }}
                className="text-3xl lg:text-4xl font-bold text-primary mb-2"
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
