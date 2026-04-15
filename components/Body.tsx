"use client";
import { cn } from "@/lib/utils";
import FAQs, { Title, Subitle, Answer } from "./FAQs";

import { useState } from "react";
import Image from "next/image";
import Pricing, { Card, Features } from "./Pricing";
import Start from "./Start";
import { Curvy } from "./Hero";
import BottomLine, { Middle, TopLine } from "./lines";

export default function Body() {
  const logos = [
    { src: "/batavia.png" },
    { src: "/block.png" },
    { src: "/Obima.png" },
    { src: "/sadewa.png" },
    { src: "/Velox.png" },
    { src: "/nakula.png" },
  ];
  const [show, setShow] = useState(true);
  return (
    <div className="max-w-6xl mx-auto min-h-screen p-2 ">
      <Subitle className="text-center mt-20 mb-7">Trusted by</Subitle>
      <div className="flex flex-wrap mb-40 justify-center gap-5 w-250 mx-auto">
        {logos.map((itm, idx) => (
          <div
            className="bg-neutral-200 hover:bg-neutral-300 hover:shadow-sm cursor-pointer transition-all duration-150 p-14 flex justify-center items-center   text-neutral-400 rounded-md h-30  w-68"
            key={idx}
          >
            <Image
              key={idx}
              src={itm.src}
              height={1000}
              width={1000}
              alt="1"
            ></Image>
          </div>
        ))}
      </div>

      <Subitle> The Bottleneck in Revenue Teams</Subitle>

      <div className="flex justify-between items-end mb-14">
        <Title className="flex">
          Revenue teams are <br /> drowning in manual work.
        </Title>
        <Answer className="w-130">
          Kresna fixes that by automating the manual parts of your process. Your
          workflows stay clean, connected, and effortless.
        </Answer>
      </div>

      <div className="flex relative items-center justify-between mb-40 ">
        <TopLine />
        <Middle />
        <BottomLine />
        <Card className="h-40 rounded-3xl absolute w-40 translate-x-30    flex justify-center  items-center  border border-neutral-300 shadow-neutral-500 shadow-xs ">
          <Image
            className="p-1.5 shadow-neutral-600 shadow-lg rounded-4xl absolute w-fit h-fit "
            src={"/3d.avif"}
            alt="3d"
            height={1000}
            width="1000"
          ></Image>
        </Card>

        <Card className="w-131 translate-x-150 overflow-hidden bg-[linear-gradient(125deg,rgba(0,0,0,1)_10%,rgba(0,0,0,0.4)_45%),linear-gradient(120deg,rgba(16,46,97,1),rgba(16,46,97,1))]">
          <Curvy className="text-neutral-400">After Skilltrade</Curvy>
          <Question className="text-white text-4xl">
            Automated and effortless
          </Question>
          <Features className="text-neutral-200 font-sans font-semibold gap-2 mt-40">
            Calls, notes, and updates are logged automatically.
          </Features>
          <Features className="text-neutral-200 font-sans font-semibold gap-2">
            Forecasts stay accurate and always up to date.{" "}
          </Features>
          <Features className="text-neutral-200 font-sans font-semibold gap-2">
            Deals move through stages with instant AI approvals.
          </Features>
          <Features className="text-neutral-200 font-sans font-semibold gap-2">
            Reports and dashboards sync themselves in real time.
          </Features>
        </Card>
      </div>

      <Subitle> Tools</Subitle>

      <div className="flex justify-between items-end mb-14">
        <Title>
          Master knowledge in <br /> your place.
        </Title>
        <Answer className="w-130 ">
          We stripped away the noise to build a platform that focuses on what
          truly matters your growth and the quality of content.
        </Answer>
      </div>

      <div className="w-full h-100 my-16 gap-6 grid grid-cols-5 ">
        <div className="col-span-3 p-5 relative rounded-3xl shadow-input bg-linear-to-r  from-neutral-200 to-neutral-100">
          <Question>Auto Engage</Question>
          <Answer>Turn conversation into conversion instantly with AI.</Answer>

          <AutoEngage src="/girl1.jpg">
            <div className="">
              <Answer className="text-neutral-800">Kumala Sari</Answer>
              <div className="flex-col ">
                <Long />
                <Short />
              </div>
            </div>
          </AutoEngage>
          <AutoEngage className="translate-x-15" src="/girl2.jpg">
            <div className="">
              <Answer className="text-neutral-800">Karina Larasathi</Answer>
              <div className="flex-col ">
                <Longer />
                <Short />
              </div>
            </div>
          </AutoEngage>
          <Members />
          <div className=""></div>
        </div>
        <div className=" col-span-2 p-5 rounded-3xl shadow-input bg-linear-to-r from-neutral-200   to-neutral-100">
          <Question>Save & Track</Question>
          <Answer>
            Intelligent bookmarks that remember exactly where you left off in
            every video.
          </Answer>
          <div
            onClick={() => setShow((prev) => !prev)}
            className="w-10 text-neutral-400  bg-neutral-300 cursor-pointer h-10 rounded-full flex justify-center items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-bookmark-icon lucide-bookmark"
            >
              <path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z" />
            </svg>
          </div>

          {show && (
            <Container className="rounded-xl  w-60 h-48  -translate-y-15 translate-x-8">
              <div className="flex justify-between items-center px-4 pt-2">
                <Question className="text-lg font-bold">BookMark</Question>
                <Question className="text-neutral-400 text-xs">3 new</Question>
              </div>

              <Data
                className="bg-blue-600"
                name="React hooks"
                time="12:27 am"
                key={1}
              ></Data>
              <Data
                className="bg-gray-700"
                name="Promises in JS"
                time="1:27 am"
                key={3}
              ></Data>
              <Data name="Debouncing" time="12:27 pm" key={2}></Data>

              <Question className="text-neutral-400 text-xs flex justify-center pt-2 border-t-2 border-neutral-300">
                View All Bookmarks
              </Question>
            </Container>
          )}
        </div>
      </div>
      <div className="w-full h-100 my-16 gap-6 grid grid-cols-4">
        <div className="col-span-2 px-5 pt-5 rounded-3xl shadow-input bg-linear-to-r from-neutral-200  to-neutral-100 ">
          <Question> Revenue Forecasting</Question>
          <Answer>Know your numbers before anyone else does.</Answer>

          <Image
            src={"/revenue.avif"}
            height={1000}
            width={1000}
            alt="dash"
          ></Image>
        </div>
        <div className="col-span-2 px-5 pt-5    rounded-3xl shadow-input bg-linear-to-r from-neutral-200 via-neutral-100 to-blue-50 overflow-hidden">
          <Question>Deal Intelligence</Question>
          <Answer>
            Spot which opportunities are heating up before the quarter ends.
          </Answer>
          <Image
          className="scale-105 translate-y-35"
            src="/dashboard.avif"
            height="1000"
            width="1000"
            alt="sad"
          ></Image>
        </div>
      </div>
      <FAQs />
      <Pricing />
      <Start />
    </div>
  );
}

