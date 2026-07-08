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

import { Contact } from "@/components/Contact";
import { profile } from "@/data/profile";

describe("Contact", () => {
  it("renders as a #contact section with an email CTA", () => {
    const { container } = render(<Contact />);
    expect(container.querySelector("section#contact")).not.toBeNull();
    const emailCta = screen.getByRole("link", { name: "Email me" });
    expect(emailCta).toHaveAttribute("href", `mailto:${profile.email}`);
  });

  it("lists the social links", () => {
    render(<Contact />);
    for (const social of profile.socials) {
      expect(
        screen.getByRole("link", { name: social.label }),
      ).toHaveAttribute("href", social.href);
    }
  });
});
