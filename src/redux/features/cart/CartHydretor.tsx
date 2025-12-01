'use client'

import { useEffect } from 'react'
import { useAppDispatch } from '@/redux/hooks'
import { setCartFromStorage } from '@/redux/features/cart/cartSlice'

export default function CartHydrator() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const saved = localStorage.getItem('cart')
    if (saved) {
      dispatch(setCartFromStorage(JSON.parse(saved)))
    }
  }, [dispatch])

  return null
}
