"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section, Eyebrow } from "@/components/Section";
import { site } from "@/content/site";
import { fadeUp, inView } from "@/lib/motion";

const elsewhere = [
  { href: site.links.github, label: "GitHub" },
  { href: site.links.linkedin, label: "LinkedIn" },
];

export function ContactCTA() {
  return (
    <Section id="contact" className="border-t border-line">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={inView}
        className="glass-panel relative isolate overflow-hidden rounded-3xl px-6 py-14 md:px-12 md:py-20"
      >
        {/* Accent bloom anchored bottom-right, so the panel's glass has
            something to refract and the CTA feels lit rather than flat. */}
        <div
          aria-hidden
          className="absolute -bottom-32 -right-24 -z-10 h-[28rem] w-[28rem] rounded-full opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, var(--aura-1), transparent 65%)",
          }}
        />

        <Eyebrow>Contact</Eyebrow>
        <h2 className="mt-5 max-w-[18ch] font-display text-display font-bold text-ink">
          Let&apos;s build something worth shipping.
        </h2>
        <p className="mt-6 max-w-measure text-body-lg text-ink-soft">
          I&apos;m a web developer keen on AI product development and front-end —
          open to roles and internships, full-time or alongside my studies, plus
          the occasional freelance project. The fastest way to reach me is email.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
          <Link
            href={`mailto:${site.email}`}
            className="glass glass-accent inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-body font-medium"
          >
            {site.email} <ArrowUpRight size={18} />
          </Link>

          <div className="flex items-center gap-5">
            {elsewhere.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-small text-ink-soft underline-offset-4 transition-colors hover:text-accent hover:underline"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
