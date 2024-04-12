"use client";

import Link from "next/link";
import { Introduction } from "../introduction/Introduction";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Image from "next/image";

const About = () => {
  return (
    <div className="h-screen max-w-6xl m-auto">
      <div className=" text-black mt-32">
        <div className="flex gap-5">
          <div className="flex flex-col text-start">
            <p className="mt-5">
              Welcome to Vinox Technologies, a trusted name in the manufacturing
              of specialty chemicals for industrial cleaning since 1999.
              Operating in the western Maharashtra region, we specialize in a
              range of products tailored to meet the unique needs of various
              industries including the HORECA, Dairy & Food, Institutional
              Cleaning, and Hospitality sectors.
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
          </div>

          <div className=" flex-shrink-0">
            <Image src="/hero01.jpg" alt="banner" width={450} height={450} />
          </div>
        </div>
        <div className="mt-2">
          <p>
            Driven by a commitment to customer satisfaction, we conduct thorough
            research and development to continuously innovate and stay ahead of
            industry trends. Our dedicated team works tirelessly to understand
            and fulfill our customer&apos;s needs, consistently exceeding
            expectations. Our core values revolve around product consistency,
            exceptional customer service, timely deliveries, and competitive
            pricing. With a focus on knowledge, technical innovation, and
            teamwork, Vinox Technologies strives to deliver world-class products
            that meet and surpass customer expectations.
          </p>
          <br />
        </div>
      </div>
    </div>
  );
};

export default About;
