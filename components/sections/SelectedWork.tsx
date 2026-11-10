"use client";

import { useEffect, useRef, type FocusEvent } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ProjectCard } from "@/components/ProjectCard";
import { featuredProjects } from "@/content/projects";

// The horizontal reel only runs where there is room and motion is welcome.
// Everywhere else the same markup is a plain vertical list.
const REEL = "(min-width: 768px) and (prefers-reduced-motion: no-preference)";

export function SelectedWork() {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const reel = useRef<MediaQueryList | null>(null);

  useEffect(() => {
    reel.current = window.matchMedia(REEL);
  }, []);

  const overflow = () =>
    track.current ? track.current.scrollWidth - window.innerWidth : 0;

  // Vertical scroll through the tall section drives the track sideways.
  const { scrollYProgress } = useScroll({
    target: section,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, (v) =>
    reel.current?.matches ? -v * overflow() : 0,
  );

  // Keyboard users tab into cards that are still off-screen: scroll the page
  // to the point where that card is in view.
  function reveal(e: FocusEvent<HTMLDivElement>) {
    const el = section.current;
    const card = (e.target as HTMLElement).closest<HTMLElement>("[data-card]");
    if (!el || !card || !reel.current?.matches || overflow() <= 0) return;
    const progress = Math.min(1, card.offsetLeft / overflow());
    const top = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: top + progress * (el.offsetHeight - window.innerHeight) });
  }

  return (
    <section
      id="work"
      ref={section}
      className="py-section md:motion-safe:h-[420vh] md:motion-safe:py-0"
    >
      <div className="md:motion-safe:sticky md:motion-safe:top-0 md:motion-safe:flex md:motion-safe:h-screen md:motion-safe:items-center md:motion-safe:overflow-clip">
        <motion.div
          ref={track}
          style={{ x }}
          onFocus={reveal}
          className="flex flex-col gap-5 px-6 md:px-10 md:motion-safe:w-max md:motion-safe:flex-row md:motion-safe:items-stretch md:motion-safe:gap-8"
        >
          <header className="flex flex-col justify-center pb-6 md:motion-safe:w-[42vw] md:motion-safe:pb-0">
            <h2 className="font-display text-display font-bold uppercase text-ink">
              Selected <span className="text-outline">work</span>
            </h2>
            <p className="mt-6 max-w-[34ch] text-body-lg text-ink-soft">
              A few things I&apos;ve designed and built. Each one runs problem,
              build, outcome.
            </p>
          </header>

          {featuredProjects.map((project) => (
            <div
              key={project.slug}
              data-card
              className="md:motion-safe:w-[min(56vw,46rem)] md:motion-safe:shrink-0"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
