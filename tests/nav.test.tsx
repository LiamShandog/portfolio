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

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { profile } from "@/data/profile";

describe("Navbar", () => {
  it("shows the name and the primary section links", () => {
    render(<Navbar />);
    expect(screen.getAllByText(profile.name).length).toBeGreaterThan(0);
    expect(screen.getByRole("link", { name: "About" })).toHaveAttribute(
      "href",
      "#about",
    );
    expect(screen.getByRole("link", { name: "Projects" })).toHaveAttribute(
      "href",
      "#projects",
    );
    expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute(
      "href",
      "#contact",
    );
  });

  it("links to the resume page", () => {
    render(<Navbar />);
    expect(screen.getByRole("link", { name: /r[eé]sum[eé]/i })).toHaveAttribute(
      "href",
      "/resume",
    );
  });

  it("provides a skip-to-content link for keyboard users", () => {
    render(<Navbar />);
    expect(
      screen.getByRole("link", { name: /skip to content/i }),
    ).toHaveAttribute("href", "#main-content");
  });
});

describe("Footer", () => {
  it("renders the name and social links", () => {
    render(<Footer />);
    expect(screen.getAllByText(profile.name).length).toBeGreaterThan(0);
    expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute(
      "href",
      expect.stringContaining("github.com"),
    );
  });
});
