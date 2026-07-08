export type RepoStats = {
  stars: number;
  forks: number;
  description: string | null;
  language: string | null;
  url: string;
};

/**
 * Fetch public stats for a "owner/name" repo at build time.
 *
 * Returns null on any failure (offline, 404, rate limit) so callers can fall
 * back to the project's own data — the build never breaks and no empty state
 * ships. The `revalidate` hint lets Next periodically refresh the numbers.
 */
export async function getRepoStats(repo: string): Promise<RepoStats | null> {
  try {
    const res = await fetch(`https://api.github.com/repos/${repo}`, {
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": "portfolio-site",
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) return null;

    const data = await res.json();
    return {
      stars: data.stargazers_count ?? 0,
      forks: data.forks_count ?? 0,
      description: data.description ?? null,
      language: data.language ?? null,
      url: data.html_url ?? `https://github.com/${repo}`,
    };
  } catch {
    return null;
  }
}
