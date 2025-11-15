'use client'

import type { RootState } from '@/redux/store'
import { useAppDispatch } from '@/redux/hooks'
import { useSelector } from 'react-redux'
import { findProduct } from '@/redux/features/products/productAction'
import { useEffect, useState } from 'react'
import React from 'react'
import { Inter } from 'next/font/google'
import { Button } from '@/components/ui/button'
import RecommendedProductsCarousel from '@/app/products/[id]/RecommendedProductsCarousel'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import MobileImageSlider from '@/app/products/[id]/MobileImageSlider'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
})

export default function ProductPage() {
  const [activeIndex, setActiveIndex] = useState(0)
  const { selectedProduct, isLoading, error } = useSelector((state: RootState) => state.products)
  const dispatch = useAppDispatch()

  const params = useParams<{ id: string }>()
  const id = params?.id

  useEffect(() => {
    if (id) {
      setActiveIndex(0)
      dispatch(findProduct({ id: Number(id) }))
    }
  }, [id, dispatch])

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  if (!selectedProduct) return <div>No product found</div>

  const sizes = ['M', 'L', 'XL', 'XXL']

  return (
    <div className="flex flex-col justify-center min-h-screen ">
      <div className="w-full h-[1px] bg-gray-300"></div>
      <div className="flex flex-row items-start max-[900px]:flex-col justify-center mt-10 max-[900px]:mx-auto ">
        <div className="hidden sm:flex max-w-[800px] xl:max-w-[880px] flex flex-1">
          {/* small img gallery section */}
          <div className="max-w-[130px] lg:max-w-[170px] flex-1 flex flex-col gap-2 ml-4">
            {selectedProduct?.imageUrls?.slice(1, 5).map((img, index) => (
              <Image
                key={index}
                src={img}
                alt="img"
                width={150}
                height={120}
                loading="lazy"
                className={`rounded-[5%] cursor-pointer w-[120px] lg:w-[150px] ${
                  index === activeIndex ? 'ring-2 ring-[#312a16]' : ''
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
          {/* main img*/}
          <div className="flex-1 lg:max-w-[670px] md:max-w-[500px] max-[900px]:w-[500px] max-[900px]:h-[665px] relative">
            {selectedProduct?.imageUrls?.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt="mainImg"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className={`rounded-[3%] object-cover transition-opacity duration-500 ease-in-out
         ${index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
              />
            ))}
          </div>
        </div>
        <MobileImageSlider images={selectedProduct.imageUrls || []} />
        {/* description and choose products section*/}
        <div className="xl:max-w-[400px] lg:max-w-[300px] flex-1 flex-col mx-5 mb-8 max-[900px]:mt-6 xl:mx-0 ">
          <div>
            <h3 className={`${inter.className} font-extrabold mb-1 text-3xl  xl:mb-2 xl:text-5xl`}>
              {selectedProduct?.title}
            </h3>
            <p className={`${inter.className} text-sm mb-2 xl:mb-4 xl:text-lg`}>
              {selectedProduct?.shortDescription}
            </p>

            <div className="flex gap-2 mb-2 xl:mb-4">
              <p className={`${inter.className} font-bold text-sm xl:text-lg`}>Duft:</p>
              <p className={`${inter.className} text-sm xl:text-lg`}>
                zarter Duft frisch geschnittener Rosen
              </p>
              <p className={`${inter.className} text-sm xl:text-lg`}>{selectedProduct?.aromas}</p>
            </div>

            {/* choose products section*/}
            <div className="lg:max-w-[380px] ">
              <div className="flex flex-col gap-2">
                <p className="font-bold ">GRÖSSE WÄHLEN</p>
                <div className="flex flex-col gap-2 xl:gap-3">
                  <div className="flex gap-1 xl:gap-3">
                    {sizes.map((size) => {
                      const isActive = selectedProduct?.size === size
                      return (
                        <div
                          key={size}
                          className={`${
                            inter.className
                          } w-[70px] h-[60px] xl:w-[90px] xl:h-[75px] border border-gray-500 flex flex-col items-center justify-center rounded-md transition-all duration-200
                    ${isActive ? 'bg-black text-[#be9f4b]' : 'bg-white text-black'}
                  `}
                        >
                          <span className={`${inter.className}  font-bold`}>
                            {selectedProduct?.price ?? '-'} €
                          </span>
                          <p className={`${inter.className} text-xl xl:text-2x1 font-extrabold`}>
                            {size}
                          </p>
                        </div>
                      )
                    })}
                  </div>
                  <span
                    className={`${inter.className} max-[900px]:hidden ml-auto text-2xl xl:text-3xl font-extrabold`}
                  >
                    {selectedProduct?.price} €
                  </span>
                  <Button
                    className={`${inter.className} max-[900px]:hidden h-10 xl:h-12 bg-black  text-[#be9f4b] font-bold hover:bg-[#be9f4b] hover:text-black transition-colors`}
                  >
                    JETZT BESTELLEN
                  </Button>
                  <div className="flex gap-1 justify-center max-[900px]:hidden">
                    <Image src="/Mastercard.svg" width={37} height={25} alt="mastercard_icon" />
                    <Image src="/visa.svg" width={37} height={25} alt="visa_icon" />
                    <Image src="/PayPal.svg" width={37} height={25} alt="Paypal_icon" />
                  </div>
                </div>
              </div>
              <div className="w-1/2 h-[1px] bg-gray-300 mx-auto my-6 max-[900px]:w-[90%]"></div>

              {/* Deliver section*/}
              <div className="flex flex-col max-[900px]:flex-row max-[900px]:w-full  max-[900px]:gap-5 my-6 px-4 ">
                <div className="flex gap-2">
                  <div className="flex gap-4">
                    <Image
                      src="/Delivery.svg"
                      width={52}
                      height={43}
                      alt="Delivery_icon"
                      className="w-18 h-12"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p
                      className={`${inter.className} text-green-600 font-bold text-sm xl:text-base`}
                    >
                      Lieferbar vom 08.07 bis 15.07
                    </p>
                    <p className={`${inter.className} text-sm xl:text-base`}>
                      Lieferung nach Deutschland
                    </p>
                  </div>
                </div>
                <p
                  className={`${inter.className} flex justify-center items-center text-sm max-[640px]:justify-start max-[640px]:ml-36 xl:text-base `}
                >
                  or
                </p>
                <div className="ml-8 md:ml-0 max-[900px]:ml-2 max-[640px]:ml-0">
                  <div className="flex gap-1">
                    <p className={`${inter.className} text-sm xl:text-base`}>Abholung im</p>
                    <p
                      className={`${inter.className} text-sm xl:text-base text-blue-400 font-bold`}
                    >
                      Studio
                    </p>
                    <p
                      className={`${inter.className} text-sm xl:text-base text-green-600 font-bold`}
                    >
                      ohne Lieferungskosten:
                    </p>
                  </div>
                  <p
                    className={`${inter.className} text-sm xl:text-base 
              font-bold`}
                  >
                    Oberer Grifflenberg 83, 42119 Wuppertal
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Description*/}
          <div className="max-[900px]:max-w-[600px] mx-auto ">
            <div className={`${inter.className} text-sm xl:text-lg `}>
              {selectedProduct.fullDescription}
            </div>
            <div className={`${inter.className} mt-3 `}>
              <span className=" text-sm xl:text-lg font-bold">Inhaltstoffe: </span>
              <span className=" text-sm xl:text-lg ">{selectedProduct.composition}</span>
            </div>
            <span
              className={`${inter.className} text-gray-500 font-light text-[13px] xl:text-lg leading-relaxed mt-3`}
            >
              Unser handgemachtes Naturseifenstück wird ausschließlich aus hochwertigen pflanzlichen
              Ölen und reinen ätherischen Ölen hergestellt.
            </span>
          </div>
        </div>
      </div>
      <RecommendedProductsCarousel id={Number(id)} />
      {/*MobileBuyPanel*/}
      <div className="hidden max-[900px]:flex max-[900px]:sticky max-[900px]:bottom-0 max-[900px]:w-full max-[900px]:h-[clamp(70px,10vw,100px)] max-[900px]:bg-white max-[900px]:border-t-2 max-[900px]:border-gray-200 max-[900px]:shadow-md max-[900px]:items-center max-[900px]:justify-start max-[900px]:z-40">
        <div className="flex flex-col gap-1 justify-center ml-5">
          <Image src="/Mastercard.svg" width={50} height={30} alt="mastercard_icon" />
          <Image src="/visa.svg" width={50} height={30} alt="visa_icon" />
          <Image src="/PayPal.svg" width={50} height={30} alt="Paypal_icon" />
        </div>
        <div className={`${inter.className}  font-bold flex gap-4 items-end mx-10`}>
          <span className={`${inter.className}  text-5xl`}>{selectedProduct?.size}</span>
          <span className={`${inter.className}  text-4xl`}>{selectedProduct?.price ?? '-'}€</span>
        </div>

        <Button
          className={`${inter.className} h-full w-full text-3xl flex justify-center bg-black  text-[#be9f4b] font-bold hover:bg-[#be9f4b] hover:text-black transition-colors`}
        >
          JETZT BESTELLEN
        </Button>
      </div>
    </div>
  )
}
