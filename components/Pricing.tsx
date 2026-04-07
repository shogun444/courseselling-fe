import { useState } from "react";
import { Question } from "./Body";
import { Answer, Subitle, Title } from "./FAQs";
import { Curvy } from "./Hero";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export default function Pricing() {
  const [click, setClick] = useState(false);
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <Subitle>Pricing & Plans</Subitle>
        <Title>Plans that grow with you</Title>

        <div className="flex items-center my-7">
          <Question className="text-neutral-400 tracking-tight text-xl font-bold">
            Monthly
          </Question>
          <div
            onClick={() => setClick((prev) => !prev)}
            className="p-1 w-10 shadow-input h-6 bg-neutral-200 rounded-2xl mx-2"
          >
            <div
              className={`bg-blue-600 shadow-input transition-all duration-200 h-4 w-4 rounded-md ${click == true ? "mx-px" : "ml-4"}`}
            ></div>
          </div>
          <Question className="text-neutral-400 tracking-tight text-xl font-bold">
            Annualy
          </Question>
        </div>

        <div className="flex items-center">
          <Card>
            <Question className="font-bold">Starter </Question>
            <Answer className="tracking-tighter text-md">
              {" "}
              For scaling teams
            </Answer>
            <div className="flex">
              <Title> $29 </Title>{" "}
              <Answer className="tracking-tighter text-md mt-6">/mo</Answer>
            </div>
            <div className="border border-t-neutral-400 border-neutral-100 mt-3">
              <Features className="pt-2">
                <Name>CRM, email, and calendar</Name>
              </Features>
              <Features>
                <Name>Automate lead follow-ups</Name>
              </Features>
              <Features>
                <Name>Real-time pipeline tracking</Name>
              </Features>
              <Features>
                <Name>AI-assisted sales</Name>
              </Features>
              <Features>
                <Name>Simple setup, no code required</Name>
              </Features>
            </div>

            <div className="flex justify-center">
              <Button className="px-16  py-6 mt-4 text-md">
                Choose Starter
              </Button>
            </div>
          </Card>

          <div className=" border-3 border-blue-500 z-10 rounded-3xl relative bg-linear-to-br from-blue-400 to-blue-500 p-2 ring-1 ring-blue-600 ring-offset-1 shadow-xl shadow-blue-300">
            <Card className="mx-0">
              <Question className="font-bold">Pro </Question>
              <Answer className="tracking-tighter text-md">
                For growing teams
              </Answer>
              <div className="flex">
                <Title> $59</Title>
                <Answer className="tracking-tighter text-md mt-6">/mo</Answer>
              </div>
              <div className="border border-t-neutral-400 border-neutral-100 mt-3">
                <Features className="pt-2">
                  <Name>CRM, email, and calendar</Name>
                </Features>
                <Features>
                  <Name>Automate lead follow-ups</Name>
                </Features>
                <Features>
                  <Name>Real-time pipeline tracking</Name>
                </Features>
                <Features>
                  <Name>AI-assisted sales</Name>
                </Features>
                <Features>
                  <Name>Simple setup, no code required</Name>
                </Features>
              </div>

              <div className="flex justify-center">
                <Button className="px-16  py-6 mt-4 text-md">Choose Pro</Button>
              </div>
            </Card>
          </div>
          <Card>
            <Question className="font-bold ">Enterprise </Question>
            <Answer className="tracking-tighter  text-md">
              For large business
            </Answer>
            <Question className="font-semibold  font-sans text-3xl mt-6 ">
              {" "}
              Contact Us
            </Question>
            <div className="border border-t-neutral-400 border-neutral-100 mt-4">
              {" "}
              <Features className="pt-2">
                <Name>Everything in Pro</Name>
              </Features>
              <Features>
                <Name>Unlimited team seats</Name>
              </Features>
              <Features>
                <Name>Dedicated success manager</Name>
              </Features>
              <Features>
                <Name>Custom API integrations</Name>
              </Features>
              <Features>
                <Name>Advanced security & compliance</Name>
              </Features>
            </div>

            <div className="flex justify-center">
              <Button className="px-16  py-6 mt-4 text-md">
                Choose Enterprise
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        `rounded-3xl border border-neutral-200 shadow-2xl p-5 mx-6 w-80 h-105 bg-neutral-100`,
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Features({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        `flex items-center  text-neutral-500 space-x-1 my-2`,
        className,
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-check-icon lucide-check"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
      {children}
    </div>
  );
}
export function Name({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn(`font-sans  tracking-tight  text-md `, className)}>
      {children}
    </div>
  );
}
