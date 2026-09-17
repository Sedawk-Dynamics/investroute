"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  SIPCalculator,
  LumpsumCalculator,
  SWPCalculator,
  RetirementCalculator,
  GoalPlanningCalculator,
  EMICalculator,
} from "@/components/investment-calculators"

const TABS = ["sip", "lumpsum", "swp", "retirement", "goal", "emi"]

export default function CalculatorsPage() {
  const [tab, setTab] = useState("sip")

  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("tab")
    if (requested && TABS.includes(requested)) setTab(requested)
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#1E3A8A] mb-4">Investment Calculators</h1>
          <p className="text-xl text-gray-600">Plan your financial future with our comprehensive calculators</p>
        </div>

        <Tabs value={tab} onValueChange={setTab} className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-8 h-auto bg-white shadow-lg rounded-lg p-2">
            <TabsTrigger
              value="sip"
              className="text-sm md:text-base py-3 data-[state=active]:bg-[#1E3A8A] data-[state=active]:text-white font-semibold"
            >
              SIP Calculator
            </TabsTrigger>
            <TabsTrigger
              value="lumpsum"
              className="text-sm md:text-base py-3 data-[state=active]:bg-[#1E3A8A] data-[state=active]:text-white font-semibold"
            >
              Lumpsum Calculator
            </TabsTrigger>
            <TabsTrigger
              value="swp"
              className="text-sm md:text-base py-3 data-[state=active]:bg-[#1E3A8A] data-[state=active]:text-white font-semibold"
            >
              SWP Calculator
            </TabsTrigger>
            <TabsTrigger
              value="retirement"
              className="text-sm md:text-base py-3 data-[state=active]:bg-[#1E3A8A] data-[state=active]:text-white font-semibold"
            >
              Retirement Calculator
            </TabsTrigger>
            <TabsTrigger
              value="goal"
              className="text-sm md:text-base py-3 data-[state=active]:bg-[#1E3A8A] data-[state=active]:text-white font-semibold"
            >
              Goal Planning
            </TabsTrigger>
            <TabsTrigger
              value="emi"
              className="text-sm md:text-base py-3 data-[state=active]:bg-[#1E3A8A] data-[state=active]:text-white font-semibold"
            >
              EMI Calculator
            </TabsTrigger>
          </TabsList>

          <Card className="p-8 shadow-xl">
            <TabsContent value="sip">
              <SIPCalculator />
            </TabsContent>

            <TabsContent value="lumpsum">
              <LumpsumCalculator />
            </TabsContent>

            <TabsContent value="swp">
              <SWPCalculator />
            </TabsContent>

            <TabsContent value="retirement">
              <RetirementCalculator />
            </TabsContent>

            <TabsContent value="goal">
              <GoalPlanningCalculator />
            </TabsContent>

            <TabsContent value="emi">
              <EMICalculator />
            </TabsContent>
          </Card>
        </Tabs>

        <div className="mt-12 text-center">
          <Card className="p-8 bg-gradient-to-r from-[#1E3A8A] to-[#2E4A9A] text-white">
            <h2 className="text-3xl font-bold mb-4">Need Expert Guidance?</h2>
            <p className="text-lg mb-6">Our financial advisors can help you create a personalized investment plan</p>
            <Button
              size="lg"
              className="bg-[#FF6B2C] hover:bg-[#E55A1B] text-white font-semibold px-8 py-6 text-lg"
              onClick={() => (window.location.href = "/#contact")}
            >
              Talk to an Expert
            </Button>
          </Card>
        </div>
      </div>
    </main>
  )
}
