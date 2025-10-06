import Link from "next/link";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { withLocalePath, type Locale } from "@/lib/i18n";

export default async function BookCallPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <div className="space-y-20">
      <section className="container-xl overflow-hidden rounded-[32px] border border-border/40 bg-gradient-to-br from-surface to-surface-strong px-8 py-16 shadow-[0_50px_160px_rgba(15,23,42,0.45)]">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-primary">
              Book a call
            </p>
            <h1 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
              Schedule a discovery session with the right division lead.
            </h1>
            <p className="text-lg leading-relaxed text-muted">
              Pick a time that works for your timezone. After you submit the contact form, we’ll send a curated link (Calendly/OnceHub) based on your project focus.
            </p>
            <div className="rounded-3xl border border-border/40 bg-surface/80 p-6 text-sm text-muted">
              <p className="text-sm font-semibold text-foreground">How it works:</p>
              <ol className="mt-3 list-decimal space-y-2 pl-5">
                <li>Submit the contact form so we can route you internally.</li>
                <li>Receive a call booking link with suggested division leads.</li>
                <li>Join a 30-minute strategy session to map scope and next steps.</li>
              </ol>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href={withLocalePath(locale, "/contact")}>
                <Button size="lg">Submit project brief</Button>
              </Link>
              <Link href={withLocalePath(locale, "/catalog")}>
                <Button variant="secondary" size="lg">Download catalog</Button>
              </Link>
            </div>
          </div>
          <div className="card-surface space-y-4 rounded-[32px] border border-border/40 bg-surface/80 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-muted/70">
              Scheduling embed placeholder
            </p>
            <div className="flex aspect-[3/4] items-center justify-center rounded-3xl border border-dashed border-border/40 bg-surface/50 text-center text-sm text-muted">
              Calendly/OnceHub embed will render here in the integration sprint.
            </div>
            <p className="text-xs uppercase tracking-[0.24em] text-muted/60">
              Time zones auto-detect to America/Port_of_Spain by default.
            </p>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Need immediate assistance?"
        title="WhatsApp us or email hello@aslmllc.net and we’ll reply within 6 hours."
        align="center"
      >
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted">
          <span className="rounded-full border border-border/40 px-4 py-2 text-xs uppercase tracking-[0.32em] text-muted/70">
            WhatsApp: +1 (868) 217-1111
          </span>
          <span className="rounded-full border border-border/40 px-4 py-2 text-xs uppercase tracking-[0.32em] text-muted/70">
            Email: hello@aslmllc.net
          </span>
        </div>
      </Section>
    </div>
  );
}
