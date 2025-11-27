'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useSwipeable } from 'react-swipeable'
import type { RootState } from '@/redux/store'
import { useAppDispatch } from '@/redux/hooks'
import Link from 'next/link'
import { loadRecommendedProducts } from '@/redux/features/products/productAction'
import Image from 'next/image'

interface RecommendedProductsCarouselProps {
  id: number
}

export default function RecommendedProductsCarousel({ id }: RecommendedProductsCarouselProps) {
  const dispatch = useAppDispatch()
  const scrollRef = useRef<HTMLDivElement>(null)

  const [isShifted, setIsShifted] = useState(false)
  const [isAtEnd, setIsAtEnd] = useState(false)

  const { recommendedItems, isLoading, error } = useSelector(
    (state: RootState) => state.recommendedProducts,
  )

  // Load recommended products
  useEffect(() => {
    if (!id || recommendedItems.length > 0) return
    dispatch(loadRecommendedProducts({ id }))
  }, [id, dispatch, recommendedItems.length])

  // Smooth scroll movement
  const smoothScroll = (offset: number, duration = 900) => {
    if (!scrollRef.current) return
    const start = scrollRef.current.scrollLeft
    const end = start + offset
    const startTime = performance.now()

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const ease =
        progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2

      scrollRef.current!.scrollLeft = start + (end - start) * ease

      if (elapsed < duration) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }

  // Swipe support
  const handlers = useSwipeable({
    onSwipedLeft: () => smoothScroll(300),
    onSwipedRight: () => smoothScroll(-300),
    preventScrollOnSwipe: true,
    trackMouse: true,
  })

  // Fade + button visibility logic
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const handleScroll = () => {
      setIsShifted(el.scrollLeft > 0)
      setIsAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 5)
    }

    el.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => el.removeEventListener('scroll', handleScroll)
  }, [])

  if (isLoading) return <div className="text-center py-8">Loading...</div>
  if (error) return <div className="text-center py-8 text-red-500">Error: {error}</div>

  return (
    <div className="relative max-w-[1500px] w-full mx-auto lg:mt-8 mb-10 overflow-hidden">
      {/* Заголовок */}
      <h1 className="flex justify-end xl:justify-center mr-20 lx:mr-0 text-lg font-bold mb-2">
        Passende Alternativen
      </h1>

      {/* Левый Fade + Hard Cut (закрывает весь левый экран, никаких просветов) */}
      {isShifted && (
        <div
          className="pointer-events-none absolute top-0 bottom-0 z-30"
          style={{
            left: 0,
            width: '600px',
            backgroundImage:
              'linear-gradient(to right, #F9FCFD 0px, #F9FCFD 50px, rgba(247,249,250,0) 200px, transparent 100%)',
          }}
        />
      )}

      {/* Правый Fade */}
      {!isAtEnd && (
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-[#f7f9fa] to-transparent z-30" />
      )}

      {/* Scrollable Container */}
      <div
        {...handlers}
        ref={scrollRef}
        className="flex overflow-x-auto lg:pl-[600px] no-scrollbar relative z-10"
      >
        {recommendedItems.map((product) => (
          <div
            key={product.id}
            className="min-w-[180px] flex-shrink-0 rounded-2xl p-2 flex flex-col items-center transition-transform hover:scale-[1.03]"
          >
            <Link href={`/products/${product.id}`} className="w-full block">
              <Image
                src={product.imageUrls?.[0]}
                width={300}
                height={400}
                alt={product.title}
                className="rounded-lg w-[clamp(120px,40vw,180px)] h-[clamp(120px,40vw,180px)] object-cover mx-auto mb-2"
              />
            </Link>
            <div className="flex w-full justify-between">
              <span className="font-normal text-xs ml-3">{product.title}</span>
              <span className="font-normal text-xs mr-3">ab {product.price}€</span>
            </div>
          </div>
        ))}
      </div>

      {/* Левая кнопка */}
      <button
        className="absolute top-1/2 -translate-y-1/2 z-40 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white active:scale-95 transition-all duration-500 ease-in-out"
        style={{
          left: isShifted ? 'max(2vw, 1rem)' : '-5rem',
          opacity: isShifted ? 1 : 0,
        }}
        onClick={() => smoothScroll(-250)}
        disabled={!isShifted}
      >
        <ChevronLeft className="w-7 h-7 text-gray-700" />
      </button>

      {/* Правая кнопка */}
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 z-40 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white active:scale-95 transition"
        onClick={() => smoothScroll(250)}
      >
        <ChevronRight className="w-7 h-7 text-gray-700" />
      </button>
    </div>
  )
}
