"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/projects";
import { fadeUp } from "@/lib/motion";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article variants={fadeUp} className="h-full">
      <Link
        href={`/work/${project.slug}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent/40 md:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <span className="font-mono text-label text-ink-soft">
            {String(index + 1).padStart(2, "0")}
          </span>
          <ArrowUpRight
            size={20}
            className="text-ink-soft transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
          />
        </div>

        <h3 className="mt-6 font-display text-h3 font-semibold text-ink">
          {project.title}
        </h3>
        <p className="mt-3 max-w-measure text-body text-ink-soft">
          {project.summary}
        </p>

        <div className="mt-auto flex flex-wrap gap-2 pt-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-line px-3 py-1 font-mono text-[0.6875rem] uppercase tracking-wide text-ink-soft"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </motion.article>
  );
}
