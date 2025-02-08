"use client";

import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Check, Minus, Plus } from "lucide-react";
import Allreview from "@/components/allreview";
import Similar from "@/components/similarproduct";
import { BreadcrumbDemo } from "@/components/breadcrum";

interface IProduct {
  title: string;
  price: string;
  id: number;
  rating?: string;
  oldprice?: string;
  imageurl: string;
  img1: string;
  img2: string;
  img3: string;
  img4: string;
}

const products: IProduct[] = [
  {
    title: "T-SHIRT WITH TAPE DETAILS",
    price: "$120",
    id: 1,
    imageurl: "/product1.png",
    img1: "/detail1.jpg",
    img2: "/detail2.png",
    img3: "/detail3.png",
    img4: "/detail4.png",
  },
  {
    title: "CHECKERED SHIRT",
    price: "$180",
    id: 3,
    imageurl: "/product3.png",
    img1: "/detail1.jpg",
    img2: "/detail2.png",
    img3: "/detail3.png",
    img4: "/detail4.png",
  },
  {
    title: "SKINNY FIT JEANS",
    price: "$240",
    oldprice: "$260",
    id: 2,
    imageurl: "/product2.png",
    img1: "/detail1.jpg",
    img2: "/detail2.png",
    img3: "/detail3.png",
    img4: "/detail4.png",
  },
];

export default function ProductDetail() {
  const params = useParams();
  const id = Number(params.id);

  const item = products.find((product) => product.id === id);

  if (!item) {
    return <h1 className="text-center text-2xl font-bold mt-10">Product not found</h1>;
  }

  return (
    <>
      <BreadcrumbDemo />

      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-evenly mt-10 px-4 md:px-10 max-w-screen-2xl mx-auto">
        {/* Left - Small Images */}
        <div className="w-full lg:w-[152px] flex lg:flex-col gap-3 lg:gap-0">
          {[item.img1, item.img2, item.img3].map((imgSrc, index) => (
            <Image key={index} src={imgSrc} alt="Product detail" width={152} height={150} className="w-full h-[150px]" />
          ))}
        </div>

        {/* Center - Main Image */}
        <div className="w-full lg:w-[444px] h-auto">
          <Image src={item.img4} alt="Product main image" width={444} height={500} className="w-full h-auto" />
        </div>

        {/* Right - Product Details */}
        <div className="w-full lg:w-[600px] mt-6 lg:mt-0">
          <h1 className="text-2xl md:text-3xl font-bold uppercase">{item.title}</h1>
          <div className="flex text-[#FFC633]">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
          <p className="font-bold text-2xl">
            {item.price} <span className="font-normal text-gray-400 line-through">{item.oldprice}</span>
          </p>
          <p className="mt-6 text-[#00000099]">
            This graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
          </p>
          <div className="w-full h-[2px] bg-gray-300 mt-5" />

          {/* Select Color */}
          <p className="text-gray-400 mt-6">Select Colors</p>
          <div className="flex space-x-3 mt-4">
            {["#4F4631", "#314F4A", "#31344F"].map((color, i) => (
              <div key={i} className="w-[32px] h-[32px] rounded-full flex items-center justify-center" style={{ backgroundColor: color }}>
                <Check className="text-white w-5 h-5 opacity-0 hover:opacity-100 cursor-pointer" />
              </div>
            ))}
          </div>

          <div className="w-full h-[2px] bg-gray-300 mt-5" />

          {/* Choose Size */}
          <p className="text-gray-400 mt-6">Choose Size</p>
          <div className="flex space-x-3 text-center py-2">
            {["Small", "Medium", "Large", "X-Large"].map((size) => (
              <div key={size} className="w-[80px] h-[40px] bg-[#F0F0F0] flex justify-center items-center rounded-[62px]">
                {size}
              </div>
            ))}
          </div>

          {/* Quantity & Add to Cart */}
          <div className="flex items-center mt-10 space-x-4 md:space-x-10">
            <div className="w-[150px] md:w-[175px] h-[40px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] gap-5 text-gray-700">
              <Minus /> 1 <Plus />
            </div>
            <Button className="flex justify-center items-center bg-black text-white w-full md:w-[300px] h-[40px] rounded-3xl">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>

      <Allreview />
      <Similar />
    </>
  );
}
