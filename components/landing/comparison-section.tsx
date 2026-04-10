"use client"

import { motion } from "framer-motion"
import { Check, X, ArrowRight } from "lucide-react"

const comparisonData = {
  traditional: {
    title: "Обычная фотосессия",
    items: [
      { text: "Поиск фотографа", negative: true },
      { text: "Аренда студии", negative: true },
      { text: "Визажист и стилист", negative: true },
      { text: "Время на съёмку: 3-5 часов", negative: true },
      { text: "Ожидание обработки: 7-14 дней", negative: true },
      { text: "Стоимость: от ₽15 000", negative: true },
    ]
  },
  neurophoto: {
    title: "НейроСтиль",
    items: [
      { text: "Откройте бота в VK", negative: false },
      { text: "Загрузите своё фото", negative: false },
      { text: "AI подберёт стиль", negative: false },
      { text: "Время: 10 секунд", negative: false },
      { text: "Результат мгновенно", negative: false },
      { text: "Первое фото бесплатно", negative: false },
    ]
  }
}

export function ComparisonSection() {
  return (
    <section className="py-24 bg-card/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">Сравнение</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Почему НейроСтиль лучше
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Сравните традиционную фотосессию с нашим AI-решением
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Traditional */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 rounded-2xl bg-card border border-border"
          >
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
              {comparisonData.traditional.title}
            </h3>
            <ul className="space-y-4">
              {comparisonData.traditional.items.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <X className="w-4 h-4 text-destructive" />
                  </div>
                  <span className="text-muted-foreground">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* NeurPhoto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-6 rounded-2xl bg-primary/5 border border-primary/20 relative overflow-hidden"
          >
            {/* Highlight badge */}
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary">
                Рекомендуем
              </span>
            </div>
            
            <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
              {comparisonData.neurophoto.title}
            </h3>
            <ul className="space-y-4">
              {comparisonData.neurophoto.items.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Arrow indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mt-8"
        >
          <motion.div
            animate={{ x: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex items-center gap-2 text-primary"
          >
            <span className="text-sm font-medium">Выбор очевиден</span>
            <ArrowRight className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
