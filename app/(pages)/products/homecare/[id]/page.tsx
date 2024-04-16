import { getProductById } from "@/_actions/getById";
import { ProductCloudImg } from "@/app/_components/productCloudImg";

export default async function ProductDetails({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;
  console.log("ID : ", id);

  const { product, errMsg } = await getProductById(params.id);

  if (errMsg)
    return (
      <h1 className="mt-32 flex justify-center items-center p-5">{errMsg}</h1>
    );

  if (!product) {
    return <div>Loading...</div>; // Render a loading indicator while fetching data
  }

  return (
    <div className="mt-32 flex justify-center items-center max-w-5xl m-auto p-5">
      <div
        key={product._id}
        className="grid grid-cols-1 md:grid-cols-2 place-items-center md:place-items-start "
      >
        <h5 className="block md:hidden text-3xl font-bold text-center">
          {product.name}
        </h5>

        <div className="">
          <ProductCloudImg image_url={product.image_url} />
        </div>

        <div className="mt-2 md:mt-10">
          <h5 className="hidden md:block text-3xl md:text-5xl font-bold">
            {product.name}
          </h5>
          <p className="py-4 text-sm md:text-base">{product.desc}</p>
        </div>
      </div>
    </div>
  );
}
