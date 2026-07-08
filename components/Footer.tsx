import { Container } from "@/components/ui/Container";
import { profile } from "@/data/profile";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border/70 py-10">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <span className="font-display text-base font-semibold text-foreground">
            {profile.name}
          </span>
          <nav className="flex gap-6" aria-label="Social">
            {profile.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
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
          <span className="text-sm text-muted">
            © {year} {profile.name}
          </span>
        </div>
      </Container>
    </footer>
  );
}
