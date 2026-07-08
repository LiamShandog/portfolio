import { cn } from "@/lib/cn";

type SectionProps = React.HTMLAttributes<HTMLElement>;

/**
 * A page section with consistent vertical rhythm. Pass an `id` so the navbar's
 * anchor links can smooth-scroll to it.
 */
export function Section({ className, children, ...props }: SectionProps) {
  return (
    <section className={cn("scroll-mt-20 py-20 sm:py-28", className)} {...props}>
      {children}
    </section>
  );
}
