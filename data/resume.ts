export type ExperienceItem = {
  company: string;
  role: string;
  /** Human-readable dates, e.g. "Jan 2023". */
  start: string;
  end: string;
  location?: string;
  bullets: string[];
};

export type EducationItem = {
  school: string;
  credential: string;
  start: string;
  end: string;
};

export type SkillGroup = {
  category: string;
  items: string[];
};

export type Resume = {
  /** Short professional summary at the top of the resume. */
  summary: string;
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: SkillGroup[];
};

// NOTE: Placeholder resume — replace with Liam's real experience. The styled
// /resume page and the PDF should stay in sync with this data.
export const resume: Resume = {
  summary:
    "Full-stack developer with a track record of shipping clean, well-tested web applications. Comfortable across the stack, with a bias for simple solutions and maintainable code.",
  experience: [
    {
      company: "Example Company",
      role: "Full-Stack Developer",
      start: "Jan 2023",
      end: "Present",
      location: "Remote",
      bullets: [
        "Led development of a customer-facing feature used by thousands of users, from data model to UI.",
        "Improved page load times by ~40% by profiling and removing render bottlenecks.",
        "Mentored a junior developer and established the team's code-review conventions.",
      ],
    },
    {
      company: "Another Studio",
      role: "Junior Developer",
      start: "Jun 2021",
      end: "Dec 2022",
      location: "Hybrid",
      bullets: [
        "Built and maintained React components across several client projects.",
        "Wrote integration tests that caught regressions before release.",
        "Collaborated with designers to translate mockups into accessible interfaces.",
      ],
    },
  ],
  education: [
    {
      school: "Your University",
      credential: "B.Sc. in Computer Science",
      start: "2017",
      end: "2021",
    },
  ],
  skills: [
    {
      category: "Languages",
      items: ["TypeScript", "JavaScript", "SQL", "HTML", "CSS"],
    },
    {
      category: "Frameworks & Tools",
      items: ["React", "Next.js", "Node.js", "Tailwind CSS", "Git", "Vitest"],
    },
    {
      category: "Data & Infra",
      items: ["PostgreSQL", "REST APIs", "Vercel"],
    },
  ],
};
