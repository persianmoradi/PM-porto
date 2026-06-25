import Link from "next/link";
import { Logo } from "@/components/Logo";
import { site } from "@/content/site";

const socials = [
  { href: site.links.github, label: "GitHub" },
  { href: site.links.githubSchool, label: "GitHub (school)" },
  { href: site.links.linkedin, label: "LinkedIn" },
  { href: `mailto:${site.email}`, label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-content flex-col gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between md:px-10">
        <Logo />
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          {socials.map((s) => (
            <Link
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-small text-ink-soft transition-colors hover:text-accent"
            >
              {s.label}
            </Link>
          ))}
        </nav>
        <p className="font-mono text-[0.75rem] text-ink-soft">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
