import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { getRepoStats } from "@/lib/github";

/**
 * Async server component: resolves GitHub stats for each curated project at
 * build time (in parallel), then renders the cards. Projects without a repo,
 * or whose fetch fails, simply render without stats.
 */
export async function Projects() {
  const cards = await Promise.all(
    projects.map(async (project) => ({
      project,
      stats: project.githubRepo
        ? await getRepoStats(project.githubRepo)
        : null,
    })),
  );

  return (
    <Section id="projects">
      <Container>
        <h2 className="text-3xl font-semibold tracking-tight text-foreground">
          Selected Work
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-muted">
          A few projects I&apos;m proud of — each one taught me something and
          shipped something real.
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {cards.map(({ project, stats }) => (
            <ProjectCard key={project.slug} project={project} stats={stats} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
