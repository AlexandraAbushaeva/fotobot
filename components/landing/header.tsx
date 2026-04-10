"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sparkles, ArrowRight } from "lucide-react"

export function Header() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-4 mt-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between px-6 py-4 rounded-2xl bg-card/80 backdrop-blur-xl border border-border/50">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xl font-bold text-foreground hidden sm:block">НейроСтиль</span>
            </a>

            {/* CTA Button */}
            <Button
              asChild
              className="group bg-primary hover:bg-primary/90 text-primary-foreground rounded-full"
            >
              <a href="https://vk.me/neirofotostyle" target="_blank" rel="noopener noreferrer" onClick={() => {
              if (typeof window !== "undefined" && (window as any).ym) {
                (window as any).ym(108457993, 'reachGoal', 'vkbutton');
             }
          }}>
                <span className="hidden sm:inline">Попробовать в VK</span>
                <span className="sm:hidden">В VK</span>
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  )
}
