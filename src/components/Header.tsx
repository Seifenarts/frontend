"use client";

import Link from "next/link";
import { FC } from "react";
import { Poppins } from "next/font/google";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-poppins",
});

const Header: FC = () => {
  return (
    <header className="bg-background h-28">
      <div className="container mx-auto px-6 lg:px-20 py-2 flex items-center justify-center relative">
        <nav className="hidden sm:flex flex-1 justify-evenly">
          <Link
            href="/"
            className={`${poppins.variable} font-medium text-lg hover:text-[#FFD5D4]`}
          >
            Home
          </Link>
          <Link
            href="/products"
            className={`${poppins.variable} font-medium text-lg hover:text-[#FFD5D4]`}
          >
            Seifenherstellung
          </Link>
        </nav>

        <Link href="/" className="mx-4 sm:mx-0">
          <img src="/logo.png" alt="Anna's Seifenarts Logo" className="h-24 w-auto" />
        </Link>

        <nav className="hidden sm:flex flex-1 justify-evenly">
          <Link
            href="/about"
            className={`${poppins.variable} font-medium text-lg hover:text-[#FFD5D4]`}
          >
            Über mich
          </Link>
          <Link
            href="/contact"
            className={`${poppins.variable} font-medium text-lg hover:text-[#FFD5D4]`}
          >
            Kontakt
          </Link>
        </nav>

        <Dialog>
          <DialogTrigger
            className="sm:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#FFD5D4] absolute right-0"
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
    </header>
  );
};

export default Header;
