"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store";
import { useAppDispatch } from "@/redux/hooks";
import { loadProducts } from "@/redux/features/products/productAction";
import { setPage } from "@/redux/features/products/productSlice";
import { ProductCard } from "./ProductCard";
import { PaginationBlock } from "./PaginationBlock";

export function GridProducts() {
  const { items, isLoading, error, page, totalPages } = useSelector(
    (state: RootState) => state.products
  );
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(loadProducts({ page: page - 1, size: 8 }));
  }, [page, dispatch]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div >
      <div
        className="mx-auto max-w-[1500px] grid 
  grid-cols-[repeat(auto-fit,minmax(320px,1fr))]"
      >
        {items.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.shortDescription}
            price={`€${product.price}`}
            imageUrl={product.imageUrls[0]}
          />
        ))}
      </div>

      <div className="m-8">
        <PaginationBlock
          currentPage={page + 1}
          totalPages={totalPages}
          onPageChange={(p) => dispatch(setPage(p - 1))}
        />
      </div>
    </div>
  );
}
