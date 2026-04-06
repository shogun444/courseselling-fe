import { cn } from "@/lib/utils";
import FAQs, { Title, Subitle, Answer } from "./FAQs";
import { Curvy, Subheading } from "./Hero";

export default function Body() {
  return (
    <div className="my-40">
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

      <div className="w-full h-100 my-7 gap-8 grid grid-cols-5">
        <div className="col-span-3 p-5 rounded-3xl shadow-input bg-neutral-200">
          <Question>Smooth Cinema-Grade Player</Question>
          <Answer>
            Experience learning like a premier screening. Our custom player
            supports 4K, interactive timestamps, and zero-latency playback
            across all regions.
          </Answer>
        </div>
        <div className="col-span-2 p-5 rounded-3xl shadow-input bg-neutral-200">
          <Container className="w-fit">
            <Titles ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-bookmark-icon lucide-bookmark"><path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"/></svg></Titles>
            
          </Container>
          <Question>Save & Track</Question>
          <Answer>
            Intelligent bookmarks that remember exactly where you left off in
            every video.
          </Answer>
        </div>
      </div>
      <div className="w-full h-100 my-7 gap-8 grid grid-cols-4">
        <div className="col-span-2 p-5 rounded-3xl shadow-input bg-neutral-200 ">
          
          <Container> 
            <Titles title={'AI that saves you hours of learning'}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-loader-pinwheel-icon lucide-loader-pinwheel"><path d="M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0"/><path d="M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6"/><path d="M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6"/><circle cx="12" cy="12" r="10"/></svg></Titles>
            <Subtitle>No more wasting time get straight to what actually matters.</Subtitle>
          </Container>

           <Container className="ml-49">
            <Titles title={'Smarter Learning, Faster Results'}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-activity-icon lucide-activity"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"/></svg>
            </Titles>
             <Subtitle>Perfect for quick revision, last-minute prep, or efficient learning.</Subtitle>
          </Container>
          <Question> AI Summary</Question>
         
          <Answer>
          Instantly turns your content into clear, concise insights your users can grasp in seconds
          </Answer>
        </div>
        <div className="col-span-2 p-5 rounded-3xl shadow-input bg-neutral-200">
          <Question>Cross-device sync</Question>
          <Answer>
            Start on your desktop, continue on your morning commute via iPad or
            Mobile. Seamless transitions across all platforms.
          </Answer>
        </div>
      </div>

      <FAQs />
    </div>
  );
}




export function Container({ children , className}: {className ?: string,children : React.ReactNode}) {
  return (
    <div className={cn(`w-90 p-3 m-4 text-center  rounded-md shadow-input bg-neutral-200`,className)}>
      
      {children}
    </div>
  );
}

export function Titles({ title,children}: {title ?: String,children:React.ReactNode}){
    return(<div className="flex items-center gap-5">
      <div className="bg-neutral-400 rounded-md p-2 text-neutral-200"> {children}</div>
<Answer className="font-semibold text-md text-neutral-950 tracking-tight">{title}</Answer>
    </div>)
  }

  export function Subtitle({ children}: {children:React.ReactNode}){
    return(<div >
<Answer className="text-sm  text-neutral-600 tracking-tight">{children}</Answer>
    </div>)
  }



export function Question({
  className,
  children,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="text-2xl font-display font-semibold flex items-center justify-between">
      {children}
    </div>
  );
}
