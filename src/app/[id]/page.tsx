import { use } from "react"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const { id } = params

  // тут можно дернуть данные из API или Redux
  // например fetch(`/api/products/${id}`)

  return (
    <div>
      <h1>Товар {id}</h1>
      <p>Здесь будет подробная карточка</p>
    </div>
  )
}
