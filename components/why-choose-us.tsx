"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { CheckCircle2 } from "lucide-react"

const reasons = [
  {
    title: "Transparency",
    description: "Clear communication and honest advice with no hidden charges or surprises.",
  },
  {
    title: "Expert Guidance",
    description: "Experienced professionals dedicated to understanding your unique financial needs.",
  },
  {
    title: "Integrity",
    description: "Ethical practices and client-first approach in every recommendation we make.",
  },
  {
    title: "Comprehensive Solutions",
    description: "One-stop destination for all your financial planning and investment needs.",
  },
  {
    title: "Personalized Service",
    description: "Tailored strategies designed specifically for your financial goals and risk profile.",
  },
  {
    title: "Proven Track Record",
    description: "Years of experience helping clients achieve their financial aspirations successfully.",
  },
]

const listVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
}

const listItemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px", amount: 0.2 })

  return (
    <section
      id="why-choose-us"
      data-section="about"
      ref={ref}
      className="py-24 bg-gradient-to-br from-muted/30 via-background to-secondary/5"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-balance leading-tight">
              Why Choose <span className="text-gradient-brand">Investroute</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-pretty">
              At Investroute, we believe in building lasting relationships based on trust, transparency, and exceptional
              service. Our commitment to your financial success sets us apart in the wealth management industry.
            </p>
            <motion.div
              variants={listVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-4"
            >
              {reasons.map((reason, index) => (
                <motion.div key={index} variants={listItemVariants} className="flex gap-4">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                    transition={{ delay: index * 0.08 + 0.3, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
                  >
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">{reason.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square relative">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-br from-primary/15 via-secondary/15 to-accent/15 rounded-3xl blur-xl"
              />
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.4 }}
                className="absolute inset-4 bg-card rounded-3xl shadow-2xl overflow-hidden border-2 border-border"
              >
                <img
                  src="/professional-financial-advisor-meeting-with-client.jpg"
                  alt="Professional Service"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
