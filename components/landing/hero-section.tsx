"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Zap, Clock } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
      
      {/* Floating orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-primary">1 фото бесплатно</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-balance"
        >
          <span className="text-foreground">Профессиональные фото</span>
          <br />
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            за секунды
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty"
        >
          Создавайте стильные нейрофотосессии для соцсетей, сайтов и рекламы.
          Забудьте о дорогих студиях и фотографах.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Button
            asChild
            size="lg"
            className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-full"
          >
            <a href="https://vk.me/neirofotostyle" target="_blank" rel="noopener noreferrer" 
            onClick={() => {
              if (typeof window !== "undefined" && (window as any).ym) {
                (window as any).ym(108457993, 'reachGoal', 'vkbutton');
             }
          }}>
              Попробовать в VK
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          <div className="flex flex-col items-center gap-2 p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm">
            <div className="p-3 rounded-xl bg-primary/10">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <span className="text-3xl font-bold text-foreground">10 сек</span>
            <span className="text-sm text-muted-foreground">на создание фото</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm">
            <div className="p-3 rounded-xl bg-accent/10">
              <Clock className="w-6 h-6 text-accent" />
            </div>
            <span className="text-3xl font-bold text-foreground">5 часов</span>
            <span className="text-sm text-muted-foreground">экономии времени</span>
          </div>
          <div className="flex flex-col items-center gap-2 p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm">
            <div className="p-3 rounded-xl bg-primary/10">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <span className="text-3xl font-bold text-foreground">₽50К+</span>
            <span className="text-sm text-muted-foreground">экономии на студии</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-primary rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}
