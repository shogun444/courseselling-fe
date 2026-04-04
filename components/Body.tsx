import FAQs, { Title, Subitle, Answer } from "./FAQs";

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
          <Question>Save & Track</Question>
          <Answer>
            Intelligent bookmarks that remember exactly where you left off in
            every video.
          </Answer>
        </div>
      </div>
      <div className="w-full h-100 my-7 gap-8 grid grid-cols-4">
        <div className="col-span-2 p-5 rounded-3xl shadow-input bg-neutral-200 ">
          <Question>Course direct watch</Question>
          <Answer>
            Start learning immediately without page reloads. Our 'Direct-Stream'
            technology ensures 4K clarity anywhere.
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

export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl shadow-input bg-neutral-200">{children}</div>
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
    <div className="text-2xl font-display font-semibold flex items-center justify-between">
      {children}
    </div>
  );
}
