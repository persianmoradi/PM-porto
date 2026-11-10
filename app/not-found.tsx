import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-content flex-col items-start px-6 pb-section pt-36 md:px-10">
      <h1 className="max-w-[20ch] font-display text-h1 font-bold text-ink">
        That page doesn&apos;t exist.
      </h1>
      <p className="mt-5 max-w-measure text-body-lg text-ink-soft">
        The link may be out of date. The work and contact details are all on the
        home page.
      </p>
      <Link
        href="/"
        className="btn btn-primary mt-9 px-6 py-3 text-small"
      >
        <ArrowLeft size={16} /> Back home
      </Link>
    </section>
  );
}
