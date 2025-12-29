"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Home, Briefcase, Car, GraduationCap, Calculator, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function LoansPage() {
  const [showEMICalculator, setShowEMICalculator] = useState(false)
  const [loanAmount, setLoanAmount] = useState("")
  const [interestRate, setInterestRate] = useState("")
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

  const loanTypes = [
    {
      icon: Home,
      title: "Home Loans",
      description: "Turn your dream home into reality with competitive interest rates starting from 8.5% p.a.*",
      features: ["Loan up to ₹5 Crores", "Tenure up to 30 years", "Minimal documentation"],
    },
    {
      icon: Briefcase,
      title: "Personal Loans",
      description: "Quick approval personal loans for all your immediate financial needs.",
      features: ["Instant approval", "Flexible tenure", "No collateral required"],
    },
    {
      icon: Car,
      title: "Vehicle Loans",
      description: "Drive your dream car with easy EMI options and attractive interest rates.",
      features: ["100% on-road funding", "Quick processing", "Flexible repayment"],
    },
    {
      icon: GraduationCap,
      title: "Education Loans",
      description: "Invest in your future with education loans for domestic and international studies.",
      features: ["Cover full tuition", "Moratorium period", "Tax benefits"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50/50 via-white to-gray-50/30">
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
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-gradient-accent">Loans Made Easy</h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Get instant loan approval with competitive interest rates. Whether it's for your home, business, or
                personal needs - we've got you covered.
              </p>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Calculator className="w-6 h-6 text-[#22C55E]" />
                  <span className="text-gray-700 font-semibold">EMI Calculator Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-6 h-6 text-[#22C55E]" />
                  <span className="text-gray-700 font-semibold">24-Hour Approval</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="/#contact">
                  <Button className="bg-gradient-to-r from-[#22C55E] to-[#4ADE80] hover:from-[#16A34A] hover:to-[#22C55E] px-8 py-6 text-lg shadow-brand-lg hover:shadow-brand-xl transition-all duration-300">
                    Apply Now
                  </Button>
                </a>
                <Button
                  onClick={() => setShowEMICalculator(true)}
                  variant="outline"
                  className="px-8 py-6 text-lg border-2 border-[#22C55E] text-[#22C55E] hover:bg-[#22C55E] hover:text-white transition-all duration-300 bg-transparent"
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
                src="/dream-home-loan.jpg"
                alt="Loan Services"
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
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">Our Loan Products</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from a wide range of loan products designed to meet your financial needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {loanTypes.map((loan, index) => (
              <motion.div
                key={loan.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="bg-gradient-to-br from-green-50/80 to-emerald-50/50 p-8 rounded-2xl hover:shadow-brand-xl transition-all duration-500 border border-green-100/50 h-full flex flex-col group hover:scale-105"
              >
                <div className="bg-gradient-to-br from-[#22C55E] to-[#4ADE80] w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <loan.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-[#22C55E] transition-colors duration-300">
                  {loan.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{loan.description}</p>
                <ul className="space-y-2 mb-6 flex-grow">
                  {loan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href="/#contact" className="mt-auto">
                  <Button className="w-full bg-gradient-to-r from-[#22C55E] to-[#4ADE80] hover:from-[#16A34A] hover:to-[#22C55E] shadow-md hover:shadow-lg transition-all duration-300">
                    Apply Now
                  </Button>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#22C55E] via-[#4ADE80] to-[#10B981] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1E3A8A]/20 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Need a Loan?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95">
              Get instant approval with minimal documentation and competitive interest rates
            </p>
            <a href="/#contact">
              <Button className="bg-white text-[#22C55E] hover:bg-gray-100 px-10 py-6 text-lg font-semibold shadow-2xl hover:scale-105 transition-all duration-300">
                Apply for Loan
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      <Dialog open={showEMICalculator} onOpenChange={setShowEMICalculator}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-[#22C55E]">EMI Calculator</DialogTitle>
            <DialogDescription>Calculate your monthly EMI for loan planning</DialogDescription>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <div className="space-y-2">
              <Label htmlFor="loan-amount">Loan Amount (₹)</Label>
              <Input
                id="loan-amount"
                type="number"
                placeholder="e.g., 1000000"
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
                placeholder="e.g., 8.5"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tenure">Loan Tenure (years)</Label>
              <Input
                id="tenure"
                type="number"
                placeholder="e.g., 20"
                value={tenure}
                onChange={(e) => setTenure(e.target.value)}
              />
            </div>
            <Button
              onClick={calculateEMI}
              className="w-full bg-gradient-to-r from-[#22C55E] to-[#4ADE80] hover:from-[#16A34A] hover:to-[#22C55E]"
            >
              Calculate EMI
            </Button>
            {emi !== null && (
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 text-center">
                <p className="text-sm text-gray-600 mb-2">Your Monthly EMI</p>
                <p className="text-4xl font-bold text-[#22C55E]">₹{emi.toLocaleString("en-IN")}</p>
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
