"use client";

import type { RootState } from "@/redux/store";
import { useAppDispatch } from "@/redux/hooks";
import { useSelector } from "react-redux";
import { findProduct } from "@/redux/features/products/productAction";
import { useEffect } from "react";
import React from "react";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const { selectedProduct, isLoading, error } = useSelector(
    (state: RootState) => state.products
  );
  const dispatch = useAppDispatch();

  const { id } = React.use(params);

  useEffect(() => {
    dispatch(findProduct({ id: Number(id) }));
  }, [id, dispatch]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!selectedProduct) return <div>No product found</div>;

  const sizes = ["M", "L", "XL", "XXL"];

  return (
    <div className="flex gap-4 mx-4 justify-center">
      <div className="flex flex-1 gap-4">
        <div className="max-w-[130px] flex-1 flex flex-col gap-4">
          {selectedProduct?.imageUrls?.slice(1, 5).map((img, index) => (
            <img key={index} src={img} alt="img" className="rounded-[5%]" />
          ))}
        </div>

        <div className="flex-1 ">
          {selectedProduct?.imageUrls &&
            selectedProduct.imageUrls.length > 0 && (
              <img
                src={selectedProduct.imageUrls[0]}
                alt="mainImg"
                className="rounded-[3%]"
              />
            )}
        </div>
      </div>

      <div className="flex flex-col flex-1">
        <h3>{selectedProduct?.title}</h3>
        <p>{selectedProduct?.shortDescription}</p>

        <div className="mt-4">
          <p className="font-bold">Duft:</p>
          <p>{selectedProduct?.aromas}</p>
        </div>

        <div className="flex flex-col gap-2 mt-4">
          <p className="font-bold">GRÖSSE WÄHLEN</p>

          <div className="max-w-[300px] flex flex-col gap-3">
            <div className="flex gap-3">{sizes.map((size) => {
              const isActive = selectedProduct?.size === size;
              return (
                <div
                  key={size}
                  className={`${inter.className} w-[66px] h-[65px] border border-gray-500 flex flex-col items-center justify-center rounded-md transition-all duration-200
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
                  <p className={`${inter.className} text-2xl font-extrabold`}>{size}</p>
                </div>
              );
            })}
            </div>
            <span className={`${inter.className} ml-auto text-3xl font-extrabold`}>{selectedProduct?.price} €</span>
            <Button className={`${inter.className} h-12 bg-black  text-[#be9f4b] font-bold`}> JETZT BESTELLEN</Button>
            <div className="flex gap-1 justify-center"> 
              <img
                src="/Mastercard.png"
                alt="mastercard_icon"                
              />
              <img
                src="/visa.png"
                alt="visa_icon"                
              />
              <img
                src="/PayPal.png"
                alt="Paypal_icon"                
              />
              </div>
              <img
                src="/Delivery.png"
                alt="Delivery_icon"
                className="w-12"                
              />
          </div>
        </div>
      </div>
    </div>
  );
}
