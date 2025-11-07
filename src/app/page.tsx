'use client'
import { GridProducts } from '@/components/GridProducts'
import HeroSection from '@/components/HeroSection'
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
