'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type Props = {
  images: string[]
}

export default function MobileImageSlider({ images }: Props) {
  const [current, setCurrent] = useState(0)
  const total = images.length
  const touchStartX = useRef(0)

  const next = () => setCurrent((prev) => (prev + 1) % total)
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total)

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = e.changedTouches[0].clientX - touchStartX.current
    if (diff > 50) prev()
    if (diff < -50) next()
  }

  return (
    <div
      className="relative w-[calc(100%-2rem)] mx-4 h-[480px] sm:hidden overflow-hidden rounded-lg"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {images.map((src, index) => (
        <Image
          key={index}
          src={src}
          alt={`image-${index}`}
          fill
          className={`object-cover transition-transform duration-500 ease-in-out ${
            index === current
              ? 'translate-x-0'
              : index < current
                ? '-translate-x-full'
                : 'translate-x-full'
          }`}
        />
      ))}

      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 rounded-full p-2"
      >
        <ChevronRight size={28} />
      </button>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full ${i === current ? 'bg-black' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  )
}
