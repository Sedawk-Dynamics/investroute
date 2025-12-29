"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Car, Shield, Wrench, Clock, CheckCircle2, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function VehicleInsurancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />

      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Vehicle Insurance</h1>
              <p className="text-xl text-gray-600 mb-8">
                Comprehensive protection for your car and bike. Drive with confidence knowing you're covered.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/#contact">
                  <Button size="lg" className="bg-[#9333EA] hover:bg-[#9333EA]/90 text-lg px-8">
                    Get Instant Quote
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
                src="https://media.istockphoto.com/photos/concept-of-insurance-man-protective-and-car-family-health-insurance-picture-id1264403893?b=1&k=20&m=1264403893&s=170667a&w=0&h=7HcA2pStbWSFqdJEhkkPHs1CsojL3W_8wNKrtuxL0Nw="
                alt="Vehicle Insurance Protection"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              { icon: Car, title: "Comprehensive Cover", desc: "Protection against accidents and theft" },
              { icon: Shield, title: "Third Party Liability", desc: "Mandatory coverage as per law" },
              { icon: Wrench, title: "Roadside Assistance", desc: "24/7 emergency support" },
              { icon: Clock, title: "Quick Claims", desc: "Fast and hassle-free settlement" },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <feature.icon className="w-12 h-12 text-[#9333EA] mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl mb-20">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Complete Vehicle Protection</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Own damage coverage for accidents and natural calamities",
                "Zero depreciation add-on available",
                "Personal accident cover for driver and passengers",
                "Engine and gearbox protection",
                "No claim bonus up to 50%",
                "Cashless repairs at network garages",
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-[#9333EA] to-[#A855F7] rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Insure Your Vehicle Today</h2>
            <p className="text-xl mb-8 opacity-90">Get the best vehicle insurance at competitive prices</p>
            <Link href="/#contact">
              <Button size="lg" className="bg-white text-[#9333EA] hover:bg-gray-100 text-lg px-12">
                Get Quote Now
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
