"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { Mail, Menu, Phone, X } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

export const Navbar = () => {
  const scrolled = useScrollTop();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (href: any) => pathname === href;

  return (
    <div
      className={cn(
        "z-50 bg-background fixed top-0 items-center w-full ",
        scrolled && "border-b shadow-sm"
      )}
    >
      {/* Top Nav  */}
      <nav className="bg-[#0b2670] text-white py-3 px-3 md:py-3 md:px-28">
        <ul className="flex justify-between text-xs md:text-sm">
          <li>
            <div className="flex items-center justify-center group hover:font-semibold transition-all duration-300">
              <Mail className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 inline-block" />
              <Link href="mailto:vinox.techn@gmail.com">
                vinox.techn@gmail.com
              </Link>
            </div>
          </li>
          <li>
            <div className="flex items-center justify-center group hover:font-semibold transition-all duration-300">
              <Phone className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 inline-block" />
              <Link href="tel:+912167265378"> 216-726-5378</Link>
            </div>
          </li>
        </ul>
      </nav>

      {/* Bottom Nav  */}
      <nav className="py-3 md:py-3 md:px-6">
        {/* Main Nav */}
        <div className="flex justify-between items-center h-10">
          <div className="ml-5 md:ml-20">
            <img src="/Logo.jpg" alt="logo" className="w-16 md:w-24" />
            {/* <Image src="/Logo.jpg" alt="logo" width={70} height={70} /> */}
          </div>

          {isMenuOpen ? (
            <X onClick={toggleMenu} className="mr-5 w-4 h-4 md:hidden " />
          ) : (
            <Menu onClick={toggleMenu} className="mr-5 w-4 h-4 md:hidden " />
          )}

          <ul className="hidden md:flex items-center space-x-10 md:mr-20">
            <li
              className={cn(
                "group hover:text-[#0b2670] hover:font-semibold transition-all duration-300",
                isActive("/") && "text-[#0b2670] font-semibold"
              )}
            >
              <Link href="/">
                Home
                <span className="block max-w-0 group-hover:max-w-20 transition-all duration-500 h-0.5 bg-[#0b2670]"></span>
              </Link>
            </li>

            <li
              className={cn(
                "group hover:text-[#0b2670] hover:font-semibold transition-all duration-300",
                isActive("/about") && "text-[#0b2670] font-semibold"
              )}
            >
              <Link href="/about">
                About
                <span className="block max-w-0 group-hover:max-w-20 transition-all duration-500 h-0.5 bg-[#0b2670]"></span>
              </Link>
            </li>

            <li
              className={cn(
                "group hover:text-[#0b2670] hover:font-semibold transition-all duration-300",
                isActive("/products") && "text-[#0b2670] font-semibold"
              )}
            >
              <Link href="/products">
                Products
                <span className="block max-w-0 group-hover:max-w-20 transition-all duration-500 h-0.5 bg-[#0b2670]"></span>
              </Link>
            </li>

            <li
              className={cn(
                "group hover:text-[#0b2670] hover:font-semibold transition-all duration-300",
                isActive("/contact") && "text-[#0b2670] font-semibold"
              )}
            >
              <Link href="/contact">
                Contact
                <span className="block max-w-0 group-hover:max-w-20 transition-all duration-500 h-0.5 bg-[#0b2670]"></span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Hamburger Menu Nav */}
        {isMenuOpen && (
          <div className="md:hidden w-full ">
            <ul className="flex flex-col gap-5 items-center">
              <hr className="h-[0.5px] bg-black w-full" />
              <li className="group hover:text-[#0b2670] hover:font-semibold transition-all duration-300 self-center ">
                <Link href="/">
                  Home
                  <span className="block max-w-0 group-hover:max-w-20 transition-all duration-500 h-0.5 bg-[#0b2670]"></span>
                </Link>
              </li>
              <hr className="h-[0.5px] bg-black w-full" />
              <li className="group hover:text-[#0b2670] hover:font-semibold transition-all duration-300">
                <Link href="/about">
                  About
                  <span className="block max-w-0 group-hover:max-w-20 transition-all duration-500 h-0.5 bg-[#0b2670]"></span>
                </Link>
              </li>
              <hr className="h-[0.5px] bg-black w-full" />

              <li className="group hover:text-[#0b2670] hover:font-semibold transition-all duration-300">
                <Link href="/products">
                  Products
                  <span className="block max-w-0 group-hover:max-w-20 transition-all duration-500 h-0.5 bg-[#0b2670]"></span>
                </Link>
              </li>
              <hr className="h-[0.5px] bg-black w-full" />

              <li className="group hover:text-[#0b2670] hover:font-semibold transition-all duration-300">
                <Link href="/contact">
                  Contact
                  <span className="block max-w-0 group-hover:max-w-20 transition-all duration-500 h-0.5 bg-[#0b2670]"></span>
                </Link>
              </li>
              <hr className="h-[0.5px] bg-black w-full" />
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};
