import { ProductCard } from "@/app/_components/productCard";
import { getProducts } from "@/_actions/postAction";

export default async function ProductsPage() {
  const { products, errMsg } = await getProducts();

  if (errMsg) return <h1>{errMsg}</h1>;

  return (
    <div className="min-h-screen max-w-7xl m-auto mt-32 p-6 flex flex-col items-center gap-14">
      <div className="text-4xl md:text-5xl text-center w-full">
        PRODUCT DETAILES
      </div>

      <div className="flex flex-row gap-10 flex-wrap mb-10 justify-center">
        {products.map((product: any) => (
          <div key={product._id}>
            <ProductCard
              title={product.name}
              image_url={product.image_url}
              href={product.href}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
