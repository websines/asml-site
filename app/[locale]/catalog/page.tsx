import Image from "next/image";
import { leadMagnet } from "@/content/home";
import { Section } from "@/components/section";
import { CatalogForm } from "@/components/forms/catalog-form";
import type { Locale } from "../../../i18n.config";

type CatalogPageProps = {
  params: Promise<{ locale: Locale }>;
};

export default async function CatalogPage({ params }: CatalogPageProps) {
  const { locale } = await params;
  return (
    <div className="space-y-20">
      <section className="container-xl grid gap-12 rounded-[32px] border border-border/40 bg-gradient-to-br from-surface via-surface-strong to-surface px-8 py-16 shadow-[0_50px_160px_rgba(15,23,42,0.45)] lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-secondary">
            Lead Magnet
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
            Access the Global Impact 2025 catalog.
          </h1>
          <p className="text-lg leading-relaxed text-muted">
            Get sourcing playbooks, logistics lanes, LLC and payments stack guidelines, watersports frameworks, and launch checklists tailored for Caribbean and LATAM operators.
          </p>
          <ul className="grid gap-3 text-sm leading-relaxed text-muted">
            {leadMagnet.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-semibold text-primary">
                  ✓
                </span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
          <p className="text-sm text-muted/80">
            85% of operators who opt in download within minutes. We&rsquo;ll resend the link anytime—just reply to the confirmation email.
          </p>
        </div>
        <div className="card-surface space-y-6 rounded-[32px] border border-border/40 bg-surface/80 p-6">
          <div className="space-y-2 text-center">
            <h2 className="text-xl font-semibold text-foreground">Request the catalog</h2>
            <p className="text-sm leading-relaxed text-muted">
              Fill out the form below to get instant access to the Global Impact 2025 catalog.
            </p>
          </div>
          <CatalogForm locale={locale} />
        </div>
      </section>

      <Section
        eyebrow="Peek inside"
        title="Preview the catalog layout."
        description="A visual-first format with KPIs, supplier maps, launch timelines, and pricing frameworks."
        align="center"
      >
        <div className="mx-auto max-w-3xl">
          <div className="relative mx-auto aspect-[3/4] w-[280px] overflow-hidden rounded-[28px] border border-border/40 bg-surface/80 shadow-[0_45px_120px_rgba(249,115,22,0.25)]">
            <Image src={leadMagnet.assetPreview} alt="Catalog preview" fill className="object-cover" />
          </div>
        </div>
      </Section>
    </div>
  );
}
