"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { useRouter } from "next/navigation";
import { CldImage } from "next-cloudinary";
import Image from "next/image";
import Link from "next/link";
import { ProductCloudImg } from "./productCloudImg";

interface LaundryListCardProps {
  title: string;
  image_url: string;
  href: string;
  category: string;
}

export const LaundryListCard: React.FC<LaundryListCardProps> = ({
  title,
  image_url,
  href,
  category,
}) => {
  return (
    <div className="min-h-96 flex flex-col border rounded-lg shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] hover:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
      <ProductCloudImg image_url={image_url} />
      <div className="flex flex-col gap-5 md:gap-6 p-5 px-16 lg:px-20">
        <p className="text-center text-xl md:text-xl ">{title}</p>
        <Link
          href={`/products/${category}/${href}`}
          className="w-32 md:w-40 self-center "
        >
          <Button variant="blue" className="w-32 md:w-40 self-center ">
            View Product
          </Button>
        </Link>
      </div>
    </div>
  );
};
