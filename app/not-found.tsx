import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-content flex-col items-start px-6 py-section md:px-10">
      <p className="font-mono text-label uppercase tracking-[0.08em] text-accent">
        404
      </p>
      <h1 className="mt-4 max-w-[20ch] font-display text-h1 font-bold text-ink">
        That page doesn&apos;t exist.
      </h1>
      <p className="mt-5 max-w-measure text-body-lg text-ink-soft">
        The link may be out of date. The work and contact details are all on the
        home page.
      </p>
      <Link
        href="/"
        className="glass glass-accent mt-9 inline-flex items-center gap-2 rounded-full px-6 py-3 text-small font-medium"
      >
        <ArrowLeft size={16} /> Back home
      </Link>
    </section>
  );
}
