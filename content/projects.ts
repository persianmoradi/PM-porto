// Real case studies. Keep the problem -> build -> outcome shape — that
// structure is what signals product thinking.
// Tip: confirm the `year` values and add screenshots to /public when ready.

export type Project = {
  slug: string;
  title: string;
  summary: string;
  problem: string;
  build: string;
  outcome: string;
  tags: string[];
  links?: { live?: string; repo?: string };
  year: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "heyra",
    title: "Heyra",
    summary:
      "Heyra's new website (heyra.io) — a full rebuild of the public site for a Copenhagen AI consultancy, developed during my Lovable internship.",
    problem:
      "Heyra is a Copenhagen AI consultancy that takes AI from prototype to production for enterprise clients. Their existing site no longer matched where the company was heading, so they commissioned a complete redesign — a new public face that made a deep, complex offering feel clear, credible and premium.",
    build:
      "During my internship at Heyra (as a Lovable intern), I was the developer on the new website, working in a small team with two brand designers and an in-house UX designer. I built it using Lovable, Cursor and Figma — turning the new branding and UX direction into a fast, responsive, content-rich site covering the offerings, the Problem → Prototype → Production method, case studies and a detailed tech stack.",
    outcome:
      "Shipped and launched as Heyra's new official website, replacing the previous one — my first time building inside a professional design-and-engineering team and delivering on time.",
    tags: ["Lovable", "Cursor", "Figma", "Internship"],
    links: { live: "https://heyra.io" },
    year: "2026",
    featured: true,
  },
  {
    slug: "spkstotte",
    title: "spkstøtte",
    summary:
      "A public site for a Danish social-services provider, built to win the trust of the municipalities that hire them.",
    problem:
      "spkstøtte delivers social-pedagogical services for children and families under Barnets Lov. Their buyers are municipal caseworkers who need to trust a provider fast — and understand seven legally-defined services, each tied to a specific section of the law, without wading through jargon.",
    build:
      "I designed and built a fast, SEO-optimised multi-page site in Next.js, developed with Claude Code: each service mapped to its legal basis, a clear five-step process timeline, a methods section, and a dedicated municipality-collaboration page. Calm, institutional visual tone, Danish-localised, with proper metadata, Open Graph images, semantic structure and an accessible skip-to-content flow.",
    outcome:
      "A credible, authority-facing presence that speaks the caseworkers' language and converts via a single obvious contact path. Live at spkstotte.dk and fully indexed.",
    tags: ["Client work", "Next.js", "Claude Code", "SEO"],
    links: { live: "https://www.spkstotte.dk/" },
    year: "2026",
    featured: true,
  },
  {
    slug: "ministeriets-ai-platform",
    title: "Ministeriets AI-Platform",
    summary:
      "My multimedia-design main exam: an AI learning platform for Danish upper-secondary schools, designed so AI supports thinking instead of replacing it.",
    problem:
      "Generative AI makes it trivially easy for students to offload the actual thinking. Schools (STX, HTX, HHX) don't need another answer-machine — they need AI that strengthens learning rather than short-circuiting it.",
    build:
      "I designed and prototyped a 'scaffolding AI' built on two ideas: Friction by Design — deliberately adding productive friction instead of instant answers — and the Socratic method, where the AI questions and guides rather than solves. An account-based web app you can sign up for and explore freely, built with Next.js and Claude Code.",
    outcome:
      "A deployed, working prototype that takes a clear, defensible stance on AI in education — delivered as my main exam project and a demonstration of product thinking, not just a feature.",
    tags: ["Next.js", "AI / LLMs", "Claude Code", "Prototype"],
    links: { live: "https://multimediedesign-hovedeksamen.vercel.app/" },
    year: "2026",
    featured: true,
  },
  {
    slug: "farda-foundation",
    title: "FARDA Foundation",
    summary:
      "The site for FARDA, my own Copenhagen web studio that builds websites and web apps for small businesses with no site, or a site that needs fixing.",
    problem:
      "Many small companies have no website, or one that is slow, dated and invisible on Google. Agencies are expensive and slow, and put account managers between the business and the person doing the work. FARDA needed a site that proves the pitch: a fast, clear offer with transparent pricing and one obvious way to get in touch.",
    build:
      "I designed and built the studio's single-page site in Danish: a bold, minimal look with large uppercase type, numbered sections and anchor navigation. It covers two fixed-price packages (Essential and Advanced), selected cases, the four-step process from strategy to launch, and a no-commitment call booking. Deployed on Vercel.",
    outcome:
      "Live as the public face of my own company, and it works as a case study in itself: the same speed, SEO and design standard I deliver to clients.",
    tags: ["Own company", "Web design", "SEO", "Vercel"],
    links: { live: "https://farda-foundation.vercel.app/" },
    year: "2026",
    featured: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
