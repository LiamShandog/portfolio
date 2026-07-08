import { Badge } from "@/components/ui/Badge";
import { resume } from "@/data/resume";

export function ResumeView() {
  return (
    <div className="space-y-12">
      {/* Summary */}
      <section>
        <p className="text-lg leading-relaxed text-muted">{resume.summary}</p>
      </section>

      {/* Experience */}
      <section>
        <h2 className="text-sm font-medium uppercase tracking-widest text-accent">
          Experience
        </h2>
        <div className="mt-6 space-y-8">
          {resume.experience.map((job) => (
            <div key={`${job.company}-${job.start}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="text-lg font-semibold text-foreground">
                  {job.role}
                  <span className="font-normal text-muted"> · </span>
                  <span className="font-normal text-muted">{job.company}</span>
                </h3>
                <span className="text-sm text-muted">
                  {job.start} – {job.end}
                </span>
              </div>
              {job.location && (
                <p className="mt-1 text-sm text-muted">{job.location}</p>
              )}
              <ul className="mt-3 space-y-1.5">
                {job.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-2 text-sm leading-relaxed text-foreground/85"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-sm font-medium uppercase tracking-widest text-accent">
          Education
        </h2>
        <div className="mt-6 space-y-4">
          {resume.education.map((edu) => (
            <div
              key={edu.school}
              className="flex flex-wrap items-baseline justify-between gap-x-4"
            >
              <h3 className="text-base font-semibold text-foreground">
                {edu.credential}
                <span className="font-normal text-muted"> · </span>
                <span className="font-normal text-muted">{edu.school}</span>
              </h3>
              <span className="text-sm text-muted">
                {edu.start} – {edu.end}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-sm font-medium uppercase tracking-widest text-accent">
          Skills
        </h2>
        <div className="mt-6 space-y-4">
          {resume.skills.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-medium text-foreground">
                {group.category}
              </h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
