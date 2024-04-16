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
      <div className="flex flex-col gap-8 p-8 border rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <CldImage
          width="300"
          height="300"
          src={image_url}
          alt="Description of my image"
        />

        <p className="text-center text-xl md:text-2xl">{title}</p>
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
