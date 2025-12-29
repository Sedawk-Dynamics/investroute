"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import Image from "next/image"
import { Mail, Phone, Award, Users } from "lucide-react"

const teamMembers = [
  {
    name: "Rajesh Kumar",
    role: "Founder & CEO",
    image: "/professional-male-executive-portrait.jpg",
    phone: "8353922204",
    email: "rajesh@investroutecapital.com",
    expertise: "Wealth Management, Financial Planning",
  },
  {
    name: "Priya Sharma",
    role: "Senior Financial Advisor",
    image: "/professional-female-manager-portrait.jpg",
    phone: "8353922204",
    email: "priya@investroutecapital.com",
    expertise: "Mutual Funds, Portfolio Management",
  },
  {
    name: "Anita Verma",
    role: "Insurance Specialist",
    image: "/professional-female-sales-manager-portrait.jpg",
    phone: "8353922204",
    email: "anita@investroutecapital.com",
    expertise: "Life & Health Insurance",
  },
]

export default function TeamPage() {
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
              <Users className="w-5 h-5 text-secondary" />
              <span className="text-sm font-medium text-secondary">Meet Our Experts</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-gradient-primary text-pretty">
              Our Professional Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Backed by years of experience and a passion for helping clients achieve their financial goals, our team is
              dedicated to providing personalized wealth management solutions.
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-3 gap-8 mb-20"
          >
            {[
              { icon: Users, label: "Expert Advisors", value: "15+" },
              { icon: Award, label: "Years of Experience", value: "17+" },
              { icon: Award, label: "Certifications", value: "25+" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-secondary/10 to-accent/10 p-8 rounded-2xl text-center shadow-brand-md hover:shadow-brand-lg transition-all duration-300 group hover:scale-105"
              >
                <stat.icon className="w-12 h-12 text-secondary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-4xl font-bold text-secondary mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Team Members */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-brand-lg hover:shadow-brand-xl transition-all duration-500 group hover:scale-105"
              >
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-secondary transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-accent font-medium mb-4">{member.role}</p>
                  <div className="space-y-3 mb-4">
                    <p className="text-sm text-gray-600 flex items-start gap-2">
                      <Award className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                      <span>{member.expertise}</span>
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 pt-4 border-t border-gray-100">
                    <a
                      href={`tel:${member.phone}`}
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-secondary transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      {member.phone}
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-secondary transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      {member.email}
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
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
              <h2 className="text-3xl font-bold mb-4">Ready to Work With Our Experts?</h2>
              <p className="text-xl mb-8 opacity-95">Schedule a consultation with our financial advisors today</p>
              <a
                href="/#contact"
                className="inline-block bg-white text-secondary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
