import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import type { Project } from "@/data/projects";
import type { RepoStats } from "@/lib/github";

type ProjectCardProps = {
  project: Project;
  /** Build-time GitHub stats, or null if unavailable (fallback to repo link). */
  stats: RepoStats | null;
};

function StarIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 17.3l-6.16 3.7 1.64-7.03L2 9.24l7.19-.61L12 2l2.81 6.63 7.19.61-5.48 4.73 1.64 7.03z" />
    </svg>
  );
}

export function ProjectCard({ project, stats }: ProjectCardProps) {
  const repoUrl = project.githubRepo
    ? (stats?.url ?? `https://github.com/${project.githubRepo}`)
    : null;

  return (
    <Card className="flex flex-col">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-foreground">
          {project.title}
        </h3>
        {stats && (
          <span className="inline-flex shrink-0 items-center gap-1 text-sm text-muted">
            <StarIcon />
            {stats.stars}
          </span>
        )}
      </div>

      <p className="mt-2 text-sm leading-relaxed text-muted">
        {project.summary}
      </p>

      <ul className="mt-4 space-y-1.5">
        {project.highlights.map((highlight) => (
          <li
            key={highlight}
            className="flex gap-2 text-sm leading-relaxed text-foreground/80"
          >
            <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
            {highlight}
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap gap-4 border-t border-border pt-4 text-sm font-medium">
        {repoUrl && (
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent transition-colors hover:text-accent-hover"
          >
            GitHub →
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent transition-colors hover:text-accent-hover"
          >
            Live demo →
          </a>
        )}
      </div>
    </Card>
  );
}
