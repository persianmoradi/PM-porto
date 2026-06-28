"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Monitor, Sun, Moon } from "lucide-react";

const options = [
  { value: "system", label: "Follow system theme", Icon: Monitor },
  { value: "light", label: "Light theme", Icon: Sun },
  { value: "dark", label: "Dark theme", Icon: Moon },
] as const;

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Avoid hydration mismatch: no active state until mounted on the client.
  const current = mounted ? theme ?? "system" : undefined;

  return (
    <div
      role="group"
      aria-label="Color theme"
      className="glass inline-flex items-center gap-0.5 rounded-full p-0.5"
    >
      {options.map(({ value, label, Icon }) => {
        const active = current === value;
        return (
          <button
            key={value}
            type="button"
            aria-label={label}
            aria-pressed={active}
            onClick={() => setTheme(value)}
            className={
              "inline-flex h-7 w-7 items-center justify-center rounded-full transition-colors " +
              (active
                ? "bg-accent text-white"
                : "text-ink-soft hover:text-ink")
            }
          >
            <Icon size={14} />
          </button>
        );
      })}
    </div>
  );
}
