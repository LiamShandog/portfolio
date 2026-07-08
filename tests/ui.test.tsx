import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

// next/link needs the app router context in real use; stub it to a plain
// anchor so we can assert link behavior in isolation.
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

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

describe("Container", () => {
  it("renders children and constrains width", () => {
    render(<Container>inside</Container>);
    const el = screen.getByText("inside");
    expect(el).toBeInTheDocument();
    expect(el.className).toMatch(/max-w-/);
  });
});

describe("Section", () => {
  it("renders as a <section> and forwards an id for anchor links", () => {
    render(<Section id="about">content</Section>);
    const el = screen.getByText("content");
    expect(el.tagName).toBe("SECTION");
    expect(el).toHaveAttribute("id", "about");
  });
});

describe("Button", () => {
  it("renders a native button by default", () => {
    render(<Button>Click</Button>);
    const btn = screen.getByRole("button", { name: "Click" });
    expect(btn.tagName).toBe("BUTTON");
  });

  it("applies the accent style for the primary variant", () => {
    render(<Button variant="primary">Primary</Button>);
    expect(screen.getByRole("button", { name: "Primary" }).className).toMatch(
      /bg-accent/,
    );
  });

  it("supports being disabled", () => {
    render(<Button disabled>Nope</Button>);
    expect(screen.getByRole("button", { name: "Nope" })).toBeDisabled();
  });

  it("renders an anchor when given an href", () => {
    render(<Button href="/resume">Resume</Button>);
    const link = screen.getByRole("link", { name: "Resume" });
    expect(link).toHaveAttribute("href", "/resume");
  });
});

describe("Badge", () => {
  it("renders its label", () => {
    render(<Badge>TypeScript</Badge>);
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
  });
});

describe("Card", () => {
  it("renders children inside a bordered surface", () => {
    render(<Card>project</Card>);
    const el = screen.getByText("project");
    expect(el).toBeInTheDocument();
    expect(el.className).toMatch(/border/);
  });
});
