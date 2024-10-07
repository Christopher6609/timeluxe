import Link from "next/link";
import { Inknut_Antiqua } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faContactCard,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const inknut = Inknut_Antiqua({
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
});

const Header = () => {
  return (
    <nav className="flex justify-between h-[5.8125rem] items-center leading-[3.375rem]">
      <div>
        <ul className="flex gap-x-[3.13rem] text-[#000] text-[1rem] font-[700] font-[libre]">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Shop</Link>
          </li>
          <li>
            <Link href="/">Contact Us</Link>
          </li>
        </ul>
      </div>
      <div>
        <Link
          href="/"
          className={`${inknut.className} text-[1.875rem] text-[#000] font-[600]`}
        >
          TimeLuxe
        </Link>
      </div>
      <div className="h-full flex border-x-[0.5px] ">
        <button className="p-[1rem] flex justify-center items-center w-[6.625rem] border-r-[0.5px] ">
          <FontAwesomeIcon
            icon={faSearch}
            className="w-[1.5rem] h-[1.5rem]  flex-shrink-0"
          />
        </button>
        <button className="p-[1rem] flex justify-center items-center w-[6.625rem] border-r-[0.5px] ">
          <FontAwesomeIcon
            icon={faCartShopping}
            className="w-[1.5rem] h-[1.5rem]  flex-shrink-0"
          />
        </button>
        <button className="p-[1rem] flex justify-center items-center w-[6.625rem]">
          <FontAwesomeIcon
            icon={faUser}
            className="w-[1.5rem] h-[1.5rem]  flex-shrink-0"
          />
        </button>
      </div>
    </nav>
  );
};

export default Header;
