import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { buttonClasses } from "@/components/ui/Button";
import { ResumeView } from "@/components/ResumeView";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `Resume — ${profile.name}`,
  description: `Resume and experience of ${profile.name}.`,
};

export default function ResumePage() {
  return (
    <Container>
      <div className="mx-auto max-w-3xl py-16 sm:py-20">
        <Link
          href="/"
          className="text-sm text-muted transition-colors hover:text-foreground"
        >
          ← Back to portfolio
        </Link>

        <header className="mt-6 flex flex-wrap items-end justify-between gap-4 border-b border-border pb-8">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {profile.name}
            </h1>
            <p className="mt-2 text-lg text-muted">{profile.role}</p>
            <p className="mt-1 text-sm text-muted">
              {profile.location} ·{" "}
              <a
                href={`mailto:${profile.email}`}
                className="text-accent hover:text-accent-hover"
              >
                {profile.email}
              </a>
            </p>
          </div>

          <a
            href={profile.resumePdf}
            download
            className={buttonClasses("primary")}
          >
            Download PDF
          </a>
        </header>

        <div className="mt-10">
          <ResumeView />
        </div>
      </div>
    </Container>
  );
}
