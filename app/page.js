import Image from "next/image";

export default function Home() {
  return (
    <div className=" min-h-[110vh] bg-cover bg-[url('/images/background/loginbg.jpg')] w-full">
      <div className=" text-[#050505]  text-[3.4rem] text-center w-[35rem] absolute 
      flex top-[42%] left-[50%] -translate-x-1/2 -translate-y-1/2 font-gel 
      font-bold">Your One stop for your Special Days</div>
    </div>
  );
}
