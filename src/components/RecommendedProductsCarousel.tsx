"use client";

import React, { useEffect, useRef } from "react";
import { Inter } from "next/font/google";
import { useSelector } from "react-redux";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSwipeable } from "react-swipeable";
import { loadProducts } from "@/redux/features/products/productAction";
import type { RootState } from "@/redux/store";
import { useAppDispatch } from "@/redux/hooks";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export default function RecommendedProductsCarousel() {
  const dispatch = useAppDispatch();
  const scrollRef = useRef<HTMLDivElement>(null);

  const { items, isLoading, error } = useSelector(
    (state: RootState) => state.products
  );

  useEffect(() => {
    if (!items || items.length === 0) {
      dispatch(loadProducts({ page: 0, size: 8 }));
    }
  }, [items, dispatch]);

  const scroll = (offset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => scroll(300),
    onSwipedRight: () => scroll(-300),
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  if (isLoading) return <div className="text-center py-8">Loading...</div>;
  if (error)
    return <div className="text-center py-8 text-red-500">Error: {error}</div>;
  if (!items || items.length === 0) return null;

  return (
    <div className="relative w-full my-10">
      <h1 className={`${inter.className} text-lg font-bold ml-80 mb-2`}>
        Passende Alternativen
      </h1>
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 ml-64 bg-white/80 p-3 rounded-full shadow-lg hover:bg-white active:scale-95 transition"
        onClick={() => scroll(-300)}
      >
        <ChevronLeft className="w-7 h-7 text-gray-700" />
      </button>
      <div
        {...handlers}
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth no-scrollbar pl-72 scroll-container"
      >
        {items.map((product) => (
          <div
            key={product.id}
            className="min-w-[210px] flex-shrink-0 rounded-2xl  p-2 flex flex-col items-center transition-transform hover:scale-[1.03]"
          >
            <Link href={`/products/${product.id}`} className="w-full block">
              <img
                src={product.imageUrls?.[0]}
                alt={product.title}
                className="rounded-lg w-full h-44 object-cover mb-2"
              />
            </Link>
            <div className="flex w-full justify-between ">
              <div className={`${inter.className} font-normal text-xs ml-3`}>
                {product.title}
              </div>
              <div className={`${inter.className} font-normal text-xs mr-3`}>
                ab {product.price}€
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-3 rounded-full shadow-lg hover:bg-white active:scale-95 transition"
        onClick={() => scroll(300)}
      >
        <ChevronRight className="w-7 h-7 text-gray-700" />
      </button>
    </div>
  );
}
