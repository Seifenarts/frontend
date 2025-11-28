'use client'

import type { RootState } from '@/redux/store'
import { useAppDispatch } from '@/redux/hooks'
import { useSelector } from 'react-redux'
import { findProduct } from '@/redux/features/products/productAction'
import { useEffect, useState } from 'react'
import React from 'react'
import { useParams } from 'next/navigation'

import ProductGallery from './productGallery'
import ProductInfo from './productInfo'
import ProductSizeSelector from './productSizeSelector'
import ProductDeliveryInfo from './productDeliveryInfo'
import ProductDescription from './productDescription'
import MobileBuyPanel from './mobileBuyPanel'
import RecommendedProductsCarousel from './recommendedProductsCarousel'
import MobileImageSlider from './mobileImageSlider'
import Loader from '@/components/ui/loader'

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

  if (isLoading) return <Loader />
  if (error) return <div>Error: {error}</div>
  if (!selectedProduct) return <div>No product found</div>

  return (
    <div className="flex flex-col justify-center">
      <div className="w-full h-[1px] bg-gray-300"></div>
      <div className="flex flex-row items-start max-[900px]:flex-col justify-center mt-10 max-[900px]:mx-auto ">
        <ProductGallery
          images={selectedProduct.imageUrls}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />

        <MobileImageSlider images={selectedProduct.imageUrls || []} />
        <div className="max-[900px]:max-w-none min-[900px]:max-w-[300px] xl:max-w-[400px] flex-1 flex-col mx-5 mb-8 max-[900px]:mt-6 xl:mx-0">
          <div>
            <ProductInfo selectedProduct={selectedProduct} />
            <div className="lg:max-w-[380px]">
              <ProductSizeSelector selectedProduct={selectedProduct} />
              <div className="w-1/2 h-[1px] bg-gray-300 mx-auto my-6 max-[900px]:w-[90%]"></div>
              <ProductDeliveryInfo />
            </div>
          </div>
          <ProductDescription selectedProduct={selectedProduct} />
        </div>
      </div>
      <RecommendedProductsCarousel id={Number(id)} />
      <MobileBuyPanel selectedProduct={selectedProduct} />
    </div>
  )
}
