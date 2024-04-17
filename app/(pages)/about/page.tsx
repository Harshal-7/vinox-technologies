"use client";

import Image from "next/image";

const About = () => {
  return (
    <div className="min-h-screen max-w-6xl mx-auto ">
      {/* Content  */}
      <div className="flex flex-col gap-5 mt-24 md:mt-32">
        {/* Introduction  */}
        <div className="grid md:grid-cols-2 px-5 py-2 ">
          <div>
            <p className="mt-5">
              Welcome to{" "}
              <span className="text-[#0b2670] font-semibold">
                Vinox Technologies
              </span>
              , a trusted name in the manufacturing of specialty chemicals for
              industrial cleaning since 1999. Operating in the western
              Maharashtra region, we specialize in a range of products tailored
              to meet the unique needs of various industries including the
              HORECA, Dairy & Food, Institutional Cleaning, and Hospitality
              sectors.
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
          <div className="m-auto">
            <Image src="/hero01.jpg" alt="banner" width={450} height={450} />
          </div>
          <div className="mt-2 md:col-span-2">
            <p>
              Driven by a commitment to customer satisfaction, we conduct
              thorough research and development to continuously innovate and
              stay ahead of industry trends. Our dedicated team works tirelessly
              to understand and fulfill our customer&apos;s needs, consistently
              exceeding expectations. Our core values revolve around product
              consistency, exceptional customer service, timely deliveries, and
              competitive pricing. With a focus on knowledge, technical
              innovation, and teamwork, Vinox Technologies strives to deliver
              world-class products that meet and surpass customer expectations.
            </p>
          </div>
        </div>

        {/* Vision  */}
        <div className="px-5 py-2 ">
          <div className="text-2xl text-[#0b2670] font-bold">Our Vision</div>
          <div className="mt-2">
            At Vinox Technologies, we are committed to achieving the highest
            standards of hygiene through continual upgrades, innovations, and
            inventions. By doing so, we aim to deliver the best possible
            solutions to our customers, ensuring their utmost satisfaction.{" "}
            <br />
            <br />
            Our vision includes:
            <ul className="ml-10 list-decimal leading-8">
              <li>
                Becoming one of the top 10 specialty product manufacturers and
                suppliers in western Maharashtra.
              </li>
              <li>
                Emerging as a leading manufacturer and distributor of
                hospitality solutions in western Maharashtra.
              </li>
              <li>
                Sustaining leadership in the hospitality service sector by
                consistently meeting both the explicit and implicit needs of our
                customers, and continually expanding our offerings.
              </li>
            </ul>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
