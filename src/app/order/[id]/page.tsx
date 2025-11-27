'use client'

import { useParams } from 'next/navigation'

export default function OrderPage() {
  const params = useParams<{ id: string }>()
  const id = params?.id

  return <h1>OrderPage</h1>
}
