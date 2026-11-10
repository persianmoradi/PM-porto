import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("py-section", className)}>
      <div className="mx-auto w-full max-w-content px-6 md:px-10">{children}</div>
    </section>
  );
}
