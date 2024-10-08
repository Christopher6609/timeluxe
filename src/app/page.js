import Intro from "./Components/Intro/Intro";
import TopProducts from "./Components/TopProducts/topProducts";
import AboutUs from "./Components/About/AboutUs";
import BrandPartners from "./Components/Partners/BrandPartners";
import Offer from "./Components/Offer/Offer";
import Categories from "./Components/Categories/Categories";
import BestSelling from "./Components/BestSelling/BestSelling";

export default function Home() {
  return (
    <main>
        <Intro />
        <TopProducts />
        <AboutUs />
        <BrandPartners />
        <Offer />
        <Categories/>
        <BestSelling />
    </main>
  );
}
