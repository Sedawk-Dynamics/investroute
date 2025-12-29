"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Home, Shield, Flame, Droplets, CheckCircle2, Phone } from "lucide-react"
import Image from "next/image"

export default function PropertyInsurancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <Header />

      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Property Insurance</h1>
              <p className="text-xl text-gray-600 mb-8">
                Protect your home and assets with comprehensive property insurance. Coverage against fire, theft,
                natural disasters, and more.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="/#contact">
                  <Button size="lg" className="bg-[#F59E0B] hover:bg-[#F59E0B]/90 text-lg px-8">
                    Get a Quote
                  </Button>
                </a>
                <a href="/#contact">
                  <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                    <Phone className="mr-2" size={20} />
                    Talk to Expert
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image src="/dream-home-loan.jpg" alt="Property Insurance Coverage" fill className="object-cover" />
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              { icon: Home, title: "Building & Contents", desc: "Complete coverage for structure and belongings" },
              { icon: Flame, title: "Fire Protection", desc: "Coverage against fire and explosions" },
              { icon: Droplets, title: "Natural Disasters", desc: "Protection from floods and earthquakes" },
              { icon: Shield, title: "Theft & Burglary", desc: "Financial security against theft" },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <feature.icon className="w-12 h-12 text-[#F59E0B] mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Comprehensive Property Coverage</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Protection for building structure and renovation costs",
                "Coverage for household contents and valuables",
                "Temporary accommodation expenses",
                "Liability coverage for third-party injuries",
                "Earthquake and flood damage protection",
                "Quick claim settlement with minimal documentation",
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Secure Your Property Now</h2>
            <p className="text-xl mb-8 opacity-90">Get personalized property insurance coverage today</p>
            <a href="/#contact">
              <Button size="lg" className="bg-white text-[#F59E0B] hover:bg-gray-100 text-lg px-12">
                Get Started
              </Button>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
