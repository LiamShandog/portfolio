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
      end: "Sep 2026",
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
      end: "Apr 2026",
      location: "Ottawa, Ontario · Remote",
      bullets: [
        "Developed truck-dispatch software in Palantir Foundry to manage the largest fleet in Eastern Ontario.",
        "Reduced compute costs from $100+/week to single digits by caching data locally instead of querying the ontology.",
        "Worked hand-in-hand with employees across every division to create, iterate on, and improve Foundry workflows.",
      ],
    },
    {
      company: "Queen's Aerospace Design Team",
      role: "Automation Manager",
      start: "Jul 2026",
      end: "Present",
      location: "Kingston, Ontario",
      bullets: [
        "Direct a 15-person software team, delegating tasks and onboarding new contributors to ROS 2.",
        "Building the software stack for SAE Aero 2027, a fixed-wing autonomous drone competition.",
        "Maintain a Docker setup that gives the team reproducible Ubuntu 24.04 builds across platforms.",
      ],
    },
    {
      company: "Queen's Aerospace Design Team",
      role: "Systems Integration / ROS Simulation",
      start: "Sep 2025",
      end: "Apr 2026",
      location: "Kingston, Ontario",
      bullets: [
        "Integrated the electrical, mechanical, and software subsystems on the AIAA competition drone.",
        "Developed and ran drone simulations in ROS to validate flight, control, and system integration in a virtual environment.",
        "Designed 3D CAD models in Onshape for the team's test drone, improving structural fit.",
      ],
    },
    {
      company: "Queen's Aerospace Design Team",
      role: "Electrical Engineer",
      start: "Sep 2024",
      end: "Apr 2025",
      location: "Kingston, Ontario",
      bullets: [
        "Designed buck converters in LTspice and Altium, stepping 44V down to 15V, 5.2V, and 3.3V rails.",
        "Proposed a modular 12S 3P battery architecture for the team's power system.",
      ],
    },
  ],
  education: [
    {
      school: "Queen's University",
      credential:
        "BASc in Mechatronics and Robotics Engineering — GPA 4.19/4.3 · Dean's Scholar",
      start: "Sep 2024",
      end: "Expected May 2028",
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
