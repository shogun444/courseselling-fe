import { Question } from "./Body";
import { Subitle, Title } from "./FAQs";
import { Button } from "./ui/button";

export default function Start() {
  return (
    <div className="my-40 justify-items-center text-center">
      <div >
        <Subitle>Get Started!</Subitle>
        <Title>
          Build skills that <br /> get you hired
        </Title>
        <Question className="text-neutral-400 tracking-tight text-md my-7 ">
          Spend less time browsing. More time learning skills that pay.
        </Question>
      </div>

      <Button>Start Free Trial</Button>
    </div>
  );
}
