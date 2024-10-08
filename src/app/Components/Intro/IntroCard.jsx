import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});
const IntroCard = ({ intro }) => {
  const { introHead, introBody } = intro;
  return (
    <div className="font-[libre] text-center text-[#000] w-[25rem]">
      <h3 className="text-[1.5rem] font-[700] leading-[1.75rem]">
        {introHead}
      </h3>
      <p
        className={`${roboto.className} text-[1rem] font-[400] leading-[1.5rem]`}
      >
        {introBody}
      </p>
    </div>
  );
};

export default IntroCard;
