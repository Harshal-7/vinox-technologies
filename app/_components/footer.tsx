"use client";

import { Logo } from "./logo";
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  PhoneCallIcon,
  X,
  Menu,
  ChevronDown,
  CornerDownRight,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!setIsOpen);
  };

  return (
    <div className="flex flex-col w-full bg-background z-50 p-8 bg-black text-white">
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-20">
          {/* Logo & Contact */}
          <div className="mb-5 grid gap-5 md:col-span-2">
            <Logo />
            <div className="mt-2 md:mt-11 flex items-center gap-4 group hover:text-[#2563eb] transition duration-500">
              <Phone className="w-5 h-5 inline-block" />
              <Link className="" href="tel:02167295095">
                02167-295095
                <span className="block max-w-0 group-hover:max-w-40 transition-all duration-500 h-0.5 bg-[#2563eb]"></span>
              </Link>
            </div>

            <div className="flex items-center gap-4 group hover:text-[#2563eb] transition duration-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={22}
                height={22}
                color={"#ffffff"}
                fill={"none"}
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.3789 2.27907 14.6926 2.78382 15.8877C3.06278 16.5481 3.20226 16.8784 3.21953 17.128C3.2368 17.3776 3.16334 17.6521 3.01642 18.2012L2 22L5.79877 20.9836C6.34788 20.8367 6.62244 20.7632 6.87202 20.7805C7.12161 20.7977 7.45185 20.9372 8.11235 21.2162C9.30745 21.7209 10.6211 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.8824 12C14.0519 12 15 13.0074 15 14.25C15 15.4926 14.0519 16.5 12.8824 16.5H10.4118C9.74625 16.5 9.4135 16.5 9.20675 16.2972C9 16.0945 9 15.7681 9 15.1154V12M12.8824 12C14.0519 12 15 10.9926 15 9.75C15 8.50736 14.0519 7.5 12.8824 7.5H10.4118C9.74625 7.5 9.4135 7.5 9.20675 7.70277C9 7.90554 9 8.2319 9 8.88462V12M12.8824 12H9"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <Link
                className=""
                href="https://wa.me/917057573040"
                target="_blank"
              >
                7057573040
                <span className="block max-w-0 group-hover:max-w-40 transition-all duration-500 h-0.5 bg-[#2563eb] "></span>
              </Link>
            </div>

            <div className="flexs items-center gap-4 group hover:text-[#2563eb] transition duration-500">
              <Mail className="w-5 h-5 inline-block " />
              <Link href="mailto:customercare@vinoxtechnologies.com">
                customercare@vinoxtechnologies.com
                <span className="block max-w-0 group-hover:max-w-48 transition-all duration-500 h-0.5 bg-[#2563eb]"></span>
              </Link>
            </div>

            <div className="flex items-center gap-4 group hover:text-[#2563eb] transition duration-500">
              <MapPin className="w-5 h-5 inline-block " />
              <div>
                Plot No B-146, MIDC, Wai Taluka, <br /> Wai, Maharashtra 412803.
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#2563eb]"></span>
              </div>
            </div>
          </div>

          {/* Useful Links*/}
          <div className="mb-5 grid gap-5">
            <h4 className="font-semibold text-xl sm:text-3xl sm:mb-8">
              Useful Links
            </h4>
            <Link
              href="/"
              className="group hover:text-[#2563eb] hover:font-semibold transition-all duration-500 py-2"
            >
              <ArrowRight className="w-4 h-4 mr-3 inline-block" />
              Home
              <span className="block max-w-0 group-hover:max-w-20 transition-all duration-500 h-0.5 bg-[#2563eb]"></span>
            </Link>
            <Link
              href="/about"
              className="group hover:text-[#2563eb] hover:font-semibold transition-all duration-500 py-2"
            >
              <ArrowRight className="w-4 h-4 mr-3 inline-block" />
              About Us
              <span className="block max-w-0 group-hover:max-w-24 transition-all duration-500 h-0.5 bg-[#2563eb]"></span>
            </Link>

            <Link
              href="/contact"
              className="group hover:text-[#2563eb] hover:font-semibold transition-all duration-500 py-2"
            >
              <ArrowRight className="w-4 h-4 mr-3 inline-block" />
              Contact
              <span className="block max-w-0 group-hover:max-w-24 transition-all duration-500 h-0.5 bg-[#2563eb]"></span>
            </Link>
          </div>

          {/* Products */}
          <div className="mb-5 grid gap-5">
            <h4 className="font-semibold text-xl sm:text-3xl sm:mb-8">
              Products
            </h4>
            <Link
              onClick={toggleMenu}
              className="group hover:text-[#2563eb] hover:font-semibold transition-all duration-500 py-2"
              href="/products/homecare"
            >
              <ArrowRight className="w-4 h-4 mr-3 inline-block" />
              Home Care
              <span className="block max-w-0 group-hover:max-w-28 transition-all duration-500 h-0.5 bg-[#2563eb]"></span>
            </Link>

            <Link
              className="group hover:text-[#2563eb] hover:font-semibold transition-all duration-500 py-2"
              href="/products/autocare"
            >
              <ArrowRight className="w-4 h-4 mr-3 inline-block" />
              Auto Care
              <span className="block max-w-0 group-hover:max-w-28 transition-all duration-500 h-0.5 bg-[#2563eb]"></span>
            </Link>

            <Link
              className="group hover:text-[#2563eb] hover:font-semibold transition-all duration-500 py-2"
              href="/products/laundry"
            >
              <ArrowRight className="w-4 h-4 mr-3 inline-block" />
              Laundry
              <span className="block max-w-0 group-hover:max-w-24 transition-all duration-500 h-0.5 bg-[#2563eb]"></span>
            </Link>
          </div>
        </div>
      </div>
      <hr className="h-[1px] my-8 bg-gray-900 border-0" />

      <div className="flex items-center w-full justify-center text-center">
        Copyright © 2024 | Designed & Developed By: Harshal Shinde
      </div>
    </div>
  );
};
