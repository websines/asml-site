import Link from "next/link";
import Image from "next/image";
import { leadMagnet } from "@/content/home";
import { Button } from "@/components/ui/button";
import { withLocalePath, type Locale } from "@/lib/i18n";

export function LeadMagnetBlock({ locale }: { locale: Locale }) {
  return (
    <section className="ring-accent relative overflow-hidden rounded-[32px] border border-border/30 bg-gradient-to-br from-surface-strong/90 via-surface to-surface-strong/90 px-6 py-14 shadow-[0_70px_180px_rgba(15,23,42,0.5)] sm:px-10 lg:px-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.18),transparent_60%)]" aria-hidden />
      <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-center">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-secondary">
            Lead Magnet
          </p>
          <h3 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
            {leadMagnet.title}
          </h3>
          <ul className="grid gap-3 text-sm leading-relaxed text-muted">
            {leadMagnet.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-secondary/20 text-xs font-semibold text-secondary">
                  ✓
                </span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap items-center gap-4">
            <Button asChild>
              <Link href={withLocalePath(locale, "/catalog")}>Access Catalog</Link>
            </Button>
            <span className="text-xs uppercase tracking-[0.32em] text-muted/70">
              85%+ completion rate
            </span>
          </div>
        </div>
        <div className="relative">
          <div className="relative mx-auto aspect-[3/4] w-[260px] overflow-hidden rounded-[28px] border border-border/50 bg-surface/80 shadow-[0_45px_120px_rgba(34,211,238,0.25)]">
            <Image
              src={leadMagnet.assetPreview}
              alt="Global Impact Catalog preview"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
