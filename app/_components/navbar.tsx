"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { Logo } from "./logo";
import {
  ChevronsUpDown,
  Plus,
  X,
  Mail,
  Menu,
  Phone,
  ChevronDown,
  Instagram,
  Minus,
} from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { Poppins } from "next/font/google";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Separator } from "@/components/ui/separator";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Home Care",
    href: "/products/homecare",
    description:
      "Home care products keep your living spaces clean and fresh. From surface cleaners to air fresheners, we offer a wide range of solutions to maintain a healthy and comfortable home environment.",
  },
  {
    title: "Auto Care",
    href: "/products/autocare",
    description:
      "Keep your vehicle looking its best with our auto care products. From car wash soaps to tire shines, we have everything you need to keep your car clean and protected, both inside and out.",
  },
  {
    title: "Laundry",
    href: "/products/laundry",
    description:
      "Make laundry day a breeze with our laundry products. Our detergents, fabric softeners, and stain removers are specially formulated to tackle tough stains and leave your clothes looking and feeling fresh and clean.",
  },
];

export const Navbar = () => {
  const scrollPosition = useScrollTop();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (href: any) => pathname === href;

  return (
    <div
      className={`sticky top-0 z-[100] transition-shadow items-center w-full ${
        scrollPosition > 0
          ? "shadow-none"
          : "shadow-sm bg-background"
      }`}
    >
      {/* Top Nav  */}
      <nav className="bg-[#0b2670] text-white py-3 px-3 md:py-3 md:px-28">
        <ul className="flex justify-between items-center text-xs md:text-sm">
          <li>
            <div className="flex items-center justify-center group hover:font-semibold transition-all duration-300">
              <Mail className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 inline-block" />
              <Link
                href="mailto:customercare@vinoxtechnologies.com"
                className="text-sm md:text-base"
              >
                customercare
              </Link>
            </div>
          </li>
          <li className="block md:hidden">
            <div className="flex items-center justify-center group hover:font-semibold transition-all duration-300">
              <Phone className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2 inline-block" />
              <Link href="tel:02167295095"> 02167-295-095</Link>
            </div>
          </li>

          <li className="hidden md:block">
            <div className="flex items-center justify-center gap-4">
              <Link
                href="https://wa.me/917057573040"
                target="_blank"
                className="hidden md:block"
              >
                <FaWhatsapp className="w-5 h-5" />
              </Link>

              <Link
                href="https://www.instagram.com/vinoxtechnologies/?igsh=Zjc1dG92bGY0bHM4"
                target="_blank"
                className="hidden md:block"
              >
                <FaInstagram className="w-5 h-5" />
              </Link>

              <div className="flex items-center justify-center gap-2">
                <Phone className="w-5 h-5 " />
                <Link
                  href="tel:02167295095"
                  className="text-base hover:font-semibold transition-all duration-300"
                >
                  {" "}
                  02167-295095
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </nav>

      {/* Bottom Nav  */}
      <div className="py-2 md:px-6 text-black">
        {/* Main Nav */}
        <div className="flex justify-between items-center list-none">
          <Button className="ml-5 md:ml-20 p-0" variant="link">
            <Link href="/">
              {" "}
              <img src="/Logo.jpg" alt="logo" className="w-16 md:w-20" />
            </Link>
          </Button>
          <Link href="/"></Link>
          {isMenuOpen ? (
            <X onClick={toggleMenu} className="mr-5 w-4 h-4 md:hidden " />
          ) : (
            <Menu onClick={toggleMenu} className="mr-5 w-4 h-4 md:hidden " />
          )}
          <NavigationMenu className="hidden md:flex items-start space-x-10 md:mr-20">
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    "group hover:text-[#0b2670] hover:font-semibold transition-all duration-300",
                    isActive("/") && "text-[#0b2670] font-semibold"
                  )}
                >
                  Home
                  <span className="block max-w-0 group-hover:max-w-20 transition-all duration-500 h-0.5 bg-[#0b2670]"></span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    "group hover:text-[#0b2670] hover:font-semibold transition-all duration-300",
                    isActive("/about") && "text-[#0b2670] font-semibold"
                  )}
                >
                  About
                  <span className="block max-w-0 group-hover:max-w-20 transition-all duration-500 h-0.5 bg-[#0b2670]"></span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 w-[330px] ">
                  {components.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {component.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    "group hover:text-[#0b2670] hover:font-semibold transition-all duration-300",
                    isActive("/contact") && "text-[#0b2670] font-semibold"
                  )}
                >
                  Contact
                  <span className="block max-w-0 group-hover:max-w-20 transition-all duration-500 h-0.5 bg-[#0b2670]"></span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenu>
        </div>

        {/* Hamburger Menu Nav */}
        {isMenuOpen && (
          <div className="md:hidden w-full h-screen mt-5 font-semibold">
            <ul className="flex flex-col gap-5 items-center justify-center">
              <Separator />

              <li className="py-2 group hover:text-[#0b2670] hover:font-semibold transition-all duration-300 self-center ">
                <Link onClick={toggleMenu} href="/">
                  Home
                  <span className="block max-w-0 group-hover:max-w-20 transition-all duration-500 h-0.5 bg-[#0b2670]"></span>
                </Link>
              </li>

              <Separator />

              <li className="py-2 group hover:text-[#0b2670] hover:font-semibold transition-all duration-300">
                <Link onClick={toggleMenu} href="/about">
                  About
                  <span className="block max-w-0 group-hover:max-w-20 transition-all duration-500 h-0.5 bg-[#0b2670]"></span>
                </Link>
              </li>

              <Separator />

              <Collapsible
                open={isOpen}
                onOpenChange={setIsOpen}
                className="w-full text-center space-y-2"
              >
                <div className="flex items-center justify-center space-x-4 px-4">
                  <CollapsibleTrigger asChild>
                    <Button variant="nav" className="w-full p-0 font-semibold">
                      Products
                      <ChevronDown
                        className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
                        aria-hidden="true"
                      />{" "}
                      <span className="sr-only">Toggle</span>
                    </Button>
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent className="space-y-2">
                  <hr className="h-[0.5px] bg-black w-full" />

                  <div className="px-4 py-3 pt-5 pb-5">
                    <Link
                      onClick={toggleMenu}
                      className=" hover:text-[#0b2670] hover:font-semibold transition-all duration-300"
                      href="/products/homecare"
                    >
                      Home Care
                    </Link>
                  </div>
                  <hr className="h-[0.5px] bg-black w-full" />

                  <div className="px-1 py-3 pt-5 pb-5">
                    <Link
                      onClick={toggleMenu}
                      className=" hover:text-[#0b2670] hover:font-semibold transition-all duration-300"
                      href="/products/autocare"
                    >
                      Auto Care
                    </Link>
                  </div>
                  <hr className="h-[0.5px] bg-black w-full" />

                  <div className="px-4 py-3 pt-5">
                    <Link
                      onClick={toggleMenu}
                      className=" hover:text-[#0b2670] hover:font-semibold transition-all duration-300"
                      href="/products/laundry"
                    >
                      Laundry
                    </Link>
                  </div>
                  {/* <hr className="h-[0.5px] bg-black w-full" /> */}
                </CollapsibleContent>
              </Collapsible>

              <Separator className="" />

              <li className="py-2 group hover:text-[#0b2670] hover:font-semibold transition-all duration-300 self-center pb-2">
                <Link onClick={toggleMenu} href="/contact">
                  Contact
                  <span className="block max-w-0 group-hover:max-w-20 transition-all duration-500 h-0.5 bg-[#0b2670]"></span>
                </Link>
              </li>
              <Separator />
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none hover:text-[#0b2670] hover:font-semibold transition-all duration-300",
            className
          )}
          {...props}
        >
          <div className={cn("leading-none font-semibold")}>{title}</div>
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
