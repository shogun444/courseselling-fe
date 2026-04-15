"use client";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function FAQs() {
  const questions = [
    {
      id: 1,
      question: "How do payments work?",
      answers:
        "We offer flexible subscription plans billed monthly or annually. Payments are processed securely, and you can upgrade, downgrade, or cancel anytime from your dashboard.",
    },
    {
      id: 2,
      question: "Can I access courses offline?",
      answers:
        "Yes. Pro members can download courses for offline viewing through our mobile apps on iOS and Android.",
    },
    {
      id: 3,
      question: "Do you offer student discounts?",
      answers:
        "Yes. You can cancel anytime from your account settings. Your access will remain active until the end of your current billing cycle.",
    },
    {
      id: 4,
      question: "Can I cancel my subscription anytime?",
      answers:
        "We offer flexible subscription plans billed monthly or annually. Payments are processed securely, and you can upgrade, downgrade, or cancel anytime from your dashboard.",
    },
    {
      id: 5,
      question: "Do I need any technical skills to set it up?",
      answers:
        "Not at all. Kresna has a simple, no-code setup. You can connect your tools and launch automations in minutes.",
    },
    {
      id: 6,
      question: "Can we customize Kresna to fit our workflow?",
      answers:
        "Yes. Kresna is built to adapt — you can tailor automations, AI suggestions, and reporting to match your exact process.",
    },
  ];

  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <div className="my-40 flex justify-between">
      <div>
        <Subitle>FAQ</Subitle>
        <Title>
          Frequently <br />
          Asked Questions
        </Title>
      </div>

      <div className="flex-col space-y-4">
        {questions.map((itm) => (
          <Both key={itm.id}>
            <Questions
              className="cursor-pointer"
              open={openId === itm.id}
              onClick={() => setOpenId(openId === itm.id ? null : itm.id)}
            >
              {itm.question}
            </Questions>

            <Answer
              className={cn(
                "overflow-hidden transition-all duration-300 ease-out",
                openId === itm.id
                  ? "max-h-72 opacity-100 mt-4"
                  : "max-h-0 opacity-70",
              )}
            >
              {itm.answers}
            </Answer>
          </Both>
        ))}
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
  return (
    <div className={cn(`text-xl font-caveat text-neutral-400`, className)}>
      {children}
    </div>
  );
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
  onClick,
  open,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  open?: boolean;
}) {
  return (
    <div
      onClick={onClick}
      className={cn(
        `text-lg px-2 font-display font-semibold flex items-center justify-between`,
        className,
      )}
    >
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
        className={cn(
          "transition-transform duration-300 ease-out  p-1 rounded-sm",
          open ? "rotate-45" : "rotate-0",
        )}
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
    <div
      className={cn(
        `my-2 font-medium tracking-tight text-md font-sans text-neutral-500`,
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Both({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl p-4 w-150 shadow-sm bg-neutral-100">
      {children}
    </div>
  );
}
