"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Target, Eye, Award, Users, TrendingUp, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function AboutPage() {
  const values = [
    { 
      icon: Shield,
      title: "Trust & Transparency",
      description: "Building lasting relationships through honest and transparent financial advisory.",
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Your financial goals are our priority. We're committed to your success.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Delivering top-tier financial solutions with expertise and dedication.",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Leveraging technology to provide seamless and modern financial services.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-40 pb-20 px-4"
      >
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
            >
              About Investroute
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              <span><b>"Ek Rista Vishwas Ka"</b></span> - Building trust through comprehensive financial solutions
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/professional-financial-advisor-meeting-with-client.jpg"
                alt="About Investroute"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Our Story</h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Investroute was founded with a simple mission: to make financial services accessible, transparent, and
                trustworthy for everyone. We believe that every individual deserves expert financial guidance to achieve
                their dreams.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                With 17 years of experience in the financial industry, our team of certified professionals is dedicated to
                providing personalized solutions for investments, insurance, and loans.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Today, we serve thousands of satisfied clients across India, helping them build wealth, protect their
                families, and achieve financial freedom.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-10 rounded-2xl border border-blue-100"
            >
              <div className="bg-blue-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-gray-800">Our Mission</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To empower individuals and families with accessible, transparent financial solutions that help them
                achieve their life goals and build lasting wealth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-indigo-50 to-purple-50 p-10 rounded-2xl border border-indigo-100"
            >
              <div className="bg-indigo-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-gray-800">Our Vision</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To become India's most trusted financial services partner, recognized for innovation, integrity, and
                exceptional customer service across all financial needs.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Principles that guide us in delivering exceptional financial services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="bg-gradient-to-br from-blue-100 to-indigo-100 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <value.icon className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Join Our Journey</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Experience the difference of personalized financial planning with Investroute
            </p>
            <a href="#contact">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-6 text-lg font-semibold">
                Get Started Today
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
