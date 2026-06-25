import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
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
  return { title: project.title, description: project.summary };
}

export default function CaseStudy({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();

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

      <header className="mt-10 border-b border-line pb-10">
        <p className="font-mono text-label uppercase tracking-[0.08em] text-accent">
          {project.year}
        </p>
        <h1 className="mt-4 max-w-[18ch] font-display text-display font-bold text-ink">
          {project.title}
        </h1>
        <p className="mt-6 max-w-measure text-body-lg text-ink-soft">
          {project.summary}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          {project.links?.live && (
            <Link
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-small font-medium text-white hover:bg-accent-hover"
            >
              Visit live <ArrowUpRight size={15} />
            </Link>
          )}
          {project.links?.repo && (
            <Link
              href={project.links.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-small font-medium text-ink hover:bg-surface"
            >
              View code <ArrowUpRight size={15} />
            </Link>
          )}
        </div>
      </header>

      <div className="mt-12 grid gap-10 md:grid-cols-[12rem_1fr]">
        {sections.map((s) => (
          <div key={s.label} className="contents">
            <h2 className="font-mono text-label uppercase tracking-[0.08em] text-ink-soft md:pt-1">
              {s.label}
            </h2>
            <p className="max-w-measure text-body-lg text-ink">{s.body}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
