import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <>
      <Hero />
      <About />

      {/* Placeholder preview — Task 6 replaces this with ProjectCard + live
          GitHub stats. */}
      <Section id="projects">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">
            Selected Work
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted">
            A few projects I&apos;m proud of.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Card key={project.slug} className="flex flex-col">
                <h3 className="text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {project.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Placeholder — Task 7 replaces this with the full Contact section. */}
      <Section id="contact" className="bg-surface/60">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground">
              Get in touch
            </h2>
            <p className="mt-4 text-lg text-muted">
              I&apos;m open to new opportunities and always happy to talk. The
              fastest way to reach me is by email.
            </p>
            <div className="mt-8">
              <Button href={`mailto:${profile.email}`}>
                Email {profile.name.split(" ")[0]}
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
