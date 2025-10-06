import Link from "next/link";
import { Button } from "@/components/ui/button";
import { withLocalePath, type Locale } from "@/lib/i18n";

export function ContactCTA({ locale }: { locale: Locale }) {
  return (
    <section className="container-xl ring-accent overflow-hidden rounded-[32px] border border-border/30 bg-gradient-to-r from-primary/25 via-surface/90 to-secondary/20 px-8 py-16 text-center shadow-[0_60px_160px_rgba(249,115,22,0.35)]">
      <div className="mx-auto max-w-3xl space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-primary">
          Ready to Act
        </p>
        <h2 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
          Book a discovery call and align the right division lead in under 48 hours.
        </h2>
        <p className="text-base leading-relaxed text-muted">
          Tell us where you need leverage—logistics, watersports, renewables, or corporate structure—and we will route you to the lead operator.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button asChild size="lg" className="shadow-[0_20px_45px_rgba(249,115,22,0.4)]">
            <Link href={withLocalePath(locale, "/book-call")}>Book a Discovery Call</Link>
          </Button>
          <Button asChild variant="secondary" size="lg" className="shadow-[0_20px_45px_rgba(34,211,238,0.25)]">
            <Link href={withLocalePath(locale, "/contact")}>Talk to the team</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
