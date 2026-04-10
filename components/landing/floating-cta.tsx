"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show floating CTA after scrolling past hero section
      setIsVisible(window.scrollY > 600)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
        >
          <Button
            asChild
            size="lg"
            className="group bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-6 text-base rounded-full shadow-2xl shadow-primary/30"
          >
            <a href="https://vk.me/neirofotostyle" target="_blank" rel="noopener noreferrer"
            onClick={() => {
              if (typeof window !== "undefined" && (window as any).ym) {
                (window as any).ym(108457993, 'reachGoal', 'vkbutton');
             }
          }}>
              <Sparkles className="mr-2 w-4 h-4" />
              <span className="hidden sm:inline">Попробовать бесплатно в VK</span>
              <span className="sm:hidden">Открыть в VK</span>
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
