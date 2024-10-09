import { Libre_Bodoni } from "next/font/google";
import Feedback from "./Feedback";

const libre = Libre_Bodoni({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});
const CustomerFeedback = () => {
  return (
    <div className="pb-[5.62rem]">
      <div className="text-center py-[5.75rem]">
        <h1
          className={`${libre.className} text-[#000] text-[2.5rem] font-[700] leading-[3,375rem]`}
        >
          Feedback from Our Customers
        </h1>
      </div>
      <div className="flex gap-[2.75rem] ">
      {feedbacks.map((feedback) => <Feedback key={feedback.head} feedback={feedback} /> )}
       
      </div>
    </div>
  );
};

export default CustomerFeedback;

const feedbacks = [
  {
    head: "Perfect for Every Occasion",
    body: '"I’ve worn my watch for both formal events and casual outings, and it never fails to impress. The versatility and attention to detail are what really set this brand apart. It’s now my go-to accessory, and I couldn’t be happier with the purchase."',
    user: "James R.",
    buyer: "Verified Buyer",
  },
  {
    head: "Classic Elegance Meets Unmatched Quality",
    body: '"I was blown away by the craftsmanship and design of my new watch. It looks even better in person, and I’ve received so many compliments! The quality is top-notch, and it feels like a much more expensive timepiece. I’ll definitely be shopping here again!"',
    user: "Sarah L.",
    buyer: "Verified Buyer",
  },
  {
    head: "A Watch That’s Built to Last",
    body: '"I’m an active person, and I needed a watch that could keep up with my lifestyle. The sport watch I purchased is incredibly durable and stylish. It’s been through hikes, gym sessions, and even swimming, and it still looks brand new. Highly recommend!"',
    user: "Sarah L.",
    buyer: "Verified Buyer",
  },
];
