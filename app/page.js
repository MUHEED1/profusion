import Image from "next/image";

export default function Home() {
  return (
    <div className=" min-h-[110vh] bg-cover bg-[url('/images/resort-in-jodhpur.jpg')] w-full">
      <div className="text-[#00000]  text-[3.5rem] absolute flex top-[42%] left-[50%] -translate-x-1/2 -translate-y-1/2 font-scr font-bold">Your One stop for your Special Days</div>
    </div>
  );
}
