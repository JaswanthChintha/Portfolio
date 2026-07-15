type ClassValue = string | number | boolean | undefined | null;

/** Simple class name merger without clsx dependency — keeps bundle lean */
export function cn(...classes: ClassValue[]): string {
  return classes
    .flat()
    .filter(Boolean)
    .join(' ');
}

/** Stagger delay helper for animation sequences */
export function staggerDelay(index: number, base = 0.1): number {
  return base * index;
}
