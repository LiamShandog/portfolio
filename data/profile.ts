export type SocialLink = {
  label: string;
  href: string;
};

export type Profile = {
  /** Full name shown in the hero and nav. */
  name: string;
  /** Short professional role, e.g. "Full-Stack Developer". */
  role: string;
  /** One-line pitch: the hook a recruiter reads first. */
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
    "I build at the intersection of software and hardware, from enterprise data platforms on Palantir Foundry to autonomous robots running ROS.",
  availability: "Seeking a placement starting May 2027.",
  location: "Ottawa, Ontario",
  email: "liamshan13@gmail.com",
  bio: [
    "I'm a Mechatronics and Robotics Engineering student at Queen's University with a deep interest in robotics, aeronautics, astronautics, automation, and data engineering.",
    "Right now I'm the Autonomy Manager on the Queen's Aerospace Design Team, directing a 15-member team building the C++ and Python software stack for a fixed-wing autonomous drone competing in the advanced class of the SAE Aero 2027 design competition. I manage a GitHub organization and a Dockerized Ubuntu 24.04 build system that gives every contributor consistent cross-platform development across macOS, Windows, and Linux. I'm developing the ROS 2 autonomy software, integrated with PX4, that executes the SAE Aero mission autonomously, along with a computer vision stack that pairs physical AI world models with a trained YOLO object-detection model to identify task ground targets mid-flight from a monocular camera feed.",
    "Before that I was a Software Developer at Cavtera, where I built a full-stack equipment management system in TypeScript and React that surfaced idling equipment worth $1,000,000+ a year in recoverable cost, shipped automated alerts that increased utilization across 1,000+ trucks and pieces of equipment, restored live telemetry by fixing broken ingestion APIs and rebuilding a Python transform pipeline handling 10,000+ records a day, modeled the business as a Palantir Foundry ontology, and shipped the operator-facing front end on Foundry's Ontology SDK. Earlier, at Thomas Cavanagh Construction Limited, I digitized dispatch for a 100+ driver fleet with custom software that cut 4+ hours of daily dispatcher calls and dozens of spreadsheets by modeling fleet data in an ontology, delivered as Foundry Workshop applications backed by Python transforms, with local caching that dropped compute costs from $100+/week to single digits.",
    "Problem-solving is at the core of what I do, whether I'm debugging a system, optimizing a workflow, or designing something new from the ground up. I'm happiest working where software meets hardware, on projects that call for both technical depth and creative thinking.",
  ],
  skills: [
    "Computer Vision",
    "ROS 2",
    "Agentic AI Development",
    "Software Project Management",
    "Palantir Foundry",
    "TypeScript",
    "React",
    "Python",
    "C/C++",
    "Arduino",
    "Full-Stack Development",
    "Data Pipelines",
    "Hardware Integration",
    "Docker",
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/LiamShandog" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/liamshannon0/" },
    { label: "Email", href: "mailto:liamshan13@gmail.com" },
  ],
  githubUsername: "LiamShandog",
  resumePdf: "/resume.pdf",
};
