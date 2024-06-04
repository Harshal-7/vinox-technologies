import { ProductCloudImg } from "@/app/_components/productCloudImg";
import { getLaundryProductsById } from "@/utils/getProductByCategory";

export default async function AutoCareProductDetails({
  params,
}: {
  params: { name: string; id: string };
}) {
  const { laundryProductDetails, errMsg } = await getLaundryProductsById(
    params.id
  );

  if (errMsg)
    return <h1 className="flex justify-center items-center p-5">{errMsg}</h1>;

  if (!laundryProductDetails) {
    return (
      <div className="flex justify-center items-center p-5">Loading...</div>
    ); // Render a loading indicator while fetching data
  }

  return (
    <div className="min-h-screen flex justify-center items-center max-w-5xl m-auto p-5">
      {laundryProductDetails.map((product: any) => (
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
