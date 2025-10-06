"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { i18n, withLocalePath, type Locale } from "@/lib/i18n";

function getCurrentLocale(pathname: string): Locale {
  const segments = pathname.split("/").filter(Boolean);
  const possible = segments[0];
  if (possible && (i18n.locales as readonly string[]).includes(possible)) {
    return possible as Locale;
  }
  return i18n.defaultLocale;
}

export default function NotFound() {
  const pathname = usePathname() || "/";
  const locale = getCurrentLocale(pathname);

  return (
    <main className="container-xl flex min-h-[60dvh] flex-col items-center justify-center gap-6 text-center">
      <span className="text-xs font-semibold uppercase tracking-[0.32em] text-muted/70">
        404
      </span>
      <h1 className="text-4xl font-semibold text-foreground sm:text-5xl">
        The page you’re looking for is off the map.
      </h1>
      <p className="max-w-2xl text-sm leading-relaxed text-muted">
        Let’s get you back to the divisions, solutions, or a direct contact so the right team can assist.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Button asChild>
          <Link href={withLocalePath(locale, "/")}>Return home</Link>
        </Button>
        <Button asChild variant="secondary">
          <Link href={withLocalePath(locale, "/contact")}>Contact the team</Link>
        </Button>
      </div>
    </main>
  );
}
