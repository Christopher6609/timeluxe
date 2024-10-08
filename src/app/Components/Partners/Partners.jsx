import Image from "next/image";

const Partners = ({partner}) => {
    const {imageSrc, alt} = partner;
    return(
        <div className="">
            <Image src={imageSrc} alt={alt} width={180} height={74} />
        </div>
    )
}

export default Partners;