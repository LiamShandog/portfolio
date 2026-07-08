/**
 * Join class names, dropping falsy values. Keeps component call sites tidy
 * without pulling in a class-merging dependency for our controlled usage.
 */
export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}
