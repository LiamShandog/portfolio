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

import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { profile } from "@/data/profile";

describe("Hero", () => {
  it("leads with the name, role, and tagline", () => {
    render(<Hero />);
    expect(
      screen.getByRole("heading", { name: new RegExp(profile.name, "i") }),
    ).toBeInTheDocument();
    expect(screen.getByText(profile.role)).toBeInTheDocument();
    expect(screen.getByText(profile.tagline)).toBeInTheDocument();
  });

  it("offers a way to get in touch", () => {
    render(<Hero />);
    expect(screen.getByRole("link", { name: /get in touch/i })).toHaveAttribute(
      "href",
      `mailto:${profile.email}`,
    );
  });
});

describe("About", () => {
  it("renders as an #about section with bio and skills", () => {
    const { container } = render(<About />);
    const section = container.querySelector("section#about");
    expect(section).not.toBeNull();
    expect(screen.getByText(profile.bio[0])).toBeInTheDocument();
    expect(screen.getByText(profile.skills[0])).toBeInTheDocument();
  });
});
