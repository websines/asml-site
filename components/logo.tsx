import Link from "next/link";
import { withLocalePath, type Locale } from "@/lib/i18n";

type LogoProps = {
  locale?: Locale;
};

export function Logo({ locale }: LogoProps = {}) {
  const href = locale ? withLocalePath(locale, "/") : "/";
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.32em] text-muted/80 transition hover:text-foreground"
    >
      <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary/80 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20">A&S</span>
      <span className="font-medium tracking-[0.24em] text-xs text-muted/60">
        Global Impact
      </span>
    </Link>
  );
}
