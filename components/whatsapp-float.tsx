"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppFloat() {
  const handleClick = () => {
    const phoneNumber = "919235622204" // India country code + number
    const message = encodeURIComponent("Hello! I'm interested in your services.")
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 md:bottom-8 md:right-8 md:h-16 md:w-16"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7 md:h-8 md:w-8" />
    </button>
  )
}