function Data({
  time,
  name,
  className,
}: {
  className?: string;
  time: string;
  name: string;
}) {
  return (
    <div className="flex px-4 items-center justify-between">
      <div className="flex items-center gap-1 my-2">
        <div
          className={cn(`w-7 h-7 rounded-full bg-amber-600`, className)}
        ></div>

        <Question className="text-sm">{name}</Question>
      </div>

      <Question className="text-sm ">{time}</Question>
    </div>
  );
}

export function AutoEngage({
  children,
  className,
  src,
}: {
  className?: string;
  children: React.ReactNode;
  src: string;
}) {
  return (
    <div
      className={cn(
        `w-60 h-33 flex-col  justify-items-center gap-3 p-4  m-4 text-left rounded-2xl  shadow-lg shadow-neutral-300 bg-neutral-50`,
        className,
      )}
    >
      <Image
        className="rounded-full object-cover object-top h-9 w-9 mr-1"
        src={src}
        alt="src"
        height={1000}
        width={1000}
      ></Image>
      {children}
    </div>
  );
}

export function Long() {
  return <div className="h-2 w-18 m-2 bg-neutral-300"></div>;
}

export function Longer() {
  return <div className="h-2 w-22 m-2 bg-neutral-300"></div>;
}
export function Short() {
  return <div className="h-2 w-12 m-2 bg-neutral-300"></div>;
}
export function Medium() {
  return <div className="h-2 w-14 m-2 bg-neutral-300"></div>;
}

export function Container({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        `w-90 h-33  m-4 text-center  shadow-input bg-neutral-200`,
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Titles({
  title,
  children,
}: {
  title?: String;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-5">
      <div className="bg-neutral-200 rounded-md p-2 text-neutral-400">
        {children}
      </div>
      <Answer className="font-semibold text-md text-neutral-950 tracking-tight">
        {title}
      </Answer>
    </div>
  );
}

export function Subtitle({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Answer className="text-sm  text-neutral-600 tracking-tight">
        {children}
      </Answer>
    </div>
  );
}

export function Question({
  className,
  children,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        `text-2xl font-display tracking-tight font-semibold flex items-center justify-between`,
        className,
      )}
    >
      {children}
    </div>
  );
}
export function Members() {
  return (
    <div className="w-55 h-60 rounded-2xl absolute inset-0 translate-x-105 translate-y-25 bg-neutral-200  p-1  border border-neutral-50">
      <div className="bg-neutral-50 text-center shadow-2xl rounded-2xl p-2 w-full h-full">
        <Answer>Members</Answer>

        <div className="pl-5">
          <div className="flex   items-center">
            <Image
              className="h-8 w-8 rounded-full object-cover"
              src={"/girl1.jpg"}
              height={1000}
              width={1000}
              alt="girl1"
            ></Image>
            <Answer className="ml-3 text-neutral-800">Kumala Sari</Answer>
          </div>
          <div className="flex items-center">
            <Image
              className="h-8 w-8 rounded-full object-cover object-top"
              src={"/man2.jpg"}
              height={1000}
              width={1000}
              alt="girl1"
            ></Image>
            <Answer className="ml-3 text-neutral-800">Mark Kumoro</Answer>
          </div>
          <div className="flex items-center">
            <Image
              className="h-8 w-8 rounded-full object-cover object-top"
              src={"/man1.jpg"}
              height={1000}
              width={1000}
              alt="girl1"
            ></Image>{" "}
            <Answer className="ml-3 text-neutral-800">Joe Karapathy</Answer>
          </div>
          <div className="flex items-center">
            <Image
              className="h-8 w-8 rounded-full object-cover object-top"
              src={"/girl2.jpg"}
              height={1000}
              width={1000}
              alt="girl1"
            ></Image>{" "}
            <Answer className="ml-3 text-neutral-800">Marina Lasarita</Answer>
          </div>
        </div>
      </div>
    </div>
  );
}
