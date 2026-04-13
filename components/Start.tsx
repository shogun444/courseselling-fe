import { cn } from "@/lib/utils";
import { Answer, Subitle, Title } from "./FAQs";
import { Button } from "./ui/button";
import { Question } from "./Body";
import Logo from "./logo1";
import Image from "next/image";

export default function Start() {
  return (
    <div className="py-25 justify-items-center text-center min-h-screen">
      <div>
        <Subitle>Get Started!</Subitle>
        <Title>
          Build skills that <br /> get you hired
        </Title>
        <Label className="text-neutral-400 tracking-tight text-md my-7 ">
          Spend less time browsing. More time learning skills that pay.
        </Label>
      </div>

      <Button>Start Free Trial</Button>

      <div className="flex mt-50 items-center gap-5">
        <div className="relative   rounded-2xl   text-left w-90 min-h-112">
          <Image
            src="/bg.avif"
            alt="bg"
            fill
            className="object-cover rounded-2xl"
          />

          <div className="absolute inset-0 z-10 flex p-8">
            <div className="flex-col   gap-8">
              <div className="flex text-left items-center">
                <Logo />
                <h1 className="text-white text-3xl font-semibold">
                  Skilltrade
                </h1>
              </div>
              <Question className="text-neutral-100 font-bold pt-48">
                Smarter sales automation,
              </Question>
              <Question className="text-neutral-300 font-bold">
                powered by AI.
              </Question>
              <Subitle className="text-neutral-50 pt-10">
                Stay in touch!
              </Subitle>
            </div>
          </div>
        </div>
        <div className="flex-col  bg-neutral-200 rounded-2xl p-5 text-left h-112  w-200">
          <div className="flex ">
            <div>
              <Subitle>Navigation </Subitle>
              <Label>Testimonials</Label>
              <Label>FAQ</Label>
              <Label>How it works</Label>
              <Label>Pricing</Label>
              <Label>Features</Label>
              <Label>Changelog</Label>
            </div>
            <div className="ml-10">
              <Subitle>Company </Subitle>
              <Label>About</Label>
              <Label>Framer templates</Label>
              <Label>Privacy Policy</Label>
              <Label>Terms and Condition</Label>
              <Label>Contact Us</Label>
              <Label>Blog</Label>
            </div>
          </div>

          <div className="flex items-end ">
            <Answer className="tracking-tighter font-medium text-xs font-sans">
              © 2026 SkillTrade. All rights reserved.
            </Answer>
            <div>
              <div className="ml-50">
                <Question className="text-neutral-400 font-bold ">
                  AI moves fast.
                </Question>
                <Question className="font-bold">
                  Stay ahead with SkillTrade.
                </Question>
                <div className="relative my-4">
                  <input
                    type="text"
                    className="bg-white p-4 outline-none focus-visible:ring-1 focus-visible:ring-neutral-700 duration-200 w-80 font-medium rounded-2xl text-[16px]"
                    placeholder="Enter email address"
                  />
                  <Button className="absolute text-md  tracking-normal py-6 shadow-input -translate-x-28 translate-y-1">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className=" flex-nowrap tracking-tighter font-sans -translate-y-27 text-[330px]  font-bold bg-clip-text bg-linear-to-r text-transparent from-neutral-200 to-neutral-300">
        SkillTrade
      </h1>
    </div>
  );
}

export function Label({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        `text-md my-2 font-display font-semibold flex items-center justify-between`,
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Footer() {
  return <></>;
}
