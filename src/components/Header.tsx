'use client'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { Poppins } from 'next/font/google'
import { Dialog, DialogTrigger, DialogContent, DialogClose } from '@/components/ui/dialog'
import { useAppDispatch } from '@/redux/hooks'
import { loadProducts } from '@/redux/features/products/productAction'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-poppins',
})

const links = [
  { href: '/', label: 'Home' },
  { href: '/seifenherstellung', label: 'Seifenherstellung' },
  { href: '/about', label: 'Über mich' },
  { href: '/contact', label: 'Kontakt' },
]

const Header: FC = () => {
  const dispatch = useAppDispatch()
  const handleClick = () => {
    dispatch(loadProducts({ page: 0, size: 8 }))
  }
  return (
    <header className="bg-background h-28">
      <div className="max-width mx-auto px-6 sm:px-2 lg:px-8 py-2 flex items-center justify-between relative">
        <nav className="hidden flex-1 sm:flex justify-evenly">
          {links.slice(0, 2).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${poppins.variable} font-medium text-base  md:text-xl  hover:text-[#FFD5D4]`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/" onClick={handleClick} className="mx-4 sm:mx-0">
          <Image
            src="/logo.png"
            width={350}
            height={350}
            alt="Anna's Seifenarts Logo"
            className="h-24 w-auto"
          />
        </Link>
        <div className="flex m-4 sm:flex-1 ">
          <nav className="hidden flex-1 sm:flex justify-evenly">
            {links.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${poppins.variable} font-medium text-base  md:text-xl  hover:text-[#FFD5D4]`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center">
            <div className="relative -translate-y-1">
              <Link href="/cart">
                <Image
                  src="/basket_icon.png"
                  width={350}
                  height={350}
                  alt="basket_icon"
                  className="w-6 md:w-7 lg:w-7 "
                />
              </Link>
            </div>

            <div className="hidden sm:flex pl-4 relative -translate-y-0.5 ">
              <Link href="/languages">
                <Image
                  src="/languages_icon.png"
                  width={350}
                  height={350}
                  alt="languages_icon"
                  className="w-6 md:w-7 lg:w-7"
                />
              </Link>
            </div>
          </div>
          <Dialog>
            <DialogTrigger
              className="sm:hidden mr-4 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#FFD5D4] absolute right-0"
              aria-label="Open menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </DialogTrigger>

            <DialogContent>
              <div className="flex flex-col space-y-4 mt-8">
                <Link href="/" className="font-medium text-lg hover:text-[#FFD5D4]">
                  Home
                </Link>
                <Link href="/products" className="font-medium text-lg hover:text-[#FFD5D4]">
                  Seifenherstellung
                </Link>
                <Link href="/about" className="font-medium text-lg hover:text-[#FFD5D4]">
                  Über mich
                </Link>
                <Link href="/contact" className="font-medium text-lg hover:text-[#FFD5D4]">
                  Kontakt
                </Link>
                <Link href="/languages" className="font-medium text-lg hover:text-[#FFD5D4]">
                  Languages
                </Link>
              </div>
              <DialogClose className="absolute top-4 right-4 p-2" aria-label="Close menu">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </DialogClose>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  )
}

export default Header
