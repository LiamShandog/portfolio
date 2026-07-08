import { describe, it, expect } from "vitest";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { resume } from "@/data/resume";

describe("profile data", () => {
  it("has the core identity fields populated", () => {
    expect(profile.name).toBeTruthy();
    expect(profile.role).toBeTruthy();
    expect(profile.tagline).toBeTruthy();
    expect(profile.email).toMatch(/@/);
    expect(profile.githubUsername).toBeTruthy();
  });

  it("has bio paragraphs and skills to render the About section", () => {
    expect(profile.bio.length).toBeGreaterThan(0);
    expect(profile.skills.length).toBeGreaterThan(0);
    expect(profile.socials.length).toBeGreaterThan(0);
    for (const social of profile.socials) {
      expect(social.label).toBeTruthy();
      expect(social.href).toBeTruthy();
    }
  });
});

describe("projects data", () => {
  it("contains 2-3 curated projects", () => {
    expect(projects.length).toBeGreaterThanOrEqual(2);
    expect(projects.length).toBeLessThanOrEqual(3);
  });

  it("gives every project the fields the cards need", () => {
    const slugs = new Set<string>();
    for (const p of projects) {
      expect(p.slug).toBeTruthy();
      expect(p.title).toBeTruthy();
      expect(p.summary).toBeTruthy();
      expect(p.tags.length).toBeGreaterThan(0);
      expect(p.highlights.length).toBeGreaterThan(0);
      slugs.add(p.slug);
    }
    expect(slugs.size).toBe(projects.length); // slugs are unique
  });
});

describe("resume data", () => {
  it("has a summary, experience, education and grouped skills", () => {
    expect(resume.summary).toBeTruthy();
    expect(resume.experience.length).toBeGreaterThan(0);
    expect(resume.education.length).toBeGreaterThan(0);
    expect(resume.skills.length).toBeGreaterThan(0);
  });

  it("gives every experience entry the fields the resume view needs", () => {
    for (const job of resume.experience) {
      expect(job.company).toBeTruthy();
      expect(job.role).toBeTruthy();
      expect(job.start).toBeTruthy();
      expect(job.end).toBeTruthy();
      expect(job.bullets.length).toBeGreaterThan(0);
    }
  });
});
