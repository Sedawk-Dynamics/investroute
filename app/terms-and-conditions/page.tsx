"use client"

import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-24">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        {/* Back to Home Button */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link href="/">
            <Button
              variant="outline"
              className="inline-flex items-center gap-2 text-primary border-2 border-primary hover:bg-primary hover:text-white transition-all bg-transparent"
            >
              <ArrowLeft size={18} />
              Back to Home
            </Button>
          </Link>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-slate-200"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-4">Terms & Conditions</h1>
            <p className="text-slate-600 text-lg">Investroute Financial Services Private Limited</p>
          </div>

          {/* Content */}
          <div className="prose prose-slate max-w-none space-y-8 text-slate-700">
            <p className="text-lg leading-relaxed">
              Welcome to Investroute Financial Services Private Limited ("Investroute", "we", "our", "us"). By accessing
              or using our website, mobile application, calculators, products, or services, you agree to be bound by the
              following Terms & Conditions. Please read them carefully before proceeding.
            </p>

            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing this website, submitting your details, using our calculators, mobile application, or
                availing any of our services, you acknowledge that you have read, understood, and agreed to comply with
                these Terms & Conditions, along with our Privacy Policy.
              </p>
              <p className="mt-4">
                If you do not agree with any part of these terms, please refrain from using our services.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">2. About Investroute</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Investroute Financial Services Private Limited provides financial advisory, investment facilitation,
                  insurance distribution, loan assistance, and related wealth management services.
                </li>
                <li>We act as facilitators and advisors and do not guarantee returns on any investment products.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">3. Eligibility</h2>
              <p>By using our services, you confirm that:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>You are at least 18 years of age.</li>
                <li>You are legally capable of entering into binding contracts under Indian law.</li>
                <li>All information provided by you is accurate, complete, and up to date.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">4. Use of Calculators</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Our SIP, Lumpsum, SWP, Retirement, Goal Planning, EMI, and other calculators are for illustrative and
                  informational purposes only.
                </li>
                <li>The results are estimates based on user inputs and assumed rates of return.</li>
                <li>
                  Actual investment returns may vary due to market conditions, fund performance, taxes, and other
                  factors.
                </li>
                <li>Calculator outputs should not be considered as financial, tax, or investment advice.</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">5. Investment & Market Risks</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Mutual funds, equities, and other market-linked investments are subject to market risks.</li>
                <li>Past performance is not indicative of future returns.</li>
                <li>
                  Investroute does not guarantee capital protection or assured returns unless explicitly stated in a
                  regulated product.
                </li>
                <li>
                  We strongly recommend consulting with our financial advisors before making any investment decisions.
                </li>
              </ul>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">6. Advisory & Execution Disclaimer</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Investroute may provide recommendations based on your financial profile, risk appetite, and stated
                  goals.
                </li>
                <li>Final investment decisions remain solely with the client.</li>
                <li>We are not responsible for losses arising from market fluctuations or client decisions.</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">7. Insurance & Loan Services</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Insurance products are offered through licensed insurance partners.</li>
                <li>Loan services are subject to approval by banks and NBFCs based on their internal policies.</li>
                <li>Investroute does not influence underwriting decisions, interest rates, or final approvals.</li>
              </ul>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">8. Mobile Application Usage</h2>
              <p>By using the Investroute mobile app:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>You agree not to misuse, reverse engineer, or attempt unauthorized access.</li>
                <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
                <li>We are not liable for losses caused due to unauthorized access resulting from user negligence.</li>
              </ul>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">9. Data Accuracy & User Responsibility</h2>
              <p>You agree that:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Information shared by you is truthful and accurate.</li>
                <li>You will promptly update us in case of any changes.</li>
                <li>
                  Investroute is not liable for errors caused due to incorrect or incomplete information provided by
                  users.
                </li>
              </ul>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">10. Third-Party Links & Partners</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Our website and app may contain links to third-party websites or services (mutual fund houses,
                  insurers, banks).
                </li>
                <li>We do not control or endorse the content of third-party websites.</li>
                <li>Investroute is not responsible for any losses or damages arising from third-party interactions.</li>
              </ul>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">11. Intellectual Property</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  All content on this website and app, including logos, text, graphics, calculators, and design
                  elements, are the intellectual property of Investroute.
                </li>
                <li>Unauthorized copying, reproduction, or distribution is strictly prohibited.</li>
                <li>Use of our brand name or content without written permission is not allowed.</li>
              </ul>
            </section>

            {/* Section 12 */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">12. Limitation of Liability</h2>
              <p>To the maximum extent permitted by law:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Investroute shall not be liable for any direct, indirect, incidental, or consequential losses.</li>
                <li>
                  We are not responsible for market losses, system downtime, or technical issues beyond our control.
                </li>
              </ul>
            </section>

            {/* Section 13 */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">13. Privacy & Data Protection</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your personal information is handled in accordance with our Privacy Policy.</li>
                <li>
                  By using our services, you consent to the collection, processing, and storage of your data for service
                  delivery, compliance, and communication purposes.
                </li>
              </ul>
            </section>

            {/* Section 14 */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">14. Communication Consent</h2>
              <p>By submitting your contact details, you consent to receive:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Calls, emails, WhatsApp messages, or SMS related to services, updates, and offers.</li>
                <li>You may opt out of promotional communication at any time.</li>
              </ul>
            </section>

            {/* Section 15 */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">15. Changes to Terms</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Investroute reserves the right to modify these Terms & Conditions at any time without prior notice.
                </li>
                <li>Updated terms will be effective immediately upon posting on the website or app.</li>
              </ul>
            </section>

            {/* Section 16 */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">16. Governing Law & Jurisdiction</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  These Terms & Conditions shall be governed by and interpreted in accordance with the laws of India.
                </li>
                <li>
                  All disputes shall be subject to the exclusive jurisdiction of courts located in Lucknow, Uttar
                  Pradesh.
                </li>
              </ul>
            </section>

            {/* Section 17 - Contact */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">17. Contact Information</h2>
              <p>For any queries, concerns, or grievances, please contact us:</p>
              <div className="mt-4 p-6 bg-slate-50 rounded-xl border border-slate-200">
                <p className="font-bold text-lg mb-3">Investroute Financial Services Private Limited</p>
                <div className="space-y-2 text-sm">
                  <p>📍 14/827 Indira Nagar, Sec-14 Indiranagar, Lucknow, Uttar Pradesh – 226016</p>
                  <p>📞 Phone: 8353922204 / 9151722204</p>
                  <p>☎️ Landline: 0522-404843</p>
                  <div>
                    <p className="font-semibold mb-1">📧 Email:</p>
                    <p>info@investroutecapital.com</p>
                    <p>grievances@investroutecapital.com</p>
                    <p>care@investroutecapital.com</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Back to Home Button at Bottom */}
          <div className="mt-12 text-center">
            <Link href="/">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-xl inline-flex items-center gap-2"
              >
                <ArrowLeft size={20} />
                Back to Home
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
