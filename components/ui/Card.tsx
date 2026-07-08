import { cn } from "@/lib/cn";

type CardProps = React.HTMLAttributes<HTMLDivElement>;

/** Rounded, softly bordered surface used for grouping content (e.g. projects). */
export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-surface p-6 shadow-sm",
        className,
      )}
      {...props}
    />
  );
}
