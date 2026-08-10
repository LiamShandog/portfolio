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
  /** Current availability, shown under the hero tagline. */
  availability: string;
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

// Real content sourced from Liam's résumé and LinkedIn. The structure is stable;
// editing values here updates every section automatically.
export const profile: Profile = {
  name: "Liam Shannon",
  role: "Full-Stack & Robotics Developer",
  tagline:
    "I build at the intersection of software and hardware — from enterprise data platforms on Palantir Foundry to autonomous robots running ROS.",
  availability: "Seeking a placement starting May 2027.",
  location: "Ontario, Canada",
  email: "liamshan13@gmail.com",
  bio: [
    "I'm a Mechatronics and Robotics Engineering student at Queen's University with a deep interest in robotics, aeronautics, astronautics, automation, and data engineering.",
    "By day I'm a Software Developer at Cavtera, where I take on complex integration challenges as we migrate and unify enterprise systems onto Palantir Foundry — finding bottlenecks, designing scalable solutions, and building full-stack tools that improve data flow and decision-making across the company. Problem-solving is at the core of what I do, whether I'm debugging a system, optimizing a workflow, or designing something new from the ground up.",
    "I'm also on the Queen's Aerospace Design Team, contributing to engineering solutions in the aerospace domain. I'm happiest working where software meets hardware, on projects that call for both technical depth and creative thinking.",
  ],
  skills: [
    "Palantir Foundry",
    "TypeScript",
    "React",
    "Python",
    "C/C++",
    "ROS 2",
    "Arduino",
    "Full-Stack Development",
    "Data Pipelines",
    "Hardware Integration",
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/LiamShandog" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/liamshannon0/" },
    { label: "Email", href: "mailto:liamshan13@gmail.com" },
  ],
  githubUsername: "LiamShandog",
  resumePdf: "/resume.pdf",
};
