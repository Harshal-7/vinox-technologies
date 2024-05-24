import { ProductCard } from "@/app/_components/productCard";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { AutocareListCard } from "@/app/_components/autocareListCard";

import { CldImage } from "next-cloudinary";
import { ProductCloudImg } from "@/app/_components/productCloudImg";
import { getAutocareProducts } from "@/utils/getProductByCategory";

const title = "Auto Care";

export default async function AutocarePage() {
  const { autocareProducts, errMsg } = await getAutocareProducts();

  if (errMsg)
    return (
      <h1 className="mt-32 flex justify-center items-center p-5">{errMsg}</h1>
    );

  if (!autocareProducts) {
    return (
      <div className="mt-32 flex justify-center items-center p-5">
        Loading...
      </div>
    ); // Render a loading indicator while fetching data
  }

  return (
    <div className="min-h-screen max-w-screen-2xl m-auto mt-32 p-6 flex flex-col items-center gap-10 md:gap-14">
      <div className={cn("text-4xl md:text-5xl text-center w-full font-semibold")}>
        {title}
      </div>
      {/* flex flex-row gap-5 md:gap-10 flex-wrap mb-10 justify-center */}
      <div className="grid grid-rows-1 lg:grid-cols-4 gap-10">
        {autocareProducts.map((product: any, index: number) => (
          <div key={index}>
            <AutocareListCard
              title={product.name}
              image_url={product.image_url}
              href={product.href}
              category={"autocare"}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
