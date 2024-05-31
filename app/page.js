import Image from "next/image";

export default function Home() {
  return (
    <div className=" min-h-[110vh] relative bg-cover bg-[url('/images/background/loginbg.jpg')] w-full">
      <div className="absolute h-full w-full backdrop-blur-sm"></div>
      <div className=" text-pink-600  text-[3.5rem] text-center w-[35rem] absolute 
      flex top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 font-scr 
      font-bold">Your One stop for your Special Days</div>
    </div>
  );
}
