import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ProjectCard } from "@/components/ProjectCard";
import type { Project } from "@/data/projects";

const project: Project = {
  slug: "demo",
  title: "Demo Project",
  summary: "A short summary.",
  description: "A longer description.",
  tags: ["React", "TypeScript"],
  githubRepo: "owner/repo",
  liveUrl: "https://demo.example.com",
  highlights: ["Shipped a thing", "Made it fast"],
};

describe("ProjectCard", () => {
  it("renders the title, summary, tags and highlights", () => {
    render(<ProjectCard project={project} stats={null} />);
    expect(screen.getByText("Demo Project")).toBeInTheDocument();
    expect(screen.getByText("A short summary.")).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("Shipped a thing")).toBeInTheDocument();
  });

  it("links to the GitHub repo and the live demo", () => {
    render(<ProjectCard project={project} stats={null} />);
    expect(screen.getByRole("link", { name: /github/i })).toHaveAttribute(
      "href",
      "https://github.com/owner/repo",
    );
    expect(screen.getByRole("link", { name: /live|demo/i })).toHaveAttribute(
      "href",
      "https://demo.example.com",
    );
  });

  it("shows the star count when GitHub stats are available", () => {
    render(
      <ProjectCard
        project={project}
        stats={{
          stars: 42,
          forks: 5,
          description: null,
          language: "TypeScript",
          url: "https://github.com/owner/repo",
        }}
      />,
    );
    expect(screen.getByText(/42/)).toBeInTheDocument();
  });

  it("omits the GitHub link when the project has no repo", () => {
    const { githubRepo, ...noRepo } = project;
    void githubRepo;
    render(<ProjectCard project={noRepo} stats={null} />);
    expect(screen.queryByRole("link", { name: /github/i })).toBeNull();
  });
});
