import type { Locale } from "../i18n.config";

export { i18n, isValidLocale } from "../i18n.config";
export type { Locale } from "../i18n.config";

export function withLocalePath(locale: Locale, path: string): string {
  if (!path) return `/${locale}`;

  if (path.startsWith("http") || path.startsWith("mailto:") || path.startsWith("tel:")) {
    return path;
  }

  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${normalized}`.replace(/\/{2,}/g, "/");
}
