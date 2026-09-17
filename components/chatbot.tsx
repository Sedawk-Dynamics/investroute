"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { Bot, Send, X } from "lucide-react"
import { findAnswer, GREETING, SUGGESTIONS, type ChatAnswer } from "@/lib/chatbot-knowledge"

type Message = ChatAnswer & {
  id: number
  from: "bot" | "user"
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [messages, setMessages] = useState<Message[]>([{ id: 0, from: "bot", ...GREETING }])
  const nextId = useRef(1)
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" })
  }, [messages, isTyping])

  useEffect(() => {
    if (isOpen) inputRef.current?.focus()
  }, [isOpen])

  const ask = (question: string) => {
    const trimmed = question.trim()
    if (!trimmed || isTyping) return

    setMessages((prev) => [...prev, { id: nextId.current++, from: "user", text: trimmed }])
    setInput("")
    setIsTyping(true)

    // Short delay so the reply feels conversational.
    setTimeout(() => {
      setMessages((prev) => [...prev, { id: nextId.current++, from: "bot", ...findAnswer(trimmed) }])
      setIsTyping(false)
    }, 500)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    ask(input)
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-label="Investroute chat assistant"
            className="fixed bottom-40 right-4 z-50 flex h-[min(520px,calc(100vh-12rem))] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl md:bottom-48 md:right-8"
          >
            <div className="flex items-center justify-between bg-red-600 px-4 py-3 text-white">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold leading-tight">Investroute Assistant</p>
                  <p className="text-xs text-white/80">Ask me anything about our services</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1 transition hover:bg-white/20"
                aria-label="Close chat"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-gray-50 p-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.from === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                      message.from === "user"
                        ? "rounded-br-sm bg-red-600 text-white"
                        : "rounded-bl-sm border border-gray-200 bg-white text-gray-800"
                    }`}
                  >
                    <p className="whitespace-pre-line">{message.text}</p>
                    {message.links && message.links.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {message.links.map((link) =>
                          link.href.startsWith("/") ? (
                            <Link
                              key={link.href + link.label}
                              href={link.href}
                              onClick={() => setIsOpen(false)}
                              className="rounded-full border border-red-200 bg-red-50 px-2.5 py-1 text-xs font-medium text-red-700 transition hover:bg-red-100"
                            >
                              {link.label}
                            </Link>
                          ) : (
                            <a
                              key={link.href + link.label}
                              href={link.href}
                              target={link.href.startsWith("http") ? "_blank" : undefined}
                              rel="noopener noreferrer"
                              className="rounded-full border border-red-200 bg-red-50 px-2.5 py-1 text-xs font-medium text-red-700 transition hover:bg-red-100"
                            >
                              {link.label}
                            </a>
                          ),
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start" aria-label="Assistant is typing">
                  <div className="flex gap-1 rounded-2xl rounded-bl-sm border border-gray-200 bg-white px-3 py-3">
                    {[0, 1, 2].map((dot) => (
                      <span
                        key={dot}
                        className="h-2 w-2 animate-bounce rounded-full bg-gray-400"
                        style={{ animationDelay: `${dot * 150}ms` }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {messages.length === 1 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {SUGGESTIONS.map((suggestion) => (
                    <button
                      key={suggestion}
                      type="button"
                      onClick={() => ask(suggestion)}
                      className="rounded-full border border-gray-300 bg-white px-3 py-1.5 text-xs text-gray-700 transition hover:border-red-400 hover:text-red-600"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-gray-200 bg-white p-3">
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question..."
                aria-label="Your question"
                className="flex-1 rounded-full border border-gray-300 px-4 py-2 text-sm outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-red-600 text-white transition hover:bg-red-700 disabled:opacity-50"
                aria-label="Send"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="fixed bottom-24 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-red-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 md:bottom-28 md:right-8 md:h-16 md:w-16"
        aria-label={isOpen ? "Close chat" : "Open chat assistant"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="h-7 w-7" /> : <Bot className="h-7 w-7 md:h-8 md:w-8" />}
      </button>
    </>
  )
}
