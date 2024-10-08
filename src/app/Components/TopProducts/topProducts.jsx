import Products from "./products";

const TopProducts = () => {
  return (
    <>
      <div className="h-[3.125rem] flex justify-between items-center">
        <h2 className="text-[#000] font-[libre] text-[2rem] font-[700] leading-[3.375rem]">
          Our Top Products
        </h2>
        <button className="bg-[#000] text-[#fff] h-full p-[1.5rem] border-[#FFF] flex items-center ">
          View All Categories
        </button>
      </div>
      <div className="flex justify-between py-[1rem] pb-[5.81rem]">
      {
        products.map((product) => <Products key={product.id} product={product} />)
      }
       
      </div>
    </>
  );
};
export default TopProducts;

const products = [
  {
    id: 1,
    src: "/img/watch1.png",
    alt: "watch1",
  },
  {
    id: 2,
    src: "/img/watch2.png",
    alt:"watch2",
  },
  {
    id: 3,
    src: "/img/watch3.png",
    alt:"watch3",
  },
  {
    id: 4,
    src: "/img/watch4.png",
    alt:"watch4",
  },
];
