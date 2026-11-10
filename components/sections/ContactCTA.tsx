"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";
import { fadeUp, stagger, inView } from "@/lib/motion";

const elsewhere = [
  { href: site.links.github, label: "GitHub" },
  { href: site.links.linkedin, label: "LinkedIn" },
];

/** The finish: the sculpture rises from below here, at full heat. */
export function ContactCTA() {
  return (
    <section
      id="contact"
      className="flex min-h-[100svh] flex-col justify-center px-6 py-section md:px-10"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={inView}
        className="mx-auto w-full max-w-content"
      >
        <motion.h2
          variants={fadeUp}
          className="max-w-[14ch] font-display text-display font-bold uppercase text-ink"
        >
          Let&apos;s build something{" "}
          <span className="text-outline">worth shipping.</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mt-8 max-w-[58ch] text-body-lg text-ink-soft"
        >
          I&apos;m a web developer keen on AI product development and front-end,
          open to roles and internships, full-time or alongside my studies, plus
          the occasional freelance project. The fastest way to reach me is email.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4"
        >
          <Link
            href={`mailto:${site.email}`}
            className="btn btn-primary max-w-full px-7 py-3.5 text-body"
          >
            <span className="truncate">{site.email}</span>
            <ArrowUpRight size={18} className="shrink-0" />
          </Link>

          <div className="flex items-center gap-5">
            {elsewhere.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-small text-ink underline-offset-4 transition-colors hover:text-accent hover:underline"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
