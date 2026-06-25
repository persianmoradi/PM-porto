import type { Variants } from "framer-motion";

// Signature easing — expo-out. Calm, confident entrances.
export const easeExpo = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeExpo },
  },
};

export const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

// Shared viewport config so reveals fire once, slightly before fully in view.
export const inView = { once: true, margin: "-80px" } as const;
