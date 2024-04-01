"use client";

import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Lilita_One } from "next/font/google";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TextPlugin } from "gsap/TextPlugin";

const font = Lilita_One({
  subsets: ["latin"],
  weight: ["400"],
});

const ComingSoon = () => {
  const container1 = useRef(null);
  const container2 = useRef(null);
  gsap.registerPlugin(TextPlugin);

  useGSAP(() => {
    gsap.from(container1.current, {
      duration: 1,
      text: {
        value: "sfsddf fdss a!",
      },
    });
    gsap.from(container2.current, {
      duration: 1.5,
      text: {
        value: "sfsddf fdss a!",
      },
    });
  });

  return (
    <div
      className={cn(
        "flex flex-col gap-10 items-center justify-center w-full h-screen bg-red-600",
        font.className
      )}
    >
      <div ref={container1} className=" text-9xl font-bold text-yellow-400">
        Coming Soon !!
      </div>
      <p ref={container2} className=" text-4xl text-yellow-400">
        We&apos;re working on something awesome! Stay tuned...
      </p>
    </div>
  );
};

export default ComingSoon;
