'use client'
import { GridProducts } from '@/components/gridProducts'
import HeroSection from '@/components/heroSection'
import React from 'react'

const Home: React.FC = () => {
  return (
    <>
      <div>
        <HeroSection />
      </div>
      <div className="mt-32 ml-2 mr-2 ">
        <GridProducts />
      </div>
    </>
  )
}

export default Home
