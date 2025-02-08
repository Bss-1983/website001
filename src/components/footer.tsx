import { FaInstagram } from "react-icons/fa";

import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa6";
import { Images } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (
        <main className="bg-[#F0F0F0] w-full h-[900px] md:h-[450px] relative mt-[0] max-w-screen-2xl mx-auto ">
            {/*  */}
            <span className="absolute top-[-80px]">

            </span>
            {/* container */}
            <div className="flex h-full md:h-[400px] flex-col md:flex-row justify-between items-start p-5 pt-[160px] sm:pt-32 border-b ">
                {/* top div */}
                <div className="flex flex-col justify-center items-center w-[200px]">
                    <ul>
                        <h2 className="text-3xl sm:text-3xl font-extrabold ml-44 ">SHOP.CO</h2>
                        <p className="text-xs mt-1 text-gray-700 ml-44 "> We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                        {/* icon */}
                        <div className="flex items-center space-x-6 mt-1 ml-44">
                            <FaInstagram className="text-xl text-red-800" />
                            <FaFacebook className="text-xl text-blue-600" />
                            <FaGithub className="text-xl text-blue-700" />
                            <FaTwitter className="text-xl text-blue-800" />
                        </div>
                    </ul>
                </div>
                {/* mid div */}
                <div className="w-full md:w-[900px] grid grid-cols-2 sm:grid-cols-4 place-items-center space-y-4 text-gray-500">
                    {/* box 1 */}
                    <ul className="space-y-3 ">
                        <h2 className=" text-black text-sm sm:text-2xl">Company</h2>
                        <li className="text-sm">About Us</li>
                        <li className="text-sm">Our Services</li>
                        <li className="text-sm">Privacy Policy</li>
                        <li className="text-sm">Terms and Conditions</li>
                    </ul>
                    {/* box 2 */}
                    <ul className="space-y-3">
                        <h2 className="text-sm sm:text-2xl text-black ">Help</h2>
                        <li className=" text-sm">About Us</li>
                        <li className="text-sm">Our Services</li>
                        <li className="text-sm">Privacy Policy</li>
                        <li className="text-sm">Terms and Conditions</li>
                    </ul>
                    {/* box 3*/}
                    <ul className="space-y-3">
                        <h2 className="text-sm sm:text-2xl text-black ">FAQ</h2>
                        <li className=" text-sm">About Us</li>
                        <li className="text-sm">Our Services</li>
                        <li className="text-sm">Privacy Policy</li>
                        <li className="text-sm">Terms and Conditions</li>
                    </ul>
                    {/* box 4 */}
                    <ul className="space-y-3">
                        <h2 className=" text-sm sm:text-2xl text-black ">Resources</h2>
                        <li className="text-sm">About Us</li>
                        <li className="text-sm">Our Services</li>
                        <li className="text-sm">Privacy Policy</li>
                        <li className="text-sm">Terms and Conditions</li>
                    </ul>
                    {/* complete boxes*/}

                </div>

            </div>
            {/* bottom div */}
            <div className="flex flex-col sm:flex-row justify-between items-start mt-3 gap-12 ">
                <p className="text-sm ">Shop.co © 2000-2023, All Rights Reserved</p>
                <div className="flex items-start gap-x-12"> {/* Changed items-center to items-start */}
                    <Image src={"/iconvisa.png"} className="w-[50px] mt-[-10px]" width={100} height={100} alt="pic" />
                    <Image src={"/googlepay.png"} className="w-[50px] mt-[-10px]" width={100} height={100} alt="pic" />
                    <Image src={"/paypal.png"} className="w-[50px] mt-[-10px]" width={100} height={100} alt="pic" />
                    <Image src={"/mastercard.png"} className="w-[50px] mt-[-10px]" width={100} height={100} alt="pic" />
                </div>
            </div>

        </main>
    )
}