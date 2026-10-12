"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { ChevronLeft, ChevronRight, ArrowRight, Loader2 } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"

const slides = [
  {
    title: "When to act? What to trade? Get real time signals on Angel One and open a free Demat Account.",
    subtitle: "Smart Investment Solutions",
    description: "Access the stock market with our expert guidance and advanced trading platforms.",
    image: "/angel-one-trading-signals.png",
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
    image: "/comprehensive-insurance-hero.png",
    cta: "Get Insured",
  },
  {
    title: "Home Loans",
    subtitle: "Starting from 7.60%* p.a.",
    description: "Make your dream home a reality with our competitive loan rates and flexible repayment options.",
    image: "/home-loans-investments.png",
    cta: "Apply Now",
  },
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAgreed, setIsAgreed] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const [formData, setFormData] = useState({
    product: "",
    name: "",
    phone: "",
  })

  const handleSubmit = async () => {
    if (isSubmitting) return

    setIsSubmitting(true)

    try {
      const res = await fetch("/api/investroute", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          product: formData.product,
          name: formData.name,
          phone: formData.phone,
          termsAccepted: isAgreed,
        }),
      })

      const data = await res.json()

      if (res.ok) {
        alert("Form submitted successfully ✅")

        setFormData({
          product: "",
          name: "",
          phone: "",
        })

        setIsAgreed(false)
      } else {
        alert(data.error || "Something went wrong ❌")
      }
    } catch (error) {
      console.error(error)
      alert("Server error ❌")
    } finally {
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % slides.length)

  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  const scrollToForm = () => {
    const formElement = document.getElementById("contact")

    if (formElement) {
      formElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
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
                  {currentSlide === 0 ? (
                    <a
                      href="https://angel-one.onelink.me/Wjgr/2mfp3knv"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open a free Demat Account with Angel One (opens in a new tab)"
                      className="absolute inset-0 bottom-16 flex items-center bg-[#f0f4fc] focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-[-4px]"
                    >
                      <img
                        src={slides[0].image}
                        alt={slides[0].title}
                        className="w-full h-full object-contain"
                      />
                    </a>
                  ) : (
                    <div className="absolute inset-0 bottom-16 flex flex-col justify-center bg-[#fffaf2]">
                      <div className="min-h-0 flex-1">
                        <img
                          src={slides[currentSlide].image}
                          alt={currentSlide === 3 ? "Mortgage - Loans, Funds & Investment. Competitive Home Loans, Comprehensive Insurance, Mutual Funds, Shares & Savings." : slides[currentSlide].title}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="shrink-0 px-4 py-4 text-center sm:px-6">
                        {currentSlide !== 3 && (
                          <>
                            <h2 className="text-xl sm:text-2xl font-bold text-primary">{slides[currentSlide].title}</h2>
                            <p className="mt-2 text-sm text-slate-600 leading-relaxed">{slides[currentSlide].description}</p>
                          </>
                        )}
                        <div className={"flex flex-wrap items-center justify-center gap-3 " + (currentSlide !== 3 ? "mt-3" : "")}>
                          {slides[currentSlide].subtitle && (
                            <p className="text-sm sm:text-lg font-semibold text-primary">{slides[currentSlide].subtitle}</p>
                          )}
                          <Button onClick={scrollToForm} className="bg-secondary hover:bg-secondary/90 text-primary-foreground rounded-full px-6">
                            {slides[currentSlide].cta}
                            <ArrowRight className="ml-2" size={18} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                aria-label="Previous slide"
                className={`absolute left-4 bottom-2 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center hover:scale-110 transition-all z-20`}
              >
                <ChevronLeft className="text-primary" size={20} />
              </button>

              <button
                onClick={nextSlide}
                aria-label="Next slide"
                className={`absolute right-4 bottom-2 w-12 h-12 rounded-full bg-secondary text-white shadow-xl flex items-center justify-center hover:scale-110 transition-all z-20`}
              >
                <ChevronRight size={20} />
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    aria-label={`Go to slide ${index + 1}`}
                    aria-current={index === currentSlide ? "true" : undefined}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentSlide ? "w-8 bg-secondary" : "w-2 bg-slate-400"
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
  <h3 className="text-2xl font-bold mb-6">
    Let's Find What You Need
  </h3>

  <div className="space-y-4">
    {/* Product */}
    <div>
      <label className="text-sm font-semibold text-muted-foreground mb-1 block uppercase">
        Product
      </label>

      <select
        value={formData.product}
        onChange={(e) =>
          setFormData({
            ...formData,
            product: e.target.value,
          })
        }
        className="w-full px-4 py-3 border-2 border-border rounded-xl"
      >    
        <option value="">Select Product</option>
        <option value="Personal Loan">Personal Loan</option>
        <option value="Home Loan">Home Loan</option>
        <option value="Loan Against Property">Loan Against Property</option>
        <option value="Business Loan">Business Loan</option>
        <option value="Mutual Fund">Mutual Fund</option>
        <option value="Share Trading">Share Trading</option>
        <option value="Health Insurance">Health Insurance</option>
        <option value="Life Insurance">Life Insurance</option>
      </select>
    </div>

    {/* Name */}
    <div>
      <label className="text-sm font-semibold text-muted-foreground mb-1 block uppercase">
        Your Name
      </label>

      <Input
        type="text"
        placeholder="Enter Your Name"
        value={formData.name}
        onChange={(e) =>
          setFormData({
            ...formData,
            name: e.target.value,
          })
        }
        className="w-full px-4 py-3 border-2 border-border rounded-xl"
      />
    </div>

    {/* Phone */}
    <div>
      <label className="text-sm font-semibold text-muted-foreground mb-1 block uppercase">
        Phone Number
      </label>

      <div className="flex gap-2">
        <div className="px-5 bg-muted border-2 border-border rounded-xl flex items-center font-semibold h-[52px]">
          +91
        </div>

        <Input
          type="tel"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={(e) =>
            setFormData({
              ...formData,
              phone: e.target.value,
            })
          }
          className="flex-1 h-[52px] px-4 border-2 border-border rounded-xl"
        />
      </div>
    </div>

    {/* Checkbox */}
    <div className="flex items-start gap-2 pt-2">
      <Checkbox
        id="terms"
        checked={isAgreed}
        onCheckedChange={(checked) =>
          setIsAgreed(checked as boolean)
        }
      />

      <label
        htmlFor="terms"
        className="text-sm text-muted-foreground cursor-pointer"
      >
        I agree to the{" "}
        <Link
          href="/terms-and-conditions"
          className="text-primary font-semibold hover:underline"
        >
          Terms and Conditions
        </Link>
      </label>
    </div>

    {/* Submit Button */}
    <Button
      onClick={handleSubmit}
      disabled={
        isSubmitting ||
        !isAgreed ||
        !formData.product ||
        !formData.name ||
        !formData.phone
      }
      className={`w-full py-5 text-lg rounded-xl mt-2 transition-all ${
        isSubmitting ||
        !isAgreed ||
        !formData.product ||
        !formData.name ||
        !formData.phone
          ? "bg-muted text-muted-foreground"
          : "bg-accent text-accent-foreground hover:opacity-90"
      }`}
    >
      {isSubmitting ? (
        <div className="flex items-center justify-center gap-2">
          <Loader2 className="w-5 h-5 animate-spin" />
          Submitting...
        </div>
      ) : (
        "Submit"
      )}
    </Button>
  </div>
</motion.div>
        </div>
      </div>
    </section>
  )
}
