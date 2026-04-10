"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Gift, Sparkles } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20" />
      
      {/* Animated orbs */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-64 h-64 bg-primary/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-accent/30 rounded-full blur-3xl"
        animate={{
          scale: [1.3, 1, 1.3],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 mb-8"
          >
            <Gift className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Специальное предложение</span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            Попробуйте{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              бесплатно
            </span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty">
            Создайте свою первую нейрофотографию прямо сейчас — 
            это займёт всего минуту и не потребует оплаты
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              asChild
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-7 text-lg rounded-full shadow-lg shadow-primary/25"
            >
              <a href="https://vk.me/neirofotostyle" target="_blank" rel="noopener noreferrer"
              onClick={() => {
              if (typeof window !== "undefined" && (window as any).ym) {
                (window as any).ym(108457993, 'reachGoal', 'vkbutton');
             }
          }}>
                <Sparkles className="mr-2 w-5 h-5" />
                Открыть в VK
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Без регистрации
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Без оплаты
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Результат за 10 секунд
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
