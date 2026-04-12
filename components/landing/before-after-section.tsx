"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { ArrowLeftRight } from "lucide-react"

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  beforeLabel?: string
  afterLabel?: string
}

function BeforeAfterSlider({ 
  beforeImage, 
  afterImage,
  beforeLabel = "До",
  afterLabel = "После" 
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100)
    setSliderPosition(percentage)
  }

  const handleMouseDown = () => {
    isDragging.current = true
  }

  const handleMouseUp = () => {
    isDragging.current = false
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return
    handleMove(e.clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX)
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden cursor-ew-resize group"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* After image (background) */}
      <div className="absolute inset-0">
        <img
          src={afterImage}
          alt="После обработки"
          className="w-full h-full object-cover"
        />
        <span className="absolute top-4 right-4 px-3 py-1 bg-primary/80 text-primary-foreground text-sm font-medium rounded-full backdrop-blur-sm">
          {afterLabel}
        </span>
      </div>

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={beforeImage}
          alt="До обработки"
          className="w-full h-full object-cover"
        />
        <span className="absolute top-4 left-4 px-3 py-1 bg-muted/80 text-foreground text-sm font-medium rounded-full backdrop-blur-sm">
          {beforeLabel}
        </span>
      </div>

      {/* Slider handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-foreground/80 backdrop-blur-sm"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-foreground rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
          <ArrowLeftRight className="w-6 h-6 text-background" />
        </div>
      </div>
    </div>
  )
}

const beforeAfterPairs = [
  {
    before: "/images/before3.jpg",
    after: "/images/after3.jpg",
    title: "Природа"
  },
  {
    before: "/images/before1.png",
    after: "/images/after1.png",
    title: "Повседневный стиль"
  },
  {
    before: "/images/before2.png",
    after: "/images/after2.jpg",
    title: "Студийный портрет"
  }
]

export function BeforeAfterSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-4 block">Трансформация</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Сравните результаты
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Перетащите ползунок, чтобы увидеть магию нейросети в действии
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {beforeAfterPairs.map((pair, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <BeforeAfterSlider
                beforeImage={pair.before}
                afterImage={pair.after}
              />
              <h3 className="mt-4 text-lg font-semibold text-foreground">{pair.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
