"use client"

import { motion } from "framer-motion"
import { 
  Clock, 
  Wallet, 
  Sparkles, 
  Camera, 
  Smartphone,
  Zap,
  ArrowRight
} from "lucide-react"

const benefits = [
  {
    icon: Wallet,
    title: "Экономия денег",
    description: "Забудьте о расходах на студии, фотографов и визажистов. Профессиональный результат без лишних затрат.",
    highlight: "до ₽50 000",
    color: "primary"
  },
  {
    icon: Clock,
    title: "Экономия времени",
    description: "Никаких поездок на съёмку, ожидания обработки и согласований. Результат за минуты.",
    highlight: "5+ часов",
    color: "accent"
  },
  {
    icon: Sparkles,
    title: "Качество AI",
    description: "Нейросеть создаёт фотореалистичные снимки, неотличимые от профессиональной съёмки.",
    highlight: "HD качество",
    color: "primary"
  },
  {
    icon: Camera,
    title: "Любые стили",
    description: "Бизнес-портреты, фэшн, арт, lifestyle — выбирайте любой образ для вашего контента.",
    highlight: "100+ стилей",
    color: "accent"
  },
  {
    icon: Smartphone,
    title: "Для любых задач",
    description: "Идеально для соцсетей, сайтов, рекламы, резюме, визиток и личного бренда.",
    highlight: "Универсально",
    color: "primary"
  },
  {
    icon: Zap,
    title: "Мгновенный результат",
    description: "Загрузите фото, выберите стиль — и получите результат за считанные секунды.",
    highlight: "10 секунд",
    color: "accent"
  }
]

export function BenefitsSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">Преимущества</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Почему выбирают нас
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Нейрофотосессии — это современный способ получить профессиональные снимки
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              {/* Glow effect on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-${benefit.color}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className={`inline-flex p-3 rounded-xl bg-${benefit.color}/10 mb-4`}>
                  <benefit.icon className={`w-6 h-6 text-${benefit.color}`} />
                </div>
                
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-foreground">{benefit.title}</h3>
                  <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </div>
                
                <p className="text-muted-foreground mb-4">{benefit.description}</p>
                
                <span className={`inline-block px-3 py-1 text-sm font-medium rounded-full bg-${benefit.color}/10 text-${benefit.color}`}>
                  {benefit.highlight}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
