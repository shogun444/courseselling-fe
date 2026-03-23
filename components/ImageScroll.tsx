"use client";
import Image from "next/image";
import {
  easeIn,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";
import { Button } from "./ui/button";

export default function ImageScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(`ValueCHanges : ${latest}`);
  });
  const translateText = useTransform(scrollYProgress, [0, 1], [-500, 700]);

  return (
    <div
      ref={ref}
      className=" flex-col justify-end mx-auto md:w-2/4 relative pt-50"
    >
      <motion.div
        style={{
          y: translateText,
        }}
      >
        <h1 className="mx-auto text-[#493a54] text-5xl md:text-7xl font-primary font-semibold text-center">
          Boring work made simple with AI
        </h1>

        <h3 className="text-center tracking-tight text-xl mx-auto pt-9 md:w-150 font-semibold text-neutral-500">
          Flowline plugs into your existing workflows, so you can ditch the
          boring stuff and focus on growth.
        </h3>

        <div className="flex justify-center gap-8 pt-10 mb-10">
          <Button size={"lg"}>Get Started for Free</Button>
          <Button
            className="rounded-4xl bg-neutral-50 border-2 border-neutral-100"
            size={"lg"}
            variant={"outline"}
          >
            Learn how
          </Button>
        </div>
      </motion.div>

      <motion.div className="p-2 bg-white mx-auto rounded-t-3xl h-79 w-250 -translate-x-35">
        <div className="p-6 bg-[#f7f3fc] mx-auto rounded-t-xl h-78">
          <div className="bg-white mx-auto rounded-t-md h-79">
            <Image
              className="mask-b-from-65% inset-0 rounded-lg p-0.5"
              height={2000}
              width={2000}
              alt="hero"
              src={"/hero.avif"}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
