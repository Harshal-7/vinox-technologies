"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Heading = () => {
  return (
    <div className="max-w-6xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        <span className="underline "> Vinox Technologies </span>
        Elevating Home Hygiene Solutions
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Discover innovative cleaning and bathroom essentials, along with a range
        of home care solutions designed to elevate your living spaces to new
        levels of cleanliness and freshness.
      </h3>
    </div>
  );
};
