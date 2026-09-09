export type MediaItem = {
  type: "image" | "video";
  /** Path in /public, e.g. "/media/mars_rover.jpg". */
  src: string;
  /** Accessible description; also used as the thumbnail label. */
  alt: string;
};

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
  /** Photos/videos shown in the card gallery. First item is the default view. */
  media?: MediaItem[];
  /** Hide the GitHub star count even when repo stats are available. */
  hideStars?: boolean;
  /** Outcome-focused bullets: what you built and why it mattered. */
  highlights: string[];
  /** Featured projects can be emphasized in the layout. */
  featured?: boolean;
};

// Real projects for Liam. Keep to 2-3 strong entries with genuine highlights —
// recruiters value depth over a long list. githubRepo is intentionally omitted
// where the repo is private; adding it renders a public "GitHub →" link.
export const projects: Project[] = [
  {
    slug: "sae-aero-perception",
    title: "SAE Aero 2027 Perception Stack",
    summary:
      "The C++ and Python perception stack for a fixed-wing drone entering the advanced class of SAE Aero 2027 — onboard object detection, reproducible cross-platform builds, and a 15-member software team behind it.",
    description:
      "Own the perception stack for SAE Aero 2027, a fixed-wing autonomous drone competing in the advanced class, and direct the 15-member software team building it in C++ and Python. I am developing the computer vision stack — implementing physical AI world models and training a YOLO object-detection model to pick out specified task ground targets from a ZED 3D depth-sensing camera mid-flight. The whole stack builds reproducibly on Ubuntu 24.04 across macOS, Windows, and Linux through the GitHub organization and Docker setup I maintain.",
    tags: ["ROS 2", "C++", "Python", "Computer Vision", "YOLO", "Docker"],
    githubRepo: "Queen-s-Aerospace-Design-Team/AeroSAE2027",
    hideStars: true,
    media: [
      { type: "image", src: "/media/drone_sim.png", alt: "ROS 2 bridged to a PX4 flight-stack simulation during an armed takeoff" },
    ],
    highlights: [
      "Developing a computer vision stack: physical AI world models plus a YOLO object-detection model trained to identify specified task ground targets from a ZED 3D depth-sensing camera mid-flight",
      "Directing a 15-member team building the C++ and Python stack for the advanced class of the SAE Aero 2027 design competition",
      "GitHub organization and a Dockerized Ubuntu 24.04 build system giving every contributor consistent cross-platform development on macOS, Windows, and Linux",
    ],
    featured: true,
  },
  {
    slug: "mars-rover",
    title: "Autonomous Mars Rover Robot",
    summary:
      "A fully autonomous four-wheeled Mars rover that maps, localizes, and navigates on its own using ROS 2 and SLAM.",
    description:
      "Built an autonomous rover with a two-tier architecture: a Raspberry Pi 4 running ROS 2 handles high-level perception, SLAM-based mapping and localization, and path planning, while an Arduino manages real-time low-level motor control. The full stack was validated in a custom Gazebo Mars world before deploying to the physical robot.",
    tags: ["ROS 2", "Python", "SLAM", "Gazebo", "Arduino"],
    githubRepo: "MREN203-Team-11/203ros_ws",
    hideStars: true,
    media: [
      { type: "image", src: "/media/mars_rover.jpg", alt: "The autonomous four-wheeled Mars rover" },
      { type: "video", src: "/media/rover_driving.mp4", alt: "The rover driving autonomously" },
      { type: "image", src: "/media/slam_map.jpg", alt: "SLAM-generated map of the test environment" },
    ],
    highlights: [
      "ROS 2 stack on a Raspberry Pi 4 for decision-making, sensor processing, and SLAM Toolbox mapping from RPLidar scans",
      "Path planning that derives velocity commands from live localization and mapping data",
      "Arduino low-level controller — serial bridge, encoder feedback, and PID motor control — validated in a custom Gazebo Mars world before hardware",
    ],
  },
  {
    slug: "line-following-robot",
    title: "Line-Following Robot",
    summary:
      "An Arduino robot that follows a track in real time using closed-loop sensor feedback.",
    description:
      "Designed a line-following robot driven by closed-loop control: reflectance sensors feed an Arduino that continuously adjusts motor actions, with algorithms tuned against live sensor data to keep it on track at speed.",
    tags: ["Arduino", "C/C++", "Control Systems"],
    githubRepo: "LiamShandog/Line-Following-Bot",
    hideStars: true,
    media: [
      { type: "image", src: "/media/minibot.jpg", alt: "The line-following robot" },
      { type: "video", src: "/media/minibot_driving.mp4", alt: "The robot following a line" },
    ],
    highlights: [
      "Closed-loop motor control driven by real-time reflectance-sensor feedback",
      "Control algorithms tuned from sensor data for stable, responsive tracking",
      "Tight hardware/software integration across the sensing and drive subsystems",
    ],
  },
];
