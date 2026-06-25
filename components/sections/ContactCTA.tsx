"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section, Eyebrow } from "@/components/Section";
import { site } from "@/content/site";
import { fadeUp, inView } from "@/lib/motion";

export function ContactCTA() {
  return (
    <Section id="contact" className="border-t border-line">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={inView}
        className="flex flex-col items-start gap-8"
      >
        <Eyebrow>Contact</Eyebrow>
        <h2 className="max-w-[18ch] font-display text-display font-bold text-ink">
          Let&apos;s build something worth shipping.
        </h2>
        <p className="max-w-measure text-body-lg text-ink-soft">
          I&apos;m open to Front-end, Full-stack roles — full-time or alongside my studies — and the
          occasional freelance project. The fastest way to reach me is email.
        </p>
        <Link
          href={`mailto:${site.email}`}
          className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-body font-medium text-white transition-colors hover:bg-accent-hover"
        >
          {site.email} <ArrowUpRight size={18} />
        </Link>
      </motion.div>
    </Section>
  );
}
