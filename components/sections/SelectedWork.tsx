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
      >
        <Eyebrow>Selected work</Eyebrow>
        <h2 className="mt-4 max-w-[20ch] font-display text-h1 font-bold text-ink">
          A few things I&apos;ve designed and built.
        </h2>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={inView}
        className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {featuredProjects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </motion.div>
    </Section>
  );
}
