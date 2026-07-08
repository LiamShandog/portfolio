import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-white hover:bg-accent-hover",
  secondary:
    "border border-border bg-surface text-foreground hover:bg-accent-soft",
};

/** Shared class string, exported so links elsewhere can adopt the button look. */
export function buttonClasses(variant: Variant = "primary", className?: string) {
  return cn(base, variants[variant], className);
}

type LinkButtonProps = { variant?: Variant; href: string } & React.ComponentProps<
  typeof Link
>;
type NativeButtonProps = { variant?: Variant; href?: never } & React.ComponentProps<"button">;

/**
 * Polymorphic button: renders a Next `<Link>` when `href` is provided,
 * otherwise a native `<button>`. Same warm styling either way.
 */
export function Button(props: LinkButtonProps | NativeButtonProps) {
  if (props.href !== undefined) {
    const { variant = "primary", className, href, ...rest } = props;
    return (
      <Link href={href} className={buttonClasses(variant, className)} {...rest} />
    );
  }
  const { variant = "primary", className, href, ...rest } = props;
  void href;
  return <button className={buttonClasses(variant, className)} {...rest} />;
}
