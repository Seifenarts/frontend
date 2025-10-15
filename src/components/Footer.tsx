"use client";

import Link from "next/link";
import React, { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="w-full mx-auto px-6 md:px-16 lg:px-24 py-6 text-center text-sm text-gray-500 border-t border-gray-300">
      <div className="flex flex-col gap-6">
        
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 text-center md:text-left">
          <div>&copy; {new Date().getFullYear()} Anna&apos;s Seifenarts</div>

          <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
            <p>Durch die Nutzung dieser Website akzeptieren Sie unsere:</p>
            <Link
              href="/"
              className="font-medium text-blue-400 hover:text-[#FFD5D4]"
            >
              Nutzungsbedingungen
            </Link>
          </div>

          <div className="flex flex-col md:flex-row gap-2 md:gap-4">
            <Link
              href="/"
              className="font-medium text-blue-400 hover:text-[#FFD5D4]"
            >
              Datenschutzerklärung
            </Link>
            <Link
              href="/"
              className="font-medium text-blue-400 hover:text-[#FFD5D4]"
            >
              Impressum
            </Link>
          </div>
        </div>

       
        <div className="flex justify-center md:justify-end gap-4">
          <Link href="https://www.instagram.com/annatarlev.de/?hl=en">
            <img src="/instagram.png" alt="Instagram" className="w-6 h-6" />
          </Link>
          <Link href="/">
            <img src="/facebook.png" alt="Facebook" className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
