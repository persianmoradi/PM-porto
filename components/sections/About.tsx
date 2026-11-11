"use client";

import { motion } from "framer-motion";
import { Portrait } from "@/components/Portrait";
import { Section } from "@/components/Section";
import { site } from "@/content/site";
import { fadeUp, stagger, inView } from "@/lib/motion";

function StackRow({
  label,
  items,
  muted = false,
}: {
  label: string;
  items: string[];
  muted?: boolean;
}) {
  return (
    <div className="grid gap-2 border-b border-line py-4 last:border-b-0 sm:grid-cols-[10rem_1fr] sm:gap-6">
      <dt className="text-small font-medium text-accent">{label}</dt>
      <dd>
        <ul className="flex flex-wrap gap-2">
          {items.map((item) => (
            <li
              key={item}
              className={`rounded-full border border-line px-3 py-1 text-small ${
                muted ? "text-ink-soft" : "text-ink"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </dd>
    </div>
  );
}

export function About() {
  return (
    <Section id="about">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={inView}
        className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16"
      >
        <motion.div variants={fadeUp}>
          <h2 className="font-display text-display font-bold uppercase text-ink">
            About
          </h2>
          <p className="mt-6 max-w-[26ch] text-body-lg text-ink-soft">
            {site.role}. {site.location}.
          </p>

          {/* The cut-out is 4:5, so it fills the frame exactly. */}
          <div className="panel relative mt-10 aspect-[4/5] max-w-sm overflow-hidden rounded-2xl">
            <Portrait sizes="(max-width: 768px) 90vw, 384px" position="object-bottom" />
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="panel rounded-2xl p-6 md:p-10">
          <div className="space-y-5">
            {site.about.map((p, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "max-w-measure text-body-lg text-ink"
                    : "max-w-measure text-body text-ink-soft"
                }
              >
                {p}
              </p>
            ))}
          </div>

          <dl className="mt-10 border-t border-line">
            {site.skillGroups.map((group) => (
              <StackRow key={group.label} label={group.label} items={group.items} />
            ))}
            <StackRow label="Currently learning" items={site.learning} muted />
          </dl>
        </motion.div>
      </motion.div>
    </Section>
  );
}
