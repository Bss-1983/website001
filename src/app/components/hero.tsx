import React from 'react'
import Image from 'next/image'

export default function Hero() {
    return (
        <main className="w-full h-full md:h-[500px] flex flex-col md:flex-row justify-between items-start bg-[#F2F0F1] px-4 md:px-8 max-w-screen-2xl mx-auto">
            {/* Left Section */}
            <div className="w-full md:w-1/2 lg:w-2/5 max-w-[500px] mx-auto md:mx-0 md:mr-8 px-4">
                <h1 className="md:mt-12 sm:text-5xl md:text-5xl lg:text-5xl font-extrabold text-center md:text-left">
                    FIND CLOTHES THAT MATCH YOUR STYLE
                </h1>
                <p className="md:mt-4 text-sm sm:text-base md:text-lg text-[#00000089] text-center md:text-left">
                    <span className="text-[13.5px] ">
                        Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                    </span>
                </p>
                <div className="flex justify-center md:justify-start">
                    <button className=" md: mt-8 w-44 h-12 px-8 bg-black text-white text-sm sm:text-base border rounded-[24px] font-medium">
                        Shop Now
                    </button>
                </div>
            </div>

            {/* Right Section */}
            <div className="relative ">
                <Image
                    src="/Rectangle 2 crop.jpg"
                    width={500}
                    height={500}
                    className="max-w-[100%] md:max-w-[90%] lg:max-w-[100%]"
                    alt="main image"
                />

                {/* Star Image (medium-left) */}
                <Image
                    src="/Vector1.png"
                    width={50}
                    height={50}
                    className=" w-[50px] md:w-[100px] absolute top-[120px] left-4 md:top-[300px] md:left-[100px] lg:max-w-[100%] lg:top-[160px] lg:left-[30px] "
                    alt="decorative star"
                />

                {/* Small Star Image (Top-Right) */}
                <Image
                    src="/Vector1.png"
                    width={200}   
                    height={200}  
                    className="
                      w-[125px] md:w-[125px] lg:w-[160px] 
                      absolute 
                      top-4 right-[-10px] 
                      md:top-[100px] md:right-[10px] 
                      lg:top-[20px] lg:right-[-10px]"
                    alt="small star"
                />

            </div>
        </main>





    )
}
