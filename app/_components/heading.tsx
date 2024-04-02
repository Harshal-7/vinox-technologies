"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4 mt-24">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        <span className="text-blue-700"> Vinox Technologies </span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Manufacturer of Industrial & institutional cleaning and sanitization
        products as per customer needs.
      </h3>
    </div>
  );
};
