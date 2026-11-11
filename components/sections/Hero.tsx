import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { LocalClock } from "@/components/LocalClock";
import { site } from "@/content/site";
import { projects } from "@/content/projects";

const liveCount = projects.filter((p) => p.links?.live).length;
const [firstName, lastName] = site.name.split(" ");

/**
 * Server component on purpose: the reveal is CSS, so the wordmark paints from
 * the SSR HTML rather than waiting on hydration or WebGL. The sculpture
 * (components/Sculpture.tsx) sits behind, between the two lines.
 */
export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-between px-6 pb-8 pt-24 md:px-10 md:pb-10">
      <div
        className="animate-fade flex flex-wrap items-center justify-between gap-x-6 gap-y-2"
        style={{ ["--d" as string]: "500ms" }}
      >
        <LocalClock />
        <p className="text-small text-ink-soft">{site.status}</p>
      </div>

      <h1 className="font-display text-mega font-bold uppercase text-ink">
        <span className="line-mask">
          <span className="animate-rise">{firstName}</span>
        </span>
        <span className="line-mask text-right">
          <span
            className="animate-rise text-outline"
            style={{ ["--d" as string]: "120ms" }}
          >
            {lastName}
          </span>
        </span>
      </h1>

      <div
        className="animate-fade flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        style={{ ["--d" as string]: "650ms" }}
      >
        <div>
          <p className="max-w-[28ch] font-display text-h2 font-semibold text-ink">
            Web developer building interactive 3D websites and AI-native products.
          </p>
          <p className="mt-3 max-w-[46ch] text-small text-ink-soft">
            {liveCount} products shipped live. Interned at Heyra, a Copenhagen
            AI consultancy.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link href="#work" className="btn btn-primary px-6 py-3 text-small">
            See selected work <ArrowDownRight size={16} />
          </Link>
          <Link
            href={`mailto:${site.email}`}
            className="btn px-6 py-3 text-small"
          >
            Hire me <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
