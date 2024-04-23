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

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const Navbar = () => {
  const scrolled = useScrollTop();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (href: any) => pathname === href;

  return (
    <div
      className={cn(
        "z-50 bg-background fixed top-0 items-center w-full border-b shadow-sm ",
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
      <div className="py-3 md:py-3 md:px-6">
        {/* Main Nav */}
        <div className="flex justify-between items-center h-10 list-none">
          <div className="ml-5 md:ml-20">
            <img src="/Logo.jpg" alt="logo" className="w-16 md:w-20" />
          </div>

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
          <div className="md:hidden w-full">
            <ul className="flex flex-col gap-5 items-center">
              <hr className="h-[0.5px] bg-black w-full" />
              <li className="group hover:text-[#0b2670] hover:font-semibold transition-all duration-300 self-center ">
                <Link onClick={toggleMenu} href="/">
                  Home
                  <span className="block max-w-0 group-hover:max-w-20 transition-all duration-500 h-0.5 bg-[#0b2670]"></span>
                </Link>
              </li>
              <hr className="h-[0.5px] bg-black w-full" />
              <li className="group hover:text-[#0b2670] hover:font-semibold transition-all duration-300">
                <Link onClick={toggleMenu} href="/about">
                  About
                  <span className="block max-w-0 group-hover:max-w-20 transition-all duration-500 h-0.5 bg-[#0b2670]"></span>
                </Link>
              </li>
              <hr className="h-[0.5px] bg-black w-full" />

              <Collapsible
                open={isOpen}
                onOpenChange={setIsOpen}
                className="w-full text-center space-y-2"
              >
                <div className="flex items-center justify-center space-x-4 px-4">
                  <CollapsibleTrigger asChild>
                    <Button variant="nav" className="w-full p-0">
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

                  <div className="px-4 py-3">
                    <Link
                      onClick={toggleMenu}
                      className=" hover:text-[#0b2670] hover:font-semibold transition-all duration-300"
                      href="/products/homecare"
                    >
                      Home Care
                    </Link>
                  </div>
                  <hr className="h-[0.5px] bg-black w-full" />

                  <div className="px-4 py-3">
                    <Link
                      onClick={toggleMenu}
                      className=" hover:text-[#0b2670] hover:font-semibold transition-all duration-300"
                      href="/products/autocare"
                    >
                      Auto Care
                    </Link>
                  </div>
                  <hr className="h-[0.5px] bg-black w-full" />

                  <div className="px-4 py-3">
                    <Link
                      onClick={toggleMenu}
                      className=" hover:text-[#0b2670] hover:font-semibold transition-all duration-300"
                      href="/products/laundry"
                    >
                      Laundry
                    </Link>
                  </div>
                </CollapsibleContent>
              </Collapsible>
              <hr className="h-[0.5px] bg-black w-full" />

              <li className="group hover:text-[#0b2670] hover:font-semibold transition-all duration-300 self-center pb-2">
                <Link onClick={toggleMenu} href="/contact">
                  Contact
                  <span className="block max-w-0 group-hover:max-w-20 transition-all duration-500 h-0.5 bg-[#0b2670]"></span>
                </Link>
              </li>
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
          <div className={cn("leading-none font-semibold", font.className)}>
            {title}
          </div>
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
