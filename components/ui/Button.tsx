import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost" | "link";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full text-small font-medium transition-colors duration-200 focus-visible:outline-2";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent px-5 py-2.5 text-white hover:bg-accent-hover",
  ghost:
    "border border-line px-5 py-2.5 text-ink hover:bg-surface",
  link: "text-ink underline-offset-4 hover:text-accent hover:underline",
};

type AnchorProps = ComponentProps<typeof Link> & {
  variant?: Variant;
  children: ReactNode;
};

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: AnchorProps) {
  return (
    <Link className={cn(base, variants[variant], className)} {...props}>
      {children}
    </Link>
  );
}
