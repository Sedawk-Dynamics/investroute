"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Activity, Heart, Users, Shield, CheckCircle2, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HealthInsurancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />

      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Health Insurance</h1>
              <p className="text-xl text-gray-600 mb-8">
                Comprehensive health coverage for you and your family. Access to quality healthcare without financial
                worry.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/#contact">
                  <Button size="lg" className="bg-[#22C55E] hover:bg-[#22C55E]/90 text-lg px-8">
                    Get a Quote
                  </Button>
                </Link>
                <Link href="/#contact">
                  <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                    <Phone className="mr-2" size={20} />
                    Talk to Expert
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/happy-family-planning-finances.jpg"
                alt="Health Insurance Coverage"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              { icon: Activity, title: "Cashless Treatment", desc: "Network of 10,000+ hospitals" },
              { icon: Heart, title: "Pre & Post Hospitalization", desc: "Complete medical expense coverage" },
              { icon: Users, title: "Family Floater", desc: "One plan for entire family" },
              { icon: Shield, title: "Lifetime Renewability", desc: "Coverage for life with no age limit" },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <feature.icon className="w-12 h-12 text-[#22C55E] mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Comprehensive Health Coverage</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Hospitalization expenses fully covered",
                "No claim bonus up to 50% of sum insured",
                "Coverage for critical illnesses and surgeries",
                "Ambulance charges and day care procedures",
                "Alternative treatment coverage (AYUSH)",
                "Tax benefits under Section 80D",
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#22C55E] to-[#16A34A] rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Protect Your Health Today</h2>
            <p className="text-xl mb-8 opacity-90">Compare plans and get the best health insurance quote</p>
            <Link href="/#contact">
              <Button size="lg" className="bg-white text-[#22C55E] hover:bg-gray-100 text-lg px-12">
                Compare Plans
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
