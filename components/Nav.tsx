"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Logo } from "@/components/Logo";
import { site } from "@/content/site";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/60 bg-paper/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4 md:px-10">
        <Logo />

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-small text-ink-soft transition-colors hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
          <ThemeToggle />
          <Link
            href={`mailto:${site.email}`}
            className="rounded-full bg-accent px-4 py-2 text-small font-medium text-white transition-colors hover:bg-accent-hover"
          >
            Hire me
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-body text-ink-soft transition-colors hover:text-ink"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href={`mailto:${site.email}`}
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-fit rounded-full bg-accent px-4 py-2 text-small font-medium text-white"
            >
              Hire me
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
