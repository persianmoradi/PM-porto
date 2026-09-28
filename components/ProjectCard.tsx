"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { MouseEvent } from "react";
import type { Project } from "@/content/projects";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

function hostname(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export function ProjectCard({
  project,
  index,
  large = false,
}: {
  project: Project;
  index: number;
  large?: boolean;
}) {
  // Feed the cursor position to the .spotlight gradient.
  function track(e: MouseEvent<HTMLElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  }

  return (
    <motion.article
      variants={fadeUp}
      onMouseMove={track}
      className={cn(
        "group glass-panel spotlight ring-gradient relative isolate flex h-full flex-col overflow-hidden rounded-2xl p-6 md:p-8",
        "transition-transform duration-500 ease-expo-out hover:-translate-y-1",
        large && "md:flex-row md:items-start md:gap-10",
      )}
    >
      <div className={cn("flex w-full items-start justify-between gap-4", large && "md:w-auto md:flex-col md:justify-start")}>
        <span className="font-mono text-label text-ink-faint">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="font-mono text-micro uppercase text-ink-faint">
          {project.year}
        </span>
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
        <h3
          className={cn(
            "mt-6 font-display font-semibold text-ink",
            large ? "text-h2 md:mt-0" : "text-h3",
          )}
        >
          {/* Stretched link: the whole card is clickable, but this stays a
              single, properly-labelled link for assistive tech. */}
          <Link
            href={`/work/${project.slug}`}
            className="after:absolute after:inset-0 after:content-[''] hover:text-accent transition-colors"
          >
            {project.title}
          </Link>
        </h3>

        <p className="mt-3 max-w-measure text-body text-ink-soft">
          {project.summary}
        </p>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-line px-3 py-1 font-mono text-micro uppercase text-ink-soft"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.links?.live && (
          <div className="mt-4 flex items-center gap-1.5 border-t border-line pt-4">
            <span
              aria-hidden
              className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600 dark:bg-emerald-400"
            />
            {/* z-10 lifts this above the stretched link's overlay. */}
            <Link
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 inline-flex items-center gap-1 font-mono text-micro text-ink-soft underline-offset-4 transition-colors hover:text-accent hover:underline"
            >
              {hostname(project.links.live)}
              <ArrowUpRight size={12} />
            </Link>
          </div>
        )}
      </div>
    </motion.article>
  );
}
