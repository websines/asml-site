import Link from "next/link";
import { heroCopy, stats } from "@/content/home";
import { Button } from "@/components/ui/button";
import { withLocalePath, type Locale } from "@/lib/i18n";

type HeroProps = {
  locale: Locale;
};

export function Hero({ locale }: HeroProps) {
  const primaryHref = withLocalePath(locale, heroCopy.primaryCta.href);
  const secondaryHref = withLocalePath(locale, heroCopy.secondaryCta.href);

  return (
    <section className="ring-accent relative overflow-hidden rounded-[36px] border border-border/30 bg-gradient-to-br from-surface/95 via-surface-strong/90 to-surface/95 px-6 py-16 shadow-[0_80px_200px_rgba(15,23,42,0.55)] sm:px-10 md:py-20 lg:px-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.25),transparent_55%)]" aria-hidden />
      <div className="relative grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px]">
        <div className="space-y-8">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-primary">
            {heroCopy.eyebrow}
          </p>
          <h1 className="text-gradient bg-clip-text text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-[58px] lg:leading-[1.05]">
            {heroCopy.headline}
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-muted">
            {heroCopy.subheadline}
          </p>
          <div className="grid gap-4 rounded-3xl border border-border/40 bg-surface/60 p-4 shadow-inner shadow-black/10 sm:flex sm:items-center sm:gap-3">
            <form className="flex w-full flex-col gap-3 sm:flex-row">
              <label className="sr-only" htmlFor="hero-email">
                Work email
              </label>
              <input
                id="hero-email"
                name="email"
                type="email"
                placeholder="Work email"
                className="h-12 w-full rounded-full border border-border/60 bg-surface-strong/70 px-5 text-sm text-foreground placeholder:text-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                required
                disabled
              />
              <Button asChild className="w-full sm:w-max">
                <Link href={primaryHref}>{heroCopy.primaryCta.label}</Link>
              </Button>
            </form>
            <div className="flex items-center gap-3 text-xs text-muted">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 font-semibold text-primary">
                ✓
              </span>
              <p className="max-w-[260px] leading-relaxed text-muted">
                Catalog delivery unlocks within minutes. Download link also lands in your inbox.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4 text-sm text-muted">
              <span className="text-xs font-semibold uppercase tracking-[0.32em] text-muted/70">
                Trusted by
              </span>
              <div className="flex flex-wrap gap-3 text-sm text-muted/70">
                {heroCopy.trustLogos.map((logo) => (
                  <span
                    key={logo}
                    className="rounded-full border border-border/30 px-3 py-1 text-xs uppercase tracking-[0.24em] text-muted/70"
                  >
                    {logo}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-muted">
              {stats.slice(0, 2).map((item) => (
                <div key={item.label}>
                  <p className="text-2xl font-semibold text-foreground">{item.value}</p>
                  <p className="text-xs uppercase tracking-[0.24em] text-muted/70">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-6 rounded-[26px] border border-border/30 bg-surface/70 p-6 backdrop-blur">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-muted/70">
            Divisions Snapshot
          </p>
          <div className="space-y-4 text-sm text-muted">
            <p className="rounded-2xl border border-border/40 bg-surface p-4 text-sm leading-relaxed text-muted">
              &ldquo;The differentiator is how they connect sourcing, logistics, and activation into one accountable team.&rdquo;
            </p>
            <div className="grid gap-3">
              {stats.slice(2).map((item) => (
                <div key={item.label} className="rounded-2xl border border-border/40 bg-surface/70 p-4">
                  <p className="text-xl font-semibold text-foreground">{item.value}</p>
                  <p className="text-xs uppercase tracking-[0.24em] text-muted/70">{item.label}</p>
                </div>
              ))}
            </div>
            <Button asChild variant="secondary" size="sm" className="w-full">
              <Link href={secondaryHref}>{heroCopy.secondaryCta.label}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
