
import Hero from "@/components/Hero";
import Logo from "@/components/logo";
import Navbar from "@/components/navbar";
import SVG from "@/components/Svg";
import Image from "next/image";


export default function Home() {
  return (
  <div className=" m-5   w-[95vw] mx-auto rounded-3xl bg-linear-to-r from-violet-100 via-transparent to-pink-50 h-screen ">
    <div className="flex justify-between py-8 px-15  ">
      <div className="flex"> 
        <Logo/>
      <span className="text-md text-purple-950 font-semibold ">
        SkillTrade
      </span> </div>
 <div>    <Navbar/> </div>

       </div>
<Hero/>

<SVG/>
    </div>
  );
}
