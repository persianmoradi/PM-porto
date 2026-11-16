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
      "I designed and built a fast, SEO-optimised multi-page site in Next.js, developed with Claude Code: each service mapped to its legal basis, a clear five-step process timeline, a methods section, and a dedicated municipality-collaboration page. Calm, institutional visual tone, Danish-localised, with proper metadata, Open Graph images, semantic structure and an accessible skip-to-content flow.",
    outcome:
      "A credible, authority-facing presence that speaks the caseworkers' language and converts via a single obvious contact path. Live at spkstotte.dk and fully indexed.",
    tags: ["Client work", "Next.js", "Claude Code", "SEO"],
    links: { live: "https://www.spkstotte.dk/" },
    year: "2026",
    featured: true,
  },
  {
    slug: "earthy",
    title: "Earthy",
    summary:
      "An interactive 3D flight through 13.8 billion years, from the Big Bang to the Earth of today, built with Three.js.",
    problem:
      "Cosmic history spans 13.8 billion years, a span that is hard to grasp as a list of dates. I wanted to tell it as a journey you fly through rather than a timeline you read.",
    build:
      "A single-page 3D experience built with Three.js, with custom shaders and textures. It opens on a loading screen where you choose to enter with sound or silent. A counter then runs from the Big Bang toward today while you drag to spin and select markers to move through dated events: the first stars, the Milky Way, the birth of the Sun, a molten early Earth, the origin of oceans and life, and the dinosaur extinction. It closes at 'Home', placing human existence at the very end of the timeline.",
    outcome:
      "Live at earthy-sigma.vercel.app as a finished, deployed 3D experience, and a direct demonstration of the interactive 3D websites I aim to build.",
    tags: ["Three.js", "WebGL", "3D", "Interactive"],
    links: { live: "https://earthy-sigma.vercel.app/" },
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
