import Image from "next/image";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <div className="mx-auto md:w-2/4 mt-20 ">
      <h1 className="mx-auto text-[#493a54]  text-5xl md:text-7xl  font-primary font-semibold   text-center">
        Boring work made simple with AI
      </h1>

      <h3 className="text-center tracking-tight text-xl mx-auto pt-9 md:w-150 font-semibold text-neutral-500 ">
        Flowline plugs into your existing workflows, so you can ditch the boring
        stuff and focus on growth.
      </h3>

      <div className="flex justify-center gap-8 pt-10 mb-10">
        <Button size={"lg"}>Get Started for Free</Button>
        <Button
          className="rounded-4xl bg-neutral-50 border-2  border-neutral-100"
          size={"lg"}
          variant={"outline"}
        >
          Learn how
        </Button>
      </div>

      <div className=" p-1.5 bg-white mx-auto rounded-t-xl h-71 w-250 -translate-x-35 ">
        <div className="p-4 bg-violet-50  mx-auto rounded-t-md relative h-63">
          <div className=" bg-white  mx-auto rounded-t-md relative h-59">
            <Image
              className="absolute inset-0 rounded-lg p-[3px]   "
              height={208}
              width={2000}
              alt="hero"
              src={"/hero.avif"}
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
