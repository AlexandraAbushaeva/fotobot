"use client"

import { motion } from "framer-motion"
import { Upload, Wand2, Download, ArrowDown, MessageCircle } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Напишите боту",
    description: "Перейдите в VK и начните диалог с нашим ботом"
  },
  {
    number: "02",
    icon: Upload,
    title: "Загрузите фото",
    description: "Отправьте своё фото в чат — подойдёт любое селфи"
  },
  {
    number: "03",
    icon: Wand2,
    title: "Выберите стиль",
    description: "Укажите желаемый стиль или опишите образ"
  },
  {
    number: "04",
    icon: Download,
    title: "Получите результат",
    description: "Скачайте готовое профессиональное фото за секунды"
  }
]

export function HowItWorksSection() {
  return (
    <section className="py-24 bg-card/50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium mb-4 block">Как это работает</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Всего 4 простых шага
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Создание профессиональной фотографии никогда не было таким простым
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className={`flex items-center gap-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                {/* Step card */}
                <div className="flex-1 p-6 rounded-2xl bg-card border border-border group hover:border-primary/50 transition-colors duration-300">
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <step.icon className="w-8 h-8 text-primary" />
                      </div>
                      <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                        {step.number.replace('0', '')}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </div>

                {/* Timeline */}
                <div className="hidden md:flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border-2 border-primary bg-background flex items-center justify-center">
                    <span className="text-primary font-bold">{step.number}</span>
                  </div>
                </div>

                {/* Spacer */}
                <div className="flex-1 hidden md:block" />
              </div>

              {/* Connector arrow */}
              {index < steps.length - 1 && (
                <div className="flex justify-center my-4">
                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowDown className="w-6 h-6 text-primary/50" />
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
