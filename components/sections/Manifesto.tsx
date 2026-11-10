"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { site } from "@/content/site";

const words = site.tagline.split(" ");

function Word({
  children,
  progress,
  index,
}: {
  children: string;
  progress: MotionValue<number>;
  index: number;
}) {
  // Each word lights up over its own slice of the scroll.
  const start = index / words.length;
  const opacity = useTransform(progress, [start, start + 2 / words.length], [0.2, 1]);
  return <motion.span style={{ opacity }}>{children} </motion.span>;
}

/** The tagline, read at scroll speed: words light up as they pass. */
export function Manifesto() {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.5"],
  });

  return (
    <section className="px-6 py-section md:px-10">
      <p
        ref={ref}
        className="max-w-[22ch] font-display text-[clamp(1.75rem,4.6vw,4rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-ink"
      >
        {reduced
          ? site.tagline
          : words.map((word, i) => (
              <Word key={i} progress={scrollYProgress} index={i}>
                {word}
              </Word>
            ))}
      </p>
    </section>
  );
}
