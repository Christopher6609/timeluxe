import { Libre_Baskerville, Roboto, Libre_Bodoni } from "next/font/google";

const libreBasker = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});
const libre = Libre_Bodoni({
    weight: ["400", "700"],
    subsets: ["latin"],
    display: "swap",
  });
const roboto = Roboto({
  weight: ["100", "700"],
  subsets: ["latin"],
  display: "swap",
});

const Offer = () => {
  return (
    <div className="bg-background1 bg-cover bg-center h-[39.8125rem] flex items-center px-[6.38rem]">
      <div className="w-[36.937rem]">
        <div className="space-y-[1rem]">
          <h1
            className={`${libreBasker.className} text-[#FFF] text-[2.5rem] font-[700] leading-[3.375rem]`}
          >
            Limited-Time Offer Elevate Your Style and Save!
          </h1>
          <p
            className={`${roboto.className} text-[1rem] font-[400] leading-[1.5rem] tracking-[0.005rem] text-[#FFF]`}
          >
            At TimeLuxe, we believe a watch is more than just a timepiece—it’s a
            statement of style, character, and precision. Founded with a passion
            for creating high-quality, beautifully crafted watches, our mission
            is to deliver affordable luxury without compromising on
            craftsmanship or design.
          </p>
          <div>
          <button className={` ${libre.className} h-[3.125rem] p-[1.5rem] inline-flex items-center justify-center bg-[#FFF] text-[1.25rem] font-[400] leading-[1.5625rem] gap-[0.625rem]`}>
          Shop Now
        </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
