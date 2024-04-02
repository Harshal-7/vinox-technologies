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
      {/* <Image src="/next.svg" alt="logo" width="60" height="60" /> */}
      <p className={cn("font-semibold text-sm sm:text-3xl", font.className)}>
        Vinox Technologies
      </p>
    </div>
  );
};
