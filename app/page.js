import Image from "next/image";

export default function Home() {
  return (
    <div className=" min-h-[110vh] relative bg-cover bg-[url('/images/background/loginbg.jpg')] w-full">
      <div className="absolute h-full w-full backdrop-blur-sm"></div>
      <div className=" text-pink-600  leading-[7rem] text-[3.5rem] text-center w-[35rem] absolute 
      flex top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 font-scr 
      font-bold">Your One stop for your Special Days</div>
      <div>
      Studio S Weddingz
      WEDNARA
      Meragi Photography
      RVR PRO
      More Than Red
      Blink Event Photographers
      Flash Fusion Studios
      </div>
      <div className="pt-[10rem] font-semibold">
      <marquee >
      <div class="inline-block font-gel text-[2rem] text-pink-600 px-5">Catering</div>
    <div class="inline-block font-gel text-[2rem] text-pink-600 px-5">Venue</div>
    <div class="inline-block font-gel text-[2rem] text-pink-600 px-5">Cars & Travelling</div>
    <div class="inline-block font-gel text-[2rem] text-pink-600 px-5">Dresses</div>
    <div class="inline-block font-gel text-[2rem] text-pink-600 px-5">Invitation card</div>
    <div class="inline-block font-gel text-[2rem] text-pink-600 px-5">Decoration</div>
    <div class="inline-block font-gel text-[2rem] text-pink-600 px-5">Events</div>
    <div class="inline-block font-gel text-[2rem] text-pink-600 px-5">Baraat</div>
    <div class="inline-block font-gel text-[2rem] text-pink-600 px-5">Photography</div>
    <div class="inline-block font-gel text-[2rem] text-pink-600 px-5">Jewelry</div>
</marquee>

      </div>
    </div>
  );
}
