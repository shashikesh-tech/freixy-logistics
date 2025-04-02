"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
export default function FunctionName() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 ${
        isScrolled ? "bg-black/50 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex gap-3 justify-between items-center py-3 mx-auto max-w-7xl w-full px-6 lg:px-4">
        <div className="text-[#d53503]">
          <Link href="#" className="text-4xl font-bold">
            Fre<span className="text-white hover:text-[#d53503]">ixy</span>
          </Link>
        </div>
        <ul className="flex gap-3 lg:gap-8">
          {["Home", "About", "Pricing"].map((item) => (
            <li className="px-2" key={item}>
              <Link
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-[#d53503]"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex gap-3 lg:gap-6">
          {["Login", "Signup for free"].map((item) => (
            <li key={item}>
              <button className="text-white cursor-pointer hover:text-[#d53503]">
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
