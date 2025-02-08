
import Dress from "@/components/dress";

import Fonts from "./components/fonts";

import Hero from "./components/hero";
import Product from "./products/page";
import Topselling from "./products/topselling";
import CustomerCarousel from "@/components/carousel";




export default function Home() {
  return (
    <div>
 
  
    <Hero/>
  <Fonts/>
  <Product/>
  <Topselling/>
  <Dress/>
  <CustomerCarousel/>


  

  
    </div>
  );
}
