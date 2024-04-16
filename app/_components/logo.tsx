import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const Logo = () => {
  return (
    <div className="flex items-center gap-x-2">
      <img src="/Logo.jpg" alt="logo" className="w-16 md:w-20" />
      <p className={cn(`font-semibold text-sm md:text-2xl`, font.className)}>
        Vinox Technologies
      </p>
    </div>
  );
};
