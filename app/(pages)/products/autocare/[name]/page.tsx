import { getProductById } from "@/_actions/getById";
import {
  getAutocareProductsById,
  getHomecareProductsByCategory,
} from "@/_actions/getProductByCategory";
import { getProducts } from "@/_actions/postAction";
import { ProductCard } from "@/app/_components/productCard";
import { ProductCloudImg } from "@/app/_components/productCloudImg";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

export default async function AutoCareProductList({
  params,
}: {
  params: { name: string };
}) {
  const { autocareProductDetails, errMsg } = await getAutocareProductsById(
    params.name
  );

  if (errMsg)
    return (
      <h1 className="mt-32 flex justify-center items-center p-5">{errMsg}</h1>
    );

  if (!autocareProductDetails) {
    return (
      <div className="mt-32 flex justify-center items-center p-5">
        Loading...
      </div>
    ); // Render a loading indicator while fetching data
  }

  return (
    <div className="">
      {autocareProductDetails.map((product: any) => (
        <div
          className="min-h-screen flex flex-col md:flex-row justify-center items-center max-w-5xl m-auto p-5"
          key={product._id}
        >
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
  );
}
