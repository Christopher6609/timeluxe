import { Roboto, Libre_Bodoni } from "next/font/google";

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

const Feedback = ({feedback}) => {
    const {head, body, user, buyer} = feedback
  return (
    <div className="border-dashed border-[2px] border-[#000] h-[29.3125rem] w-[29.4375rem] flex items-center justify-center px-[1.5rem]">
      <div className="space-y-[0.5rem]">
        <h3
          className={`${libre.className} text-[1.875rem] font-[500] leading-[3.375rem]`}
        >
          {head}
        </h3>
        <p
          className={`${roboto.className} text-[1rem] [italic] font-[400] leading-[1.5rem]`}
        >
          {body}
        </p>
        <h5
          className={`${roboto.className} text-[1rem] font-[500] leading-[1.5rem]`}
        >
          {" "}
          - {user} {buyer}
        </h5>
      </div>
    </div>
  );
};

export default Feedback;
