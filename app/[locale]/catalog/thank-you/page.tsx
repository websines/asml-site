import Link from "next/link";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { withLocalePath, type Locale } from "@/lib/i18n";

type CatalogThankYouPageProps = {
  params: { locale: Locale };
};

export default function CatalogThankYouPage({ params }: CatalogThankYouPageProps) {
  const { locale } = params;

  return (
    <div className="space-y-20">
      <Section className="py-20">
        <div className="text-center space-y-8">
          <div className="text-6xl">🎉</div>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold text-foreground">
              Your Global Impact 2025 catalog is ready!
            </h1>
            <p className="text-xl text-muted max-w-2xl mx-auto">
              Check your email for the download link. If you don&rsquo;t see it within 5 minutes, check your spam folder or contact us directly.
            </p>
          </div>

          <div className="space-y-6">
            <Button asChild size="lg" className="text-lg px-8 py-4">
              <a
                href="https://cdn.aslmllc.net/catalog/global-impact-2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  // Track catalog download
                  if (typeof window !== "undefined" && window.gtag) {
                    window.gtag("event", "catalog_download", {
                      event_category: "engagement",
                      event_label: "thank_you_page",
                    });
                  }
                }}
              >
                Download Catalog Now
              </a>
            </Button>

            <div className="text-sm text-muted/80">
              <p>Download also sent to your email for safekeeping</p>
            </div>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="What&rsquo;s next?"
        title="Ready to explore specific solutions?"
        description="Now that you have the overview, dive deeper into the areas that matter most to your business."
        align="center"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
          <Link
            href={withLocalePath(locale, "/solutions/logistics")}
            className="card-surface p-6 rounded-2xl border border-border/40 bg-surface/80 hover:border-primary/50 transition-colors"
          >
            <h3 className="font-semibold text-foreground mb-2">Logistics & Freight</h3>
            <p className="text-sm text-muted">LCL/FCL shipping from China, Panama, and Miami to Caribbean destinations.</p>
          </Link>

          <Link
            href={withLocalePath(locale, "/solutions/global-sourcing")}
            className="card-surface p-6 rounded-2xl border border-border/40 bg-surface/80 hover:border-primary/50 transition-colors"
          >
            <h3 className="font-semibold text-foreground mb-2">Global Sourcing</h3>
            <p className="text-sm text-muted">Factory sourcing, quality control, and end-to-end procurement management.</p>
          </Link>

          <Link
            href={withLocalePath(locale, "/solutions/banking-llc")}
            className="card-surface p-6 rounded-2xl border border-border/40 bg-surface/80 hover:border-primary/50 transition-colors"
          >
            <h3 className="font-semibold text-foreground mb-2">LLC & Payments</h3>
            <p className="text-sm text-muted">US company formation, banking setup, and payment processing solutions.</p>
          </Link>

          <Link
            href={withLocalePath(locale, "/divisions")}
            className="card-surface p-6 rounded-2xl border border-border/40 bg-surface/80 hover:border-primary/50 transition-colors"
          >
            <h3 className="font-semibold text-foreground mb-2">Our Divisions</h3>
            <p className="text-sm text-muted">Explore our specialized divisions serving different markets and needs.</p>
          </Link>

          <Link
            href={withLocalePath(locale, "/case-studies")}
            className="card-surface p-6 rounded-2xl border border-border/40 bg-surface/80 hover:border-primary/50 transition-colors"
          >
            <h3 className="font-semibold text-foreground mb-2">Case Studies</h3>
            <p className="text-sm text-muted">Real results from Caribbean and LATAM businesses we&rsquo;ve helped scale.</p>
          </Link>

          <Link
            href={withLocalePath(locale, "/book-call")}
            className="card-surface p-6 rounded-2xl border border-border/40 bg-surface/80 hover:border-primary/50 transition-colors"
          >
            <h3 className="font-semibold text-foreground mb-2">Book a Call</h3>
            <p className="text-sm text-muted">Schedule a free discovery call to discuss your specific needs.</p>
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="Stay connected"
        title="Let&rsquo;s build something together"
        description="Have questions? Need clarification on any of our services? We&rsquo;re here to help."
        align="center"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild variant="outline">
            <Link href={withLocalePath(locale, "/contact")}>Contact Us</Link>
          </Button>
          <Button asChild variant="outline">
            <a
              href="https://wa.me/18681234567"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                // Track WhatsApp click
                if (typeof window !== "undefined" && window.gtag) {
                  window.gtag("event", "whatsapp_click", {
                    event_category: "contact",
                    event_label: "thank_you_page",
                  });
                }
              }}
            >
              WhatsApp
            </a>
          </Button>
        </div>
      </Section>
    </div>
  );
}