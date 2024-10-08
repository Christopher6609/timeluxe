import { Libre_Bodoni, Roboto } from "next/font/google";

const libre = Libre_Bodoni({
  weight: ['400', '700'],
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  weight: ["100"],
  subsets: ["latin"],
  display: "swap",
});
const AboutUs = () => {
  return (
    <div className="bg-aboutBackground bg-center bg-cover h-[35.6875rem] flex justify-center items-center">
      <div className="bg-[#000000] bg-opacity-20 h-[24.5rem] w-[65.0625rem] py-[4.69rem] px-[5.38rem] space-y-[4.47rem]">
        <div className="text-center space-y-[1.62rem]">
          <h1
            className={`${libre.className} text-[#FFF] text-[3rem] font-[700] leading-[3.375rem] `}
          >
            About Us
          </h1>
          <p
            className={`${roboto.className} text-[#FFF] text-[1rem] font-[400] leading-[1.5rem] `}
          >
            At TimeLuxe, we believe a watch is more than just a timepiece—it’s a
            statement of style, character, and precision. Founded with a passion
            for creating high-quality, beautifully crafted watches, our mission
            is to deliver affordable luxury without compromising on
            craftsmanship or design.
          </p>
        </div>
        <div className="flex justify-center">
        <button className={` ${libre.className} h-[3.125rem] p-[1.5rem] inline-flex items-center justify-center bg-[#FFF] text-[1.25rem] font-[400] leading-[1.5625rem] gap-[0.625rem]`}>
          Read Our Full Story
        </button>
        </div>
        
      </div>
    </div>
  );
};

export default AboutUs;
