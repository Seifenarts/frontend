import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import '../styles/globals.css';
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Soap Bouquet Shop",
  description: "Frontend for Soap Bouquet Shop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900 min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1 container mx-auto px-4 py-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

// ---------------- Header ----------------
function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Soap Bouquet Shop</h1>
        <nav className="space-x-4">
          <Link href="/" className="hover:text-blue-500">Home</Link>
          <Link href="/products" className="hover:text-blue-500">Products</Link>
          <Link href="/about" className="hover:text-blue-500">About</Link>
        </nav>
      </div>
    </header>
  );
}

// ---------------- Footer ----------------
function Footer() {
  return (
    <footer className="bg-white shadow-inner mt-8">
      <div className="container mx-auto px-4 py-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Soap Bouquet Shop. All rights reserved.
      </div>
    </footer>
  );
}
