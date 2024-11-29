"use client"

import { useState, useEffect } from 'react'
import { ChevronUp, ChevronDown } from 'lucide-react'

export default function ScrollButtons() {
  const [showUpButton, setShowUpButton] = useState(false)
  const [showDownButton, setShowDownButton] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const scrollThreshold = 200

      setShowUpButton(scrolled > scrollThreshold)
      setShowDownButton(scrolled < maxScroll - scrollThreshold)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const smoothScroll = (target: number) => {
    window.scrollTo({
      top: target,
      behavior: 'smooth'
    })
  }

  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
      {showUpButton && (
        <button
          onClick={() => smoothScroll(0)}
          className="scroll-btn bg-gradient-to-r from-purple-600 to-pink-600 text-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
      {showDownButton && (
        <button
          onClick={() => smoothScroll(document.documentElement.scrollHeight)}
          className="scroll-btn bg-gradient-to-r from-purple-600 to-pink-600 text-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
          aria-label="Scroll to bottom"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      )}
    </div>
  )
}

