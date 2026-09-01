import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

vi.mock("next/link", () => ({
  default: ({
    href,
    children,
    ...props
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

import { ResumeView } from "@/components/ResumeView";
import ResumePage from "@/app/resume/page";
import { resume } from "@/data/resume";
import { profile } from "@/data/profile";

describe("ResumeView", () => {
  it("renders the summary, experience, education and skills", () => {
    render(<ResumeView />);
    expect(screen.getByText(resume.summary)).toBeInTheDocument();
    // The company can repeat across entries (three Queen's Aerospace Design
    // Team roles), so assert presence rather than uniqueness.
    expect(
      screen.getAllByText(resume.experience[0].company).length,
    ).toBeGreaterThan(0);
    expect(
      screen.getByText(resume.experience[0].bullets[0]),
    ).toBeInTheDocument();
    expect(
      screen.getByText(resume.education[0].school),
    ).toBeInTheDocument();
    expect(
      screen.getByText(resume.skills[0].items[0]),
    ).toBeInTheDocument();
  });
});

describe("Resume page", () => {
  it("offers a PDF download pointing at the resume file", () => {
    render(<ResumePage />);
    const download = screen.getByRole("link", { name: /download/i });
    expect(download).toHaveAttribute("href", profile.resumePdf);
    expect(download).toHaveAttribute("download");
  });
});
