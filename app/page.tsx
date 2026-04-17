import Body from "@/components/Body";
import Hero from "@/components/Hero";
import Logo from "@/components/logo";
import Navbar from "@/components/navbar";
import Start from "@/components/Start";

export default function Home() {
  return (
    <div className="mt-3 min-h-screen w-full overflow-hidden mx-auto rounded-3xl bg-linear-to-r from-neutral-200 via-transparent to-zinc-100">
      <div className="max-w-6xl mx-auto flex flex-col gap-6 md:flex-row md:items-center md:justify-between py-8 px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <Logo />
          <span className="text-cyan-950 text-xl font-semibold">
            SkillTrade
          </span>
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          <Navbar />
        </div>
      </div>
      <Hero />
      <Body />
    </div>
  );
}
