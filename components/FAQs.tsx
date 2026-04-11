import { cn } from "@/lib/utils";

export default function FAQs() {
  return (
    <div className="my-40 min-h-screen flex justify-between">
      <div>
        <Subitle>FAQ</Subitle>
        <Title>
          Frequently <br />
          Asked Questions
        </Title>
      </div>

      <div
        className="flex-col space-y-4
      "
      >
        <Both>
          <Questions>How do payments work?</Questions>
          <Answer>
            We offer flexible subscription plans billed monthly or annually.
            Payments are processed securely, and you can upgrade, downgrade, or
            cancel anytime from your dashboard.
          </Answer>
        </Both>
        <Both>
          <Questions>Can I access courses offline?</Questions>
          <Answer>
            Yes. Pro members can download courses for offline viewing through
            our mobile apps on iOS and Android, so you can learn without an
            internet connection
          </Answer>
        </Both>
        <Both>
          <Questions>Can I cancel my subscription anytime?</Questions>
          <Answer>
            Yes. You can cancel anytime from your account settings. Your access
            will remain active until the end of your current billing cycle.
          </Answer>
        </Both>
        <Both>
          <Questions>Do you offer student discounts?</Questions>
          <Answer>
            We offer flexible subscription plans billed monthly or annually.
            Payments are processed securely, and you can upgrade, downgrade, or
            cancel anytime from your dashboard.
          </Answer>
        </Both>
      </div>
    </div>
  );
}

export function Subitle({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn(`text-xl font-caveat text-neutral-400`,className)}>{children}</div>;
}
export function Title({
  children,
  className,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className="text-5xl font-bold font-display">{children}</div>;
}

export function Questions({
  className,
  children,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="text-2xl font-display font-semibold flex items-center justify-between">
      {children}
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
        className="lucide lucide-plus-icon lucide-plus"
      >
        <path d="M5 12h14" />
        <path d="M12 5v14" />
      </svg>
    </div>
  );
}
export function Answer({
  className,
  children,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn(`my-2 font-medium tracking-tight text-md font-sans  text-neutral-500`, className)}>
      {children}
    </div>
  );
}

export function Both({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl p-4 w-150 shadow-input bg-neutral-100">
      {children}
    </div>
  );
}
