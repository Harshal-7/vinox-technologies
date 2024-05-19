import { ProductCard } from "@/app/_components/productCard";
import { ProductCloudImg } from "@/app/_components/productCloudImg";
import { cn } from "@/lib/utils";
import { getHomecareProductsByCategory } from "@/utils/getProductByCategory";
import { Poppins } from "next/font/google";
import { useRouter } from "next/navigation";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default async function HomeCareProductList({
  params,
}: {
  params: { name: string };
}) {
  const { homecareProducts, errMsg } = await getHomecareProductsByCategory(
    params.name
  );

  if (errMsg)
    return (
      <h1 className="mt-32 flex justify-center items-center p-5">{errMsg}</h1>
    );

  if (!homecareProducts) {
    return (
      <div className="mt-32 flex justify-center items-center p-5">
        Loading...
      </div>
    ); // Render a loading indicator while fetching data
  }

  if (homecareProducts.length == 1) {
    return (
      <div className="min-h-screen flex justify-center items-center max-w-5xl m-auto p-5">
        {homecareProducts.map((product: any) => (
          <div key={product._id}>
            <h5 className="block md:hidden text-3xl font-bold text-center">
              {product.name}
            </h5>

            <ProductCloudImg image_url={product.image_url} />

            <h5 className="hidden md:block text-3xl md:text-5xl font-bold">
              {product.name}
            </h5>
            <p className="py-4 text-sm md:text-base">{product.desc}</p>
          </div>
        ))}
      </div>
    ); // Render a loading indicator while fetching data
  }

  return (
    <div className="min-h-screen max-w-7xl m-auto mt-32 p-6 flex flex-col items-center gap-10 md:gap-14">
      <div className="grid grid-rows-1 lg:grid-cols-3 gap-10">
        {homecareProducts.map((product: any) => (
          <div key={product._id}>
            <ProductCard
              name={product.name}
              image_url={product.image_url}
              href={product.href}
              category={product.category}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
