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
        title: "T-SHIRT WITH TAPE DETAILS",// product1
        price: "$120",
        id: 1,
        imageurl: "/product1.png"
    },
    {
        title: "SKINNY FIT JEANS",// product2
        price: "$240",
        oldprice: "$260",
        id: 2,
        imageurl: "/product2.png"
    },
    {
        title: "CHECKERED SHIRT", // product3
        price: "$180",
        id: 3,
        imageurl: "/product3.png"
    },
    {
        title: "T-SHIRT WITH TAPE DETAILS", // product4
        price: "$130",
        oldprice: "$160",
        id: 4,
        imageurl: "/product4.png"
    },
];

// Generate star ratings dynamically
const stars = Array(5).fill(0);

export default function Product() {
    return (
        <div className="w-full h-full max-w-screen-2xl mx-auto">
            <h1 className="text-2xl md:text-4xl font-extrabold text-center mt-2">
                <span> NEW ARRIVALS </span>
            </h1>

            <div className="flex flex-col md:flex-row justify-center items-center md:justify-between px-16 mt-10 text-center tracking-wider">
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

                            {/* Add key prop to stars */}
                            <p className="flex text-[#FFC633]">
                                {stars.map((_, index) => (
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
