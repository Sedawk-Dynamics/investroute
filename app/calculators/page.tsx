"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// SIP Calculator Component
function SIPCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000)
  const [investmentPeriod, setInvestmentPeriod] = useState(5)
  const [expectedReturn, setExpectedReturn] = useState(12)
  const [investmentType, setInvestmentType] = useState("mutualFunds")

  const calculateSIP = () => {
    const monthlyRate = expectedReturn / 12 / 100
    const months = investmentPeriod * 12
    const maturityValue =
      monthlyInvestment * (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate))
    const totalInvestment = monthlyInvestment * months
    const totalReturns = maturityValue - totalInvestment

    return {
      maturityValue: Math.round(maturityValue),
      totalInvestment: Math.round(totalInvestment),
      totalReturns: Math.round(totalReturns),
    }
  }

  const results = calculateSIP()
  const investmentPercentage = (results.totalInvestment / results.maturityValue) * 100
  const returnsPercentage = 100 - investmentPercentage

  return (
    <div className="space-y-8">
      <div className="flex justify-center gap-6">
        <RadioGroup value={investmentType} onValueChange={setInvestmentType} className="flex gap-6">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="mutualFunds" id="mutualFunds" />
            <Label htmlFor="mutualFunds" className="text-lg font-medium cursor-pointer">
              Mutual Funds
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="equity" id="equity" />
            <Label htmlFor="equity" className="text-lg font-medium cursor-pointer">
              Equity
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="debt" id="debt" />
            <Label htmlFor="debt" className="text-lg font-medium cursor-pointer">
              Debt
            </Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-8">
        <div>
          <div className="flex justify-between mb-4">
            <Label className="text-lg font-semibold text-[#1E3A8A]">MONTHLY INVESTMENT</Label>
            <span className="text-2xl font-bold text-red-600">₹ {monthlyInvestment.toLocaleString()}</span>
          </div>
          <Slider
            value={[monthlyInvestment]}
            onValueChange={(value) => setMonthlyInvestment(value[0])}
            min={500}
            max={100000}
            step={500}
            className="w-full"
          />
        </div>

        <div>
          <div className="flex justify-between mb-4">
            <Label className="text-lg font-semibold text-[#1E3A8A]">INVESTMENT PERIOD (YEARS)</Label>
            <span className="text-2xl font-bold text-red-600">{investmentPeriod} Years</span>
          </div>
          <Slider
            value={[investmentPeriod]}
            onValueChange={(value) => setInvestmentPeriod(value[0])}
            min={1}
            max={30}
            step={1}
            className="w-full"
          />
        </div>

        <div>
          <div className="flex justify-between mb-4">
            <Label className="text-lg font-semibold text-[#1E3A8A]">EXPECTED RETURN (% P.A.)</Label>
            <span className="text-2xl font-bold text-red-600">{expectedReturn}%</span>
          </div>
          <Slider
            value={[expectedReturn]}
            onValueChange={(value) => setExpectedReturn(value[0])}
            min={1}
            max={30}
            step={0.5}
            className="w-full"
          />
        </div>
      </div>

      <div className="flex justify-center my-8">
        <div className="relative w-64 h-64">
          <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="20"
              strokeDasharray={`${investmentPercentage * 2.51} 251`}
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#22C55E"
              strokeWidth="20"
              strokeDasharray={`${returnsPercentage * 2.51} 251`}
              strokeDashoffset={`-${investmentPercentage * 2.51}`}
            />
          </svg>
        </div>
      </div>

      <div className="flex justify-center gap-8 mb-6">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-[#3B82F6]"></div>
          <span className="text-sm font-medium">Investment</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-[#22C55E]"></div>
          <span className="text-sm font-medium">Returns</span>
        </div>
      </div>

      <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 text-center">
        <div className="text-lg font-medium mb-2">Maturity Value</div>
        <div className="text-4xl font-bold">₹ {results.maturityValue.toLocaleString()}</div>
        <div className="mt-4 flex justify-around text-sm">
          <div>
            <div className="opacity-90">Total Investment</div>
            <div className="font-semibold text-lg">₹ {results.totalInvestment.toLocaleString()}</div>
          </div>
          <div>
            <div className="opacity-90">Total Returns</div>
            <div className="font-semibold text-lg">₹ {results.totalReturns.toLocaleString()}</div>
          </div>
        </div>
      </Card>
    </div>
  )
}

// Lumpsum Calculator Component
function LumpsumCalculator() {
  const [investmentAmount, setInvestmentAmount] = useState(100000)
  const [investmentPeriod, setInvestmentPeriod] = useState(5)
  const [expectedReturn, setExpectedReturn] = useState(12)

  const calculateLumpsum = () => {
    const maturityValue = investmentAmount * Math.pow(1 + expectedReturn / 100, investmentPeriod)
    const totalReturns = maturityValue - investmentAmount

    return {
      maturityValue: Math.round(maturityValue),
      totalInvestment: investmentAmount,
      totalReturns: Math.round(totalReturns),
    }
  }

  const results = calculateLumpsum()
  const investmentPercentage = (results.totalInvestment / results.maturityValue) * 100
  const returnsPercentage = 100 - investmentPercentage

  return (
    <div className="space-y-8">
      <div className="space-y-8">
        <div>
          <div className="flex justify-between mb-4">
            <Label className="text-lg font-semibold text-[#1E3A8A]">TOTAL INVESTMENT</Label>
            <span className="text-2xl font-bold text-red-600">₹ {investmentAmount.toLocaleString()}</span>
          </div>
          <Slider
            value={[investmentAmount]}
            onValueChange={(value) => setInvestmentAmount(value[0])}
            min={10000}
            max={10000000}
            step={10000}
            className="w-full"
          />
        </div>

        <div>
          <div className="flex justify-between mb-4">
            <Label className="text-lg font-semibold text-[#1E3A8A]">INVESTMENT PERIOD (YEARS)</Label>
            <span className="text-2xl font-bold text-red-600">{investmentPeriod} Years</span>
          </div>
          <Slider
            value={[investmentPeriod]}
            onValueChange={(value) => setInvestmentPeriod(value[0])}
            min={1}
            max={30}
            step={1}
            className="w-full"
          />
        </div>

        <div>
          <div className="flex justify-between mb-4">
            <Label className="text-lg font-semibold text-[#1E3A8A]">EXPECTED RETURN (% P.A.)</Label>
            <span className="text-2xl font-bold text-red-600">{expectedReturn}%</span>
          </div>
          <Slider
            value={[expectedReturn]}
            onValueChange={(value) => setExpectedReturn(value[0])}
            min={1}
            max={30}
            step={0.5}
            className="w-full"
          />
        </div>
      </div>

      <div className="flex justify-center my-8">
        <div className="relative w-64 h-64">
          <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="20"
              strokeDasharray={`${investmentPercentage * 2.51} 251`}
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#22C55E"
              strokeWidth="20"
              strokeDasharray={`${returnsPercentage * 2.51} 251`}
              strokeDashoffset={`-${investmentPercentage * 2.51}`}
            />
          </svg>
        </div>
      </div>

      <div className="flex justify-center gap-8 mb-6">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-[#3B82F6]"></div>
          <span className="text-sm font-medium">Investment</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-[#22C55E]"></div>
          <span className="text-sm font-medium">Returns</span>
        </div>
      </div>

      <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 text-center">
        <div className="text-lg font-medium mb-2">Maturity Value</div>
        <div className="text-4xl font-bold">₹ {results.maturityValue.toLocaleString()}</div>
        <div className="mt-4 flex justify-around text-sm">
          <div>
            <div className="opacity-90">Total Investment</div>
            <div className="font-semibold text-lg">₹ {results.totalInvestment.toLocaleString()}</div>
          </div>
          <div>
            <div className="opacity-90">Total Returns</div>
            <div className="font-semibold text-lg">₹ {results.totalReturns.toLocaleString()}</div>
          </div>
        </div>
      </Card>
    </div>
  )
}

// SWP Calculator Component
function SWPCalculator() {
  const [totalInvestment, setTotalInvestment] = useState(1000000)
  const [monthlyWithdrawal, setMonthlyWithdrawal] = useState(10000)
  const [expectedReturn, setExpectedReturn] = useState(12)
  const [withdrawalPeriod, setWithdrawalPeriod] = useState(10)

  const calculateSWP = () => {
    const monthlyRate = expectedReturn / 12 / 100
    const months = withdrawalPeriod * 12
    let balance = totalInvestment
    let totalWithdrawn = 0

    for (let i = 0; i < months; i++) {
      balance = balance * (1 + monthlyRate) - monthlyWithdrawal
      totalWithdrawn += monthlyWithdrawal
      if (balance < 0) {
        balance = 0
        totalWithdrawn = totalInvestment + balance * (1 + monthlyRate)
        break
      }
    }

    return {
      finalValue: Math.round(Math.max(0, balance)),
      totalWithdrawn: Math.round(totalWithdrawn),
      totalInvestment,
    }
  }

  const results = calculateSWP()

  return (
    <div className="space-y-8">
      <div className="space-y-8">
        <div>
          <div className="flex justify-between mb-4">
            <Label className="text-lg font-semibold text-[#1E3A8A]">TOTAL INVESTMENT</Label>
            <span className="text-2xl font-bold text-red-600">₹ {totalInvestment.toLocaleString()}</span>
          </div>
          <Slider
            value={[totalInvestment]}
            onValueChange={(value) => setTotalInvestment(value[0])}
            min={100000}
            max={10000000}
            step={50000}
            className="w-full"
          />
        </div>

        <div>
          <div className="flex justify-between mb-4">
            <Label className="text-lg font-semibold text-[#1E3A8A]">MONTHLY WITHDRAWAL</Label>
            <span className="text-2xl font-bold text-red-600">₹ {monthlyWithdrawal.toLocaleString()}</span>
          </div>
          <Slider
            value={[monthlyWithdrawal]}
            onValueChange={(value) => setMonthlyWithdrawal(value[0])}
            min={1000}
            max={100000}
            step={1000}
            className="w-full"
          />
        </div>

        <div>
          <div className="flex justify-between mb-4">
            <Label className="text-lg font-semibold text-[#1E3A8A]">WITHDRAWAL PERIOD (YEARS)</Label>
            <span className="text-2xl font-bold text-red-600">{withdrawalPeriod} Years</span>
          </div>
          <Slider
            value={[withdrawalPeriod]}
            onValueChange={(value) => setWithdrawalPeriod(value[0])}
            min={1}
            max={30}
            step={1}
            className="w-full"
          />
        </div>

        <div>
          <div className="flex justify-between mb-4">
            <Label className="text-lg font-semibold text-[#1E3A8A]">EXPECTED RETURN (% P.A.)</Label>
            <span className="text-2xl font-bold text-red-600">{expectedReturn}%</span>
          </div>
          <Slider
            value={[expectedReturn]}
            onValueChange={(value) => setExpectedReturn(value[0])}
            min={1}
            max={30}
            step={0.5}
            className="w-full"
          />
        </div>
      </div>

      <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 text-center">
        <div className="text-lg font-medium mb-2">Final Remaining Value</div>
        <div className="text-4xl font-bold">₹ {results.finalValue.toLocaleString()}</div>
        <div className="mt-4 flex justify-around text-sm">
          <div>
            <div className="opacity-90">Total Investment</div>
            <div className="font-semibold text-lg">₹ {results.totalInvestment.toLocaleString()}</div>
          </div>
          <div>
            <div className="opacity-90">Total Withdrawn</div>
            <div className="font-semibold text-lg">₹ {results.totalWithdrawn.toLocaleString()}</div>
          </div>
        </div>
      </Card>
    </div>
  )
}

// Retirement Calculator Component
function RetirementCalculator() {
  const [currentAge, setCurrentAge] = useState(30)
  const [retirementAge, setRetirementAge] = useState(60)
  const [monthlyExpenses, setMonthlyExpenses] = useState(50000)
  const [lifeExpectancy, setLifeExpectancy] = useState(80)
  const [expectedReturn, setExpectedReturn] = useState(12)
  const [inflation, setInflation] = useState(6)

  const calculateRetirement = () => {
    const yearsToRetirement = retirementAge - currentAge
    const retirementYears = lifeExpectancy - retirementAge

    // Future monthly expenses adjusted for inflation
    const futureMonthlyExpense = monthlyExpenses * Math.pow(1 + inflation / 100, yearsToRetirement)

    // Annual expenses at retirement
    const annualExpense = futureMonthlyExpense * 12

    // Total corpus needed considering inflation during retirement
    const realReturn = (1 + expectedReturn / 100) / (1 + inflation / 100) - 1
    const corpusNeeded = annualExpense * ((1 - Math.pow(1 + realReturn, -retirementYears)) / realReturn)

    // Monthly SIP needed
    const monthlyRate = expectedReturn / 12 / 100
    const months = yearsToRetirement * 12
    const monthlySIP = corpusNeeded / (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate))

    return {
      corpusNeeded: Math.round(corpusNeeded),
      monthlySIP: Math.round(monthlySIP),
      futureMonthlyExpense: Math.round(futureMonthlyExpense),
    }
  }

  const results = calculateRetirement()

  return (
    <div className="space-y-8">
      <div className="space-y-8">
        <div>
          <div className="flex justify-between mb-4">
            <Label className="text-lg font-semibold text-[#1E3A8A]">CURRENT AGE</Label>
            <span className="text-2xl font-bold text-red-600">{currentAge} Years</span>
          </div>
          <Slider
            value={[currentAge]}
            onValueChange={(value) => setCurrentAge(value[0])}
            min={18}
            max={60}
            step={1}
            className="w-full"
          />
        </div>

        <div>
          <div className="flex justify-between mb-4">
            <Label className="text-lg font-semibold text-[#1E3A8A]">RETIREMENT AGE</Label>
            <span className="text-2xl font-bold text-red-600">{retirementAge} Years</span>
          </div>
          <Slider
            value={[retirementAge]}
            onValueChange={(value) => setRetirementAge(value[0])}
            min={currentAge + 1}
            max={75}
            step={1}
            className="w-full"
          />
        </div>

        <div>
          <div className="flex justify-between mb-4">
            <Label className="text-lg font-semibold text-[#1E3A8A]">CURRENT MONTHLY EXPENSES</Label>
            <span className="text-2xl font-bold text-red-600">₹ {monthlyExpenses.toLocaleString()}</span>
          </div>
          <Slider
            value={[monthlyExpenses]}
            onValueChange={(value) => setMonthlyExpenses(value[0])}
            min={10000}
            max={500000}
            step={5000}
            className="w-full"
          />
        </div>

        <div>
          <div className="flex justify-between mb-4">
            <Label className="text-lg font-semibold text-[#1E3A8A]">LIFE EXPECTANCY</Label>
            <span className="text-2xl font-bold text-red-600">{lifeExpectancy} Years</span>
          </div>
          <Slider
            value={[lifeExpectancy]}
            onValueChange={(value) => setLifeExpectancy(value[0])}
            min={retirementAge + 1}
            max={100}
            step={1}
            className="w-full"
          />
        </div>

        <div>
          <div className="flex justify-between mb-4">
            <Label className="text-lg font-semibold text-[#1E3A8A]">EXPECTED RETURN (% P.A.)</Label>
            <span className="text-2xl font-bold text-red-600">{expectedReturn}%</span>
          </div>
          <Slider
            value={[expectedReturn]}
            onValueChange={(value) => setExpectedReturn(value[0])}
            min={1}
            max={20}
            step={0.5}
            className="w-full"
          />
        </div>

        <div>
          <div className="flex justify-between mb-4">
            <Label className="text-lg font-semibold text-[#1E3A8A]">INFLATION RATE (% P.A.)</Label>
            <span className="text-2xl font-bold text-red-600">{inflation}%</span>
          </div>
          <Slider
            value={[inflation]}
            onValueChange={(value) => setInflation(value[0])}
            min={1}
            max={15}
            step={0.5}
            className="w-full"
          />
        </div>
      </div>

      <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 text-center">
        <div className="text-lg font-medium mb-2">Retirement Corpus Needed</div>
        <div className="text-4xl font-bold">₹ {results.corpusNeeded.toLocaleString()}</div>
        <div className="mt-4 flex justify-around text-sm">
          <div>
            <div className="opacity-90">Monthly SIP Required</div>
            <div className="font-semibold text-lg">₹ {results.monthlySIP.toLocaleString()}</div>
          </div>
          <div>
            <div className="opacity-90">Future Monthly Expenses</div>
            <div className="font-semibold text-lg">₹ {results.futureMonthlyExpense.toLocaleString()}</div>
          </div>
        </div>
      </Card>
    </div>
  )
}

// Goal Planning Calculator Component
function GoalPlanningCalculator() {
  const [goalAmount, setGoalAmount] = useState(1000000)
  const [timeToGoal, setTimeToGoal] = useState(5)
  const [expectedReturn, setExpectedReturn] = useState(12)
  const [currentSavings, setCurrentSavings] = useState(100000)

  const calculateGoal = () => {
    // Future value of current savings
    const futureValueOfSavings = currentSavings * Math.pow(1 + expectedReturn / 100, timeToGoal)

    // Remaining amount needed
    const remainingAmount = goalAmount - futureValueOfSavings

    // Monthly SIP needed
    const monthlyRate = expectedReturn / 12 / 100
    const months = timeToGoal * 12
    const monthlySIP =
      remainingAmount > 0
        ? remainingAmount / (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate))
        : 0

    const totalInvestment = currentSavings + monthlySIP * months

    return {
      monthlySIP: Math.round(Math.max(0, monthlySIP)),
      totalInvestment: Math.round(totalInvestment),
      goalAmount,
      futureValueOfSavings: Math.round(futureValueOfSavings),
    }
  }

  const results = calculateGoal()

  return (
    <div className="space-y-8">
      <div className="space-y-8">
        <div>
          <div className="flex justify-between mb-4">
            <Label className="text-lg font-semibold text-[#1E3A8A]">GOAL AMOUNT</Label>
            <span className="text-2xl font-bold text-red-600">₹ {goalAmount.toLocaleString()}</span>
          </div>
          <Slider
            value={[goalAmount]}
            onValueChange={(value) => setGoalAmount(value[0])}
            min={100000}
            max={50000000}
            step={100000}
            className="w-full"
          />
        </div>

        <div>
          <div className="flex justify-between mb-4">
            <Label className="text-lg font-semibold text-[#1E3A8A]">TIME TO GOAL (YEARS)</Label>
            <span className="text-2xl font-bold text-red-600">{timeToGoal} Years</span>
          </div>
          <Slider
            value={[timeToGoal]}
            onValueChange={(value) => setTimeToGoal(value[0])}
            min={1}
            max={30}
            step={1}
            className="w-full"
          />
        </div>

        <div>
          <div className="flex justify-between mb-4">
            <Label className="text-lg font-semibold text-[#1E3A8A]">CURRENT SAVINGS</Label>
            <span className="text-2xl font-bold text-red-600">₹ {currentSavings.toLocaleString()}</span>
          </div>
          <Slider
            value={[currentSavings]}
            onValueChange={(value) => setCurrentSavings(value[0])}
            min={0}
            max={10000000}
            step={10000}
            className="w-full"
          />
        </div>

        <div>
          <div className="flex justify-between mb-4">
            <Label className="text-lg font-semibold text-[#1E3A8A]">EXPECTED RETURN (% P.A.)</Label>
            <span className="text-2xl font-bold text-red-600">{expectedReturn}%</span>
          </div>
          <Slider
            value={[expectedReturn]}
            onValueChange={(value) => setExpectedReturn(value[0])}
            min={1}
            max={30}
            step={0.5}
            className="w-full"
          />
        </div>
      </div>

      <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 text-center">
        <div className="text-lg font-medium mb-2">Monthly SIP Required</div>
        <div className="text-4xl font-bold">₹ {results.monthlySIP.toLocaleString()}</div>
        <div className="mt-4 flex justify-around text-sm">
          <div>
            <div className="opacity-90">Goal Amount</div>
            <div className="font-semibold text-lg">₹ {results.goalAmount.toLocaleString()}</div>
          </div>
          <div>
            <div className="opacity-90">Total Investment Needed</div>
            <div className="font-semibold text-lg">₹ {results.totalInvestment.toLocaleString()}</div>
          </div>
        </div>
      </Card>
    </div>
  )
}

// EMI Calculator Component
function EMICalculator() {
  const [loanAmount, setLoanAmount] = useState(1000000)
  const [interestRate, setInterestRate] = useState(8.5)
  const [loanTenure, setLoanTenure] = useState(20)

  const calculateEMI = () => {
    const principal = loanAmount
    const monthlyRate = interestRate / 12 / 100
    const months = loanTenure * 12

    // EMI Formula: P × r × (1 + r)^n / ((1 + r)^n - 1)
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1)

    const totalPayment = emi * months
    const totalInterest = totalPayment - principal

    return {
      emi: Math.round(emi),
      totalPayment: Math.round(totalPayment),
      totalInterest: Math.round(totalInterest),
      principal: principal,
    }
  }

  const results = calculateEMI()
  const principalPercentage = (results.principal / results.totalPayment) * 100
  const interestPercentage = 100 - principalPercentage

  return (
    <div className="space-y-8">
      <div className="space-y-8">
        <div>
          <div className="flex justify-between mb-4">
            <Label className="text-lg font-semibold text-[#1E3A8A]">LOAN AMOUNT</Label>
            <span className="text-2xl font-bold text-red-600">₹ {loanAmount.toLocaleString()}</span>
          </div>
          <Slider
            value={[loanAmount]}
            onValueChange={(value) => setLoanAmount(value[0])}
            min={100000}
            max={50000000}
            step={100000}
            className="w-full"
          />
        </div>

        <div>
          <div className="flex justify-between mb-4">
            <Label className="text-lg font-semibold text-[#1E3A8A]">INTEREST RATE (% P.A.)</Label>
            <span className="text-2xl font-bold text-red-600">{interestRate}%</span>
          </div>
          <Slider
            value={[interestRate]}
            onValueChange={(value) => setInterestRate(value[0])}
            min={1}
            max={20}
            step={0.1}
            className="w-full"
          />
        </div>

        <div>
          <div className="flex justify-between mb-4">
            <Label className="text-lg font-semibold text-[#1E3A8A]">LOAN TENURE (YEARS)</Label>
            <span className="text-2xl font-bold text-red-600">{loanTenure} Years</span>
          </div>
          <Slider
            value={[loanTenure]}
            onValueChange={(value) => setLoanTenure(value[0])}
            min={1}
            max={30}
            step={1}
            className="w-full"
          />
        </div>
      </div>

      <div className="flex justify-center my-8">
        <div className="relative w-64 h-64">
          <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="20"
              strokeDasharray={`${principalPercentage * 2.51} 251`}
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#EF4444"
              strokeWidth="20"
              strokeDasharray={`${interestPercentage * 2.51} 251`}
              strokeDashoffset={`-${principalPercentage * 2.51}`}
            />
          </svg>
        </div>
      </div>

      <div className="flex justify-center gap-8 mb-6">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-[#3B82F6]"></div>
          <span className="text-sm font-medium">Principal</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-[#EF4444]"></div>
          <span className="text-sm font-medium">Interest</span>
        </div>
      </div>

      <Card className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white p-6 text-center">
        <div className="text-lg font-medium mb-2">Monthly EMI</div>
        <div className="text-4xl font-bold">₹ {results.emi.toLocaleString()}</div>
        <div className="mt-4 flex justify-around text-sm">
          <div>
            <div className="opacity-90">Principal Amount</div>
            <div className="font-semibold text-lg">₹ {results.principal.toLocaleString()}</div>
          </div>
          <div>
            <div className="opacity-90">Total Interest</div>
            <div className="font-semibold text-lg">₹ {results.totalInterest.toLocaleString()}</div>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-white/30">
          <div className="opacity-90">Total Payment</div>
          <div className="font-semibold text-2xl">₹ {results.totalPayment.toLocaleString()}</div>
        </div>
      </Card>
    </div>
  )
}

export default function CalculatorsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#1E3A8A] mb-4">Investment Calculators</h1>
          <p className="text-xl text-gray-600">Plan your financial future with our comprehensive calculators</p>
        </div>

        <Tabs defaultValue="sip" className="w-full">
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
