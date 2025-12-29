"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Phone } from "lucide-react"

const team = [
  {
    name: "Manoj Rathore",
    role: "MD & CEO",
    phone: "9235622204",
    image: "/professional-male-executive-portrait.jpg",
  },
  {
    name: "Kanak Pandey",
    role: "Manager - Strategy & Planning",
    phone: "9151722204",
    image: "/professional-female-manager-portrait.jpg",
  },
  {
    name: "Preeti Rathore",
    role: "Relationship Manager - Sales",
    phone: "9235622204",
    image: "/professional-female-sales-manager-portrait.jpg",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9, rotateX: -15 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
}

export function Team() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px", amount: 0.2 })

  return (
    <section id="team" ref={ref} className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Meet Our <span className="text-primary">Team</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Experienced professionals dedicated to your financial success
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {team.map((member, index) => (
            <motion.div key={index} variants={cardVariants}>
              <motion.div
                whileHover={{ y: -12, scale: 1.03 }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <Card className="overflow-hidden border-2 hover:border-primary/50 hover:shadow-2xl transition-all duration-300">
                  <div className="aspect-square overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.15 }}
                      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6 space-y-3">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone size={16} className="text-primary" />
                      <span>{member.phone}</span>
                    </div>
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
