"use client";

import { easeInOut, motion } from "motion/react";

export default function BottomLine() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 610 43"
        className="h-12 w-1/2 absolute  inset-x-0 -translate-x-8 translate-y-16"
      >
        <path
          d="M0 40.5h104.287a15 15 0 0 0 10.606-4.393l30.714-30.714A14.999 14.999 0 0 1 156.213 1h375.074c3.978 0 7.793 1.58 10.606 4.393l31.714 31.714a15 15 0 0 0 10.606 4.393H610"
          stroke="var(--token-8b591b40-8dc5-4f66-a27d-23ecdeed17e2, rgb(220, 220, 220))"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
          fill="transparent"
        ></path>
        <motion.path
          initial={{
            strokeDashoffset: 130,
          }}
          animate={{
            strokeDashoffset: 0,
          }}
          transition={{
            repeat: Infinity,
            ease: easeInOut,
            duration: 3,
          }}
          strokeDasharray="30 100"
          d="M0 40.5h104.287a15 15 0 0 0 10.606-4.393l30.714-30.714A14.999 14.999 0 0 1 156.213 1h375.074c3.978 0 7.793 1.58 10.606 4.393l31.714 31.714a15 15 0 0 0 10.606 4.393H610"
          stroke="var(--color-line)"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
          fill="transparent"
          pathLength="100"
          opacity="1"
          strokeDashoffset="35"
        ></motion.path>
      </svg>
    </>
  );
}
export function TopLine() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 608 30"
        className="h-12 w-1/2 absolute  inset-x-0 -translate-x-8 -translate-y-15"
      >
        <path
          d="M0 1.5h69.184a15 15 0 0 1 10.73 4.518l18.038 18.464A15 15 0 0 0 108.682 29h295.913a15 15 0 0 0 10.676-4.463l18.824-19.074A15 15 0 0 1 444.771 1H607.5"
          stroke="var(--token-8b591b40-8dc5-4f66-a27d-23ecdeed17e2, rgb(220, 220, 220))"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
          fill="transparent"
        ></path>
        <motion.path
          initial={{
            strokeDashoffset: 135,
          }}
          animate={{
            strokeDashoffset: 0,
          }}
          transition={{
            repeat: Infinity,
            ease: easeInOut,
            duration: 3,
          }}
          strokeDasharray="35 100"
          d="M0 1.5h69.184a15 15 0 0 1 10.73 4.518l18.038 18.464A15 15 0 0 0 108.682 29h295.913a15 15 0 0 0 10.676-4.463l18.824-19.074A15 15 0 0 1 444.771 1H607.5"
          stroke="var(--color-line)"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
          fill="transparent"
          pathLength="100"
          opacity="1"
          strokeDashoffset="100"
        ></motion.path>
      </svg>
    </>
  );
}

export function Middle() {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 608 2"
        className="h-1 w-1/2 absolute inset-x-0 -translate-x-8 "
      >
        <path
          d="M0 1h608"
          stroke="var(--token-8b591b40-8dc5-4f66-a27d-23ecdeed17e2, rgb(220, 220, 220))"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
          fill="transparent"
        ></path>
        <motion.path
          initial={{
            strokeDashoffset: 135,
          }}
          animate={{
            strokeDashoffset: 0,
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: easeInOut,
          }}
          strokeDasharray="35 100"
          d="M0 1h608"
          stroke="var(--color-line)"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
          fill="transparent"
          pathLength="100"
          opacity="1"
          strokeDashoffset="10.73200000000043"
        ></motion.path>
      </svg>
    </>
  );
}
