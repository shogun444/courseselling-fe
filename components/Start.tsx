import { cn } from "@/lib/utils";
import { Answer, Subitle, Title } from "./FAQs";
import { Button } from "./ui/button";
import { Question } from "./Body";

export default function Start() {
  return (
    <div className="my-40  min-h-screen justify-items-center text-center">
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

      <div className="flex-col my-40 bg-neutral-200 rounded-2xl p-5 text-left  w-200">
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

        <div className="flex items-end">
          <Answer className="tracking-tighter font-medium text-xs font-sans">
            © 2025 Kresna. All rights reserved.
          </Answer>
          <div>
            <div className="ml-50">
              <Question className="text-neutral-400 font-bold ">
                AI moves fast.
              </Question>
              <Question className="font-bold">Stay ahead with Kresna.</Question>
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
          </div>{" "}
        </div>
      </div>
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
