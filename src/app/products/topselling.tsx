import { FaStar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";



interface Iproducts {
    title: string,
    price: string,
    id: number,
    rating?: string
    oldprice?: string,
    imageurl: string,

}

const product: Iproducts[] = [
    {
        title: "VERTICAL STRIPED SHIRT",// product1
        price: "$212",
        oldprice: "$232",
        id: 5,
        imageurl: "/product5.png"
    },
    {
        title: "COURAGE GRAPHIC T-SHIRT",// product2
        price: "$145",
        id: 6,
        imageurl: "/product6.png"
    },
    {
        title: "LOOSE FIT BERMUDA SHORTS", // product3
        price: "$80",
        id: 7,
        imageurl: "/product7.png"
    },
    {
        title: "FADED SKINNY JEANS", // product4
        price: "$210",
        id: 8,
        imageurl: "/product8.png"
    },


];


const star = [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />]


export default function Topselling() {
    return (
        <div className="w-full h-full sm:h-[500px] max-w-screen-2xl mx-auto">
            <h1 className="text-2xl md:text-4xl font-extrabold text-center mt-[-10]"><span className="uppercase" > top selling</span></h1>

            <div className="flex flex-col md:flex-row justify-center items-center md:justify-between px-16 mt-10 tracking-wider">
                {
                    product.map((data) => {

                        return (

                            <div key={data.id}>
                               <Link href={`/products/${data.id}`} >  <div className="w-[230px] h-[230px] bg-[#F0EEED] rounded-[20px]">
                                    <Image src={data.imageurl} alt={data.title} width={100} height={100} className=" w-full h-full rounded-[20px] " />
                                </div> </Link>

                                <div>
                                    <p className="text-lg md:text-lg mt-4 first-letter:uppercase lowercase font-bold ">{data.title}</p>

                                    <p className="flex text-[#FFC633]">{star}</p>
                                    <p className="font-bold">{data.price}<span className="text-gray-400 font-bold line-through px-2 ">{data.oldprice}</span></p>
                                </div>

                            </div>
                        )


                    })
                }



            </div>

        </div>

    )
}


