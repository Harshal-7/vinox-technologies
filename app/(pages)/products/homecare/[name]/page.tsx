import { getProductById } from "@/_actions/getById";
import { getHomecareProductsByCategory } from "@/_actions/getProductByCategory";
import { getProducts } from "@/_actions/postAction";
import { ProductCard } from "@/app/_components/productCard";
import { ProductCloudImg } from "@/app/_components/productCloudImg";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

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

  return (
    <div className="min-h-screen max-w-7xl m-auto mt-32 p-6 flex flex-col items-center gap-10 md:gap-14">
      <div className="flex flex-row gap-5 md:gap-10 flex-wrap mb-10 justify-center">
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
