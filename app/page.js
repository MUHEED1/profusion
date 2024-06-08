import Image from "next/image";
import Hero from "./components/hero";
import Detailscard from "./components/detailscard";
import Projectspage from "./components/projectspage";
import St0002 from "./components/st0002";
import Okay from "@/public/icons/okay";

export default function Home() {
  return (
    <div>
      <Okay/>
      <Hero />
    </div>
  );
}
