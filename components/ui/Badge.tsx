import { cn } from "@/lib/cn";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement>;

/** Small pill used for skills and project tags. */
export function Badge({ className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-accent-soft px-3 py-1 text-xs font-medium text-accent",
        className,
      )}
      {...props}
    />
  );
}
