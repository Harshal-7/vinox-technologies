import { Button } from "@/components/ui/button";
import { Heading } from "./_components/heading";
import { Heros } from "./_components/heros";
import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";
import { Introduction } from "./_components/introduction";
import { cn } from "@/lib/utils";
import OurClient from "./_components/clients";
import ProductsInfo from "./_components/homepageProductInfo";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center md:justify-start text-center gap-y-10 px-6 py-10">
        <Heading />
        <Introduction />
        <OurClient />
      </div>
      <ProductsInfo />
      <Footer />
    </div>
  );
}

// overall: text-[#0b2670]
// footer : text-[#2563eb]
