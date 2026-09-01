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
    "Mechatronics and Robotics Engineering student at Queen's University and a software developer — I have built full-stack tools and Python data pipelines on Palantir Foundry, and autonomous robots on ROS. I gravitate toward hard integration problems that span software and hardware, and I care about shipping solutions people actually rely on.",
  experience: [
    {
      company: "Queen's Aerospace Design Team",
      role: "Automation Manager",
      start: "Jul 2026",
      end: "Present",
      location: "Kingston, Ontario",
      bullets: [
        "Directing a 15-member team building the software stack in C++ and Python for a fixed-wing autonomous drone to compete in the advanced class of the SAE Aero 2027 design competition.",
        "Managing a GitHub organization and a Dockerized Ubuntu 24.04 build system enabling consistent cross-platform development across macOS, Windows, and Linux for all contributors.",
        "Building out the perception pipeline: early work on a YOLO object-detection model to identify specified task ground targets from a ZED 3D depth-sensing camera mid-flight, with Nvidia's Cosmos physical AI model under evaluation.",
      ],
    },
    {
      company: "Cavtera",
      role: "Software Developer",
      start: "Jun 2026",
      end: "Sep 2026",
      location: "Ottawa, Ontario",
      bullets: [
        "Saved $1,000,000+ annually in recoverable costs through exposing 10,000+ hours per week of idling equipment by building a full-stack equipment management system using TypeScript and React.",
        "Increased job-site utilization of 1,000+ trucks and pieces of equipment by shipping automated alerts.",
        "Restored live equipment telematics by fixing broken ingestion APIs and rebuilding the Python transform pipeline that parses 10,000+ records per day across a database of millions.",
        "Modeled the business as a Foundry ontology and wrote the TypeScript edit functions behind it, giving non-technical staff a governed way to update production records.",
        "Shipped the operator-facing front end as a React and TypeScript application on Foundry's Ontology SDK (OSDK), so site staff could act on live fleet data directly.",
        "Reviewed code and wrote and ran unit tests across the Python and TypeScript codebase.",
      ],
    },
    {
      company: "Thomas Cavanagh Construction Limited",
      role: "Software Developer",
      start: "May 2025",
      end: "Apr 2026",
      location: "Ottawa, Ontario · Remote",
      bullets: [
        "Digitized dispatch for a 100+ driver fleet by building custom dispatch software in Palantir Foundry.",
        "Eliminated 4+ hours of daily dispatcher calls and dozens of spreadsheets by modeling fleet data in an ontology.",
        "Reduced compute costs from $100+/week to single digits by caching data locally instead of querying the ontology.",
        "Delivered the dispatcher-facing tooling as Foundry Workshop applications backed by Python transforms.",
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
      category: "Languages",
      items: ["TypeScript", "JavaScript", "Python", "C / C++", "NIOS II Assembly", "VHDL"],
    },
    {
      category: "Tools & Frameworks",
      items: ["Palantir Foundry", "Ontology SDK", "React", "Git", "Docker", "Linux", "ROS 2", "Vercel"],
    },
    {
      category: "Robotics & Hardware",
      items: ["Arduino", "Raspberry Pi", "SLAM", "PID Control", "Sensor Integration"],
    },
    {
      category: "Data",
      items: [
        "Python data pipelines",
        "Data cleaning & normalization",
        "SQL-style querying / Foundry querying logic",
      ],
    },
    {
      category: "AI-Assisted Development",
      items: ["Claude Code — used daily to plan, explore, and implement on production work"],
    },
    {
      category: "Design & CAD",
      items: ["SolidWorks", "Onshape", "Altium", "LTspice"],
    },
  ],
};
