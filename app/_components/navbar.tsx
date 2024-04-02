"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { ArrowRight, Menu, MenuSquare, PackageIcon, X } from "lucide-react";
import { Logo } from "./logo";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export const Navbar = () => {
  const scrolled = useScrollTop();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (href: any) => pathname === href;

  return (
    <nav
      className={cn(
        "z-50 bg-background fixed top-0 items-center w-full py-3 md:p-6",
        scrolled && "border-b shadow-sm"
      )}
    >
      {/* Main Nav */}
      <div className="flex justify-between items-center h-8">
        <div className="ml-5 md:ml-20">Logo</div>

        {isMenuOpen ? (
          <X onClick={toggleMenu} className="mr-5 w-4 h-4 md:hidden " />
        ) : (
          <Menu onClick={toggleMenu} className="mr-5 w-4 h-4 md:hidden " />
        )}

        <ul className="hidden md:flex items-center space-x-10 md:mr-20">
          <li
            className={cn(
              "group hover:text-blue-600 hover:font-semibold transition-all duration-300",
              isActive("/") && "text-blue-600 font-semibold"
            )}
          >
            <Link href="/">
              Home
              <span className="block max-w-0 group-hover:max-w-20 transition-all duration-500 h-0.5 bg-blue-600"></span>
            </Link>
          </li>

          <li
            className={cn(
              "group hover:text-blue-600 hover:font-semibold transition-all duration-300",
              isActive("/about") && "text-blue-600 font-semibold"
            )}
          >
            <Link href="/about">
              About
              <span className="block max-w-0 group-hover:max-w-20 transition-all duration-500 h-0.5 bg-blue-600"></span>
            </Link>
          </li>

          <li
            className={cn(
              "group hover:text-blue-600 hover:font-semibold transition-all duration-300",
              isActive("/products") && "text-blue-600 font-semibold"
            )}
          >
            <Link href="/products">
              Products
              <span className="block max-w-0 group-hover:max-w-20 transition-all duration-500 h-0.5 bg-blue-600"></span>
            </Link>
          </li>

          <li
            className={cn(
              "group hover:text-blue-600 hover:font-semibold transition-all duration-300",
              isActive("/contact") && "text-blue-600 font-semibold"
            )}
          >
            <Link href="/contact">
              Contact
              <span className="block max-w-0 group-hover:max-w-20 transition-all duration-500 h-0.5 bg-blue-600"></span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Hamburger Menu Nav */}
      {isMenuOpen && (
        <div className="md:hidden w-full ">
          <ul className="flex flex-col gap-5 items-center">
            <hr className="h-[0.5px] bg-black w-full" />
            <li className="group hover:text-blue-600 hover:font-semibold transition-all duration-300 self-center ">
              <Link href="/">
                Home
                <span className="block max-w-0 group-hover:max-w-20 transition-all duration-500 h-0.5 bg-blue-600"></span>
              </Link>
            </li>
            <hr className="h-[0.5px] bg-black w-full" />
            <li className="group hover:text-blue-600 hover:font-semibold transition-all duration-300">
              <Link href="/about">
                About
                <span className="block max-w-0 group-hover:max-w-20 transition-all duration-500 h-0.5 bg-blue-600"></span>
              </Link>
            </li>
            <hr className="h-[0.5px] bg-black w-full" />

            <li className="group hover:text-blue-600 hover:font-semibold transition-all duration-300">
              <Link href="/products">
                Products
                <span className="block max-w-0 group-hover:max-w-20 transition-all duration-500 h-0.5 bg-blue-600"></span>
              </Link>
            </li>
            <hr className="h-[0.5px] bg-black w-full" />

            <li className="group hover:text-blue-600 hover:font-semibold transition-all duration-300">
              <Link href="/contact">
                Contact
                <span className="block max-w-0 group-hover:max-w-20 transition-all duration-500 h-0.5 bg-blue-600"></span>
              </Link>
            </li>
            <hr className="h-[0.5px] bg-black w-full" />
          </ul>
        </div>
      )}
    </nav>
  );
};
