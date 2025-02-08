import Image from "next/image";

export default function Dress() {
    return (
        <div className="w-full h-full bg-[#F0F0F0] flex flex-col justify-start items-center py-7 mt-3 rounded-lg max-w-screen-2xl mx-auto">
            {/* Top */}
            <h1 className="font-extrabold text-3xl uppercase mb-2 text-center">BROWSE BY DRESS STYLE</h1>

            {/* Bottom Div */}
            <div className="w-[90%] md:w-[70%] flex flex-wrap justify-center gap-3 items-center mt-2 relative">
                <div className="w-full sm:w-[290px] h-[190px] flex items-center justify-center overflow-hidden rounded-[20px] relative">
                    <Image src="/dressstyle1.png" className="rounded-[20px] w-full h-full object-cover" width={300} height={190} alt="dressstyle1" />
                    <span className="text-2xl font-bold absolute top-4 left-5 sm:left-5">Casual</span>
                </div>
                <div className="w-full sm:w-[400px] h-[190px] flex items-center justify-center overflow-hidden relative">
                    <Image src="/dressstyle2.png" className="rounded-[20px] w-full h-full object-cover" width={400} height={900} alt="dressstyle2" />
                    <span className="text-2xl font-bold absolute top-4 left-5">Formal</span>
                </div>
                <div className="w-full sm:w-[407px] h-[190px] flex items-center justify-center overflow-hidden relative">
                    <Image src="/dressstyle3.png" className="rounded-[20px] w-full h-full object-cover" width={407} height={190} alt="dressstyle3" />
                    <span className="text-2xl font-bold absolute top-4 left-5">Party</span>
                </div>
                <div className="w-full sm:w-[290px] h-[185px] flex items-center justify-center overflow-hidden rounded-[20px] relative">
                    <Image src="/dressstyle4.png" className="w-full h-full object-cover" width={275} height={150} alt="dressstyle4" />
                    <span className="text-2xl font-bold absolute top-4 left-5">Gym</span>
                </div>
            </div>
        </div>
    );
}
