'use client'
import Image from 'next/image'

interface IProductGalleryProps {
  images: string[]
  activeIndex: number
  setActiveIndex: (index: number) => void
}

export default function ProductGallery({
  images,
  activeIndex,
  setActiveIndex,
}: IProductGalleryProps) {
  if (!images || images.length === 0) return null
  return (
    <div className="hidden sm:flex max-w-[800px] xl:max-w-[880px] flex flex-1">
      {/* Thumbnails */}
      <div className="max-w-[130px] lg:max-w-[170px] flex-1 flex flex-col gap-2 ml-4">
        {images.slice(1, 5).map((img, index) => (
          <Image
            key={index}
            src={img}
            alt="img"
            width={150}
            height={120}
            loading="lazy"
            className={`rounded-[5%] cursor-pointer w-[120px] lg:w-[150px] ${
              index + 1 === activeIndex ? 'ring-2 ring-[#312a16]' : ''
            }`}
            onClick={() => setActiveIndex(index + 1)}
          />
        ))}
      </div>
      {/* main img*/}
      <div className="flex-1 lg:max-w-[670px] md:max-w-[500px] max-[900px]:w-[500px] max-[900px]:h-[665px] relative">
        {images.map((img, index) => (
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
  )
}
