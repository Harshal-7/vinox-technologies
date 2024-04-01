import { Logo } from "./logo";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { ArrowRight, Mail, MapPin, Phone, PhoneCallIcon } from "lucide-react";
import Link from "next/link";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const Footer = () => {
  return (
    <div
      className={cn(
        "flex flex-col w-full bg-background z-50 p-10",
        font.className
      )}
    >
      <div className="max-w-6xl mx-auto p-6 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Logo & Contact */}
          <div className="mb-5 flex flex-col gap-5">
            <Logo />
            <div className="flex items-center gap-4">
              <Phone className="w-4 h-4 inline-block" />
              <Link href="tel:+919146203040"> +919146203040</Link>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="w-4 h-4 inline-block " />
              <Link href="mailto:vimal.entpr@gmail.com">
                vimal.entpr@gmail.com
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 inline-block " />
              Plot No B-146, MIDC Lohare, Wai, Maharashtra 412803
            </div>
          </div>

          {/* Useful Links*/}
          <div className="mb-5 flex flex-col gap-5">
            <h4 className="font-semibold text-xl sm:text-3xl sm:mb-8">
              Useful Links
            </h4>
            <Link
              href="/home"
              className="group hover:text-orange-600 transition duration-300"
            >
              <ArrowRight className="w-4 h-4 mr-3 inline-block" />
              Home
              <span className="block max-w-0 group-hover:max-w-20 transition-all duration-500 h-0.5 bg-orange-600"></span>
            </Link>
            <Link
              href="/aboutus"
              className="group hover:text-orange-600 transition duration-300"
            >
              <ArrowRight className="w-4 h-4 mr-3 inline-block" /> About Us
              <span className="block max-w-0 group-hover:max-w-28 transition-all duration-500 h-0.5 bg-orange-600"></span>
            </Link>
            <Link
              href="/products"
              className="group hover:text-orange-600 transition duration-300"
            >
              <ArrowRight className="w-4 h-4 mr-3 inline-block" /> Products
              <span className="block max-w-0 group-hover:max-w-28 transition-all duration-500 h-0.5 bg-orange-600"></span>
            </Link>
            <Link
              href="/contact"
              className="group hover:text-orange-600 transition duration-300"
            >
              <ArrowRight className="w-4 h-4 mr-3 inline-block" /> Contact
              <span className="block max-w-0 group-hover:max-w-28 transition-all duration-500 h-0.5 bg-orange-600"></span>
            </Link>
          </div>

          {/* Products */}
          <div className="mb-5 flex flex-col gap-5">
            <h4 className="font-semibold text-xl sm:text-3xl sm:mb-8">
              Products
            </h4>

            <Link
              href="/"
              className="group hover:text-orange-600 transition duration-300"
            >
              <ArrowRight className="w-4 h-4 mr-3 inline-block" />
              Scented Phenyl
              <span className="block max-w-0 group-hover:max-w-40 transition-all duration-500 h-0.5 bg-orange-600"></span>
            </Link>

            <Link
              href="/"
              className="group hover:text-orange-600 transition duration-300"
            >
              <ArrowRight className="w-4 h-4 mr-3 inline-block" />
              Hand wash
              <span className="block max-w-0 group-hover:max-w-28 transition-all duration-500 h-0.5 bg-orange-600"></span>
            </Link>

            <Link
              href="/"
              className="group hover:text-orange-600 transition duration-300"
            >
              <ArrowRight className="w-4 h-4 mr-3 inline-block" />
              Dish wash
              <span className="block max-w-0 group-hover:max-w-28 transition-all duration-500 h-0.5 bg-orange-600"></span>
            </Link>

            <Link
              href="/"
              className="group hover:text-orange-600 transition duration-300"
            >
              <ArrowRight className="w-4 h-4 mr-3 inline-block" />
              Toilet cleaner
              <span className="block max-w-0 group-hover:max-w-36 transition-all duration-500 h-0.5 bg-orange-600"></span>
            </Link>

            <Link
              href="/"
              className="group hover:text-orange-600 transition duration-300"
            >
              <ArrowRight className="w-4 h-4 mr-3 inline-block" />
              Bathroom Cleaner
              <span className="block max-w-0 group-hover:max-w-44 transition-all duration-500 h-0.5 bg-orange-600"></span>
            </Link>

            <Link
              href="/"
              className="group hover:text-orange-600 transition duration-300"
            >
              <ArrowRight className="w-4 h-4 mr-3 inline-block" />
              Floor cleaner
              <span className="block max-w-0 group-hover:max-w-32 transition-all duration-500 h-0.5 bg-orange-600"></span>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center w-full p-6">copyright</div>
    </div>
  );
};
