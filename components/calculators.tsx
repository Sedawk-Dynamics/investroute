"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function Calculators() {
  const [investmentType, setInvestmentType] = useState("mutual-fund")
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000)
  const [investmentPeriod, setInvestmentPeriod] = useState(5)
  const [expectedReturn, setExpectedReturn] = useState(12)
  const [totalInvestment, setTotalInvestment] = useState(0)
  const [estimatedReturns, setEstimatedReturns] = useState(0)
  const [maturityValue, setMaturityValue] = useState(0)

  useEffect(() => {
    const monthly = monthlyInvestment
    const years = investmentPeriod
    const rateOfReturn = expectedReturn / 100 / 12
    const months = years * 12

    if (monthly > 0 && months > 0) {
      const totalInv = monthly * months
      const futureValue = monthly * (((Math.pow(1 + rateOfReturn, months) - 1) / rateOfReturn) * (1 + rateOfReturn))
      const returns = futureValue - totalInv

      setTotalInvestment(Math.round(totalInv))
      setEstimatedReturns(Math.round(returns))
      setMaturityValue(Math.round(futureValue))
    }
  }, [monthlyInvestment, investmentPeriod, expectedReturn])

  const investmentPercentage = maturityValue > 0 ? (totalInvestment / maturityValue) * 100 : 0

  const formatNumber = (num: number) => {
    return num.toLocaleString("en-IN")
  }

  return (
    <section
      id="calculators"
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white min-h-screen flex flex-col items-center px-4"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 md:mb-16 text-center">
        <span className="text-gray-800">SIP</span> <span className="text-red-600">Calculator</span>
      </h2>

      <div className="flex flex-col lg:flex-row items-start justify-center gap-6 sm:gap-8 lg:gap-12 max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100 w-full lg:w-[380px] p-5 sm:p-6 lg:p-8"
        >
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-800">Investment Calculators</h3>
          <div className="flex flex-col gap-3 sm:gap-4">
            <button className="text-left text-gray-700 hover:text-red-600 hover:translate-x-2 transition-all duration-300 py-2 text-base sm:text-lg font-medium">
              SIP Calculator
            </button>
            <button className="text-left text-gray-700 hover:text-red-600 hover:translate-x-2 transition-all duration-300 py-2 text-base sm:text-lg font-medium">
              Lumpsum Calculator
            </button>
            <button className="text-left text-gray-700 hover:text-red-600 hover:translate-x-2 transition-all duration-300 py-2 text-base sm:text-lg font-medium">
              SWP Calculator
            </button>
            <button className="text-left text-gray-700 hover:text-red-600 hover:translate-x-2 transition-all duration-300 py-2 text-base sm:text-lg font-medium">
              Retirement Calculator
            </button>
            <button className="text-left text-gray-700 hover:text-red-600 hover:translate-x-2 transition-all duration-300 py-2 text-base sm:text-lg font-medium">
              Goal Planning Calculator
            </button>
            <button className="text-left text-gray-700 hover:text-red-600 hover:translate-x-2 transition-all duration-300 py-2 text-base sm:text-lg font-medium">
              EMI Calculator
            </button>
          </div>
          <a href="/calculators" className="block mt-6 sm:mt-8">
            <Button className="bg-red-600 text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-full w-full hover:bg-red-700 hover:scale-105 transition-all duration-300 shadow-lg text-base sm:text-lg">
              VIEW ALL CALCULATORS
            </Button>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl sm:rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 p-4 sm:p-5 lg:p-6 w-full lg:w-[700px] flex flex-col"
        >
          <div className="flex justify-center gap-3 sm:gap-4 lg:gap-6 mb-4 sm:mb-6 flex-wrap">
            <label className="flex items-center gap-2 cursor-pointer group">
              <input
                type="radio"
                name="investmentType"
                checked={investmentType === "mutual-fund"}
                onChange={() => setInvestmentType("mutual-fund")}
                className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 focus:ring-red-500"
              />
              <span className="text-sm sm:text-base font-medium group-hover:text-red-600 transition">Mutual Funds</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer group">
              <input
                type="radio"
                name="investmentType"
                checked={investmentType === "equity"}
                onChange={() => setInvestmentType("equity")}
                className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 focus:ring-red-500"
              />
              <span className="text-sm sm:text-base font-medium group-hover:text-red-600 transition">Equity</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer group">
              <input
                type="radio"
                name="investmentType"
                checked={investmentType === "debt"}
                onChange={() => setInvestmentType("debt")}
                className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 focus:ring-red-500"
              />
              <span className="text-sm sm:text-base font-medium group-hover:text-red-600 transition">Debt</span>
            </label>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-xs sm:text-sm md:text-base font-bold text-gray-700 uppercase tracking-wide">
                  MONTHLY INVESTMENT
                </label>
                <span className="text-base sm:text-lg md:text-xl font-bold text-red-600">
                  ₹ {formatNumber(monthlyInvestment)}
                </span>
              </div>
              <input
                type="range"
                min="500"
                max="100000"
                step="500"
                value={monthlyInvestment}
                onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-600"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-xs sm:text-sm md:text-base font-bold text-gray-700 uppercase tracking-wide">
                  INVESTMENT PERIOD (YEARS)
                </label>
                <span className="text-base sm:text-lg md:text-xl font-bold text-red-600">
                  {investmentPeriod} {investmentPeriod === 1 ? "Year" : "Years"}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="30"
                value={investmentPeriod}
                onChange={(e) => setInvestmentPeriod(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-600"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-xs sm:text-sm md:text-base font-bold text-gray-700 uppercase tracking-wide">
                  EXPECTED RETURN (% P.A.)
                </label>
                <span className="text-base sm:text-lg md:text-xl font-bold text-red-600">{expectedReturn}%</span>
              </div>
              <input
                type="range"
                min="1"
                max="30"
                step="0.5"
                value={expectedReturn}
                onChange={(e) => setExpectedReturn(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-red-600"
              />
            </div>
          </div>

          <div className="flex flex-col items-center mt-4 sm:mt-6">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e7eb" strokeWidth="10" />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="10"
                  strokeDasharray={`${investmentPercentage * 2.51} ${251 - investmentPercentage * 2.51}`}
                  className="transition-all duration-500"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#22c55e"
                  strokeWidth="10"
                  strokeDasharray={`${(100 - investmentPercentage) * 2.51} ${251 - (100 - investmentPercentage) * 2.51}`}
                  strokeDashoffset={`-${investmentPercentage * 2.51}`}
                  className="transition-all duration-500"
                />
              </svg>
            </div>
            <div className="flex justify-center gap-4 sm:gap-6 mt-2 sm:mt-3 text-xs sm:text-sm">
              <span className="flex items-center gap-2 font-medium">
                <span className="w-3 h-3 bg-blue-500 rounded-full"></span>Investment
              </span>
              <span className="flex items-center gap-2 font-medium">
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>Returns
              </span>
            </div>
          </div>

          <div className="mt-4 sm:mt-6">
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white py-2.5 sm:py-3 rounded-2xl text-lg sm:text-xl font-bold text-center shadow-lg">
              Maturity Value: ₹ {formatNumber(maturityValue)}
            </div>

            <div className="flex justify-around mt-3 sm:mt-4 text-gray-700 text-xs sm:text-sm font-medium">
              <div className="text-center">
                <p className="text-gray-500 mb-1">Total Investment</p>
                <p className="font-bold text-black text-lg sm:text-xl">₹ {formatNumber(totalInvestment)}</p>
              </div>
              <div className="text-center">
                <p className="text-gray-500 mb-1">Estimated Returns</p>
                <p className="font-bold text-black text-lg sm:text-xl">₹ {formatNumber(estimatedReturns)}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
