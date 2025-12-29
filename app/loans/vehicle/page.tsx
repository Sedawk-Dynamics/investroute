"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Car, CheckCircle, Clock, FileText, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function VehicleLoansPage() {
  const [showEMICalculator, setShowEMICalculator] = useState(false)
  const [loanAmount, setLoanAmount] = useState("")
  const [interestRate, setInterestRate] = useState("9.5")
  const [tenure, setTenure] = useState("")
  const [emi, setEMI] = useState<number | null>(null)

  const calculateEMI = () => {
    const principal = Number.parseFloat(loanAmount)
    const rate = Number.parseFloat(interestRate) / 12 / 100
    const months = Number.parseFloat(tenure) * 12

    if (principal && rate && months) {
      const emiValue = (principal * rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1)
      setEMI(Math.round(emiValue))
    }
  }

  const features = [
    {
      icon: Shield,
      title: "100% On-Road Funding",
      description: "Finance entire on-road price including insurance and registration",
    },
    {
      icon: Zap,
      title: "Quick Processing",
      description: "Get approval within 48 hours with minimal paperwork",
    },
    {
      icon: Clock,
      title: "Flexible Repayment",
      description: "Choose tenure from 1 to 7 years as per your convenience",
    },
    {
      icon: FileText,
      title: "Easy Documentation",
      description: "Simple documentation with doorstep service available",
    },
  ]

  const benefits = [
    "Loan for new and used vehicles",
    "Competitive interest rates starting from 9.5% p.a.",
    "Loan amount up to 90% of vehicle value",
    "No prepayment charges after 6 months",
    "Free insurance advisory service",
    "Balance transfer facility available",
  ]

  const vehicleTypes = ["Cars", "Bikes", "SUVs", "Commercial Vehicles", "Electric Vehicles", "Luxury Vehicles"]

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50/50 via-white to-gray-50/30">
      <Header />

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="pt-40 pb-20 px-4"
      >
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-6">
                <Car className="w-5 h-5 text-purple-600" />
                <span className="text-purple-600 font-semibold">Vehicle Loans</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-gradient-accent">
                Drive Your Dream Vehicle Today
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                100% on-road funding available. Get vehicle loans with attractive interest rates and flexible EMI
                options for cars, bikes, and more.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/#contact">
                  <Button className="bg-gradient-to-r from-[#9333EA] to-[#A855F7] hover:from-[#7C3AED] hover:to-[#9333EA] px-8 py-6 text-lg shadow-brand-lg hover:shadow-brand-xl transition-all duration-300">
                    Apply Now
                  </Button>
                </a>
                <Button
                  onClick={() => setShowEMICalculator(true)}
                  variant="outline"
                  className="px-8 py-6 text-lg border-2 border-[#9333EA] text-[#9333EA] hover:bg-[#9333EA] hover:text-white transition-all duration-300 bg-transparent"
                >
                  Calculate EMI
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <Image
                src="/modern-car-showroom.png"
                alt="Vehicle Loans"
                width={600}
                height={400}
                className="rounded-2xl shadow-brand-xl"
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Key Features</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Everything you need in a vehicle loan</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="bg-gradient-to-br from-purple-50/80 to-fuchsia-50/50 p-6 rounded-2xl hover:shadow-brand-xl transition-all duration-500 border border-purple-100/50"
              >
                <div className="bg-gradient-to-br from-[#9333EA] to-[#A855F7] w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">Why Choose Our Vehicle Loans?</h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-[#22C55E] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">Vehicles We Finance</h2>
              <div className="grid grid-cols-2 gap-4">
                {vehicleTypes.map((type, index) => (
                  <motion.div
                    key={type}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white p-4 rounded-xl shadow-md border border-purple-100 hover:shadow-lg transition-all duration-300"
                  >
                    <p className="text-gray-700 font-semibold text-center">{type}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#9333EA] via-[#A855F7] to-[#C084FC] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Drive Home?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
              Apply now and get your dream vehicle with our easy vehicle loan process
            </p>
            <a href="/#contact">
              <Button className="bg-white text-[#9333EA] hover:bg-gray-100 px-10 py-6 text-lg font-semibold shadow-2xl hover:scale-105 transition-all duration-300">
                Apply for Vehicle Loan
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      <Dialog open={showEMICalculator} onOpenChange={setShowEMICalculator}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-[#9333EA]">Vehicle Loan EMI Calculator</DialogTitle>
            <DialogDescription>Calculate your monthly EMI for vehicle loan planning</DialogDescription>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <div className="space-y-2">
              <Label htmlFor="loan-amount">Loan Amount (₹)</Label>
              <Input
                id="loan-amount"
                type="number"
                placeholder="e.g., 800000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="interest-rate">Interest Rate (% per annum)</Label>
              <Input
                id="interest-rate"
                type="number"
                step="0.1"
                placeholder="e.g., 9.5"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tenure">Loan Tenure (years)</Label>
              <Input
                id="tenure"
                type="number"
                placeholder="e.g., 5"
                value={tenure}
                onChange={(e) => setTenure(e.target.value)}
              />
            </div>
            <Button
              onClick={calculateEMI}
              className="w-full bg-gradient-to-r from-[#9333EA] to-[#A855F7] hover:from-[#7C3AED] hover:to-[#9333EA]"
            >
              Calculate EMI
            </Button>
            {emi !== null && (
              <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6 text-center">
                <p className="text-sm text-gray-600 mb-2">Your Monthly EMI</p>
                <p className="text-4xl font-bold text-[#9333EA]">₹{emi.toLocaleString("en-IN")}</p>
                <p className="text-xs text-gray-500 mt-2">*Approximate value for reference only</p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  )
}
