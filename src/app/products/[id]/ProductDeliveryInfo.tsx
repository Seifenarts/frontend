'use client'
import Image from 'next/image'

export default function ProductDeliveryInfo() {
  return (
    <div className="flex flex-col mdx:flex-col sm:flex-row max-[900px]:w-full mdx:gap-1 sm:gap-5 my-6 px-4 ">
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
          <p className="text-green-600 font-bold text-sm xl:text-base">
            Lieferbar vom 08.07 bis 15.07
          </p>
          <p className="text-sm xl:text-base">Lieferung nach Deutschland</p>
        </div>
      </div>
      <p className="flex text-sm max-[640px]:justify-start xl:text-base max-[640px]:ml-36 mdx:ml-36">
        or
      </p>
      <div className="flex flex-col ml-8 md:ml-0 max-[900px]:ml-2 max-[640px]:ml-0">
        <div className=" flex gap-1">
          <p className="text-xs xl:text-base">Abholung im</p>
          <p className="text-xs xl:text-base text-blue-400 font-bold">Studio</p>
          <p className="text-xs xl:text-base text-green-600 font-bold">ohne Lieferungskosten:</p>
        </div>
        <p
          className="text-xs xl:text-base 
                  font-bold"
        >
          Oberer Grifflenberg 83, 42119 Wuppertal
        </p>
      </div>
    </div>
  )
}
