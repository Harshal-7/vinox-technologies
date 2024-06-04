"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Autoplay from "embla-carousel-autoplay";
import Autoscroll from "embla-carousel-auto-scroll";

const OurClient = () => {
  let myArray = [
    "c1.jpeg",
    "c2.jpg",
    "c3.jpg",
    "c4.png",
    "c5.jpeg",
    "c6.jpg",
    "c7.png",
    "c8.png",
    "c9.png",
    "c10.jpg",
  ];

  const plugin = React.useRef(
    // Autoplay({ delay: 2000, stopOnInteraction: false })
    Autoscroll({ speed: 1 })
  );

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-3xl md:text-4xl text-[#0b2670] font-semibold">
        Our Clients
      </h2>
      <div>
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="max-w-sm md:max-w-6xl "
        >
          <CarouselContent>
            {myArray.map((items, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 md:basis-1/6 ease-linear"
              >
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-1">
                      <img src={items} alt="img" className="object-fill" />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default OurClient;
