"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Phone,
  User,
  Mail,
  CreditCard,
  MapPin,
  Calendar,
  ArrowRight,
  Shield,
  TrendingUp,
  Clock,
  FileText,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function OpenAccountPage() {
  const [step, setStep] = useState(1)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [formData, setFormData] = useState({
    mobile: "",
    name: "",
    email: "",
    pan: "",
    dob: "",
    pincode: "",
    referralCode: "",
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 3) {
      setStep(step + 1)
    } else {
      console.log("Account opening form submitted:", formData)
    }
  }

  const slides = [
    {
      icon: <FileText className="w-20 h-20 text-[#FF6B2C]" />,
      title: "Minimum Documents. Quick Onboarding.",
      description:
        "Start with just PAN Card, Bank Statements, Aadhaar Card, and Cancelled Cheque required only if needed",
      decoration: "📄",
    },
    {
      icon: <Shield className="w-20 h-20 text-[#1E3A8A]" />,
      title: "100% Secure & Regulated",
      description: "Your investments are protected with bank-grade security and SEBI regulations",
      decoration: "🔒",
    },
    {
      icon: <TrendingUp className="w-20 h-20 text-green-500" />,
      title: "Zero Account Opening Charges",
      description: "Open your demat and trading account absolutely free with no hidden charges",
      decoration: "📈",
    },
    {
      icon: <Clock className="w-20 h-20 text-[#FF6B2C]" />,
      title: "Start Investing in Minutes",
      description: "Complete KYC verification online and begin your investment journey instantly",
      decoration: "⏱️",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="/">
            <Image
              src="/investroute-logo.png"
              alt="Investroute"
              width={180}
              height={60}
              className="h-14 w-auto"
              priority
            />
          </Link>
          <div className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-[#1E3A8A] font-semibold hover:underline">
              Login
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Side - Animated Slider */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden lg:block"
          >
            <div className="sticky top-24">
              <div className="relative h-[500px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotateY: 30 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="text-center"
                  >
                    <motion.div
                      animate={{
                        y: [0, -20, 0],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                      className="text-6xl mb-8"
                    >
                      {slides[currentSlide].decoration}
                    </motion.div>

                    <motion.div
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                      }}
                      className="relative mb-8 inline-block"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-orange-400/20 rounded-full blur-2xl"></div>
                      <div className="relative bg-white rounded-3xl p-8 shadow-xl">{slides[currentSlide].icon}</div>
                    </motion.div>

                    <h2 className="text-3xl font-bold text-gray-900 mb-4 px-4">{slides[currentSlide].title}</h2>
                    <p className="text-lg text-gray-600 leading-relaxed px-8 max-w-md mx-auto">
                      {slides[currentSlide].description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex justify-center gap-2 mt-8">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`transition-all duration-300 rounded-full ${
                      currentSlide === index
                        ? "w-8 h-3 bg-gradient-to-r from-[#1E3A8A] to-[#FF6B2C]"
                        : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-12">
              {/* Progress Steps */}
              <div className="flex items-center justify-between mb-8">
                {[1, 2, 3].map((stepNum) => (
                  <div key={stepNum} className="flex items-center flex-1">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                        step >= stepNum
                          ? "bg-gradient-to-r from-[#1E3A8A] to-[#FF6B2C] text-white"
                          : "bg-gray-200 text-gray-400"
                      }`}
                    >
                      {stepNum}
                    </div>
                    {stepNum < 3 && (
                      <div
                        className={`h-1 flex-1 mx-2 transition-all ${step > stepNum ? "bg-gradient-to-r from-[#1E3A8A] to-[#FF6B2C]" : "bg-gray-200"}`}
                      ></div>
                    )}
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {step === 1 && "Register with your Mobile Number"}
                {step === 2 && "Personal Details"}
                {step === 3 && "Complete Your Profile"}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {step === 1 && (
                  <>
                    <div>
                      <Label htmlFor="mobile" className="text-gray-700 font-semibold mb-2 block">
                        Mobile Number <span className="text-red-500">*</span>
                      </Label>
                      <div className="flex gap-2">
                        <div className="w-20 bg-gray-100 border border-gray-300 rounded-lg flex items-center justify-center text-gray-700 font-semibold">
                          +91
                        </div>
                        <div className="relative flex-1">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <Input
                            id="mobile"
                            type="tel"
                            placeholder="Enter Your Mobile Number Here"
                            className="pl-10 h-12 text-lg"
                            value={formData.mobile}
                            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                            required
                            maxLength={10}
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="referralCode" className="text-gray-700 font-semibold mb-2 block">
                        Enter Introducer Code (Optional)
                      </Label>
                      <Input
                        id="referralCode"
                        type="text"
                        placeholder="Enter Referral Code"
                        className="h-12 text-lg"
                        value={formData.referralCode}
                        onChange={(e) => setFormData({ ...formData, referralCode: e.target.value })}
                      />
                    </div>

                    <p className="text-sm text-gray-500">We will send an OTP to your mobile number</p>
                  </>
                )}

                {step === 2 && (
                  <>
                    <div>
                      <Label htmlFor="name" className="text-gray-700 font-semibold mb-2 block">
                        Full Name <span className="text-red-500">*</span>
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          id="name"
                          type="text"
                          placeholder="Enter Your Full Name"
                          className="pl-10 h-12 text-lg"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-gray-700 font-semibold mb-2 block">
                        Email Address <span className="text-red-500">*</span>
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter Your Email"
                          className="pl-10 h-12 text-lg"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="dob" className="text-gray-700 font-semibold mb-2 block">
                        Date of Birth <span className="text-red-500">*</span>
                      </Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          id="dob"
                          type="date"
                          className="pl-10 h-12 text-lg"
                          value={formData.dob}
                          onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                  </>
                )}

                {step === 3 && (
                  <>
                    <div>
                      <Label htmlFor="pan" className="text-gray-700 font-semibold mb-2 block">
                        PAN Number <span className="text-red-500">*</span>
                      </Label>
                      <div className="relative">
                        <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          id="pan"
                          type="text"
                          placeholder="Enter Your PAN Number"
                          className="pl-10 h-12 text-lg uppercase"
                          value={formData.pan}
                          onChange={(e) => setFormData({ ...formData, pan: e.target.value.toUpperCase() })}
                          required
                          maxLength={10}
                        />
                      </div>
                      <p className="text-sm text-gray-500 mt-1">Required for KYC verification</p>
                    </div>

                    <div>
                      <Label htmlFor="pincode" className="text-gray-700 font-semibold mb-2 block">
                        Pincode <span className="text-red-500">*</span>
                      </Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <Input
                          id="pincode"
                          type="text"
                          placeholder="Enter Your Pincode"
                          className="pl-10 h-12 text-lg"
                          value={formData.pincode}
                          onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                          required
                          maxLength={6}
                        />
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <p className="text-sm text-gray-700 font-medium mb-2">Next Steps:</p>
                      <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
                        <li>Complete KYC verification</li>
                        <li>Add bank account details</li>
                        <li>Start investing!</li>
                      </ul>
                    </div>
                  </>
                )}

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#1E3A8A] to-[#FF6B2C] hover:from-[#1E3A8A]/90 hover:to-[#FF6B2C]/90 h-14 text-lg font-bold"
                >
                  {step < 3 ? (
                    <>
                      Continue <ArrowRight className="ml-2 w-5 h-5" />
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </Button>

                {step > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    className="w-full h-12 bg-transparent"
                    onClick={() => setStep(step - 1)}
                  >
                    Back
                  </Button>
                )}
              </form>

              <p className="text-xs text-gray-500 text-center mt-6">
                By continuing, you agree to our{" "}
                <Link href="#" className="text-[#1E3A8A] hover:underline">
                  Terms & Conditions
                </Link>{" "}
                and{" "}
                <Link href="#" className="text-[#1E3A8A] hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
