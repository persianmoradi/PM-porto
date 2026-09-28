import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Portrait } from "@/components/Portrait";
import { LocalClock } from "@/components/LocalClock";
import { site } from "@/content/site";
import { projects } from "@/content/projects";

const liveCount = projects.filter((p) => p.links?.live).length;

const proof = [
  { value: String(liveCount), label: "products shipped live" },
  { value: "Heyra", label: "AI consultancy internship" },
  { value: "2027", label: "Web Dev, EK Copenhagen" },
];

/**
 * Server component on purpose: the reveal is CSS, so the headline is painted
 * from the SSR HTML rather than waiting for framer-motion to hydrate. Keeps
 * the LCP element off the JS critical path.
 */
export function Hero() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-content px-6 pb-16 pt-16 md:px-10 md:pb-24 md:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
          {/* ---- Copy ---- */}
          <div>
            <div className="animate-rise flex flex-wrap items-center gap-3">
              <LocalClock />
              <p className="font-mono text-micro uppercase text-ink-soft">
                {site.status}
              </p>
            </div>

            <h1
              className="animate-rise mt-7 max-w-[18ch] font-display text-display font-bold text-ink"
              style={{ ["--d" as string]: "80ms" }}
            >
              Web developer building{" "}
              <span className="text-gradient">AI products</span> with front-end
              craft.
            </h1>

            <p
              className="animate-rise mt-7 max-w-measure text-body-lg text-ink-soft"
              style={{ ["--d" as string]: "160ms" }}
            >
              {site.tagline}
            </p>

            <div
              className="animate-rise mt-9 flex flex-wrap items-center gap-3"
              style={{ ["--d" as string]: "240ms" }}
            >
              <Link
                href="#work"
                className="glass glass-accent inline-flex items-center gap-2 rounded-full px-6 py-3 text-small font-medium"
              >
                See selected work <ArrowDownRight size={16} />
              </Link>
              <Link
                href={`mailto:${site.email}`}
                className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-small font-medium text-ink"
              >
                Hire me <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          {/* ---- Portrait ---- */}
          <div
            className="animate-rise relative mx-auto w-full max-w-[22rem] lg:mx-0"
            style={{ ["--d" as string]: "320ms" }}
          >
            {/* Accent bloom behind the frame, so the glass frame has colour
                to sit against. */}
            <div
              aria-hidden
              className="absolute -inset-8 -z-10 rounded-full opacity-45 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle at 35% 25%, var(--aura-1), transparent 62%)",
              }}
            />
            <div className="glass-panel relative aspect-[4/5] overflow-hidden rounded-[1.75rem] p-2">
              <div className="relative h-full w-full overflow-hidden rounded-[1.35rem]">
                {/* The source image is already 4:5, matching this frame, so
                    object-cover fills it exactly — no position nudge needed. */}
                <Portrait
                  sizes="(max-width: 1024px) 80vw, 352px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* ---- Proof strip ---- */}
        <dl
          className="animate-rise mt-16 grid grid-cols-1 divide-y divide-line overflow-hidden rounded-2xl border border-line sm:grid-cols-3 sm:divide-x sm:divide-y-0"
          style={{ ["--d" as string]: "400ms" }}
        >
          {proof.map((p) => (
            <div key={p.label} className="bg-surface/30 px-5 py-5 backdrop-blur-md">
              <dt className="font-display text-h3 font-semibold text-ink">
                {p.value}
              </dt>
              <dd className="mt-1 font-mono text-micro uppercase text-ink-soft">
                {p.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Signature moment: a Persian-blue horizon line that draws itself in. */}
      <div
        aria-hidden
        className="animate-draw-x mx-auto h-px max-w-content bg-gradient-to-r from-accent via-accent/40 to-transparent"
        style={{ ["--d" as string]: "500ms" }}
      />
    </section>
  );
}
