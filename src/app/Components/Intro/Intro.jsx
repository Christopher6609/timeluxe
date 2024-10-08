import { faTurnDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IntroCard from "./IntroCard";

const Intro = () => {
  return (
    <>
      <div className="w-full h-[39.25rem] bg-background1 bg-center bg-fixed bg-cover px-[4.44rem] relative">
        <div className="w-[30.625rem] space-y-[2rem] absolute top-[8rem]">
          <h1 className="text-[#FFF] text-[3rem] font-[700] leading-[3.375rem] font-[libre]">
            Timeless Elegance for Every Occasion
          </h1>
          <div>
            <button className="h-[3.125rem] p-[1.5rem] inline-flex items-center justify-center bg-[#FFF] font-[libre] text-[1.25rem] font-[400] leading-[1.5625rem] gap-[0.625rem]">
              Discover More{" "}
              <FontAwesomeIcon
                icon={faTurnDown}
                className="w-[1.5rem] h-[1.5rem]"
              />
            </button>
          </div>
        </div>
        <div className="w-[33.25rem] absolute top-[27.81rem] right-[4rem]">
          <h1 className="text-[#FFF] text-[1.5625rem] font-[400] leading-[2.1875rem] tracking-[0.00313rem]">
            Discover our curated collection of meticulously designed watches
            that blend elegance, precision, and functionality.
          </h1>
        </div>
      </div>
      <div className="pt-[3.54rem] pb-[5.38rem] flex justify-between">
        {introInfo.map((intro) => {
          return <IntroCard key={intro.introHead} intro={intro} />;
        })}
      </div>
    </>
  );
};

export default Intro;

const introInfo = [
  {
    introHead: "Affordable Luxury",
    introBody:
      "Our watches combine exquisite craftsmanship with cutting-edge technology to offer timeless elegance without the premium price tag",
  },
  {
    introHead: "Style for Every Occasion",
    introBody:
      "From classic timepieces for formal events to rugged watches for adventurous lifestyles, we offer a diverse collection to suit every taste and occasion",
  },
  {
    introHead: "Guaranteed Satisfaction",
    introBody:
      "Shop with confidence knowing every watch is backed by our two-year warranty, secure payment options, and hassle-free returns.",
  },
];
