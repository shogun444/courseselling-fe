"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const nav = ["Home", "Features", "Compare", "Reviews", "FAQ"];

  return (
    <nav className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="inline-flex items-center justify-center rounded-full border border-neutral-300 bg-white p-3 text-cyan-950 shadow-sm md:hidden"
        aria-expanded={open}
        aria-label="Toggle navigation"
      >
        <span className="sr-only">Toggle navigation</span>
        <span
          className={`block h-0.5 w-6 bg-current transition duration-200 ${
            open ? "translate-y-1 rotate-45" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-current transition duration-200 ${
            open ? "opacity-0" : "my-1"
          }`}
        />
        <span
          className={`block h-0.5 w-6 bg-current transition duration-200 ${
            open ? "-translate-y-1 -rotate-45" : ""
          }`}
        />
      </button>

      <div className="hidden md:flex flex-wrap justify-center gap-6">
        {nav.map((itm, idx) => (
          <span className="mr-6 text-cyan-950 font-semibold" key={idx}>
            {itm}
          </span>
        ))}
      </div>

      <div
        className={`absolute right-0 top-full z-20 mt-2 w-[min(90vw,240px)] rounded-3xl border border-neutral-200 bg-white p-4 shadow-xl transition-all duration-200 md:hidden ${
          open ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col gap-3">
          {nav.map((itm, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setOpen(false)}
              className="text-left text-cyan-950 font-semibold"
            >
              {itm}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
