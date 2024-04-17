"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { useRouter } from "next/navigation";
import { CldImage } from "next-cloudinary";

interface ProductCardProps {
  title: string;
  image_url: string;
  href: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  href,
  image_url,
}) => {
  const router = useRouter();

  return (
    <div className="flex flex-row">
      <div className="flex flex-col gap-5 md:gap-8 p-5 md:p-8 border rounded-lg shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] hover:shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
        <CldImage
          width="250"
          height="250"
          src={image_url}
          className="md:w-[300px] md:h-[300px]"
          alt="Description of my image"
        />

        <p className="text-center text-xl md:text-2xl ">{title}</p>
        <Button
          variant="blue"
          className="w-32 md:w-40 self-center"
          onClick={() => router.push(`/products/homecare/${href}`)}
        >
          View Details
        </Button>
      </div>
    </div>
  );
};
