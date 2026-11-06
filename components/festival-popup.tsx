"use client"

import { useEffect, useState } from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { ArrowRight, Sparkles, X } from "lucide-react"

const DISMISSED_KEY = "investroute-dhanteras-popup-updated-dismissed"

export function FestivalPopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    try {
      if (sessionStorage.getItem(DISMISSED_KEY)) return
    } catch {}

    const timer = window.setTimeout(() => setIsOpen(true), 1000)
    return () => window.clearTimeout(timer)
  }, [])

  function handleOpenChange(open: boolean) {
    setIsOpen(open)
    if (!open) {
      try {
        sessionStorage.setItem(DISMISSED_KEY, "1")
      } catch {}
    }
  }

  return (
    <Dialog.Root open={isOpen} onOpenChange={handleOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[100] bg-[radial-gradient(ellipse_at_center,rgba(80,36,16,0.65),rgba(12,8,6,0.85))] backdrop-blur-md duration-500 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 motion-reduce:animate-none" />
        <Dialog.Content
          aria-describedby={undefined}
          className="fixed left-1/2 top-1/2 z-[101] w-[min(560px,calc(100vw-2rem),calc(100dvh-180px))] max-h-[calc(100dvh-2rem)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-[24px] border border-[#e8bd70]/50 bg-[linear-gradient(145deg,#352019,#170d0a)] p-2 shadow-[0_30px_100px_rgba(0,0,0,0.6),0_0_60px_rgba(225,156,54,0.12)] outline-none duration-500 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 motion-reduce:animate-none sm:p-3"
        >
          <Dialog.Title className="sr-only">Happy Dhanteras from Investroute</Dialog.Title>
          <div className="flex min-h-12 items-center gap-2 px-3 pr-12 pb-2 text-[#edd3a1]">
            <Sparkles className="h-4 w-4 shrink-0 text-[#e7b75f]" aria-hidden="true" />
            <span className="text-[10px] font-medium uppercase tracking-[0.22em] sm:text-[11px]">With love, Investroute</span>
          </div>
          <div className="overflow-hidden rounded-[16px] border border-[#edc47d]/30">
          <img
            src="/images/dhanteras-greeting-updated.webp"
            alt="Happy Dhanteras. Wishing you and your family a festival of prosperity, health, and happiness."
            width={1600}
            height={1600}
            className="block h-auto w-full"
          />
          </div>
          <div className="flex flex-col items-center gap-3 px-2 pb-2 pt-4">
            <p className="text-center font-serif text-sm italic text-[#e8cda6] sm:text-base">May every new beginning shine.</p>
            <Dialog.Close className="group inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-[#e7bf7d]/25 bg-[#edc580]/10 px-5 text-xs font-medium tracking-wide text-[#f6dfb7] transition-colors hover:border-[#e7bf7d]/60 hover:bg-[#edc580]/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e7bf7d]">
              Continue exploring
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none" aria-hidden="true" />
            </Dialog.Close>
          </div>
          <Dialog.Close
            aria-label="Close greeting"
            className="absolute right-2 top-2 flex h-11 w-11 items-center justify-center rounded-full text-[#e8cda6]/80 transition-colors hover:bg-[#edc580]/10 hover:text-[#fff0d5] focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#e7bf7d] sm:right-3 sm:top-3"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
