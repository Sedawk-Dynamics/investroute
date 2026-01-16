"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

const slides = [
  {
    title: "Share Trading",
    subtitle: "Smart Investment Solutions",
    description: "Access the stock market with our expert guidance and advanced trading platforms.",
    image: "/investor-stock-trading-cityscape.jpeg",
    cta: "Start Trading",
  },
  {
    title: "Mutual Fund Sahi Hai",
    description: "Grow your wealth with expertly managed mutual fund portfolios tailored to your financial goals.",
    image: "/family-financial-planning.jpeg",
    cta: "Apply Now",
  },
  {
    title: "Comprehensive Insurance",
    subtitle: "Protect What Matters Most",
    description:
      "Save on medical expenses & get tax benefits with Health Insurance. Save up to ₹75,000** under Section 80D.",
    image: "/insurance-office-exterior.jpeg",
    cta: "Get Insured",
  },
  {
    title: "Home Loans",
    subtitle: "Starting from 7.45%* p.a.",
    description: "Make your dream home a reality with our competitive loan rates and flexible repayment options.",
    image: "/home-loan-couple-handshake.jpeg",
    cta: "Apply Now",
  },
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAgreed, setIsAgreed] = useState(false)
  const [formData, setFormData] = useState({
    product: "",
    name: "",
    phone: "",
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  const scrollToForm = () => {
    const formElement = document.getElementById("contact")
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/20 to-secondary/5 pt-24 md:pt-20 pb-8 md:pb-12 px-4 sm:px-6"
    >
      <div className="container mx-auto px-0 sm:px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-6 lg:gap-8 max-w-[1400px] mx-auto">
          {/* Left Section - Image Carousel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1 h-full lg:min-h-[600px]"
          >
            <div className="relative h-full min-h-[400px] lg:min-h-[600px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <img
                    src={slides[currentSlide].image || "/placeholder.svg"}
                    alt={slides[currentSlide].title}
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay Content */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-transparent">
                    <div className="absolute left-4 sm:left-8 lg:left-16 top-1/2 -translate-y-1/2 max-w-[90%] sm:max-w-md lg:max-w-lg">
                      <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mb-2"
                      >
                        {slides[currentSlide].title}
                      </motion.h2>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl sm:text-2xl lg:text-4xl font-bold text-secondary mb-4"
                      >
                        {slides[currentSlide].subtitle}
                      </motion.div>

                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-white/95 text-sm lg:text-base mb-6"
                      >
                        {slides[currentSlide].description}
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        {currentSlide === 0 ? (
                          <a
                            href="https://angel-one.onelink.me/Wjgr/2mfp3knv"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Button className="bg-secondary hover:bg-secondary/90 text-primary-foreground px-6 sm:px-8 py-4 sm:py-6 text-lg rounded-full group shadow-lg hover:shadow-xl transition-all">
                              {slides[currentSlide].cta}
                              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                            </Button>
                          </a>
                        ) : (
                          <Button
                            onClick={scrollToForm}
                            className="bg-secondary hover:bg-secondary/90 text-primary-foreground px-6 sm:px-8 py-4 sm:py-6 text-lg rounded-full group shadow-lg hover:shadow-xl transition-all"
                          >
                            {slides[currentSlide].cta}
                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                          </Button>
                        )}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center hover:scale-110 transition-all z-20"
              >
                <ChevronLeft className="text-primary" size={20} />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-secondary text-white shadow-xl flex items-center justify-center hover:scale-110 transition-all z-20"
              >
                <ChevronRight size={20} />
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentSlide ? "w-8 bg-secondary" : "w-2 bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Section → Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card rounded-2xl shadow-2xl p-8 border border-border order-1 lg:order-2 flex flex-col justify-center lg:min-h-[600px]"
          >
            <h3 className="text-2xl font-bold mb-6">Let's Find What You Need</h3>

            <div className="space-y-4">
              {/* Product */}
              <div>
                <label className="text-sm font-semibold text-muted-foreground mb-1 block uppercase">Product</label>
                <select
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-border rounded-xl"
                >
                  <option value="">Select Product</option>
                  <option value="mutual-fund">Mutual Fund</option>
                  <option value="share-trading">Share Trading</option>
                  <option value="insurance">Insurance</option>
                  <option value="loans">Loans</option>
                </select>
              </div>

              {/* Name */}
              <div>
                <label className="text-sm font-semibold text-muted-foreground mb-1 block uppercase">Your Name</label>
                <Input
                  type="text"
                  placeholder="Enter Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-border rounded-xl"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="text-sm font-semibold text-muted-foreground mb-1 block uppercase">Phone Number</label>
                <div className="flex gap-2">
                  <div className="px-5 bg-muted border-2 border-border rounded-xl flex items-center font-semibold h-[52px]">
                    +91
                  </div>
                  <Input
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="flex-1 h-[52px] px-4 border-2 border-border rounded-xl"
                  />
                </div>
              </div>

              {/* Checkbox */}
              <div className="flex items-start gap-2 pt-2">
                <Checkbox id="terms" checked={isAgreed} onCheckedChange={(checked) => setIsAgreed(checked)} />
                <label htmlFor="terms" className="text-sm text-muted-foreground cursor-pointer">
                  I agree to the{" "}
                  <Link href="/terms-and-conditions" className="text-primary font-semibold hover:underline">
                    Terms and Conditions
                  </Link>
                </label>
              </div>

              {/* Submit Button */}
              <Button
                className={`w-full py-5 text-lg rounded-xl mt-2 ${
                  !isAgreed || !formData.product || !formData.name || !formData.phone
                    ? "bg-muted text-muted-foreground"
                    : "bg-accent text-accent-foreground"
                }`}
                disabled={!isAgreed || !formData.product || !formData.name || !formData.phone}
              >
                Submit
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
