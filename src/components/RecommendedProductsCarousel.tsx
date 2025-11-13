'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Inter } from 'next/font/google'
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

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
})

export default function RecommendedProductsCarousel({ id }: RecommendedProductsCarouselProps) {
  const dispatch = useAppDispatch()
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isShifted, setIsShifted] = useState(false)

  const { recommendedItems, isLoading, error } = useSelector(
    (state: RootState) => state.recommendedProducts,
  )

  useEffect(() => {
    if (!id || recommendedItems.length > 0) return
    dispatch(loadRecommendedProducts({ id }))
  }, [id, dispatch, recommendedItems.length])

  const smoothScroll = (offset: number, duration = 1000) => {
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

  const handlers = useSwipeable({
    onSwipedLeft: () => smoothScroll(300),
    onSwipedRight: () => smoothScroll(-300),
    preventScrollOnSwipe: true,
    trackMouse: true,
  })

  useEffect(() => {
    const handleScroll = () => {
      if (!scrollRef.current) return
      setIsShifted(scrollRef.current.scrollLeft > 0)
    }

    const scrollEl = scrollRef.current
    if (scrollEl) {
      scrollEl.addEventListener('scroll', handleScroll)
      handleScroll()
    }

    return () => {
      if (scrollEl) scrollEl.removeEventListener('scroll', handleScroll)
    }
  }, [])

  if (isLoading) return <div className="text-center py-8">Loading...</div>
  if (error) return <div className="text-center py-8 text-red-500">Error: {error}</div>

  return (
    <div className="relative lg:mt-8 w-full mb-10">
      <h1 className={`${inter.className} text-lg font-bold ml-60 mb-2`}>Passende Alternativen</h1>

      <button
        className={`absolute top-1/2 -translate-y-1/2 z-10 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white active:scale-95 transition-all duration-500 ease-in-out`}
        style={{
          left: isShifted ? '2rem' : '-4rem',
          opacity: isShifted ? 1 : 0,
        }}
        onClick={() => smoothScroll(-250, 1000)}
        disabled={!isShifted}
      >
        <ChevronLeft className="w-7 h-7 text-gray-700" />
      </button>

      <div
        {...handlers}
        ref={scrollRef}
        className="flex overflow-x-auto no-scrollbar pl-72 scroll-container"
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
              <div className={`${inter.className} font-normal text-xs ml-3`}>{product.title}</div>
              <div className={`${inter.className} font-normal text-xs mr-3`}>
                ab {product.price}€
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white active:scale-95 transition"
        onClick={() => smoothScroll(250, 1000)}
      >
        <ChevronRight className="w-7 h-7 text-gray-700" />
      </button>
    </div>
  )
}
