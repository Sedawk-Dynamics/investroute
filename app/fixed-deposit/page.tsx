"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Shield, TrendingUp, Lock, Clock, Receipt, Percent } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function FixedDepositPage() {
  const benefits = [
    {
      icon: Shield,
      title: "Guaranteed Returns",
      description: "Fixed interest rates ensure predictable returns throughout the deposit tenure.",
    },
    {
      icon: Lock,
      title: "Zero Risk Investment",
      description: "DICGC insurance up to ₹5 lakhs per depositor ensures your capital is protected.",
    },
    {
      icon: Percent,
      title: "Attractive Interest Rates",
      description: "Competitive rates ranging from 6.5% to 8.5% p.a. depending on tenure and amount.",
    },
    {
      icon: Clock,
      title: "Flexible Tenure",
      description: "Choose from 7 days to 10 years tenure based on your financial goals.",
    },
    {
      icon: TrendingUp,
      title: "Senior Citizen Benefits",
      description: "Additional 0.5% interest rate for senior citizens on all FD schemes.",
    },
    {
      icon: Receipt,
      title: "Tax Saving Options",
      description: "5-year tax-saving FDs eligible for deduction under Section 80C up to ₹1.5 lakhs.",
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Fixed Deposits
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Secure your future with guaranteed returns. Choose from India's top-rated banks and NBFCs offering
                competitive interest rates up to 8.5% p.a.
              </p>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-2">Current Best Rates</h3>
                <div className="space-y-2 text-gray-700">
                  <p className="text-lg">
                    <span className="font-semibold">Regular FD:</span> Up to 7.5% p.a.
                  </p>
                  <p className="text-lg">
                    <span className="font-semibold">Senior Citizen:</span> Up to 8.0% p.a.
                  </p>
                  <p className="text-lg">
                    <span className="font-semibold">Tax Saver FD:</span> Up to 7.0% p.a. (5-year lock-in)
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/#contact">
                  <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-6 text-lg">Open FD Account</Button>
                </Link>
                <Link href="/calculators">
                  <Button variant="outline" className="px-8 py-6 text-lg bg-transparent">
                    Calculate Returns
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <Image
                src="/secure-bank-vault-with-gold-bars-representing-fixe.jpg"
                alt="Secure Fixed Deposit"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Why Choose Fixed Deposits?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Safe, secure, and guaranteed returns for your hard-earned money
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 border border-blue-100"
              >
                <div className="bg-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-8 text-center">FD Comparison Table</h2>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Bank/NBFC</th>
                    <th className="px-6 py-4 text-left">Interest Rate</th>
                    <th className="px-6 py-4 text-left">Tenure</th>
                    <th className="px-6 py-4 text-left">Min. Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 font-semibold">HDFC Bank</td>
                    <td className="px-6 py-4">7.00% - 7.50%</td>
                    <td className="px-6 py-4">1-5 years</td>
                    <td className="px-6 py-4">₹5,000</td>
                  </tr>
                  <tr className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 font-semibold">ICICI Bank</td>
                    <td className="px-6 py-4">6.70% - 7.25%</td>
                    <td className="px-6 py-4">1-10 years</td>
                    <td className="px-6 py-4">₹10,000</td>
                  </tr>
                  <tr className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 font-semibold">SBI</td>
                    <td className="px-6 py-4">6.50% - 7.10%</td>
                    <td className="px-6 py-4">7 days - 10 years</td>
                    <td className="px-6 py-4">₹1,000</td>
                  </tr>
                  <tr className="hover:bg-blue-50 transition-colors">
                    <td className="px-6 py-4 font-semibold">Bajaj Finance</td>
                    <td className="px-6 py-4">7.50% - 8.50%</td>
                    <td className="px-6 py-4">12-60 months</td>
                    <td className="px-6 py-4">₹15,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Invest in Fixed Deposits?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Get expert guidance to choose the best FD scheme for your financial goals
            </p>
            <Link href="/#contact">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-6 text-lg font-semibold">
                Talk to Our Experts
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
