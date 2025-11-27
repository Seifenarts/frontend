'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { store } from '@/redux/store'
import { Provider } from 'react-redux'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} mx-auto antialiased bg-background text-gray-900 min-h-screen shadow-lg flex flex-col `}
      >
        <Provider store={store}>
          <Header />
          <main className="flex-1"> {children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  )
}
