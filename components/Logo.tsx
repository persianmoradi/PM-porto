import Link from "next/link";
import { cn } from "@/lib/utils";

// Wordmark: "Persian" + a Persian-blue star that spins and pops on hover.
// Pure CSS transition — fully supported and disabled under prefers-reduced-motion.
export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Persian Moradi — home"
      className={cn(
        "group inline-flex items-center gap-1 font-display text-h3 font-bold tracking-tight text-ink",
        className,
      )}
    >
      Persian
      <span
        aria-hidden
        className="inline-flex text-accent transition-transform duration-500 ease-expo-out group-hover:rotate-[200deg] group-hover:scale-110"
      >
        <svg
          width="0.72em"
          height="0.72em"
          viewBox="0 0 32 32"
          fill="currentColor"
          role="presentation"
        >
          <path d="M16 6 L18.47 12.60 L25.51 12.91 L19.99 17.30 L21.88 24.09 L16 20.20 L10.12 24.09 L12.01 17.30 L6.49 12.91 L13.53 12.60 Z" />
        </svg>
      </span>
    </Link>
  );
}
