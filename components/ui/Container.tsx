import { cn } from "@/lib/cn";

type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

/** Centered, width-constrained wrapper that sets the page's horizontal gutters. */
export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full max-w-5xl px-6 sm:px-8", className)}
      {...props}
    />
  );
}
