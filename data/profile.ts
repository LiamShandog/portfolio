export type SocialLink = {
  label: string;
  href: string;
};

export type Profile = {
  /** Full name shown in the hero and nav. */
  name: string;
  /** Short professional role, e.g. "Full-Stack Developer". */
  role: string;
  /** One-line pitch — the hook a recruiter reads first. */
  tagline: string;
  location: string;
  email: string;
  /** About-section bio, one string per paragraph. */
  bio: string[];
  /** Skills shown as badges. */
  skills: string[];
  socials: SocialLink[];
  githubUsername: string;
  /** Path (in /public) to the downloadable resume PDF. */
  resumePdf: string;
};

// NOTE: Placeholder content — swap in Liam's real details. Structure is stable;
// editing values here updates every section automatically.
export const profile: Profile = {
  name: "Liam Shannon",
  role: "Full-Stack Developer",
  tagline:
    "I build clean, reliable web apps — and care as much about the details you don't see as the ones you do.",
  location: "Canada",
  email: "liam@example.com",
  bio: [
    "I'm a full-stack developer who enjoys turning fuzzy problems into simple, well-crafted products. I like owning a feature end to end — from the data model to the last pixel.",
    "Lately I've been focused on TypeScript, React, and building interfaces that feel fast and effortless. When I'm not shipping, I'm usually refactoring something to make it a little cleaner.",
  ],
  skills: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "Tailwind CSS",
    "Git",
    "REST APIs",
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/LiamShandog" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/your-handle" },
    { label: "Email", href: "mailto:liam@example.com" },
  ],
  githubUsername: "LiamShandog",
  resumePdf: "/resume.pdf",
};
