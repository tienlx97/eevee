import type { ThemeContextValue } from '@eevee/react-shared-contexts';

export function mergeThemes(a: ThemeContextValue, b: ThemeContextValue): ThemeContextValue {
  // Merge impacts perf: we should like to avoid it if it's possible
  if (a && b) {
    return { ...a, ...b };
  }

  if (a) {
    return a;
  }

  return b;
}
