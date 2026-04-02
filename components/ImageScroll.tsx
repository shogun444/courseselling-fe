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
  // Parallax: image should move up on scroll, text/buttons move in the opposite direction
  const imageTranslate = useTransform(scrollYProgress, [0, 1], [0, -220]);
  const textTranslate = useTransform(scrollYProgress, [0, 1], [0, 320]);

  return (
    <div
      ref={ref}
      className=" flex-col justify-end space-y-15  mx-auto md:w-2/4"
    >
      <motion.div style={{ y: textTranslate }}>
        <h1 className="font-display mx-auto text-[#493a54] text-5xl md:text-7xl font-semibold text-center">
          Boring work made simple with AI
        </h1>

        <h3 className="text-center  font-primary  text-lg mx-auto pt-9 font-medium text-neutral-500">
          Flowline plugs into your existing workflows, so you can ditch the
          boring stuff and focus on growth.
        </h3>

        <div className="flex justify-center mt-5 space-x-3">
          {" "}
          <Button variant={"default"} size={"lg"}>
            Get Started for Free
          </Button>
          <Button
            className=""
            size={"lg"}
            variant={"outline"}
          >
            Learn how
          </Button>{" "}
        </div>
      </motion.div>
      <motion.div
        style={{ y: imageTranslate }}
        className="p-2 bg-white mx-auto rounded-t-3xl h-79 w-250 translate-y-60 -translate-x-35 "
      >
        <div className="p-6 bg-[#f7f3fc] mx-auto relative rounded-t-xl h-77">
          <div className="bg-white mx-auto rounded-t-md h-79 relative z-0">
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
