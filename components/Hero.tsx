import Image from "next/image";
import { Button } from "./ui/button";

import { cn } from "@/lib/utils";
import Logo from "./logo1";
import Arrow from "./Arrow";

export default function Hero() {
  return (
    <div className="flex flex-col gap-10 max-w-6xl mx-auto px-4 sm:px-6 md:flex-row md:items-center">
      <div className="w-full md:w-1/2">
        <CTA>Elevate Your Knowledge</CTA>

        <Heading className="text-4xl md:text-7xl">
          Learn Anything From Videos That
        </Heading>
        <Heading1 className="text-4xl md:text-7xl">Actually Matter</Heading1>

        <Subheading>
          A curated high-end learning gallery for the modern scholar. Access
          premium insights with our flexible free+paid hybrid model. No fluff,
          just pure editorial excellence.
        </Subheading>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Button className="w-full sm:w-auto">Start Free Trial</Button>
          <Button className="w-full sm:w-auto" variant={"outline"}>
            Take a Demo
          </Button>
        </div>

        <div className="flex flex-wrap items-center gap-2 mt-3 text-neutral-400">
          <Arrow /> <Curvy>1-month free trial. No credit card required.</Curvy>
        </div>
      </div>

      <div className="w-full md:w-[420px] py-5 px-5 relative overflow-hidden bg-neutral-100 shadow-input rounded-3xl">
        <div className="bg-blue-500 shadow-blue-200 shadow-md h-58 w-full max-w-[360px] rounded-2xl p-0.5 mx-auto">
          <div className="h-57 border border-blue-200 w-full max-w-[344px] p-3 m-px bg-linear-to-b from-blue-300 to-blue-500 rounded-2xl">
            <Logo />
            <Comp className="pt-10 text-neutral-200">100+</Comp>
            <Comp className="opacity-65">
              prospects followed up automatically.
            </Comp>
          </div>
          <Image
            className="absolute w-full max-w-[480px] h-auto -translate-y-20 translate-x-5"
            src={"/nice.png"}
            height={1000}
            width={1000}
            alt="cor"
          ></Image>
        </div>
      </div>
    </div>
  );
}

export function Comp({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        `font-medium font-sans text-2xl tracking-tight text-neutral-100`,
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Curvy({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        `tracking-tight text-2xl font-medium font-caveat`,
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Subheading({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-medium font-sans my-8 text-xl tracking-tight text-neutral-500">
      {children}
    </div>
  );
}
export function Heading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        `font-bold font-display text-7xl my-4 tracking-tight`,
        className,
      )}
    >
      {children}
    </div>
  );
}
export function Heading1({ children ,className }: { children: React.ReactNode ,className ?: string}) {
  return (
    <div className="font-bold font-display text-7xl  italic text-cyan-900">
      {children}
    </div>
  );
}
export function CTA({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex  items-center my-8 gap-2 bg-blue-50 w-fit p-1 px-2 rounded-3xl font-medium text-sm border-cyan-900 border text-cyan-900 tracking-tight ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-palette-icon lucide-palette"
      >
        <path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z" />
        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
        <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
        <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
        <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
      </svg>
      {children}
    </div>
  );
}

