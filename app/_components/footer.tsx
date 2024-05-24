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
import { FaWhatsapp } from "react-icons/fa";

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
              <FaWhatsapp className="w-5 h-5 inline-block" />
              <Link href="https://wa.me/917057573040" target="_blank">
                7057573040
                <span className="block max-w-0 group-hover:max-w-40 transition-all duration-500 h-0.5 bg-[#2563eb] "></span>
              </Link>
            </div>

            <div className="flex items-center gap-4 group hover:text-[#2563eb] transition duration-500">
              <Mail className="w-5 h-5 inline-block " />
              <Link href="mailto:customercare@vinoxtechnologies.com">
                customercare
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
