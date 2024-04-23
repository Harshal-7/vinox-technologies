import { getProductById } from "@/_actions/getById";
import {
  getAutocareProductsById,
  getHomecareProductsByCategory,
  getHomecareProductsByCategoryAndId,
} from "@/_actions/getProductByCategory";
import { ProductCloudImg } from "@/app/_components/productCloudImg";
getHomecareProductsByCategory;
export default async function AutoCareProductDetails({
  params,
}: {
  params: { name: string; id: string };
}) {
  const { autocareProductDetails, errMsg } = await getAutocareProductsById(
    params.id
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
    <div className="min-h-screen flex justify-center items-center max-w-5xl m-auto p-5">
      <div className="mt-44 text-3xl">INSIDE</div>
      {autocareProductDetails.map((product: any) => (
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
  );
}
