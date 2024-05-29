import { HomecareProductListCard } from "@/app/_components/homecareProductListCard";
import { Separator } from "@/components/ui/separator";

const title = "Home Care";

const products = [
  {
    title: "Handawsh",
    image_url: "/hw-3.jpg",
    href: "handwash",
  },
  {
    title: "Kitchen Care",
    image_url: "/kc-1.jpg",
    href: "kitchenCare",
  },
  {
    title: "Glass Cleaner",
    image_url: "/gc-2.jpg",
    href: "glassCleaner",
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
    title: "Room Freshners",
    image_url: "/rf-1.jpg",
    href: "roomFreshners",
  },
  {
    title: "Bathroom Cleaner",
    image_url: "/bc-2.jpg",
    href: "bathroomCleaner",
  },
  {
    title: "Washroom Cleaner",
    image_url: "/tc-1.jpg",
    href: "washroomCleaner",
  },
];

export default async function HomecarePage() {
  // const { products, errMsg } = await getProducts();

  // if (errMsg) return <h1>{errMsg}</h1>;

  return (
    <div className="min-h-screen max-w-screen-2xl m-auto mt-32 p-6 flex flex-col items-center gap-10 md:gap-14">
      <div className="text-4xl relative h-32 md:h-72 md:text-5xl text-center w-full font-semibold">
        <div className="">
          <div className="bg-black h-32 md:h-72"></div>
          <img
            src="/hc-1.jpg"
            alt="homecare.jpg"
            className="absolute top-0 opacity-70 h-32 md:h-72 w-full object-cover"
          />
        </div>
        <p className="text-white absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
          {title}
        </p>
      </div>

      <div className="grid grid-cols-2 md:flex gap-x-5 gap-y-8 md:gap-10 md:flex-wrap mb-10 justify-center">
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
