"use client";

import type { RootState } from "@/redux/store";
import { useAppDispatch } from "@/redux/hooks";
import { useSelector } from "react-redux";
import { findProduct } from "@/redux/features/products/productAction";
import { useEffect, useState } from "react";
import React from "react";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
import RecommendedProductsCarousel from "@/components/RecommendedProductsCarousel";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

interface ProductPageProps {
  params: { id: string };
}

export default function ProductPage({ params }: ProductPageProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const { selectedProduct, isLoading, error } = useSelector(
    (state: RootState) => state.products
  );
  const dispatch = useAppDispatch();

  const { id } = params;

  useEffect(() => {
    setActiveIndex(0);
    dispatch(findProduct({ id: Number(id) }));
  }, [id, dispatch]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!selectedProduct) return <div>No product found</div>;

  const sizes = ["M", "L", "XL", "XXL"];

  return (
    <div className="flex flex-col gap-4 justify-center">
      <div className="flex justify-center ml-4">
        <div className="max-w-[750px] flex flex-1 gap-4">
          <div className="max-w-[120px] flex-1 flex flex-col gap-4">
            {selectedProduct?.imageUrls?.slice(1, 5).map((img, index) => (
              <img
                key={index}
                src={img}
                alt="img"
                className={`rounded-[5%] cursor-pointer ${
                  index === activeIndex ? "ring-2 ring-[#be9f4b]" : ""
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>

          <div className="flex-1 max-w-[600px] relative">
            {selectedProduct?.imageUrls?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="mainImg"
                className={`rounded-[3%] absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out
        ${index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`}
              />
            ))}
          </div>
        </div>

        <div className="max-w-[390px] flex flex-col mx-12 gap-2 mb-8">
          <h3 className={`${inter.className} font-extrabold text-5xl`}>
            {selectedProduct?.title}
          </h3>
          <p className={`${inter.className} text-lg`}>
            {selectedProduct?.shortDescription}
          </p>

          <div className="flex my-2 gap-2">
            <p className={`${inter.className} font-bold`}>Duft:</p>
            <p className={`${inter.className}`}>
              zarter Duft frisch geschnittener Rosen
            </p>
            <p>{selectedProduct?.aromas}</p>
          </div>

          <div className="flex flex-col gap-2 ">
            <p className="font-bold">GRÖSSE WÄHLEN</p>

            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                {sizes.map((size) => {
                  const isActive = selectedProduct?.size === size;
                  return (
                    <div
                      key={size}
                      className={`${
                        inter.className
                      } w-[90px] h-[75px] border border-gray-500 flex flex-col items-center justify-center rounded-md transition-all duration-200
                    ${
                      isActive
                        ? "bg-black text-[#be9f4b]"
                        : "bg-white text-black"
                    }
                  `}
                    >
                      <span className={`${inter.className} font-bold`}>
                        {selectedProduct?.price ?? "-"} €
                      </span>
                      <p
                        className={`${inter.className} text-2xl font-extrabold`}
                      >
                        {size}
                      </p>
                    </div>
                  );
                })}
              </div>
              <span
                className={`${inter.className} ml-auto text-3xl font-extrabold`}
              >
                {selectedProduct?.price} €
              </span>
              <Button
                className={`${inter.className} h-12 bg-black  text-[#be9f4b] font-bold hover:bg-[#be9f4b] hover:text-black transition-colors`}
              >
                JETZT BESTELLEN
              </Button>
              <div className="flex gap-1 justify-center">
                <img src="/Mastercard.png" alt="mastercard_icon" />
                <img src="/visa.png" alt="visa_icon" />
                <img src="/PayPal.png" alt="Paypal_icon" />
              </div>
              <div className="flex gap-4">
                <img
                  src="/Delivery.png"
                  alt="Delivery_icon"
                  className="w-18 h-12"
                />
                <div className="flex flex-col">
                  <p className={`${inter.className} text-green-600 font-bold`}>
                    Lieferbar vom 08.07 bis 15.07
                  </p>
                  <p className={`${inter.className}`}>
                    Lieferung nach Deutschland
                  </p>
                  <p className={`${inter.className} flex justify-center `}>
                    or
                  </p>
                </div>
              </div>
              <div className="ml-8">
                <div className="flex gap-1">
                  <p className={`${inter.className} text-sm`}>Abholung im</p>
                  <p
                    className={`${inter.className} text-sm text-blue-400 font-bold`}
                  >
                    Studio
                  </p>
                  <p
                    className={`${inter.className} text-sm text-green-600 font-bold`}
                  >
                    ohne Lieferungskosten:
                  </p>
                </div>
                <p className={`${inter.className} text-sm font-bold`}>
                  Oberer Grifflenberg 83, 42119 Wuppertal
                </p>
              </div>
              <div className={`${inter.className} `}>
                {selectedProduct.fullDescription}
              </div>
              <div className={`${inter.className}`}>
                <span className="font-bold">Inhaltstoffe: </span>
                <span>{selectedProduct.composition}</span>
              </div>
              <p
                className={`${inter.className} font-light text-sm leading-relaxed mt-2 mx-2`}
              >
                Unser handgemachtes Naturseifenstück wird ausschließlich aus
                hochwertigen pflanzlichen Ölen und reinen ätherischen Ölen
                hergestellt.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <RecommendedProductsCarousel id={Number(id)} />
    </div>
  );
}
