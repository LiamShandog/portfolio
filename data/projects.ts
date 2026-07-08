export type Project = {
  /** URL-safe unique id, also used as a React key. */
  slug: string;
  title: string;
  /** One-line summary shown on the card. */
  summary: string;
  /** Longer case-study description. */
  description: string;
  /** Tech/tags shown as badges. */
  tags: string[];
  /** "owner/name" — used for build-time GitHub stats (optional). */
  githubRepo?: string;
  /** Live/demo URL (optional). */
  liveUrl?: string;
  /** Outcome-focused bullets: what you built and why it mattered. */
  highlights: string[];
  /** Featured projects can be emphasized in the layout. */
  featured?: boolean;
};

// NOTE: Placeholder projects — replace with Liam's real work. Keep 2-3 strong
// entries with genuine highlights; recruiters value depth over a long list.
export const projects: Project[] = [
  {
    slug: "portfolio",
    title: "Personal Portfolio",
    summary:
      "A fast, accessible portfolio built with Next.js — the site you're on right now.",
    description:
      "Designed and built a warm, professional portfolio from scratch with a reusable component system, build-time GitHub integration, and a focus on 30-second skimmability for recruiters.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubRepo: "LiamShandog/portfolio",
    highlights: [
      "Component-driven design system with a consistent warm visual language",
      "Curated projects pull live GitHub stats at build time",
      "Fully static, deploys to Vercel, scores high on Core Web Vitals",
    ],
    featured: true,
  },
  {
    slug: "task-tracker",
    title: "Task Tracker API",
    summary:
      "A typed REST API for managing projects and tasks, with auth and tests.",
    description:
      "Built a production-style backend with a normalized PostgreSQL schema, JWT authentication, and a full integration test suite — the kind of service a small team could actually depend on.",
    tags: ["Node.js", "PostgreSQL", "REST APIs"],
    githubRepo: "LiamShandog/task-tracker",
    highlights: [
      "Normalized schema with migrations and seed data",
      "JWT auth with role-based access control",
      "90%+ test coverage across integration and unit tests",
    ],
  },
  {
    slug: "weather-dashboard",
    title: "Weather Dashboard",
    summary:
      "A responsive dashboard that turns a public weather API into clear, glanceable insights.",
    description:
      "Created a client-side dashboard that fetches, caches, and visualizes forecast data, with graceful loading and error states and a layout that works from phone to desktop.",
    tags: ["React", "TypeScript", "Charts"],
    githubRepo: "LiamShandog/weather-dashboard",
    liveUrl: "https://example.com",
    highlights: [
      "Debounced search with cached responses to cut API calls",
      "Accessible, responsive layout with graceful empty/error states",
      "Reusable chart components for temperature and precipitation",
    ],
  },
];
