"use client";

import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button"
import { Check, Minus, Plus } from "lucide-react";
import Allreview from "@/components/allreview";
import Offers from "@/app/components/offer";
import Similar from "@/components/similarproduct";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { BreadcrumbDemo } from "@/components/breadcrum";

interface Iproducts {
  title: string,
  price: string,
  id: number,
  rating?: string
  oldprice?: string,
  imageurl: string,
  img1: string,
  img2: string,
  img3: string,
  img4:string
}

let product: Iproducts[] = [
  {
    title: "T-SHIRT WITH TAPE DETAILS",
    price: "$120",
    id: 1,
    imageurl: "/product1.png",
    img1: "/detail1.jpg",
    img2: "/detail2.png",
    img3: "/detail3.png",
    img4:"/detail4.png",
  },
  
  {
    title: "CHECKERED SHIRT",
    price: "$180",
    id:3,
    imageurl: "/product3.png",
    img1: "/detail1.jpg",
    img2: "/detail2.png",
    img3: "/detail3.png",
    img4:"/detail4.png",
  },
  {
    title: "SKINNY FIT JEANS",// product2
    price: "$240",
    oldprice: "$260",
    id: 2,
    imageurl: "/product2.png",
    img1: "/detail1.jpg",
    img2: "/detail2.png",
    img3: "/detail3.png",
    img4:"/detail4.png",
},
];

let star = [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />]

export default function Productdetail() {
  const params = useParams();
  const id = params.id;
  const item = product.find((item) => item.id === Number(id))
  if (!item) {
    return (<h1>Product not found</h1>)
  }

  return (
    
    <> 
      <BreadcrumbDemo/>
        

    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-evenly mt-10 px-4 md:px-10 max-w-screen-2xl mx-auto">
      {/* Left */}
      <div className="w-full lg:w-[152px] flex lg:flex-col gap-3 lg:gap-0 max-w-screen-2xl mx-auto ">
        <Image src={item.img1} className="w-full sm:mt-2 sm:items-center lg:w-[152px] h-[150px]" alt="product detail" width={100} height={100} />
        <Image src={item.img2} className="w-full sm:mt-8 sm:items-center lg:w-[152px] h-[150px]" alt="product detail" width={100} height={100} />
        <Image src={item.img3} className="w-full sm:mt-8 sm:items-center lg:w-[152px] h-[150px]" alt="product detail" width={100} height={100} />
      </div>
      
      {/* Center */}
      <div className="w-full lg:w-[444px] h-auto max-w-screen-2xl mx-auto">
        <Image src={item.img4} className="w-full h-auto" alt="product detail" width={300} height={250} />
      </div>
      
      {/* Right */}
      <div className="w-full lg:w-[600px] mt-6 lg:mt-0 max-w-screen-2xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold uppercase">One Life Graphic T-shirt</h1>
        <div className="flex text-[#FFC633]">{star}</div>
        <p className="font-bold text-2xl">{item.price} <span className="font-normal text-gray-400 line-through">{item.oldprice}</span></p>
        <p className="mt-6 text-[#00000099]">This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
        <div className="w-full h-[2px] bg-gray-300 mt-5" />
        
        {/* Select Color */}
        <p className="text-gray-400 mt-6">Select Colors</p>
        <div className="flex space-x-3 mt-4">
          <div className="w-[32px] h-[32px] bg-[#4F4631] rounded-full flex items-center justify-center">
            <Check className="text-white w-5 h-5 opacity-0 hover:opacity-100 cursor-pointer" />
          </div>
          <div className="w-[32px] h-[32px] bg-[#314F4A] rounded-full flex items-center justify-center">
            <Check className="text-white w-5 h-5 opacity-0 hover:opacity-100 cursor-pointer" />
          </div>
          <div className="w-[32px] h-[32px] bg-[#31344F] rounded-full flex items-center justify-center">
            <Check className="text-white w-5 h-5 opacity-0 hover:opacity-100 cursor-pointer" />
          </div>
        </div> 

        
        <div className="w-full h-[2px] bg-gray-300 mt-5" />
        
        {/* Choose Size */}
        <p className="text-gray-400 mt-6">Choose Size</p>
        <div className="flex space-x-3 text-center py-2">
          <div className="w-[80px] h-[40px] bg-[#F0F0F0] flex justify-center items-center rounded-[62px]">Small</div>
          <div className="w-[80px] h-[40px] bg-[#F0F0F0] flex justify-center items-center rounded-[62px]">Medium</div>
          <div className="w-[80px] h-[40px] bg-[#F0F0F0] flex justify-center items-center rounded-[62px]">Large</div>
          <div className="w-[80px] h-[40px] bg-[#F0F0F0] flex justify-center items-center rounded-[62px]">X-Large</div>
        </div>
        
        <div className="flex items-center mt-10 space-x-4 md:space-x-10">
          <div className="w-[150px] md:w-[175px] h-[40px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] gap-5 text-gray-700">
            <Minus />1<Plus />
          </div>
          <Button className="flex justify-center items-center bg-black text-white w-full md:w-[300px] h-[40px] rounded-3xl">
            Add to Cart
          </Button>
        </div>
     
      </div>

    </div>
       <Allreview/>
       <Similar/>
      
       
        

       </>
  )
}
