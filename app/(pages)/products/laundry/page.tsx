import { ProductCard } from "@/app/_components/productCard";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

import { CldImage } from "next-cloudinary";
import { ProductCloudImg } from "@/app/_components/productCloudImg";
import { getLaundryProducts } from "@/utils/getProductByCategory";
import { LaundryListCard } from "@/app/_components/laundryListCard";

const title = "Laundry";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default async function LaundryPage() {
  const { laundryProducts, errMsg } = await getLaundryProducts();

  if (errMsg)
    return (
      <h1 className="mt-32 flex justify-center items-center p-5">{errMsg}</h1>
    );

  if (!laundryProducts) {
    return (
      <div className="mt-32 flex justify-center items-center p-5">
        Loading...
      </div>
    ); // Render a loading indicator while fetching data
  }

  return (
    <div className="min-h-screen max-w-screen-2xl m-auto mt-32 p-6 flex flex-col items-center gap-10 md:gap-14">
      <div
        className={cn(
          "text-4xl md:text-5xl text-center w-full",
          font.className
        )}
      >
        {title}
      </div>
      {/* flex flex-row gap-5 md:gap-10 flex-wrap mb-10 justify-center */}
      <div className="grid grid-rows-1 lg:grid-cols-4 gap-10">
        {laundryProducts.map((product: any, index: number) => (
          <div key={index}>
            <LaundryListCard
              title={product.name}
              image_url={product.image_url}
              href={product.href}
              category={"laundry"}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
