import Hero from "@/components/Hero";
import Logo from "@/components/logo";
import Navbar from "@/components/navbar";


export default function Home() {
  return (
    <div className=" mt-3 w-[calc(98%)] mx-auto rounded-3xl bg-linear-to-r from-violet-100  via-transparent to-pink-50  h-screen ">
      <div className="fixed w-full flex justify-between py-8 px-15  ">
        <div className="flex items-center">
          <Logo />
          <span className="text-lg text-purple-950 font-semibold ">
            SkillTrade
          </span>
        </div>
        <div>
          <Navbar />
        </div>
      </div>
      <Hero />
    </div>
  );
}
