import { describe, it, expect, vi, afterEach } from "vitest";
import { getRepoStats } from "@/lib/github";

afterEach(() => {
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

describe("getRepoStats", () => {
  it("returns null when the request throws (offline / network error)", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("network")));
    expect(await getRepoStats("owner/repo")).toBeNull();
  });

  it("returns null on a non-ok response (404 / rate limited)", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({ ok: false, status: 404 }),
    );
    expect(await getRepoStats("owner/repo")).toBeNull();
  });

  it("maps GitHub fields to RepoStats on success", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({
          stargazers_count: 12,
          forks_count: 3,
          description: "A cool repo",
          language: "TypeScript",
          html_url: "https://github.com/owner/repo",
        }),
      }),
    );

    const stats = await getRepoStats("owner/repo");
    expect(stats).toEqual({
      stars: 12,
      forks: 3,
      description: "A cool repo",
      language: "TypeScript",
      url: "https://github.com/owner/repo",
    });
  });
});
