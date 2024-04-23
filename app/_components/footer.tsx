"use client";

import { Logo } from "./logo";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
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
} from "lucide-react";
import Link from "next/link";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import { Button } from "@/components/ui/button";
import { useState } from "react";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!setIsOpen);
  };

  return (
    <div
      className={cn(
        "flex flex-col w-full bg-background z-50 p-8 bg-black text-white",
        font.className
      )}
    >
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-20">
          {/* Logo & Contact */}
          <div className="mb-5 flex flex-col gap-5 md:col-span-2">
            <Logo />
            <div className="mt-8 flex items-center gap-4 group hover:text-[#2563eb] transition duration-300">
              <Phone className="w-4 h-4 inline-block" />
              <Link className="" href="tel:+912167265378">
                {" "}
                +91 216-726-5378
                <span className="block max-w-0 group-hover:max-w-40 transition-all duration-500 h-0.5 bg-[#2563eb]"></span>
              </Link>
            </div>

            <div className="flex items-center gap-4 group hover:text-[#2563eb] transition duration-300">
              <Mail className="w-4 h-4 inline-block " />
              <Link href="mailto:vinox.techn@gmail.com">
                vinox.techn@gmail.com
                <span className="block max-w-0 group-hover:max-w-48 transition-all duration-500 h-0.5 bg-[#2563eb]"></span>
              </Link>
            </div>

            <div className="flex items-center gap-4 group hover:text-[#2563eb] transition duration-300">
              <MapPin className="w-4 h-4 inline-block " />
              <div>
                Plot No B-146, MIDC, Wai Taluka, <br /> Wai, Maharashtra 412803.
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#2563eb]"></span>
              </div>
            </div>
          </div>

          {/* Useful Links*/}
          <div className="mb-5 flex flex-col gap-5">
            <h4 className="font-semibold text-xl sm:text-3xl sm:mb-8">
              Useful Links
            </h4>
            <Link
              href="/"
              className="group hover:text-[#2563eb] transition duration-300 py-2"
            >
              <ArrowRight className="w-4 h-4 mr-3 inline-block" />
              Home
              <span className="block max-w-0 group-hover:max-w-20 transition-all duration-500 h-0.5 bg-[#2563eb]"></span>
            </Link>
            <Link
              href="/about"
              className="group hover:text-[#2563eb] transition duration-300 py-2"
            >
              <ArrowRight className="w-4 h-4 mr-3 inline-block" /> About Us
              <span className="block max-w-0 group-hover:max-w-28 transition-all duration-500 h-0.5 bg-[#2563eb]"></span>
            </Link>

            <Collapsible
              open={isOpen}
              onOpenChange={setIsOpen}
              className="w-full space-y-2"
            >
              <div className="flex items-start justify-start space-x-4">
                <CollapsibleTrigger asChild>
                  <Button variant="footer" className=" p-0">
                    <CornerDownRight className="w-4 h-4 mr-3 inline-block" />
                    Products
                  </Button>
                </CollapsibleTrigger>
              </div>
              <CollapsibleContent className="space-y-2">
                <div className="px-4 py-3">
                  <Link
                    onClick={toggleMenu}
                    className=" hover:text-[#2563eb] hover:font-semibold transition-all duration-300"
                    href="/products/homecare"
                  >
                    <ArrowRight className="w-4 h-4 mr-3 inline-block" />
                    Home Care
                  </Link>
                </div>

                <div className="px-4 py-3">
                  <Link
                    className=" hover:text-[#2563eb] hover:font-semibold transition-all duration-300"
                    href="/products/autocare"
                  >
                    <ArrowRight className="w-4 h-4 mr-3 inline-block" />
                    Auto Care
                  </Link>
                </div>

                <div className="px-4 py-3">
                  <Link
                    className=" hover:text-[#2563eb] hover:font-semibold transition-all duration-300"
                    href="/products/laundry"
                  >
                    <ArrowRight className="w-4 h-4 mr-3 inline-block" />
                    Laundry
                  </Link>
                </div>
              </CollapsibleContent>
            </Collapsible>

            <Link
              href="/contact"
              className="group hover:text-[#2563eb] transition duration-300 py-2"
            >
              <ArrowRight className="w-4 h-4 mr-3 inline-block" /> Contact
              <span className="block max-w-0 group-hover:max-w-28 transition-all duration-500 h-0.5 bg-[#2563eb]"></span>
            </Link>
          </div>

          {/* Products */}
          <div className="mb-5 flex flex-col gap-5">
            <h4 className="font-semibold text-xl sm:text-3xl sm:mb-8">
              Products
            </h4>

            <Link
              href="/"
              className="group hover:text-[#2563eb] transition duration-300"
            >
              <ArrowRight className="w-4 h-4 mr-3 inline-block" />
              Scented Phenyl
              <span className="block max-w-0 group-hover:max-w-40 transition-all duration-500 h-0.5 bg-[#2563eb]"></span>
            </Link>

            <Link
              href="/"
              className="group hover:text-[#2563eb] transition duration-300"
            >
              <ArrowRight className="w-4 h-4 mr-3 inline-block" />
              Hand wash
              <span className="block max-w-0 group-hover:max-w-28 transition-all duration-500 h-0.5 bg-[#2563eb]"></span>
            </Link>

            <Link
              href="/"
              className="group hover:text-[#2563eb] transition duration-300"
            >
              <ArrowRight className="w-4 h-4 mr-3 inline-block" />
              Dish wash
              <span className="block max-w-0 group-hover:max-w-28 transition-all duration-500 h-0.5 bg-[#2563eb]"></span>
            </Link>

            <Link
              href="/"
              className="group hover:text-[#2563eb] transition duration-300"
            >
              <ArrowRight className="w-4 h-4 mr-3 inline-block" />
              Toilet cleaner
              <span className="block max-w-0 group-hover:max-w-36 transition-all duration-500 h-0.5 bg-[#2563eb]"></span>
            </Link>

            <Link
              href="/"
              className="group hover:text-[#2563eb] transition duration-300"
            >
              <ArrowRight className="w-4 h-4 mr-3 inline-block" />
              Bathroom Cleaner
              <span className="block max-w-0 group-hover:max-w-44 transition-all duration-500 h-0.5 bg-[#2563eb]"></span>
            </Link>

            <Link
              href="/"
              className="group hover:text-[#2563eb] transition duration-300"
            >
              <ArrowRight className="w-4 h-4 mr-3 inline-block" />
              Floor cleaner
              <span className="block max-w-0 group-hover:max-w-32 transition-all duration-500 h-0.5 bg-[#2563eb]"></span>
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
