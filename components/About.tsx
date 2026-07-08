import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { profile } from "@/data/profile";

export function About() {
  return (
    <Section id="about" className="bg-surface/60">
      <Container>
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">
            About
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
            {profile.bio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <h3 className="mt-10 text-sm font-medium uppercase tracking-widest text-foreground">
            Skills
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {profile.skills.map((skill) => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
