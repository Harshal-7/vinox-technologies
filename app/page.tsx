import { Button } from "@/components/ui/button";
import { Heading } from "./_components/heading";
import { Heros } from "./_components/heros";
import { Footer } from "./_components/footer";
import { Navbar } from "./_components/navbar";
import { Introduction } from "./_components/introduction";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center md:justify-start text-center gap-y-8 px-6 py-10">
        <Heading />
        <Introduction />
      </div>
      <Footer />
    </div>
  );
}
