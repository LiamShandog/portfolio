import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { profile } from "@/data/profile";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function Hero() {
  return (
    <section className="pt-20 pb-16 sm:pt-28 sm:pb-24">
      <Container>
        <div className="flex flex-col items-start gap-12 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest text-accent">
              {profile.role}
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
              Hi, I&apos;m {profile.name}.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              {profile.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={`mailto:${profile.email}`}>Get in touch</Button>
              <Button href="/resume" variant="secondary">
                View résumé
              </Button>
            </div>
          </div>

          {/* Photo placeholder — swap in a real headshot later without layout change. */}
          <div className="shrink-0">
            <div
              className="flex h-40 w-40 items-center justify-center rounded-full bg-accent-soft ring-1 ring-border sm:h-48 sm:w-48"
              aria-hidden="true"
            >
              <span className="font-display text-5xl font-semibold text-accent">
                {initials(profile.name)}
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
