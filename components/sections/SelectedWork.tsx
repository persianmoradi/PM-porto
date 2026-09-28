"use client";

import { motion } from "framer-motion";
import { Section, Eyebrow } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { featuredProjects } from "@/content/projects";
import { stagger, fadeUp, inView } from "@/lib/motion";

export function SelectedWork() {
  return (
    <Section id="work">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={inView}
        className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
      >
        <div>
          <Eyebrow>Selected work</Eyebrow>
          <h2 className="mt-4 max-w-[20ch] font-display text-h1 font-bold text-ink">
            A few things I&apos;ve designed and built.
          </h2>
        </div>
        <p className="max-w-[28ch] font-mono text-micro uppercase text-ink-faint md:text-right">
          Problem → build → outcome
        </p>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={inView}
        className="mt-12 grid gap-5 sm:grid-cols-2"
      >
        {featuredProjects.map((project, i) => (
          <div key={project.slug} className={i === 0 ? "sm:col-span-2" : undefined}>
            <ProjectCard project={project} index={i} large={i === 0} />
          </div>
        ))}
      </motion.div>
    </Section>
  );
}
