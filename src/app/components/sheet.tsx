"use client"
import { FiMenu } from "react-icons/fi";
import { Button } from "@/components/ui/button"
import {
    
  Sheet,

  SheetContent,
 
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from "next/link";
import { NavigationMenuDemo } from "./navigation";

const SHEET_SIDES = ["left"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
  return (
    <div className="flex gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button className="text-black bg-white block sm:hidden " >
              <FiMenu />
            </Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle className="font-extrabold">SHOP.CO</SheetTitle>
              
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
               
                
              </div>
              <ul className="grid grid-cols-1 gap-y-2"> 
                <li className="ml-0"><Link href={""}><NavigationMenuDemo /></Link></li>
                <li className="ml-4"><Link href={""}>On Sale</Link></li>
                <li className="ml-4"><Link href={""}>New Arrivals</Link></li>
                <li className="ml-4"><Link href={""}>Brands</Link></li>
            </ul>
              
            </div>
            
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
