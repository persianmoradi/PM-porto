export const site = {
  name: "Persian Moradi",
  role: "Web Developer · AI Products & Front-end",
  // One-line hero statement. Confident, specific, no fluff.
  tagline:
    "A web developer drawn to AI product development and front-end craft — I love building where product thinking, design, and emerging AI tools meet.",
  location: "Copenhagen, Denmark",
  status: "Web development student at EK Copenhagen · open to work",
  // Photo lives at /public/persian.jpg. (Falls back to the placeholder if missing.)
  portrait: "/persian.jpg",
  email: "persianmoradi5@gmail.com",
  url: "https://persianmoradi.dev",
  links: {
    github: "https://github.com/persianmoradi",
    githubSchool: "https://github.com/cph-persian",
    linkedin: "https://www.linkedin.com/in/persian-moradi-30769a337/",
  },
  about: [
    "I'm Persian — a Web Developer student based in Copenhagen, studying web development at Erhvervsakademiet København (graduating winter 2027). I did my internship at Heyra, a Copenhagen AI consultancy.",
    "What pulls me most is AI product development — designing, prototyping, and building data- and AI-driven products. I love working where product thinking, design craft, front-end, and emerging AI tools meet, rather than staying in one narrow lane.",
    "Front-end is where I do most of my building today, and I'm looking forward to growing into full-stack development through my education. I spend part of every day getting better at building with AI and large language models.",
  ],
  // Grouped rather than one flat list: the clustering itself signals that you
  // understand your own stack, and it survives a 10-second scan.
  skillGroups: [
    {
      label: "AI & product",
      items: ["AI product development", "AI / LLMs", "Claude Code", "Lovable", "Cursor"],
    },
    {
      label: "Front-end",
      items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
    },
    {
      label: "Design",
      items: ["Figma", "UX / UI", "Motion"],
    },
    {
      label: "Data & tooling",
      items: ["Supabase", "Git", "GitHub"],
    },
  ],
  // Stated as forward momentum, not as a gap.
  learning: ["Full-stack / backend", "Node.js", "Postgres"],
};

export type Site = typeof site;
