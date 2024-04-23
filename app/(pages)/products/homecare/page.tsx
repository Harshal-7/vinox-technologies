import { ProductCard } from "@/app/_components/productCard";
import { getProducts } from "@/_actions/postAction";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { ProductListCard } from "@/app/_components/productListCard";
import { HomecareProductListCard } from "@/app/_components/homecareProductListCard";

const title = "Home Care";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const products = [
  {
    title: "Handawsh",
    image_url: "/handwash.jpg",
    href: "handwash",
  },
  {
    title: "Kitchen Care",
    image_url: "/kitchenCare.jpg",
    href: "kitchenCare",
  },
  {
    title: "Bathroom Cleaner",
    image_url: "/bathroomCleaner.jpg",
    href: "bathroomCleaner",
  },
  {
    title: "Floor Cleaner",
    image_url: "/floorCleaner.jpg",
    href: "floorCleaner",
  },
  {
    title: "Furniture Care",
    image_url: "/furnitureCare.jpg",
    href: "furnitureCare",
  },
  {
    title: "Glass Cleaner",
    image_url: "/glassCleaner.jpg",
    href: "glassCleaner",
  },
  {
    title: "Room Freshners",
    image_url: "/roomFreshners.jpg",
    href: "roomFreshners",
  },
  {
    title: "Washroom Cleaner",
    image_url: "/washroomCleaner.jpg",
    href: "washroomCleaner",
  },
];

export default async function HomecarePage() {
  // const { products, errMsg } = await getProducts();

  // if (errMsg) return <h1>{errMsg}</h1>;

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

      <div className="flex flex-row gap-5 md:gap-10 flex-wrap mb-10 justify-center">
        {products.map((product: any) => (
          <div key={product._id}>
            <HomecareProductListCard
              title={product.title}
              image_url={product.image_url}
              href={product.href}
              category={"homecare"}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
