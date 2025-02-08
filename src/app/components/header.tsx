import Link from "next/link";
import { HiOutlineSearch } from "react-icons/hi";
import { BsCart } from "react-icons/bs";
import { RiAccountCircleLine } from "react-icons/ri";

import { SheetSide } from "./sheet";
import { NavigationMenuDemo } from "./navigation";

export default function Header() {
    return (
        <header className="flex justify-between items-center w-full h-[58px] px-4 sm:px-8 lg:px-16 max-w-screen-2xl mx-auto">

            {/* Logo */}
            <div className="flex justify-center items-center">
            <SheetSide />

                <h1 className="text-3xl sm:text-2xl md:text-3xl lg:text-3xl font-extrabold pl-2">SHOP.CO</h1>
            </div>

            {/* Navbar: hidden on small screens, shown from 'sm' breakpoint */}
            <ul className="hidden sm:flex items-center space-x-3 text-[14px] text-gray-600">
                <Link href=""> <NavigationMenuDemo/> </Link>
                {/* <li><Link href={""}>Shop </Link></li> */}
                <li><Link href={"/casual"}>On Sale</Link></li>
                <li><Link href={"/products"}>New Arrivals</Link></li>
                <li><Link href={"/"}>Brands</Link></li>
            </ul>

            {/* Search input: width responsive */}
            
            
        <div className="hidden md:block">

            <div className="relative flex justify-start items-center m-3 sm:w-[400px] md:w-[600px] lg:w-[650px] w-[60%] ">
                <HiOutlineSearch className="absolute left-20 text-2xl text-gray-500" />
                <input
                    className="ml-16 w-full sm:w-[550] h-[40px] pl-12 bg-[#F0F0F0] text-[16px] rounded-full outline-none text-blue-950 placeholder-gray-700 sm:block hidden"
                    placeholder="Search for products..."
                />
            </div>
        </div>

            {/* Cart and Account Icons: responsive sizes and gaps */}
            <div className="text-2xl flex justify-end gap-2">
            <HiOutlineSearch className=" text-2xl text-gray-500 md:hidden" />
                <Link href={"/cart"}><BsCart /></Link>
                <RiAccountCircleLine />
            </div>
        </header>
    );
}
