import { Button } from "./ui/button";

export default function Hero(){
  return(<div className="mx-auto w-170 ">
  
  <h1 className="mx-auto text-[#493a54] text-7xl  font-semibold   text-center">Boring work made simple with AI</h1>

  <h3 className="text-center mx-auto pt-9 w-120 font-semibold text-neutral-600 ">Flowline plugs into your existing workflows, so you can ditch the boring stuff and focus on growth.</h3>

<div className="flex justify-center gap-8 pt-10">

    <Button size={'lg'}>Get Started for Free</Button>
    <Button className="text-[#9880ab] rounded-4xl bg-neutral-50 border-2  border-neutral-100" size={'lg'} variant={'outline'}>Learn how</Button>
</div>

  </div>)
}