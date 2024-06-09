import Image from "next/image";
import Hero from "./components/hero";
import Detailscard from "./components/detailscard";
import Projectspage from "./components/projectspage";
import St0002 from "./components/st0002";
import Okay from "@/public/icons/okay";
import Rotating from "./components/rotating";
import Svg from "@/public/icons/svg";
import Marqueee from "./components/marquee";

export default function Home() {
  return (
    <div>
      <Okay />
      <Rotating />
      <St0002 />
      <Marqueee/>
      <Svg/>
      <Hero />
    </div>
  );
}
