import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

/**
 * Smoke test: confirms the test harness (Vitest + React Testing Library +
 * jsdom + jest-dom matchers) is wired up correctly. Not tied to app content.
 */
describe("test harness", () => {
  it("renders a component and applies jest-dom matchers", () => {
    render(<button type="button">Hire me</button>);
    const btn = screen.getByRole("button", { name: /hire me/i });
    expect(btn).toBeInTheDocument();
    expect(btn).toBeEnabled();
  });
});
