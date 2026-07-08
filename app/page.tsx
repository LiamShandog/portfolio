import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />

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
