'use client'

import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '@/redux/store'
import { useAppDispatch } from '@/redux/hooks'
import { loadProducts } from '@/redux/features/products/productAction'
import { setPage } from '@/redux/features/products/productSlice'
import { ProductCard } from './ProductCard'
import { PaginationBlock } from './PaginationBlock'
import Loader from './custom-ui/loader'

export default function GridProducts() {
  const { items, isLoading, error, page, totalPages } = useSelector(
    (state: RootState) => state.products,
  )
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(loadProducts({ page, size: 8 }))
  }, [page, dispatch])

  if (isLoading) {
    return (
      <div className="flex justify-center mt-10">
        <Loader />
      </div>
    )
  }

  if (error) {
    return <div className="flex justify-center mt-10 text-red-600">Error: {error}</div>
  }

  return (
    <div>
      <div className="mx-auto max-w-[1500px] grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] place-items-center gap-4">
        {items.length > 0 ? (
          items.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.shortDescription}
              price={`€${product.price}`}
              imageUrl={product.imageUrls?.[0] || '/placeholder.png'}
            />
          ))
        ) : (
          <p>Keine Produkte gefunden</p>
        )}
      </div>

      <div className="m-8">
        <PaginationBlock
          currentPage={page}
          totalPages={totalPages}
          onPageChange={(p) => dispatch(setPage(p))}
        />
      </div>
    </div>
  )
}
