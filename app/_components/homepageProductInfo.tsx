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
import { Loader2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const ProductsInfo = () => {
  const [homecareIsLoading, setHomecareIsLoading] = useState(false);
  const [autocareIsLoading, setAutocareIsLoading] = useState(false);
  const [laundryIsLoading, setLaundryIsLoading] = useState(false);

  return (
    <div className="mt-10 w-full bg-gradient-to-bl from-blue-800 to-blue-950 text-white flex flex-col justify-center items-center py-10">
      <h2 className="text-3xl lg:text-4xl pb-10 font-semibold">Our Products</h2>
      <div className="w-full flex flex-col lg:flex-row justify-evenly items-center gap-10 lg:gap-0 relative">
        <Card className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] flex flex-col justify-center items-center text-center bg-black">
          <CardHeader>
            <CardTitle className="text-white text-3xl lg:text-5xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] z-10">
              Homecare Products
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Image
              className="absolute top-0 left-0 object-cover rounded-md opacity-50"
              src="/floorCleaner.jpg"
              alt="img"
              fill
            />
          </CardContent>
          <CardFooter className="z-10">
            {homecareIsLoading ? (
              <Button variant="secondary">
                <Loader2Icon className="w-4 h-4 mr-2 animate-spin" />
                Loading Products
              </Button>
            ) : (
              <Button
                onClick={() => setHomecareIsLoading(true)}
                variant="secondary"
              >
                <Link href="/products/homecare">Show All Products</Link>
              </Button>
            )}
          </CardFooter>
        </Card>

        <Card className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] flex flex-col justify-center items-center text-center bg-black">
          <CardHeader>
            <CardTitle className="text-white text-3xl lg:text-5xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] z-10">
              Autocare Products
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Image
              className="absolute top-0 left-0 object-cover rounded-md opacity-50"
              src="/autocare-stock-01.jpg"
              alt="img"
              fill
            />
          </CardContent>
          <CardFooter className="z-10">
            {autocareIsLoading ? (
              <Button variant="secondary">
                <Loader2Icon className="w-4 h-4 mr-2 animate-spin" />
                Loading Products
              </Button>
            ) : (
              <Button
                onClick={() => setAutocareIsLoading(true)}
                variant="secondary"
              >
                <Link href="/products/autocare">Show All Products</Link>
              </Button>
            )}
          </CardFooter>
        </Card>

        <Card className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] flex flex-col justify-center items-center text-center bg-black">
          <CardHeader>
            <CardTitle className="text-white text-3xl lg:text-5xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] z-10">
              Laundry Products
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Image
              className="absolute top-0 left-0 object-cover rounded-md opacity-50"
              src="/laundry-stock-01.jpg"
              alt="img"
              fill
            />
          </CardContent>
          <CardFooter className="z-10">
            {laundryIsLoading ? (
              <Button variant="secondary">
                <Loader2Icon className="w-4 h-4 mr-2 animate-spin" />
                Loading Products
              </Button>
            ) : (
              <Button
                onClick={() => setLaundryIsLoading(true)}
                variant="secondary"
              >
                <Link href="/products/laundry">Show All Products</Link>
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default ProductsInfo;
