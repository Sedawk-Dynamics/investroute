"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-800 py-16 border-t-4 border-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/investroute-logo.png"
              alt="Investroute - Ek Rista Vishwas Ka"
              width={1400}
              height={600}
              className="h-40 lg:h-48 w-auto mb-6 object-contain"
              priority
            />
            <p className="text-sm text-slate-600 leading-relaxed">
              Your trusted partner for comprehensive wealth management and financial planning solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-bold mb-4 text-secondary">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#services" className="text-slate-600 hover:text-secondary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-600 hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-slate-600 hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-bold mb-4 text-accent">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/mutual-fund" className="text-slate-600 hover:text-accent transition-colors">
                  Mutual Funds
                </Link>
              </li>
              <li>
                <Link href="/share-trading" className="text-slate-600 hover:text-accent transition-colors">
                  Share Trading
                </Link>
              </li>
              <li>
                <Link href="/insurance" className="text-slate-600 hover:text-accent transition-colors">
                  Insurance
                </Link>
              </li>
              <li>
                <Link href="/loans" className="text-slate-600 hover:text-accent transition-colors">
                  Loans
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-bold mb-4 text-secondary">Contact Info</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <a
                  href="https://www.google.com/maps?q=26.8894377,81.0012954&z=17&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors cursor-pointer"
                >
                  14/827 Indira Nagar, Lucknow
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps?q=26.8894377,81.0012954&z=17&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-secondary transition-colors cursor-pointer"
                >
                  Uttar Pradesh 226016
                </a>
              </li>
              <li>
                <a href="tel:8353922204" className="hover:text-secondary transition-colors">
                  Phone: 8353922204
                </a>
              </li>
              <li>
                <a href="tel:8353922204" className="hover:text-secondary transition-colors">
                  Telephone: 0522404843
                </a>
              </li>
              <li className="space-y-1">
                <span className="font-semibold">Email:</span>
                <div className="flex flex-col text-sm">
                  <a href="mailto:info@investroutecapital.com" className="hover:text-secondary transition-colors">
                    info@investroutecapital.com
                  </a>
                  <a href="mailto:grievances@investroutecapital.com" className="hover:text-secondary transition-colors">
                    grievances@investroutecapital.com
                  </a>
                  <a href="mailto:care@investroutecapital.com" className="hover:text-secondary transition-colors">
                    care@investroutecapital.com
                  </a>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-slate-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-600">
            <p>© 2025 Investroute Financial Services Private Limited. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="hover:text-secondary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-and-conditions" className="hover:text-secondary transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
