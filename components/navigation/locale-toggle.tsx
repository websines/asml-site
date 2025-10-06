"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { i18n, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

function buildLocalizedPath(pathname: string, locale: Locale) {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) {
    return `/${locale}`;
  }
  segments[0] = locale;
  return `/${segments.join("/")}`;
}

export function LocaleToggle({ currentLocale }: { currentLocale: Locale }) {
  const pathname = usePathname() || "/";

  return (
    <div className="flex items-center gap-1 rounded-full border border-border/60 px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-muted">
      {i18n.locales.map((locale) => {
        const isActive = locale === currentLocale;
        const href = buildLocalizedPath(pathname, locale as Locale);
        return (
          <Link
            key={locale}
            href={href}
            className={cn(
              "rounded-full px-2 py-0.5 transition",
              isActive
                ? "bg-primary text-primary-foreground"
                : "text-muted/60 hover:text-foreground",
            )}
            aria-current={isActive ? "true" : undefined}
          >
            {locale.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}
