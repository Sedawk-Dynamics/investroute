"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Star, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function ExploreFundsPage() {
  const fundCategories = [
    {
      category: "Equity Funds",
      description: "High growth potential with diversified equity portfolios",
      returns: "12-15%",
      risk: "High",
      funds: [
        { name: "Large Cap Growth Fund", returns: "14.2%", rating: 5, minInvestment: "₹500" },
        { name: "Mid Cap Opportunities Fund", returns: "15.8%", rating: 5, minInvestment: "₹1,000" },
        { name: "Small Cap Discovery Fund", returns: "16.5%", rating: 4, minInvestment: "₹500" },
      ],
    },
    {
      category: "Debt Funds",
      description: "Stable returns with lower risk for conservative investors",
      returns: "7-9%",
      risk: "Low",
      funds: [
        { name: "Corporate Bond Fund", returns: "8.5%", rating: 4, minInvestment: "₹500" },
        { name: "Government Securities Fund", returns: "7.8%", rating: 4, minInvestment: "₹1,000" },
        { name: "Short Duration Fund", returns: "7.2%", rating: 4, minInvestment: "₹500" },
      ],
    },
    {
      category: "Hybrid Funds",
      description: "Balanced approach combining equity and debt instruments",
      returns: "9-12%",
      risk: "Medium",
      funds: [
        { name: "Balanced Advantage Fund", returns: "11.5%", rating: 5, minInvestment: "₹500" },
        { name: "Aggressive Hybrid Fund", returns: "12.2%", rating: 4, minInvestment: "₹1,000" },
        { name: "Conservative Hybrid Fund", returns: "9.8%", rating: 4, minInvestment: "₹500" },
      ],
    },
    {
      category: "Tax Saving Funds (ELSS)",
      description: "Save taxes under Section 80C while building wealth",
      returns: "11-14%",
      risk: "Medium-High",
      funds: [
        { name: "Tax Saver Growth Fund", returns: "13.5%", rating: 5, minInvestment: "₹500" },
        { name: "Equity Linked Savings Scheme", returns: "12.8%", rating: 4, minInvestment: "₹500" },
        { name: "Long Term Equity Fund", returns: "14.2%", rating: 5, minInvestment: "₹1,000" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Header />

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="pt-40 pb-20 px-4"
      >
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Explore Mutual Funds
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover India's top-performing mutual funds across different categories. Start your investment journey
              with expert-managed portfolios tailored to your financial goals.
            </p>
          </motion.div>

          <div className="space-y-12">
            {fundCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              >
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">{category.category}</h2>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="flex gap-4 text-sm">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">
                      Expected Returns: {category.returns} p.a.*
                    </span>
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full font-semibold">
                      Risk: {category.risk}
                    </span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.funds.map((fund, fundIndex) => (
                    <Card
                      key={fund.name}
                      className="p-6 hover:shadow-xl transition-all duration-300 border-orange-100 bg-gradient-to-br from-white to-orange-50/30"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-semibold text-gray-900 flex-1">{fund.name}</h3>
                        <div className="flex gap-0.5 ml-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < fund.rating ? "fill-orange-500 text-orange-500" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Annual Returns</span>
                          <span className="text-2xl font-bold text-green-600">{fund.returns}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Min. Investment</span>
                          <span className="font-semibold text-gray-900">{fund.minInvestment}</span>
                        </div>
                      </div>

                      <a href="https://angel-one.onelink.me/Wjgr/vaakmjyn" target="_blank" rel="noopener noreferrer">
                        <Button className="w-full bg-orange-600 hover:bg-orange-700">
                          Start SIP
                          <ChevronRight className="ml-2 w-4 h-4" />
                        </Button>
                      </a>
                    </Card>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 bg-gradient-to-br from-orange-600 to-red-700 rounded-2xl p-8 md:p-12 text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-4">Need Help Choosing the Right Fund?</h2>
            <p className="text-xl mb-8 opacity-90">
              Our certified financial advisors will help you select the best mutual funds based on your goals and risk
              appetite
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="https://angel-one.onelink.me/Wjgr/vaakmjyn" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-10">
                  Start Investing Now
                </Button>
              </a>
              <a href="/#contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 px-10 bg-transparent"
                >
                  Talk to Expert
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  )
}
