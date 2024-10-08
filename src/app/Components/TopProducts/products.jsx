import Image from "next/image";

const Products = ({product}) => {
    const {src, alt} = product;
    return(
        <>
           <div className="w-[18.4375rem] h-[19.5625rem] px-[3.96875rem] py-[0.46875rem] flex items-center justify-center bg-[#faf9f9]">
            <Image src={src} alt={alt} width={11625} height={174.375} className="w-[11.63rem]"/>
           </div> 
        </>
    )
}

export default Products;