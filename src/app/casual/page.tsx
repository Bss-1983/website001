import { AccordionDemo } from "@/components/accordian";
import { BreadcrumbDemo } from "@/components/breadcrum";
import { CheckboxDemo } from "@/components/checkbox";
import { Dressstyle } from "@/components/dressstyle";
import Casualshirt from "@/components/shirt";
import Shirt from "@/components/shirt";
import Size from "@/components/size";
import { SliderDemo } from "@/components/slider";

export default function Casual() {
  return (
    <div>
      <BreadcrumbDemo/>
   
   <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start space-x-0 lg:space-x-6 space-y-6 lg:space-y-0 px-4">
   
      
      {/* Left Panel */}
     
      <div className="w-full sm:w-[350px] lg:w-[295px] h-auto border rounded-[16px] p-4">
      
       
        <AccordionDemo />
      
        <SliderDemo />
        <CheckboxDemo />
        <Size />
        <Dressstyle />
      </div>
      
      {/* Right Panel */}
     
      <div className="w-full sm:w-[700px] lg:w-[900px] h-auto">
      <div className="uppercase flex justify-normal font-extrabold text-3xl"> Casual</div>
        <Casualshirt />
      </div>
    </div>
    </div>
  );
}
