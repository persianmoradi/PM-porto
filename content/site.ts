export const site = {
  name: "Persian Moradi",
  role: "Web Developer & AI-Native Developer",
  // Hero statement, also the meta description.
  tagline:
    "A web developer who strives to build distinctive, interactive 3D websites, and who is equally capable of delivering something simple, professional and elegant.",
  location: "Copenhagen, Denmark",
  status: "Web development student at EK Copenhagen · actively seeking work",
  // Background-removed photo shown in the About section.
  portrait: "/portrait/me.webp",
  email: "persianmoradi5@gmail.com",
  url: "https://persianmoradi.dev",
  links: {
    github: "https://github.com/persianmoradi",
    githubSchool: "https://github.com/cph-persian",
    linkedin: "https://www.linkedin.com/in/persian-moradi-30769a337/",
  },
  about: [
    "I am Persian Moradi, a web development student at Erhvervsakademiet København (EK) in Copenhagen, graduating in winter 2027. I completed an internship at Heyra, a Copenhagen AI consultancy, where I was the developer on the company's new website.",
    "My main interests are front-end and full-stack development, alongside AI engineering and AI-native development. I also enjoy practising end-to-end product development and building iOS apps, and I continually expand my stack and skills.",
  ],
  // Grouped rather than one flat list: the clustering itself signals that you
  // understand your own stack, and it survives a 10-second scan.
  skillGroups: [
    {
      label: "Front-end",
      items: ["React", "JSX", "Next.js", "Vite", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
    },
    {
      label: "3D & motion",
      items: ["Three.js", "React Three Fiber", "WebGL", "Motion"],
    },
    {
      label: "AI-native development",
      items: ["AI / LLMs", "Claude Code", "Cursor", "Lovable"],
    },
    {
      label: "Back-end & data",
      items: ["Supabase", "SQL", "pgAdmin 4"],
    },
    {
      label: "Design",
      items: ["Figma", "UX", "UI"],
    },
    {
      label: "Tools",
      items: ["VS Code", "Git", "GitHub"],
    },
  ],
  // Stated as forward momentum, not as a gap.
  learning: ["Back-end and full-stack development", "Node.js", "AI engineering", "iOS apps"],
};

export type Site = typeof site;
