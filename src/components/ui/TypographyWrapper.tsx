import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
})

export default function FontWrapper({ children }: { children: React.ReactNode }) {
  return <div className={inter.className}>{children}</div>
}
