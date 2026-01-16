"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Menu,
  X,
  ChevronDown,
  HomeIcon,
  TrendingUp,
  Shield,
  Heart,
  Car,
  Wallet,
  BarChart3,
  GraduationCap,
  Coins,
  Landmark,
  Plane,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// --- Types ---
interface MegaMenuItem {
  title: string
  description: string
  href: string
  icon: React.ReactNode
}
interface MegaMenuCategory {
  title: string
  items: MegaMenuItem[]
}
interface NavItem {
  label: string
  href?: string
  megaMenu?: MegaMenuCategory[]
}

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string | null>(null)
  const [activeNav, setActiveNav] = useState("Home")

  useEffect(() => {
    const handleScroll = () => {}
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" })
      setActiveNav("Contact Us")
      setIsMobileMenuOpen(false)
    } else {
      window.location.href = "/#contact"
    }
  }

  const navItems: NavItem[] = [
    { label: "Home", href: "/" },
    {
      label: "Investments",
      megaMenu: [
        {
          title: "Investment Options",
          items: [
            {
              title: "Mutual Funds",
              description: "Diversified portfolios for wealth creation",
              href: "/mutual-fund",
              icon: <TrendingUp className="w-5 h-5" />,
            },
            {
              title: "Share Trading",
              description: "Advanced stock trading platforms",
              href: "/share-trading",
              icon: <BarChart3 className="w-5 h-5" />,
            },
            {
              title: "Fixed Deposit",
              description: "Guaranteed returns with low risk",
              href: "/fixed-deposit",
              icon: <Landmark className="w-5 h-5" />,
            },
            {
              title: "Gold & Silver",
              description: "Digital gold and silver investments",
              href: "/gold-silver",
              icon: <Coins className="w-5 h-5" />,
            },
          ],
        },
      ],
    },
    {
      label: "Insurance",
      megaMenu: [
        {
          title: "Life & Health",
          items: [
            {
              title: "Life Insurance",
              description: "Secure your family’s financial future",
              href: "/insurance/life",
              icon: <Heart className="w-5 h-5" />,
            },
            {
              title: "Term Insurance",
              description: "High coverage at low premium",
              href: "/insurance/term",
              icon: <Shield className="w-5 h-5" />,
            },
            {
              title: "Health Insurance",
              description: "Complete medical coverage",
              href: "/insurance/health",
              icon: <Shield className="w-5 h-5" />,
            },
          ],
        },
        {
          title: "Asset Protection",
          items: [
            {
              title: "Vehicle Insurance",
              description: "Complete vehicle protection",
              href: "/insurance/vehicle",
              icon: <Car className="w-5 h-5" />,
            },
            {
              title: "Travel Insurance",
              description: "Safe and secure worldwide travel",
              href: "/insurance/travel",
              icon: <Plane className="w-5 h-5" />,
            },
          ],
        },
      ],
    },
    {
      label: "Loans",
      megaMenu: [
        {
          title: "Loan Services",
          items: [
            {
              title: "Home Loans",
              description: "Home loans with low interest rates",
              href: "/loans/home",
              icon: <HomeIcon className="w-5 h-5" />,
            },
            {
              title: "Personal Loans",
              description: "Quick approval and instant disbursal",
              href: "/loans/personal",
              icon: <Wallet className="w-5 h-5" />,
            },
            {
              title: "Vehicle Loans",
              description: "100% on-road funding available",
              href: "/loans/vehicle",
              icon: <Car className="w-5 h-5" />,
            },
            {
              title: "Education Loans",
              description: "Study abroad and domestic education support",
              href: "/loans/education",
              icon: <GraduationCap className="w-5 h-5" />,
            },
          ],
        },
      ],
    },
    { label: "Calculators", href: "/calculators" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/#contact" },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md"
    >
      <div className="bg-white border-b border-gray-200">
        <div className="w-full mx-auto">
          <div className="flex items-center justify-between h-[80px] px-4 lg:px-0">
            {/* LEFT LOGO SECTION - DESKTOP ONLY */}
            <Link href="/" className="hidden lg:flex items-center z-10">
              <Image
                src="/investroute-logo.png"
                alt="Investroute"
                width={500}
                height={200}
                className="h-32 w-auto object-contain"
                priority
              />
            </Link>

            {/* RIGHT BLUE SECTION (FULL HEIGHT + WIDTH) - DESKTOP ONLY */}
            <div className="hidden lg:flex items-center justify-between bg-[#2F4BC1] flex-1 h-full px-8">
              {/* NAVIGATION */}
              <nav className="flex items-center gap-5 h-full">
                {navItems.map((item) => (
                  <div
                    key={item.label}
                    className="relative h-full flex items-center"
                    onMouseEnter={() => item.megaMenu && setActiveDropdown(item.label)}
                    onMouseLeave={() => item.megaMenu && setActiveDropdown(null)}
                  >
                    {item.href ? (
                      <Link
                        href={item.href}
                        className={`px-3 py-2 text-sm font-semibold rounded-md transition-all duration-300 whitespace-nowrap ${
                          activeNav === item.label ? "text-[#C41E3A] bg-white" : "text-white hover:bg-white/20"
                        }`}
                        onClick={(e) => {
                          if (item.label === "Contact Us") handleContactClick(e)
                          else setActiveNav(item.label)
                          setActiveDropdown(null)
                        }}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <>
                        <div
                          className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-md cursor-pointer ${
                            activeDropdown === item.label ? "text-[#C41E3A] bg-white" : "text-white hover:bg-white/20"
                          }`}
                        >
                          {item.label}
                          <ChevronDown
                            size={16}
                            className={`transition-transform ${activeDropdown === item.label ? "rotate-180" : ""}`}
                          />
                        </div>

                        <AnimatePresence>
                          {activeDropdown === item.label && item.megaMenu && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              transition={{ duration: 0.2 }}
                              className="absolute left-0 top-full mt-2 bg-white rounded-xl shadow-2xl min-w-[600px] z-50"
                            >
                              <div className="p-6 grid grid-cols-2 gap-8">
                                {item.megaMenu.map((category) => (
                                  <div key={category.title}>
                                    <h3 className="text-xs font-bold text-gray-500 uppercase mb-4">{category.title}</h3>
                                    <div className="space-y-2">
                                      {category.items.map((menuItem) => (
                                        <Link
                                          key={menuItem.title}
                                          href={menuItem.href}
                                          className="flex items-start gap-3 p-2 rounded-lg hover:bg-blue-50 transition-all"
                                          onClick={() => {
                                            setActiveDropdown(null)
                                            setActiveNav(item.label)
                                          }}
                                        >
                                          <div className="text-[#2F4BC1]">{menuItem.icon}</div>
                                          <div>
                                            <div className="font-semibold text-gray-900">{menuItem.title}</div>
                                            <div className="text-sm text-gray-600">{menuItem.description}</div>
                                          </div>
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    )}
                  </div>
                ))}
              </nav>

              {/* RIGHT SIDE BUTTONS */}
              <div className="flex items-center gap-3 h-full">
                <a href="https://angel-one.onelink.me/Wjgr/vaakmjyn" target="_blank" rel="noreferrer">
                  <Button className="bg-orange-500 hover:bg-orange-600 px-5 py-2 text-sm font-bold text-white shadow-lg">
                    Open an Account
                  </Button>
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=com.investroute.financial.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button className="bg-green-600 hover:bg-green-700 px-5 py-2 text-sm font-bold text-white shadow-lg">
                    Mobile App
                  </Button>
                </a>
              </div>
            </div>

            {/* MOBILE MENU SECTION */}
            <div className="flex items-center justify-between w-full lg:hidden z-10 px-2">
              <button
                className="text-[#2F4BC1] p-2 hover:bg-[#2F4BC1]/10 rounded-lg transition-colors flex-shrink-0"
                onClick={() => {
                  console.log("[v0] Hamburger clicked, current state:", isMobileMenuOpen)
                  setIsMobileMenuOpen(!isMobileMenuOpen)
                }}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>

              <Link href="/" className="flex items-center flex-1 justify-center">
                <Image
                  src="/investroute-logo.png"
                  alt="Investroute"
                  width={600}
                  height={300}
                  className="h-28 w-auto object-contain"
                  priority
                />
              </Link>

              <div className="w-10 flex-shrink-0"></div>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile menu panel sliding from right */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-[80px] right-0 bottom-0 w-[85%] max-w-md bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              <nav className="flex flex-col p-6 space-y-2">
                {navItems.map((item) => (
                  <div key={item.label} className="border-b border-gray-100 pb-2">
                    {item.href ? (
                      <Link
                        href={item.href}
                        className={`block px-4 py-3 text-base font-semibold rounded-lg transition-colors ${
                          activeNav === item.label ? "text-[#C41E3A] bg-blue-50" : "text-gray-800 hover:bg-gray-50"
                        }`}
                        onClick={(e) => {
                          if (item.label === "Contact Us") handleContactClick(e)
                          else setActiveNav(item.label)
                          setIsMobileMenuOpen(false)
                        }}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <>
                        <button
                          className="flex items-center justify-between w-full px-4 py-3 text-base font-semibold text-gray-800 hover:bg-gray-50 rounded-lg transition-colors"
                          onClick={() =>
                            setMobileActiveDropdown(mobileActiveDropdown === item.label ? null : item.label)
                          }
                        >
                          {item.label}
                          <ChevronDown
                            size={20}
                            className={`transition-transform ${
                              mobileActiveDropdown === item.label ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {mobileActiveDropdown === item.label && item.megaMenu && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden bg-gray-50 rounded-lg mt-2"
                            >
                              <div className="p-4 space-y-4">
                                {item.megaMenu.map((category) => (
                                  <div key={category.title}>
                                    <h3 className="text-xs font-bold text-gray-500 uppercase mb-2 px-2">
                                      {category.title}
                                    </h3>
                                    <div className="space-y-1">
                                      {category.items.map((menuItem) => (
                                        <Link
                                          key={menuItem.title}
                                          href={menuItem.href}
                                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-white transition-colors"
                                          onClick={() => {
                                            setIsMobileMenuOpen(false)
                                            setMobileActiveDropdown(null)
                                            setActiveNav(item.label)
                                          }}
                                        >
                                          <div className="text-[#2F4BC1] mt-0.5">{menuItem.icon}</div>
                                          <div className="flex-1">
                                            <div className="font-semibold text-sm text-gray-900">{menuItem.title}</div>
                                            <div className="text-xs text-gray-600 mt-0.5">{menuItem.description}</div>
                                          </div>
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    )}
                  </div>
                ))}
                {/* Mobile action buttons */}
                <div className="flex flex-col gap-3 pt-4">
                  <a href="https://angel-one.onelink.me/Wjgr/vaakmjyn" target="_blank" rel="noreferrer">
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 py-3 text-base font-bold text-white shadow-lg">
                      Open an Account
                    </Button>
                  </a>

                  <a
                    href="https://play.google.com/store/apps/details?id=com.investroute.financial.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button className="w-full bg-green-600 hover:bg-green-700 py-3 text-base font-bold text-white shadow-lg">
                      Mobile App
                    </Button>
                  </a>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
