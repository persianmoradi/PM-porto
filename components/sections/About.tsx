"use client";

import { motion } from "framer-motion";
import { Section, Eyebrow } from "@/components/Section";
import { site } from "@/content/site";
import { Portrait } from "@/components/Portrait";
import { fadeUp, stagger, inView } from "@/lib/motion";

export function About() {
  return (
    <Section id="about" className="border-t border-line">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={inView}
        className="grid gap-12 md:grid-cols-[1fr_1.2fr]"
      >
        <motion.div variants={fadeUp}>
          <Eyebrow>About</Eyebrow>
          <h2 className="mt-4 font-display text-h1 font-bold text-ink">
            {site.location}.
          </h2>

          {site.portrait && (
            <div className="relative mt-8 aspect-[4/5] w-full max-w-[20rem] overflow-hidden rounded-2xl border border-line bg-surface">
              <Portrait sizes="(max-width: 768px) 80vw, 320px" position="object-top" />
            </div>
          )}
        </motion.div>

        <motion.div variants={fadeUp} className="space-y-5">
          {site.about.map((p, i) => (
            <p key={i} className="max-w-measure text-body-lg text-ink-soft">
              {p}
            </p>
          ))}

          <div className="flex flex-wrap gap-2 pt-4">
            {site.skills.map((s) => (
              <span
                key={s}
                className="rounded-full border border-line px-3 py-1 font-mono text-[0.6875rem] uppercase tracking-wide text-ink"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
