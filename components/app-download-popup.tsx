"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
import { Download, ShieldCheck, TrendingUp, X, Zap } from "lucide-react"

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.investroute.financial.app"
const DISMISSED_KEY = "investroute-app-popup-dismissed"
const SHOW_DELAY_MS = 3000

// Mobile-only popup inviting visitors to download the app. Shown once per browser session.
export function AppDownloadPopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!window.matchMedia("(max-width: 1023px)").matches) return
    try {
      if (sessionStorage.getItem(DISMISSED_KEY)) return
    } catch {}

    const timer = setTimeout(() => setIsOpen(true), SHOW_DELAY_MS)
    return () => clearTimeout(timer)
  }, [])

  const close = () => {
    setIsOpen(false)
    try {
      sessionStorage.setItem(DISMISSED_KEY, "1")
    } catch {}
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-end justify-center lg:hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50"
            onClick={close}
          />

          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="app-popup-title"
            className="relative w-full max-w-md rounded-t-3xl bg-white px-6 pb-8 pt-6 shadow-2xl"
          >
            <button
              type="button"
              onClick={close}
              className="absolute right-4 top-4 rounded-full p-1.5 text-gray-500 transition hover:bg-gray-100"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-gray-200" />

            <Image
              src="/investroute-logo.png"
              alt="Investroute"
              width={600}
              height={300}
              className="mx-auto -my-6 h-28 w-auto object-contain"
            />

            <h2 id="app-popup-title" className="mt-2 text-center text-2xl font-extrabold text-slate-900">
              Get the Investroute App
            </h2>
            <p className="mt-2 text-center text-sm text-slate-600">
              Invest in mutual funds, track your portfolio and manage insurance & loans — all from your phone.
            </p>

            <ul className="mt-5 space-y-2.5 text-sm text-slate-700">
              <li className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 shrink-0 text-green-600" />
                Bank-grade security for your data
              </li>
              <li className="flex items-center gap-3">
                <Zap className="h-5 w-5 shrink-0 text-orange-500" />
                Instant transactions & live market updates
              </li>
              <li className="flex items-center gap-3">
                <TrendingUp className="h-5 w-5 shrink-0 text-[#2F4BC1]" />
                Smart insights for your financial goals
              </li>
            </ul>

            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noreferrer"
              onClick={close}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-green-600 py-3.5 text-base font-bold text-white shadow-lg transition hover:bg-green-700"
            >
              <Download className="h-5 w-5" />
              Download on Google Play
            </a>
            <button
              type="button"
              onClick={close}
              className="mt-3 w-full py-2 text-sm font-medium text-slate-500 hover:text-slate-700"
            >
              Not now
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
