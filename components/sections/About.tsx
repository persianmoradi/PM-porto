"use client";

import { motion } from "framer-motion";
import { Section, Eyebrow } from "@/components/Section";
import { site } from "@/content/site";
import { fadeUp, stagger, inView } from "@/lib/motion";

export function About() {
  return (
    <Section id="about" className="border-t border-line">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={inView}
        className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16"
      >
        <motion.div variants={fadeUp}>
          <Eyebrow>About</Eyebrow>
          <h2 className="mt-4 font-display text-h1 font-bold text-ink">
            {site.location}.
          </h2>
          <p className="mt-6 max-w-[26ch] text-body text-ink-soft">
            {site.role}
          </p>
        </motion.div>

        <motion.div variants={fadeUp}>
          <div className="space-y-5">
            {site.about.map((p, i) => (
              <p key={i} className="max-w-measure text-body-lg text-ink-soft">
                {p}
              </p>
            ))}
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {site.skillGroups.map((group) => (
              <div key={group.label}>
                <h3 className="font-mono text-micro uppercase text-accent">
                  {group.label}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-line bg-surface/40 px-3 py-1 text-micro text-ink backdrop-blur-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-2 border-t border-line pt-6">
            <span className="font-mono text-micro uppercase text-ink-faint">
              Currently learning
            </span>
            <span className="text-micro text-ink-soft">
              {site.learning.join(" · ")}
            </span>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
