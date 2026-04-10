"use client"

import { motion } from "framer-motion"

const marqueeItems = [
  "Бизнес-портреты",
  "Фэшн-съёмка",
  "Аватары для соцсетей",
  "Профиль LinkedIn",
  "Резюме и CV",
  "Личный бренд",
  "Контент для Инстаграм",
  "Фото для сайтов",
  "Рекламные материалы",
  "Арт-портреты"
]

export function MarqueeSection() {
  return (
    <section className="py-8 bg-primary/5 border-y border-border/50 overflow-hidden">
      <div className="flex">
        <motion.div
          className="flex gap-8 whitespace-nowrap"
          animate={{
            x: [0, -1920],
          }}
          transition={{
            x: {
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-8"
            >
              <span className="text-lg font-medium text-foreground/70">{item}</span>
              <span className="text-primary">✦</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
