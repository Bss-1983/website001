
import Dress from "@/components/dress";
import Announcemnetbar from "./components/announcemnetbar";
import Fonts from "./components/fonts";
import Header from "./components/header";
import Hero from "./components/hero";
import Product from "./products/page";
import Topselling from "./products/topselling";
import CustomerCarousel from "@/components/carousel";
import Offer from "./components/offer";
import Footer from "@/components/footer";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import Casual from "./casual/page";

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
