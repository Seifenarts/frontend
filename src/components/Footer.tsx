"use client";

import Link from "next/link";
import React, { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="w-full mx-auto px-24 py-4 text-center text-sm text-gray-500  border-t border-gray-300">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between sm:flex-col">
          <div>&copy; {new Date().getFullYear()} Anna's Seifenarts</div>
          <div className="flex gap-2">
            <p>Durch die Nutzung dieser Website akzeptieren Sie unsere:</p>
            <Link
              href="/"
              className={`font-medium text-sm text-blue-400  hover:text-[#FFD5D4]`}
            >
              Nutzungsbedingungen
            </Link>
          </div>
          <Link
            href="/"
            className={`font-medium text-sm text-blue-400  hover:text-[#FFD5D4]`}
          >
            Datenschutzerklärung
          </Link>
          <Link
            href="/"
            className={`font-medium text-sm text-blue-400  hover:text-[#FFD5D4]`}
          >
            Impressum
          </Link>
        </div>

        <div className="flex justify-end">
          <div className="flex gap-3">
            <Link href="https://www.instagram.com/annatarlev.de/?hl=en">
              <img src="/instagram.png" alt="instagramIcon" />
            </Link>
            <Link href="/">
              <img src="/facebook.png" alt="facebookjIcon" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
