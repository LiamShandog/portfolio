import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { profile } from "@/data/profile";

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
            <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-accent-soft px-4 py-1.5 text-sm font-medium text-accent">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
              />
              {profile.availability}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={`mailto:${profile.email}`}>Get in touch</Button>
              <Button href="/resume" variant="secondary">
                View resume
              </Button>
            </div>
          </div>

          {/* Environmental portrait. object-position keeps the face centred in
              the circular crop; tune the percentage if a different photo is used. */}
          <div className="shrink-0">
            <div className="relative h-40 w-40 overflow-hidden rounded-full ring-1 ring-border sm:h-48 sm:w-48">
              <Image
                src="/liam_photo.jpg"
                alt={`Portrait of ${profile.name}`}
                fill
                sizes="(min-width: 640px) 12rem, 10rem"
                className="object-cover object-[center_28%]"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
