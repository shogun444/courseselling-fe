import Body from "@/components/Body";
import Hero from "@/components/Hero";
import Logo from "@/components/logo";
import Navbar from "@/components/navbar";
import Start from "@/components/Start";

export default function Home() {
  return (
    <div className=" mt-3  min-h-screen w-[calc(98%)] overflow-hidden mx-auto rounded-3xl bg-linear-to-r from-neutral-200  via-transparent to-zinc-100  ">
      <div className=" max-w-6xl mx-auto  flex justify-between py-8 ">
        <div className="flex  items-center">
          <Logo />
          <span className=" text-cyan-950 text-xl font-semibold ">
            SkillTrade
          </span>
        </div>
        <div>
          <Navbar />
        </div>
      </div>
    <Hero/>
    <Body/>
      
    </div>
  );
}
