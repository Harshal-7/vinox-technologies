"use client";

import { Poppins, Inconsolata, Yeseva_One } from "next/font/google";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Mail,
  MapPin,
  Navigation,
  Phone,
  PhoneCallIcon,
} from "lucide-react";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FormEvent, useState } from "react";
import axios from "axios";
import { Skeleton } from "@/components/ui/skeleton";

const font1 = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const font2 = Yeseva_One({
  subsets: ["vietnamese"],
  weight: ["400"],
});

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phoneNo", phoneNo);
    formData.append("message", message);

    await fetch("/api/send", {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to send message");
        return res.json();
      })
      .catch((error) => {
        console.error("Error in data:", error);
      });

    setName("");
    setEmail("");
    setPhoneNo("");
    setMessage("");
    setIsLoading(false);
  };

  return (
    <div
      className={cn(
        "min-h-screen max-w-6xl mx-auto flex flex-col mt-32 md:mt-40 p-6",
        font1.className
      )}
    >
      <div className="flex flex-col md:flex-row justify-around gap-12 md:gap-20">
        <div className="flex flex-col gap-4 justify-center items-center">
          {/* leftside  */}
          <div className="text-3xl md:text-5xl text-[#0b2670] font-bold">
            Contact Details
          </div>
          <div className="flex flex-col justify-center items-start gap-4 text-sm md:text-xl ml-5 md:ml-0">
            <div className="sm:mt-8 flex items-center gap-2 md:gap-4 group hover:text-[#0b2670] transition duration-300">
              <Phone className="w-4 h-4 md:w-6 md:h-6 inline-block" />
              <Link className="" href="tel:+912167265378">
                {" "}
                216-726-5378
                <span className="block max-w-0 group-hover:max-w-40 transition-all duration-500 h-0.5 bg-[#0b2670]"></span>
              </Link>
            </div>

            <div className="flex items-center gap-2 md:gap-4 group hover:text-[#0b2670] transition duration-300">
              <Mail className="w-4 h-4 md:w-6 md:h-6 inline-block " />
              <Link href="mailto:vinox.techn@gmail.com">
                vinox.techn@gmail.com
                <span className="block max-w-0 group-hover:max-w-48 transition-all duration-500 h-0.5 bg-[#0b2670]"></span>
              </Link>
            </div>

            <div className="flex items-center gap-2 md:gap-4 group hover:text-[#0b2670] transition duration-300">
              <MapPin className="w-4 h-4 md:w-6 md:h-6 inline-block " />
              <div>
                Plot No B-146, MIDC, Wai Taluka, <br /> Wai - 412803.
                Maharashtra, India.
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#0b2670]"></span>
              </div>
            </div>
          </div>
        </div>

        {/* rightside  */}
        <div className="flex flex-col gap-4 ">
          <div className="text-3xl md:text-[2.5rem] mb-2 text-[#0b2670] font-semibold text-center">
            Send us message
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 md:gap-5"
          >
            <div>
              {" "}
              <Input
                type="name"
                id="name"
                placeholder="Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <Input
                required
                value={email}
                type="email"
                id="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <Input
                type="number"
                min={0}
                id="phoneNo"
                placeholder="Phone Number"
                required
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
              />
            </div>
            <div>
              <Textarea
                placeholder="Type your message here."
                id="message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <Button variant="blue" type="submit">
              {isLoading ? (
                <div role="status">
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-[#0b2670]"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                </div>
              ) : (
                <div className="font-semibold">Send</div>
              )}
            </Button>
          </form>
        </div>
      </div>

      {/* Map  */}
      <div className="flex flex-col gap-2 mx-auto mt-32 mb-5">
        <Link
          href="https://www.google.com/maps/place/Vinox+Technologies/@17.9798707,73.8874571,17z/data=!4m14!1m7!3m6!1s0x3bc25cfff3c3a357:0x871e263619e7bc3c!2sVinox+Technologies!8m2!3d17.980355!4d73.8900995!16s%2Fg%2F11dxpdm9sl!3m5!1s0x3bc25cfff3c3a357:0x871e263619e7bc3c!8m2!3d17.980355!4d73.8900995!16s%2Fg%2F11dxpdm9sl?entry=ttu"
          target="_blank"
          className="mr-5 text-2xl flex gap-2 items-center"
        >
          <div className="text-[#0b2670] font-semibold">Find Us</div>
          <Navigation className="w-5 h-5 mt-1 fill-[#0b2670]  stroke-[#0b2670]" />
        </Link>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.965221477262!2d73.88752457594467!3d17.98035498301152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc25cfff3c3a357%3A0x871e263619e7bc3c!2sVinox%20Technologies!5e0!3m2!1sen!2sin!4v1713358765545!5m2!1sen!2sin"
            className="border w-[260px] h-[420px]  md:w-[900px] md:h-[580px]"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
