import { Libre_Bodoni } from "next/font/google";
import Partners from "./Partners";

const libre = Libre_Bodoni({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});
const BrandPartners = () => {
  return (
    <>
      <div className="text-center pt-[5.75rem]">
        <h1
          className={`${libre.className} text-[#000] text-[2.5rem] font-[700] leading-[3,375rem]`}
        >
          Our Brand Partners
        </h1>
      </div>
      <div className="flex  items-center space-x-[3.13rem] px-[6.31rem]">
        {partners.map((partner) => (
          <Partners key={partner.alt} partner={partner} />
        ))}
      </div>
    </>
  );
};

export default BrandPartners;

const partners = [
  {
    imageSrc: "/img/rolex.png",
    alt: "rolex",
  },
  {
    imageSrc: "/img/hublot.png",
    alt: "hublot",
  },
  {
    imageSrc: "/img/tag.png",
    alt: "TAGHeuer",
  },
  {
    imageSrc: "/img/fossil.png",
    alt: "FOSSIL",
  },
  {
    imageSrc: "/img/tommy.png",
    alt: "TOMMY HILFIGER",
  },
];
