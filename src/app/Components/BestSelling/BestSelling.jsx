import Image from "next/image";
import { Libre_Bodoni, Roboto, Libre_Baskerville } from "next/font/google";

const libre = Libre_Bodoni({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});
const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});
const libreBasker = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});
const BestSelling = () => {
  return (
    <div className="flex gap-[3.38rem]">
      <div className="w-[36rem] h-[35.75rem] py-[6.125rem] px-[3.125rem] flex justify-center items-center flex-shrink-0 bg-[#f5f4f4]">
        <Image
          src="/img/Frame 903.png"
          width={2350}
          height={29}
          className=" w-[23.5rem] "
        />
      </div>
      <div className="flex flex-col justify-center items-start">
        <div>
          <h2
            className={`${libre.className} text-[2rem] font-[700] leading-[3.375rem] mb-[2.94rem]`}
          >
            {" "}
            Best Selling Product
          </h2>
        </div>
        <div className="space-y-[1.5rem]">
          <h4
            className={`${libre.className} text-[1.875rem] font-[500] leading-[3.375rem]`}
          >
            Rolex 4356G
          </h4>
          <p
            className={`${roboto.className} text-[1rem] font-[400] leading-[1.5rem] `}
          >
            For a limited time, enjoy 20% OFF your first purchase! Discover our
            exclusive collection of premium watches and add timeless elegance to
            your wardrobe at an unbeatable price.
          </p>
          <h3
            className={`${libreBasker.className} text-[2.5rem] font-[700] leading-[3.375rem] `}
          >
            £9800.00
          </h3>
          <div className="flex">
            <button className="bg-[#000] text-[#fff] h-[3.125rem] w-[11.875rem] p-[1.5rem] justify-center text-center border-[#FFF] flex items-center ">
              View Product
            </button>
            <button className="bg-[#FFF] text-[#000] h-[3.125rem] w-[11.875rem] p-[1.5rem] flex text-center justify-center items-center border-[#000] border-[1px]">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BestSelling;
