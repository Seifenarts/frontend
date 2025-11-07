'use client'
import Image from 'next/image'
import { Lemon, Mali } from 'next/font/google'
import React from 'react'

const lemon = Lemon({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
})

const mali = Mali({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
})

const HeroSection: React.FC = () => {
  return (
    <div className="w-full mx-auto h-[370px] bg-gradient-to-r from-[#FFD5D5] to-[#998080] flex items-center sm:justify-between lg:justify-center relative px-6 shadow-lg overflow-hidden">
      <div className="text-center ">
        <h1
          className={`${lemon.className} font-bold text-[clamp(2.5rem,4vw,4.0rem)] text-[#FFD700] text-stroke-black mb-4`}
        >
          Blumenstrauß aus Naturseife
        </h1>
        <div className="flex justify-center px-6">
          <div className="flex flex-col items-start ">
            <p
              className={`${mali.className} font-bold text-[clamp(1.5rem,3vw,3.0rem)] sm:text-[clamp(1.5rem,3vw,2.5rem)] text-[#FFF8D0]`}
            >
              Duftende Kunstwerke,
            </p>
            <p
              className={`${mali.className} font-bold text-[clamp(1.5rem,3vw,3.0rem)] sm:text-[clamp(1.5rem,3vw,2.5rem)] text-[#FFF8D0]`}
            >
              ideal als Geschenk und Dekoration
            </p>
          </div>
        </div>
      </div>

      <Image
        src="/frau1.png"
        alt="frau"
        className="h-[170%] w-auto object-contain mt-8 ml-10 opacity-75 hidden sm:block"
      />
    </div>
  )
}

export default HeroSection
