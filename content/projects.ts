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
    slug: "spkstotte",
    title: "spkstøtte",
    summary:
      "A public site for a Danish social-services provider, built to win the trust of the municipalities that hire them.",
    problem:
      "spkstøtte delivers social-pedagogical services for children and families under Barnets Lov. Their buyers are municipal caseworkers who need to trust a provider fast — and understand seven legally-defined services, each tied to a specific section of the law, without wading through jargon.",
    build:
      "I designed and built a fast, SEO-optimised multi-page site in Next.js: each service mapped to its legal basis, a clear five-step process timeline, a methods section, and a dedicated municipality-collaboration page. Calm, institutional visual tone, Danish-localised, with proper metadata, Open Graph images, semantic structure and an accessible skip-to-content flow.",
    outcome:
      "A credible, authority-facing presence that speaks the caseworkers' language and converts via a single obvious contact path. Live at spkstotte.dk and fully indexed.",
    tags: ["Client work", "Next.js", "SEO", "Accessibility"],
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
      "I designed and prototyped a 'scaffolding AI' built on two ideas: Friction by Design — deliberately adding productive friction instead of instant answers — and the Socratic method, where the AI questions and guides rather than solves. An account-based web app you can sign up for and explore freely.",
    outcome:
      "A deployed, working prototype that takes a clear, defensible stance on AI in education — delivered as my main exam project and a demonstration of product thinking, not just a feature.",
    tags: ["AI / LLMs", "EdTech", "Next.js", "Prototype"],
    links: { live: "https://multimediedesign-hovedeksamen.vercel.app/" },
    year: "2025",
    featured: true,
  },
  {
    slug: "investment-intelligence",
    title: "AI Investeringsintelligens",
    summary:
      "A personal tool that scores companies as sector-relative percentiles from real filings and market data.",
    problem:
      "Retail investors drown in raw financials. Comparing companies within a sector is noisy and slow, and most tools either oversimplify or bury you in numbers — while quietly implying advice.",
    build:
      "I built a pipeline that pulls fundamentals from SEC EDGAR and prices from Stooq, computes monthly sector-relative percentile scores, and surfaces them in a clean dashboard. Framed explicitly as research, not personal investment advice — the user makes every decision.",
    outcome:
      "A live, self-updating project spanning data pipeline, scoring logic and frontend — my clearest end-to-end piece, and proof I can ship a complete product solo.",
    tags: ["AI / LLMs", "Data", "React", "Personal"],
    links: { live: "https://investment-intelligence-five.vercel.app/" },
    year: "2026",
    featured: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
