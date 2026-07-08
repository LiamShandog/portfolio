"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { buttonClasses } from "@/components/ui/Button";
import { profile } from "@/data/profile";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur">
      <Container>
        <nav
          className="flex h-16 items-center justify-between"
          aria-label="Primary"
        >
          <Link
            href="/"
            className="font-display text-lg font-semibold tracking-tight text-foreground"
          >
            {profile.name}
          </Link>

          {/* Desktop */}
          <div className="hidden items-center gap-8 sm:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <Link href="/resume" className={buttonClasses("secondary")}>
              Résumé
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-foreground sm:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {open ? (
                <>
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="6" y1="18" x2="18" y2="6" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile menu — only mounted when open so links aren't duplicated */}
        {open && (
          <div className="sm:hidden">
            <div className="flex flex-col gap-1 pb-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-md px-2 py-2 text-sm text-muted transition-colors hover:bg-accent-soft hover:text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Link
                href="/resume"
                className="rounded-md px-2 py-2 text-sm font-medium text-accent"
                onClick={() => setOpen(false)}
              >
                Résumé
              </Link>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
