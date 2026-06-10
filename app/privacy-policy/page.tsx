"use client"

import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PrivacyPolicyPage() {
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
            <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-4">Privacy Policy</h1>
            <p className="text-slate-600 text-lg">Investroute Financial Services Private Limited</p>
          </div>

          {/* Content */}
          <div className="prose prose-slate max-w-none space-y-8 text-slate-700">
            <p className="text-lg leading-relaxed">
              At Investroute Financial Services Private Limited ("Investroute", "we", "our", "us"), your privacy is
              important to us. This Privacy Policy explains how we collect, use, store, share, and protect your personal
              information when you access our website, mobile application, calculators, products, or services. By using
              our services, you consent to the practices described in this policy.
            </p>

            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">1. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>
                  <strong>Personal Information:</strong> Name, phone number, email address, postal address, date of
                  birth, and other details you provide through our forms.
                </li>
                <li>
                  <strong>Financial Information:</strong> Investment preferences, income range, and goals shared by you
                  for advisory and service purposes.
                </li>
                <li>
                  <strong>Technical Information:</strong> IP address, browser type, device information, and usage data
                  collected automatically through cookies and analytics tools.
                </li>
              </ul>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">2. How We Use Your Information</h2>
              <p>The information we collect is used to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Provide financial advisory, investment, insurance, and loan-related services.</li>
                <li>Respond to your enquiries and process your requests.</li>
                <li>Send updates, offers, and communications related to our services.</li>
                <li>Improve our website, application, and overall user experience.</li>
                <li>Comply with legal, regulatory, and statutory obligations.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">3. Sharing of Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  We may share your information with licensed partners such as mutual fund houses, insurers, banks, and
                  NBFCs strictly to facilitate the services you have requested.
                </li>
                <li>We do not sell or rent your personal information to any third party for marketing purposes.</li>
                <li>
                  Information may be disclosed to regulatory authorities or law enforcement agencies when required by
                  law.
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">4. Data Security</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  We implement appropriate technical and organizational measures to protect your personal information
                  against unauthorized access, alteration, disclosure, or destruction.
                </li>
                <li>
                  While we strive to use commercially acceptable means to protect your data, no method of transmission
                  over the internet is 100% secure.
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">5. Cookies & Tracking Technologies</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Our website may use cookies and similar technologies to enhance user experience and analyze traffic.</li>
                <li>You can choose to disable cookies through your browser settings, though some features may not function properly.</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">6. Data Retention</h2>
              <p>
                We retain your personal information only for as long as necessary to fulfil the purposes outlined in this
                policy, or as required to comply with legal and regulatory obligations.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">7. Your Rights</h2>
              <p>Subject to applicable law, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Access the personal information we hold about you.</li>
                <li>Request correction of inaccurate or incomplete data.</li>
                <li>Request deletion of your personal information, subject to legal requirements.</li>
                <li>Opt out of promotional communications at any time.</li>
              </ul>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">8. Communication Consent</h2>
              <p>By submitting your contact details, you consent to receive:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Calls, emails, WhatsApp messages, or SMS related to services, updates, and offers.</li>
                <li>You may opt out of promotional communication at any time.</li>
              </ul>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">9. Third-Party Links</h2>
              <p>
                Our website and app may contain links to third-party websites. We are not responsible for the privacy
                practices or content of such external sites. We encourage you to review their privacy policies before
                sharing any information.
              </p>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">10. Children's Privacy</h2>
              <p>
                Our services are intended for individuals who are at least 18 years of age. We do not knowingly collect
                personal information from minors.
              </p>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">11. Changes to This Policy</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Investroute reserves the right to update this Privacy Policy at any time without prior notice.</li>
                <li>Updated policies will be effective immediately upon posting on the website or app.</li>
              </ul>
            </section>

            {/* Section 12 - Contact */}
            <section>
              <h2 className="text-2xl font-bold text-primary mb-4">12. Contact Information</h2>
              <p>For any privacy-related queries, concerns, or grievances, please contact us:</p>
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
