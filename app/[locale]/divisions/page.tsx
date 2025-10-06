import Link from "next/link";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { divisionDetails } from "@/content/divisions";
import { withLocalePath, type Locale } from "@/lib/i18n";

export default async function DivisionsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <div className="space-y-20">
      <Section
        eyebrow="Divisions"
        title="Specialist brands unified under A&S Global Impact."
        description="Each division tackles a critical growth lever—from energy resilience to corporate structure—while operating from the same playbook and leadership bench."
      >
        <div className="card-surface grid gap-6 rounded-[32px] border border-border/40 bg-surface/80 p-8">
          <h3 className="text-2xl font-semibold text-foreground">
            Why the umbrella matters
          </h3>
          <div className="grid gap-4 text-sm leading-relaxed text-muted md:grid-cols-2">
            <p>
              Shared PMO, compliance, and analytics keep cross-division workstreams aligned. You get one accountable core that understands sourcing, logistics, corporate structure, and activation.
            </p>
            <p>
              Division leads collaborate on KPIs, share vendor networks, and route specialists as your project evolves. No more handoffs, just one integrated team.
            </p>
          </div>
        </div>
      </Section>

      <div className="container-xl grid gap-6 lg:grid-cols-2">
        {divisionDetails.map((division) => (
          <article
            key={division.name}
            className="card-surface flex h-full flex-col gap-6 rounded-3xl border border-border/40 bg-surface/80 p-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.32em] text-secondary">
                  Division
                </span>
                <span className="text-xs uppercase tracking-[0.24em] text-muted/70">
                  {division.location}
                </span>
              </div>
              <h3 className="text-2xl font-semibold text-foreground">{division.name}</h3>
              <p className="text-sm leading-relaxed text-muted">{division.summary}</p>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.24em] text-muted/70">
              {division.focus.map((item) => (
                <span key={item} className="rounded-full border border-border/40 px-3 py-1">
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-auto flex items-center justify-between border-t border-border/30 pt-4">
              <Link href={division.href} target="_blank" rel="noreferrer">
                <Button variant="secondary" size="sm">Visit site ↗</Button>
              </Link>
              <Link
                href={withLocalePath(locale, "/contact")}
                className="text-xs font-semibold uppercase tracking-[0.32em] text-primary transition hover:text-primary/80"
              >
                Route a project →
              </Link>
            </div>
          </article>
        ))}
      </div>

      <section className="container-xl overflow-hidden rounded-[32px] border border-border/40 bg-gradient-to-r from-secondary/15 via-surface to-primary/15 px-10 py-16">
        <div className="mx-auto flex max-w-4xl flex-col gap-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-muted/70">
            Division coordination
          </p>
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
            Activate multiple divisions in one scope—your PMO stays lean, your results compound.
          </h2>
          <p className="text-base leading-relaxed text-muted">
            Whether you are opening a new resort, securing bulk imports, or standing up a franchise, we pull in the right leads and deliver with shared accountability.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href={withLocalePath(locale, "/book-call")}>
              <Button size="lg">Book a discovery call</Button>
            </Link>
            <Link href={withLocalePath(locale, "/catalog")}>
              <Button variant="ghost" size="lg">Download catalog</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
