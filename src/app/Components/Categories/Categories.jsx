import { Libre_Bodoni, Roboto } from "next/font/google";
import Image from "next/image";

const libre = Libre_Bodoni({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  weight: ["100", "400"],
  subsets: ["latin"],
  display: "swap",
});

const Categories = () => {
  return (
    <div className="py-[7.06rem]">
      <div className="flex justify-between items-center">
        <div className="w-[18.875rem]">
          <h1
            className={`${libre.className} text-[#000] text-[2rem] font-[700] leading-[3.375rem] `}
          >
            Explore All Product Categories
          </h1>
        </div>
        <div className="w-[31.4375rem]">
          <p
            className={`${roboto.className} text-[1rem] font-[400] leading-[1.5rem]`}
          >
            For a limited time, enjoy 20% OFF your first purchase! Discover our
            exclusive collection of premium watches and add timeless elegance to
            your wardrobe at an unbeatable price.
          </p>
        </div>
        <button className="bg-[#000] text-[#fff] h-[3.125rem] w-[11.875rem] p-[1.5rem] border-[#FFF] flex items-center ">
          Shop All
        </button>
      </div>
      <div className="flex-col space-y-[2.25rem] py-[2.25rem]">
        <div className="flex gap-[1.75rem] ">
          <Image
            src="/img/Component 2.png"
            alt="category1"
            width={328125}
            height={293125}
          />
          <Image
            src="/img/Component 3.png"
            alt="category1"
            width={429375}
            height={293125}
          />
        </div>
        <div className="flex gap-[1.75rem] ">
          <Image
            src="/img/Component 8.png"
            alt="category1"
            width={429375}
            height={293125}
          />
          <Image
            src="/img/Component 4.png"
            alt="category1"
            width={328125}
            height={293125}
          />
        </div>
      </div>
    </div>
  );
};

export default Categories;
