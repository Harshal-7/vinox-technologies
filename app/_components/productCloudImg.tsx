"use client";

import React from "react";
import { CldImage } from "next-cloudinary";

interface ProductCardProps {
  image_url: string;
}

export const ProductCloudImg: React.FC<ProductCardProps> = ({ image_url }) => {
  if (!image_url) {
    return <div>img</div>;
  }

  return (
    <CldImage
      width="350"
      height="350"
      src={image_url}
      alt="Description of my image"
    />
  );
};
