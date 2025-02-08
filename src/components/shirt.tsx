import { FaStar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

interface Iproducts {
    title: string;
    price: string;
    id: number;
    rating?: string;
    oldprice?: string;
    imageurl: string;
}

const product: Iproducts[] = [
    {
        title: "T-SHIRT WITH TAPE DETAILS", // product1
        price: "$120",
        id: 1,
        imageurl: "/product1.png",
    },
    {
        title: "SKINNY FIT JEANS", // product2
        price: "$240",
        oldprice: "$260",
        id: 2,
        imageurl: "/product2.png",
    },
    {
        title: "CHECKERED SHIRT", // product3
        price: "$180",
        id: 3,
        imageurl: "/product3.png",
    },
    {
        title: "T-SHIRT WITH TAPE DETAILS", // product4
        price: "$130",
        oldprice: "$160",
        id: 4,
        imageurl: "/product4.png",
    },
    {
        title: "T-SHIRT WITH TAPE DETAILS", // product5
        price: "$130",
        oldprice: "$160",
        id: 5,
        imageurl: "/product4.png",
    },
    {
        title: "T-SHIRT WITH TAPE DETAILS", // product6
        price: "$130",
        oldprice: "$160",
        id: 6,
        imageurl: "/product4.png",
    },
    {
        title: "T-SHIRT WITH TAPE DETAILS", // product7
        price: "$130",
        oldprice: "$160",
        id: 7,
        imageurl: "/product4.png",
    },
    {
        title: "T-SHIRT WITH TAPE DETAILS", // product8
        price: "$130",
        oldprice: "$160",
        id: 8,
        imageurl: "/product4.png",
    },
    {
        title: "T-SHIRT WITH TAPE DETAILS", // product9
        price: "$130",
        oldprice: "$160",
        id: 9,
        imageurl: "/product4.png",
    },
];

export default function Casualshirt() {
    return (
        <div className="w-full h-full max-w-screen-2xl mx-auto">
            <div className="flex flex-wrap flex-col md:flex-row justify-center items-center md:justify-between px-16 mt-10 text-center tracking-wider">
                {product.map((data) => (
                    <div key={data.id}>
                        <Link href={`/products/${data.id}`}>
                            <div className="w-[230px] h-[230px] bg-[#F0EEED] rounded-[20px]">
                                <Image 
                                    src={data.imageurl} 
                                    alt={data.title} 
                                    width={100} 
                                    height={100} 
                                    className="w-full h-full rounded-[20px]" 
                                />
                            </div>
                        </Link>

                        <div>
                            <p className="text-lg md:text-lg mt-4 first-letter:uppercase lowercase font-bold">
                                {data.title}
                            </p>

                            {/* ✅ Corrected mapping for FaStar with a unique key */}
                            <p className="flex text-[#FFC633]">
                                {[...Array(5)].map((_, index) => (
                                    <FaStar key={index} />
                                ))}
                            </p>

                            <p className="font-bold">
                                {data.price}
                                <span className="text-gray-400 font-bold line-through px-2">
                                    {data.oldprice}
                                </span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
