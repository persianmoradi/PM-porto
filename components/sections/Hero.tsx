"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import { Portrait } from "@/components/Portrait";
import { site } from "@/content/site";
import { easeExpo } from "@/lib/motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeExpo } },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-content px-6 pb-section pt-20 md:px-10 md:pt-28">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="mb-6 flex items-center gap-3">
            <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-line bg-surface">
              <Portrait sizes="44px" position="object-[center_25%]" />
            </span>
            <p className="font-mono text-label uppercase tracking-[0.08em] text-ink-soft">
              {site.status}
            </p>
          </motion.div>

          <motion.h1
            variants={item}
            className="max-w-[16ch] font-display text-display font-bold text-ink"
          >
            Front-end, Full-stack &amp; Design Engineer.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 max-w-measure text-body-lg text-ink-soft"
          >
            {site.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-small font-medium text-white transition-colors hover:bg-accent-hover"
            >
              See selected work <ArrowDownRight size={16} />
            </Link>
            <Link
              href={`mailto:${site.email}`}
              className="inline-flex items-center rounded-full border border-line px-6 py-3 text-small font-medium text-ink transition-colors hover:bg-surface"
            >
              Hire me
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Signature moment: a quiet Persian-blue horizon line that scales in. */}
      <motion.div
        aria-hidden
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.1, ease: easeExpo, delay: 0.5 }}
        className="mx-auto h-px max-w-content origin-left bg-gradient-to-r from-accent via-accent/40 to-transparent"
      />
    </section>
  );
}
