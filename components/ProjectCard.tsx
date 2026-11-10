import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/projects";

function hostname(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group panel relative flex h-full flex-col rounded-2xl p-6 transition-colors duration-300 hover:border-accent md:p-10">
      <div className="flex items-baseline justify-between gap-4">
        <ul className="flex flex-wrap gap-x-3 gap-y-1 text-small text-ink-soft">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <span className="font-mono text-small tabular-nums text-ink-faint">
          {project.year}
        </span>
      </div>

      <h3 className="mt-10 font-display text-[clamp(2.25rem,5vw,4.5rem)] font-bold leading-none tracking-[-0.03em] text-ink">
        {/* Stretched link: the whole card is clickable, but this stays a
            single, properly-labelled link for assistive tech. */}
        <Link
          href={`/work/${project.slug}`}
          className="transition-colors after:absolute after:inset-0 after:content-[''] group-hover:text-accent"
        >
          {project.title}
        </Link>
      </h3>

      <p className="mt-5 max-w-[52ch] text-body text-ink-soft">
        {project.summary}
      </p>

      <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-10">
        <span className="inline-flex items-center gap-2 text-small font-medium text-ink">
          Read case study
          <ArrowRight
            size={16}
            className="transition-transform duration-300 ease-expo-out group-hover:translate-x-1"
          />
        </span>

        {project.links?.live && (
          // z-10 lifts this above the stretched link's overlay.
          <Link
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 inline-flex items-center gap-1.5 text-small text-ink-soft underline-offset-4 transition-colors hover:text-accent hover:underline"
          >
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-poppy" />
            {hostname(project.links.live)}
            <ArrowUpRight size={14} />
          </Link>
        )}
      </div>
    </article>
  );
}
