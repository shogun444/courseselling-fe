import Body from "@/components/Body";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ImageScroll from "@/components/ImageScroll";
import Logo from "@/components/logo";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className=" mt-3 px-25 w-[calc(98%)] mx-auto rounded-3xl bg-linear-to-r from-neutral-200  via-transparent to-zinc-100  min-h-screen ">
      <div className=" w-full flex justify-between py-8  ">
        <div className="flex  items-center">
          <Logo />
          <span className=" text-cyan-950 font-semibold ">SkillTrade</span>
        </div>
        <div>
          <Navbar />
        </div>
      </div>
      <Hero />
      <Body/>
    </div>
    
  );
}
