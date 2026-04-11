"use client";
import { cn } from "@/lib/utils";
import FAQs, { Title, Subitle, Answer, Questions } from "./FAQs";
import { Curvy, Subheading } from "./Hero";
import { useState } from "react";
import Image from "next/image";
import Pricing from "./Pricing";
import Start from "./Start";

export default function Body() {
  const [show, setShow] = useState(true);
  return (
    <div className="my-40 ">
      <Subitle> Tools</Subitle>

      <div className="flex justify-between">
        <Title>
          Master knowledge in <br /> your place.
        </Title>
        <Answer className="w-150">
          We stripped away the noise to build a platform that focuses on what
          truly matters: your growth and the quality of content.
        </Answer>
      </div>

      <div className="w-full h-100 my-16 gap-8 grid grid-cols-5">
        <div className="col-span-3 p-5  rounded-3xl shadow-input bg-linear-to-r bg-neutral-100 via-neutral-100 to-blue-50">
          <Image
            className="object-contain h-70 overflow-hidden w-full"
            src="/ne.webp"
            height="1000"
            width="1000"
            alt="sad"
          ></Image>
          <Question>Smooth Cinema-Grade Player</Question>
          <Answer>
            Experience learning like a premier screening. Our custom player
            supports 4K, interactive timestamps, and zero-latency playback
            supports 4K, interactive timestamps, and zero-latency playback
            across all regions.
          </Answer>
        </div>
        <div className=" col-span-2 p-5 rounded-3xl shadow-input bg-linear-to-r bg-neutral-100 via-neutral-100 to-netral-50">
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
            <Container className="rounded-xl  w-60 h-50  -translate-y-15 translate-x-8">
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

          <Question>Save & Track</Question>
          <Answer>
            Intelligent bookmarks that remember exactly where you left off in
            every video.
          </Answer>
        </div>
      </div>
      <div className="w-full h-100 my-10 gap-8 grid grid-cols-4">
        <div className="col-span-2 p-5 rounded-3xl shadow-input bg-linear-to-r bg-neutral-100 via-neutral-100 to-neutral-50 ">
          <Container className="rounded-lg p-4 bg-neutral-100">
            <Titles title={"AI that saves you hours of learning"}>
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
                className="lucide lucide-loader-pinwheel-icon lucide-loader-pinwheel"
              >
                <path d="M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0" />
                <path d="M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6" />
                <path d="M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6" />
                <circle cx="12" cy="12" r="10" />
              </svg>
            </Titles>
            <Subtitle>
              No more wasting time get straight to what actually matters.
            </Subtitle>
          </Container>

          <Container className="ml-49 p-4 rounded-lg bg-neutral-100 border-2 border-cyan-500">
            <Titles title={"Smarter Learning, Faster Results"}>
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
                className="lucide lucide-activity-icon lucide-activity"
              >
                <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
              </svg>
            </Titles>
            <Subtitle>
              Perfect for quick revision, last-minute prep, or efficient
              learning.
            </Subtitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="rgb(0, 183, 219)"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-cyan-500  translate-x-75 translate-y-2 lucide lucide-mouse-pointer2-icon lucide-mouse-pointer-2"
            >
              <path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z" />
            </svg>
          </Container>
          <Question> AI Summary</Question>

          <Answer>
            Instantly turns your content into clear, concise insights your users
            can grasp in seconds
          </Answer>
        </div>
        <div className="col-span-2 p-5    rounded-3xl shadow-input bg-linear-to-r bg-neutral-100 via-neutral-100 to-purple-50">
          <Image src="/1.avif" height="1000" width="1000" alt="sad"></Image>
          <Question>Cross-device sync</Question>
          <Answer>
            Start on your desktop, continue on your morning commute via iPad or
            Mobile. Seamless transitions across all platforms.
          </Answer>
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
        {" "}
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
        `text-2xl font-display font-semibold flex items-center justify-between`,
        className,
      )}
    >
      {children}
    </div>
  );
}
