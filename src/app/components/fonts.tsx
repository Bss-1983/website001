import { Playfair_Display, Cinzel, Bodoni_Moda, Prata, Montserrat } from 'next/font/google'



const palyfair = Playfair_Display({ subsets: ['latin'] });
const Cinze = Cinzel({ subsets: ['latin'] });
const Bodoni = Bodoni_Moda({ subsets: ['latin'] });
const Mont = Montserrat({ subsets: ['latin'] });
const Prata1 = Prata({ subsets: ['latin'], weight: "400" });

export default function Fonts() {
    return (
      
        <div className="bg-black w-full max-w-screen-2xl mx-auto h-[100px] flex justify-center space-x-4 md:justify-between items-center px-4 md:px-44 flex-wrap relative -top-12">
    <h1 className={`${palyfair.className} text-white text-2xl md:text-4xl`}>VERSACE</h1>
    <h1 className={`${Cinze.className} text-white text-2xl md:text-4xl`}>ZARA</h1>
    <h1 className={`${Bodoni.className} text-white text-2xl md:text-4xl`}>GUCCI</h1>
    <h1 className={`${Mont.className} text-white text-2xl md:text-4xl`}>PRADA</h1>
    <h1 className={`${Prata1.className} text-white text-2xl md:text-4xl`}>Calvin Klein</h1>
</div>

    ) 

}
