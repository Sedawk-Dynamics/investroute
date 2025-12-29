"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const partners = [
  {
    name: "Aditya Birla Capital",
    logo: "/aditya-birla-capital-logo-hd.webp",
  },
  {
    name: "Policy Bazaar",
    logo: "/policy-bazaar-logo.jpg",
  },
  {
    name: "PNB",
    logo: "/pnb-logo.jpg",
  },
  {
    name: "Kotak Mutual Fund",
    logo: "/kotak-mutual-fund-logo.webp",
  },
  {
    name: "ICICI Mutual Fund",
    logo: "/icici-mutual-fund-logo.jpg",
  },
  {
    name: "HDFC Mutual Fund",
    logo: "/hdfc-mutual-fund-logo.png",
  },
]

export function TrustedPartners() {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 lg:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Our Trusted <span className="text-primary">Partners</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            We collaborate with India's leading financial institutions to bring you the best investment and insurance
            solutions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 lg:gap-6 items-stretch"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex items-center justify-center p-4 sm:p-5 lg:p-6 bg-card rounded-xl border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 h-32 sm:h-36 lg:h-40"
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={`${partner.name} logo`}
                width={250}
                height={100}
                className="w-full h-auto max-h-24 sm:max-h-28 lg:max-h-32 object-contain transition-all duration-300"
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 sm:mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 lg:gap-6"
        >
          <div className="text-center p-5 sm:p-6 bg-card rounded-xl border border-border/50">
            <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">1500+</div>
            <p className="text-sm sm:text-base text-muted-foreground">Happy Clients</p>
          </div>
          <div className="text-center p-5 sm:p-6 bg-card rounded-xl border border-border/50">
            <div className="text-3xl sm:text-4xl font-bold text-secondary mb-2">₹110 Cr+</div>
            <p className="text-sm sm:text-base text-muted-foreground">AUM</p>
          </div>
          <div className="text-center p-5 sm:p-6 bg-card rounded-xl border border-border/50">
            <div className="text-3xl sm:text-4xl font-bold text-accent mb-2">17+</div>
            <p className="text-sm sm:text-base text-muted-foreground">Years of Excellence</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
