import Intro from "./Components/Intro/Intro";
import TopProducts from "./Components/TopProducts/topProducts";
import AboutUs from "./Components/About/AboutUs";

export default function Home() {
  return (
    <main>
        <Intro />
        <TopProducts />
        <AboutUs />
    </main>
  );
}
