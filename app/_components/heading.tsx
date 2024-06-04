"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        <span className="bg-gradient-to-r from-blue-800 to-blue-950 bg-clip-text text-transparent">
          {" "}
          Vinox Technologies{" "}
        </span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Manufacturer of Industrial & institutional cleaning and sanitization
        products as per customer needs.
      </h3>
    </div>
  );
};
