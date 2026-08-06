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

// Real résumé content for Liam Shannon. The styled /resume page renders this
// data, and the downloadable PDF in /public should stay in sync with it.
export const resume: Resume = {
  summary:
    "Mechatronics and Robotics Engineering student at Queen's University and a working software developer — building full-stack tools and Python data pipelines on Palantir Foundry, and autonomous robots on ROS. I gravitate toward hard integration problems that span software and hardware, and I care about shipping solutions people actually rely on.",
  experience: [
    {
      company: "Cavtera",
      role: "Software Developer",
      start: "Jun 2026",
      end: "Present",
      location: "Ottawa, Ontario · Remote",
      bullets: [
        "Built React/OSDK apps for trucking operations, delivering custom software to clients across North America.",
        "Developed TypeScript functions within the Ontology SDK to power business logic across fleet workflows.",
        "Engineered Python data pipelines to cleanse and normalize thousands of rows of truck data, boosting productivity in trucking workflows by 50%.",
      ],
    },
    {
      company: "Thomas Cavanagh Construction Limited",
      role: "Software Developer",
      start: "May 2025",
      end: "May 2026",
      location: "Ottawa, Ontario · Remote",
      bullets: [
        "Developed truck-dispatch software in Palantir Foundry to manage the largest fleet in Eastern Ontario.",
        "Cut compute costs on dispatch workflows by over 200% through data-pipeline optimization and smarter querying logic.",
        "Worked hand-in-hand with employees across every division to create, iterate on, and improve Foundry workflows.",
      ],
    },
    {
      company: "Queen's Aerospace Design Team",
      role: "Automation Manager · ROS Simulation",
      start: "Sep 2024",
      end: "Present",
      location: "Kingston, Ontario",
      bullets: [
        "As Automation Manager (2026–present): own the software stack, delegate tasks across the team, and teach ROS 2 concepts to new contributors.",
        "Designed 3D CAD models in Onshape for the team's test drone, improving structural fit.",
        "Developed and ran drone simulations in ROS to validate flight, control, and system integration in a virtual environment.",
      ],
    },
  ],
  education: [
    {
      school: "Queen's University",
      credential:
        "BASc in Mechatronics and Robotics Engineering — GPA 4.19/4.3",
      start: "Sep 2024",
      end: "Present",
    },
  ],
  skills: [
    {
      category: "Programming",
      items: ["TypeScript / JavaScript", "Python", "C / C++", "React", "NIOS II Assembly", "VHDL"],
    },
    {
      category: "Robotics & Hardware",
      items: ["ROS 2", "Arduino", "Raspberry Pi", "SLAM", "PID Control", "Sensor Integration", "Docker"],
    },
    {
      category: "Platforms & Data",
      items: ["Palantir Foundry", "Ontology SDK", "Python Data Pipelines", "Git", "Vercel"],
    },
    {
      category: "Design & CAD",
      items: ["SolidWorks", "Onshape", "Altium", "LTspice"],
    },
  ],
};
