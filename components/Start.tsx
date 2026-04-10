import { cn } from "@/lib/utils";
import { Subitle, Title } from "./FAQs";
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

      <div className="bg-neutral-200 rounded-2xl p-5 text-left gap-10 flex h-70 w-full">
        
        <div> </div>
        <div >
          <Subitle>Navigation </Subitle>
          <Label>Testimonials</Label>
          <Label>FAQ</Label>
          <Label>How it works</Label>
          <Label>Pricing</Label>
          <Label>Features</Label>
          <Label>Changelog</Label>
        </div>
        <div>
          <Subitle>Company </Subitle>
          <Label>About</Label>
          <Label>Framer templates</Label>
          <Label>Privacy Policy</Label>
          <Label>Terms and Condition</Label>
          <Label>Contact Us</Label>
          <Label>Blog</Label>
        </div>

        <div>
          <Question className="text-neutral-400 font-bold ">AI moves fast. </Question>
          <Question className="font-bold"> Stay ahead with Kresna.</Question>

          <div>
            <input type="text" className="bg-white p-4 text-neutral-800 w-60 tracking-tight  rounded-2xl text-md" placeholder="Enter email address" />
          </div>
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
