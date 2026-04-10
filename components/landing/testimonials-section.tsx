"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Анна М.",
    role: "Блогер",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&auto=format",
    text: "Теперь у меня всегда есть свежий контент для Instagram! Экономлю кучу денег на фотосессиях.",
    rating: 5
  },
  {
    name: "Дмитрий К.",
    role: "Предприниматель",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&auto=format",
    text: "Сделал профессиональные фото для LinkedIn и сайта компании за 5 минут. Результат превзошёл ожидания!",
    rating: 5
  },
  {
    name: "Елена С.",
    role: "HR-менеджер",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&auto=format",
    text: "Рекомендую всем коллегам для резюме. Качество как в профессиональной студии, но бесплатно!",
    rating: 5
  }
]

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">Отзывы</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Что говорят пользователи
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Присоединяйтесь к тысячам довольных пользователей
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 rounded-2xl bg-card border border-border group hover:border-primary/30 transition-colors duration-300"
            >
              {/* Quote icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10 group-hover:text-primary/20 transition-colors" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground mb-6">{`"${testimonial.text}"`}</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
