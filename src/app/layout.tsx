"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-poppins",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} mx-auto max-w-[1440px] antialiased bg-background text-gray-900 min-h-screen shadow-lg flex flex-col `}
      >
        <Provider store={store}>
          <Header />

          <main className="flex-1"> {children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
