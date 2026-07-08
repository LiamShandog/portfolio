import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { profile } from "@/data/profile";

export function Contact() {
  return (
    <Section id="contact" className="bg-surface/60">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">
            Get in touch
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            I&apos;m open to new opportunities and always happy to talk. The
            fastest way to reach me is by email — I usually reply within a day.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href={`mailto:${profile.email}`}>Email me</Button>
            <span className="text-sm text-muted">{profile.email}</span>
          </div>

          <nav
            className="mt-8 flex flex-wrap gap-6 border-t border-border pt-6"
            aria-label="Elsewhere"
          >
            {profile.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-sm font-medium text-accent transition-colors hover:text-accent-hover"
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  social.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                {social.label}
              </a>
            ))}
          </nav>
        </div>
      </Container>
    </Section>
  );
}
