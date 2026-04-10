"use client"

import { motion } from "framer-motion"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Какое фото нужно загрузить?",
    answer: "Подойдёт любое чёткое фото вашего лица — селфи, фото на документы или обычный портрет. Главное, чтобы лицо было хорошо видно и не было размытым."
  },
  {
    question: "Сколько стоит генерация фото?",
    answer: "Первое фото — абсолютно бесплатно! После этого вы можете приобрести пакеты генераций по выгодным ценам прямо в боте."
  },
  {
    question: "Насколько реалистичны результаты?",
    answer: "Наша нейросеть создаёт фотореалистичные изображения, которые практически неотличимы от профессиональной съёмки. Результат зависит от качества исходного фото."
  },
  {
    question: "Какие стили доступны?",
    answer: "Доступно множество стилей: деловой, портерты, lifestyle, резюме, природа, пляжный, pinterest, элегантный, креативный, яркий и многое другое. Вы также можете описать желаемый образ своими словами в Творческом режиме."
  },
  {
    question: "Как долго ждать результат?",
    answer: "Генерация занимает всего 10-30 секунд! Вы получаете готовое фото практически мгновенно прямо в чате VK."
  },
  {
    question: "Безопасно ли загружать свои фото?",
    answer: "Да, полностью безопасно. Мы не храним ваши фотографии и не используем их для обучения. После генерации исходное фото автоматически удаляется."
  }
]

export function FAQSection() {
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
          <span className="text-primary font-medium mb-4 block">FAQ</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Частые вопросы
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Ответы на популярные вопросы о нейрофотосессиях
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-xl px-6 bg-card data-[state=open]:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary transition-colors py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
