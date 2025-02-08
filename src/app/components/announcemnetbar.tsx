import { RxCross2 } from "react-icons/rx";

export default function Announcementbar() {
  return (
    <div className="bg-[#000000] text-white w-full h-auto flex flex-wrap justify-center items-center relative px-4 py-3 max-w-screen-2xl mx-auto">
      <h2 className="text-white text-sm md:text-md text-center w-full md:w-auto ">
        Sign up and get 20% off on your first order.
      </h2>
      <button className="text-white text-sm md:text-md underline md:underline-offset-4 ml-2">
        Sign Up Now
      </button>
      <RxCross2 className="text-white text-2xl font-extrabold absolute top-2 right-4 md:right-10 hidden sm:block" />
    </div>
  );
}
