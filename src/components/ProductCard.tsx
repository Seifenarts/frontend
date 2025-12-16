'use client'
import Image from 'next/image'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/custom-ui/card'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
})

interface ProductCardProps {
  id: number
  title: string
  description: string
  price: string
  imageUrl: string
  stockStatus: boolean
}

export function ProductCard({
  id,
  title,
  description,
  price,
  imageUrl,
  stockStatus,
}: ProductCardProps) {
  return (
    <Link href={`/products/${id}`} className="block">
      <Card className="bg-transparent shadow-none border-none w-full h-full flex flex-col">
        <CardHeader>
          <Image
            src={imageUrl}
            width={350}
            height={350}
            alt={title}
            className="w-full max-w-[350px] h-[350px] shadow-lg object-cover rounded-[15%]"
          />
        </CardHeader>
        <CardContent className="flex-1 max-w-[350px]">
          <CardTitle className={`${inter.className}  flex justify-between mb-1`}>
            <span className="font-bold">{title}</span>
            <div className="flex gap-1">
              <span>ab</span>
              {price}
            </div>
          </CardTitle>
          <CardDescription className={`${inter.className} font-sans`}>
            {description}
          </CardDescription>
        </CardContent>
        <CardFooter className="flex text-sm">
          {stockStatus ? (
            <p className="text-green-500"> Verfügbar – bis zu 5 Werktage Lieferzeit</p>
          ) : (
            <p className="text-[#BE9F4B]"> Auf Bestellung – Lieferzeit bis zu 10 Werktage</p>
          )}
        </CardFooter>
      </Card>
    </Link>
  )
}
