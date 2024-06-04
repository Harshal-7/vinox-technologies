import { HomecareProductListCard } from "@/app/_components/homecareProductListCard";
import { Separator } from "@/components/ui/separator";
import { getProductsCategory } from "@/utils/productCategory";

const title = "Home Care";

const products = [
  {
    title: "Handawsh",
    image_url: "homecare/yjiupjdymnqwclluphjs",
    href: "handwash",
  },
  {
    title: "Kitchen Care",
    image_url: "homecare/b8es7a5vdah4m1yy6x4k",
    href: "kitchenCare",
  },
  {
    title: "Glass Cleaner",
    image_url: "homecare/jkkuqu8pclelbk7k6qog",
    href: "glassCleaner",
  },
  {
    title: "Floor Cleaner",
    image_url: "homecare/yzccbb1au0phx7fwacst",
    href: "floorCleaner",
  },
  {
    title: "Furniture Care",
    image_url: "homecare/lv5nhhhhbtrewcydobr3",
    href: "furnitureCare",
  },
  {
    title: "Room Freshners",
    image_url: "homecare/tbxx5rin1jhq0p3yrd2s",
    href: "roomFreshners",
  },
  {
    title: "Bathroom Cleaner",
    image_url: "homecare/pbuuz9yhdbltvv8hr2kr",
    href: "bathroomCleaner",
  },
  {
    title: "Toilet Cleaner",
    image_url: "homecare/i4fhrmhyawct0a8rxlfl",
    href: "washroomCleaner",
  },
];

export default async function HomecarePage() {
  const { products, errMsg } = await getProductsCategory();

  if (errMsg) return <h1>{errMsg}</h1>;

  if (!products) return <h1>error fetching products</h1>;

  return (
    <div className="min-h-screen max-w-screen-2xl m-auto mt-5 p-6 flex flex-col items-center gap-10 md:gap-14">
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
