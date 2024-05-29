"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Introduction = () => {
  return (
    <div className="px-4 py-2 max-w-6xl">
      <div className="hidden lg:flex gap-5">
        {/* left-info  */}
        <div className="flex flex-col text-start">
          <p className="">
            Welcome to Vinox Technologies, a trusted name in the manufacturing
            of specialty chemicals for industrial cleaning since 1999. Operating
            in the western Maharashtra region, we specialize in a range of
            products tailored to meet the unique needs of various industries
            including the HORECA, Dairy & Food, Institutional Cleaning, and
            Hospitality sectors.
          </p>
          <br />
          <p>
            At Vinox Technologies, we are dedicated to upholding stringent
            standards and delivering excellence in every product we offer. Our
            comprehensive lineup includes Industrial Chemicals, Housekeeping
            Chemicals, Laundry Chemicals, and Institutional Cleaning Products,
            crafted to ensure optimum performance and effectiveness.
          </p>
          <br />

          <Link href="/about">
            <Button variant="readMore">
              Read More <Plus className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        {/* banner info  */}
        <div className="flex-shrink-0">
          <Image
            src="/hero01.jpg"
            alt="Vinox Technologies - Specialty Chemicals for Industrial Cleaning"
            width={500}
            height={500}
          />
        </div>
      </div>

      {/* for mobile devices */}
      <div className="flex flex-col items-center gap-8 lg:hidden">
        <div className="flex-shrink-0">
          <Image src="/hero01.jpg" alt="banner" width={300} height={300} />
        </div>
        <p>
          Welcome to Vinox Technologies, a trusted name in the manufacturing of
          specialty chemicals for industrial cleaning since 1999. Operating in
          the western Maharashtra region, we specialize in a range of products
          tailored to meet the unique needs of various industries including the
          HORECA, Dairy & Food, Institutional Cleaning, and Hospitality sectors.
        </p>
        <Link href="/about">
          <Button variant="readMore">
            Read More <Plus className="w-4 h-4 ml-2" />
          </Button>
        </Link>
      </div>
    </div>
  );
};
