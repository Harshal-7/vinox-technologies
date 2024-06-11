"use client";

import React from "react";
import { CldImage } from "next-cloudinary";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface productClouldImgWithLinkProps {
  image_url: string;
  href?: string;
  category?: string;
}

export const ProductClouldImgWithLink: React.FC<productClouldImgWithLinkProps> = ({ image_url,href,category }) => {

  const router = useRouter()

  if (!image_url) {
    return <div>img</div>;
  }

  return (
    <CldImage
      width="220"
      height="220"
      src={image_url}
      alt="Description of my image"
      className="w-[200px] h-[200px] md:w-[330px] md:h-[330px] object-cover md:object-contain rounded-sm md:rounded-md self-center"
      onClick={() => router.push(`/products/${category}/${href}`)}
    />
  );
};
