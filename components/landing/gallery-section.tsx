"use client"

import { motion } from "framer-motion"
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useRef } from "react"

const galleryImages = [
  {
    src: "/images/photo1.jpg",
    style: "Гламур"
  },
  {
    src: "/images/photo2.jpg",
    style: "Пляжный"
  },
  {
    src: "/images/photo3.jpg",
    style: "Креативный"
  },
  {
    src: "/images/photo4.jpg",
    style: "Черно-белый"
  },
  {
    src: "/images/photo5.jpg",
    style: "Портрет"
  },
  {
    src: "/images/photo6.jpg",
    style: "Природа"
  },
  {
    src: "/images/photo7.jpg",
    style: "street style"
  },
  {
    src: "/images/photo8.jpg",
    style: "Элегантный"
  }
]

export function GallerySection() {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )

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
          <span className="text-accent font-medium mb-4 block">Галерея</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Стили на любой вкус
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Выберите свой стиль: от делового портрета до креативных арт-образов
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[plugin.current]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <motion.div
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="relative group"
                  >
                    <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.style}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <span className="inline-block px-3 py-1 bg-primary/80 text-primary-foreground text-sm font-medium rounded-full backdrop-blur-sm">
                          {image.style}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-card/80 backdrop-blur-sm border-border hover:bg-card" />
            <CarouselNext className="right-4 bg-card/80 backdrop-blur-sm border-border hover:bg-card" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  )
}
