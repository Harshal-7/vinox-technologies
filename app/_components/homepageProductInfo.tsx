"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { BellRing } from "lucide-react";
import Link from "next/link";

const ProductsInfo = () => {
  return (
    <div className="mt-10 w-full bg-[#0b2670] text-white flex flex-col justify-center items-center py-10">
      <h2 className="text-3xl lg:text-4xl pb-10 font-semibold">Our Products</h2>
      <div className="w-full flex flex-col lg:flex-row justify-evenly items-center gap-10 lg:gap-0 relative">
        <Card className="w-[300px] lg:w-[400px] lg:h-[400px] flex flex-col justify-center items-center text-center bg-[url('/floorCleaner.jpg')] bg-cover bg-center relative">
          <div className="absolute inset-0 bg-black opacity-50 pointer-events-none"></div>
          <CardHeader>
            <CardTitle className="text-white text-3xl lg:text-5xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              Homecare Products
            </CardTitle>
          </CardHeader>
          <CardFooter className="z-10 grid grid-cols-2 gap-2 lg:gap-5">
            <Button variant="secondary">
              <Link
                className="text-xs lg:text-base"
                href="/products/homecare/handwash"
              >
                Handwash
              </Link>
            </Button>
            <Button variant="secondary">
              <Link
                className="text-xs lg:text-base"
                href="/products/homecare/kitchenCare"
              >
                Kitchen Care
              </Link>
            </Button>
            <Button variant="secondary">
              <Link
                className="text-xs lg:text-base"
                href="/products/homecare/bathroomCleaner"
              >
                Bathroom Cleaner
              </Link>
            </Button>
            <Button variant="secondary">
              <Link
                className="text-xs lg:text-base"
                href="/products/homecare/floorCleaner"
              >
                Floor Cleaner
              </Link>
            </Button>
            <Button variant="secondary">
              <Link
                className="text-xs lg:text-base"
                href="/products/homecare/furnitureCare"
              >
                Furniture Care
              </Link>
            </Button>
            <Button variant="secondary">
              <Link
                className="text-xs lg:text-base"
                href="/products/homecare/glassCleaner"
              >
                Glass Cleaner
              </Link>
            </Button>
            <Button variant="secondary">
              <Link
                className="text-xs lg:text-base"
                href="/products/homecare/washroomCleaner"
              >
                Washroom Cleaner
              </Link>
            </Button>
            <Button variant="secondary">
              <Link
                className="text-xs lg:text-base"
                href="/products/homecare/roomFreshners"
              >
                Room Fresheners
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] flex flex-col justify-center items-center text-center bg-[url('/autocare-stock-01.jpg')] bg-cover bg-center relative">
          <div className="absolute inset-0 bg-black opacity-50 pointer-events-none"></div>
          <CardHeader>
            <CardTitle className="text-white text-3xl lg:text-5xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              Autocare Products
            </CardTitle>
          </CardHeader>
          <CardFooter className="z-10">
            <Button variant="secondary">
              <Link href="/products/autocare">Show All Products</Link>
            </Button>
          </CardFooter>
        </Card>

        <Card className="w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] flex flex-col justify-center items-center text-center bg-[url('/laundry-stock-01.jpg')] bg-cover bg-center relative">
          <div className="absolute inset-0 bg-black opacity-50 pointer-events-none"></div>
          <CardHeader>
            <CardTitle className="text-white text-3xl lg:text-5xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              Laundry Products
            </CardTitle>
          </CardHeader>
          <CardFooter className="z-10">
            <Button variant="secondary">
              <Link href="/products/laundry">Show All Products</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default ProductsInfo;
