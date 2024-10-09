import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCcMastercard,
  faCcVisa,
  faGooglePay,
  faInstagram,
  faLinkedin,
  faPaypal,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { faSquareArrowUpRight, faX } from "@fortawesome/free-solid-svg-icons";
import { Libre_Bodoni, Roboto } from "next/font/google";
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

const Footer = () => {
  return (
    <div className="bg-[#000] text-[#fff]">

    
    <footer className=" pt-[7.37rem] relative px-[6.37rem]">
      <div className="flex space-x-[13.31rem] ">
        <div className="flex flex-col">
          <h2
            className={`${libre.className} text-[1.5rem] font-[500] leading-[3.375rem]`}
          >
            Connect with our Socials
          </h2>
          <ul className=" list-none flex gap-[1.44rem] ">
            <li>
              <Link href="Instagram.com">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="w-[1.5rem] h-[1.5rem]"
                />{" "}
              </Link>{" "}
            </li>
            <li>
              <Link href="twitter.com">
                <FontAwesomeIcon icon={faX} className="w-[1.5rem] h-[1.5rem]" />{" "}
              </Link>{" "}
            </li>
            <li>
              <Link href="linkedin.com">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="w-[1.5rem] h-[1.5rem]"
                />{" "}
              </Link>{" "}
            </li>
            <li>
              <Link href="tiktok.com">
                <FontAwesomeIcon
                  icon={faTiktok}
                  className="w-[1.5rem] h-[1.5rem]"
                />{" "}
              </Link>{" "}
            </li>
          </ul>
        </div>
        <div>
          <h2
            className={`${libre.className} text-[1.5rem] font-[500] leading-[3.375rem]`}
          >
            Subscribe to our Offers
          </h2>
          <div>
            <form>
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Enter your Email Address"
                  value=""
                  onChange=""
                  className="h-[3.5rem] w-[21.8125rem] p-[1rem]"
                />
                <button className="p-[1rem] bg-[#FFF] text-[#000] h-[3.5rem] items-center justify-center border-l-[2px] border-[#000]">
                  <FontAwesomeIcon
                    icon={faSquareArrowUpRight}
                    className="w-[1.5rem] h-[1.5rem]"
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className=" absolute right-2 top-0">
          <Image
            src="/img/image 164.png"
            alt="watch"
            width={175625}
            height={234375}
            className=" w-[17.5623rem] flex-shrink-0 "
          />
        </div>
      </div>
      <div className="flex justify-between mt-[4.19rem]">
        <div>
          <h3
            className={`${libre.className} text-[1.5rem] font-[500] leading-[3.375rem]`}
          >
            Shop
          </h3>
          <ul
            className={`${roboto.className} text-[1rem] font-[400] leading-[1.5rem] space-y-[0.5rem]`}
          >
            <li>
              <Link href="/">Men Watches</Link>
            </li>
            <li>
              <Link href="/">Women Watches</Link>
            </li>
            <li>
              <Link href="/">Luxury Watches</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3
            className={`${libre.className} text-[1.5rem] font-[500] leading-[3.375rem]`}
          >
            Useful Information
          </h3>
          <ul
            className={`${roboto.className} text-[1rem] font-[400] leading-[1.5rem] space-y-[0.5rem]`}
          >
            <li>
              <Link href="/">Delivery Information</Link>
            </li>
            <li>
              <Link href="/">Return Policy</Link>
            </li>
            <li>
              <Link href="/">Legal Terms of Sale</Link>
            </li>
            <li>
              <Link href="/">FAQ</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3
            className={`${libre.className} text-[1.5rem] font-[500] leading-[3.375rem]`}
          >
            Contact
          </h3>
          <ul
            className={`${roboto.className} text-[1rem] font-[400] leading-[1.5rem] space-y-[0.5rem]`}
          >
            <li>
              <Link href="mailto:hello@timeluxe.com">hello@timeluxw.com</Link>
            </li>
            <li>
              <Link href="/">WhatsApp No: +447999456789</Link>
            </li>
            <li>
              <Link href="/">Phone No: +443675432567</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3
            className={`${libre.className} text-[1.5rem] font-[500] leading-[3.375rem]`}
          >
            Opening Hours
          </h3>
          <ul
            className={`${roboto.className} text-[1rem] font-[400] leading-[1.5rem] space-y-[0.5rem]`}
          >
            <li>Monday - Friday</li>
            <li>9am - 4pm</li>
            <li>Saturday</li>
            <li>10am - 3pm</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-end mt-[4.5rem]">
        <ul className=" list-none flex gap-[1.44rem] ">
          <li>
            <Link href="Googlepay.com">
              <FontAwesomeIcon
                icon={faGooglePay}
                className="w-[1.5rem] h-[1.5rem]"
              />{" "}
            </Link>{" "}
          </li>
          <li>
            <Link href="paypal.com">
              <FontAwesomeIcon
                icon={faPaypal}
                className="w-[1.5rem] h-[1.5rem]"
              />{" "}
            </Link>{" "}
          </li>
          <li>
            <Link href="mastercard.com">
              <FontAwesomeIcon
                icon={faCcMastercard}
                className="w-[1.5rem] h-[1.5rem]"
              />{" "}
            </Link>{" "}
          </li>
          <li>
            <Link href="visa.com">
              <FontAwesomeIcon
                icon={faCcVisa}
                className="w-[1.5rem] h-[1.5rem]"
              />{" "}
            </Link>{" "}
          </li>
        </ul>
      </div>
      
    </footer>
    <div className="px-0">
        <Image src="/img/timeluxe.png" alt="footer" width={900} height={18} className="w-full " />
      </div>
    </div>
  );
};

export default Footer;
