import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { projects, getProject } from "@/content/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      type: "article",
    },
  };
}

export default function CaseStudy({ params }: { params: { slug: string } }) {
  const index = projects.findIndex((p) => p.slug === params.slug);
  if (index === -1) notFound();

  const project = projects[index];
  // Wrap around so the reader always has somewhere to go next.
  const next = projects[(index + 1) % projects.length];

  const sections = [
    { label: "Problem", body: project.problem },
    { label: "Build", body: project.build },
    { label: "Outcome", body: project.outcome },
  ];

  return (
    <article className="mx-auto max-w-content px-6 py-section md:px-10">
      <Link
        href="/#work"
        className="inline-flex items-center gap-2 text-small text-ink-soft transition-colors hover:text-ink"
      >
        <ArrowLeft size={16} /> Back to work
      </Link>

      <header className="mt-10 border-b border-line pb-12">
        <div className="flex flex-wrap items-center gap-3">
          <p className="font-mono text-label uppercase tracking-[0.08em] text-accent">
            {project.year}
          </p>
          {project.links?.live && (
            <span className="inline-flex items-center gap-1.5 font-mono text-micro uppercase text-ink-faint">
              <span
                aria-hidden
                className="h-1.5 w-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400"
              />
              Live
            </span>
          )}
        </div>

        <h1 className="mt-4 max-w-[18ch] font-display text-display font-bold text-ink">
          {project.title}
        </h1>
        <p className="mt-6 max-w-measure text-body-lg text-ink-soft">
          {project.summary}
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-line bg-surface/40 px-3 py-1 font-mono text-micro uppercase text-ink-soft backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          {project.links?.live && (
            <Link
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="glass glass-accent inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-small font-medium"
            >
              Visit live <ArrowUpRight size={15} />
            </Link>
          )}
          {project.links?.repo && (
            <Link
              href={project.links.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-small font-medium text-ink"
            >
              View code <ArrowUpRight size={15} />
            </Link>
          )}
        </div>
      </header>

      <div className="mt-14 grid gap-10 md:grid-cols-[12rem_1fr]">
        {sections.map((s) => (
          <div key={s.label} className="contents">
            <h2 className="font-mono text-label uppercase tracking-[0.08em] text-ink-faint md:pt-1">
              {s.label}
            </h2>
            <p className="max-w-measure text-body-lg text-ink">{s.body}</p>
          </div>
        ))}
      </div>

      {/* No dead ends: always hand the reader the next case study. */}
      <nav className="mt-20 border-t border-line pt-8">
        <Link
          href={`/work/${next.slug}`}
          className="group glass-panel ring-gradient relative flex flex-col gap-2 rounded-2xl p-6 transition-transform duration-500 ease-expo-out hover:-translate-y-1 md:flex-row md:items-center md:justify-between md:p-8"
        >
          <div>
            <span className="font-mono text-micro uppercase text-ink-faint">
              Next case study
            </span>
            <p className="mt-1.5 font-display text-h3 font-semibold text-ink transition-colors group-hover:text-accent">
              {next.title}
            </p>
          </div>
          <ArrowRight
            size={20}
            className="shrink-0 text-ink-soft transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent"
          />
        </Link>
      </nav>
    </article>
  );
}
