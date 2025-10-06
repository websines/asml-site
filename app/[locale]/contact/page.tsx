import Link from "next/link";
import { Section } from "@/components/section";
import { ContactForm } from "@/components/forms/contact-form";
import { contactChannels, callToActionPoints } from "@/content/contact";

export default function ContactPage() {
  return (
    <div className="space-y-20">
      <section className="container-xl grid gap-12 rounded-[32px] border border-border/40 bg-gradient-to-br from-surface to-surface-strong px-8 py-16 shadow-[0_50px_160px_rgba(15,23,42,0.45)] lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-primary">
            Contact
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
            Tell us what you need and we&rsquo;ll route the right division lead.
          </h1>
          <p className="text-lg leading-relaxed text-muted">
            Share a brief on logistics, sourcing, corporate structure, renewables, watersports, or events. Within one business day we&rsquo;ll respond with next steps and optional call slots.
          </p>
          <div className="grid gap-4 text-sm text-muted">
            {callToActionPoints.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/20 text-xs font-semibold text-primary">
                  ✓
                </span>
                <span>{point}</span>
              </div>
            ))}
          </div>
          <div className="rounded-3xl border border-border/40 bg-surface/80 p-6 text-sm text-muted">
            <p className="text-sm font-semibold text-foreground">Prefer WhatsApp?</p>
            <p className="mt-2">
              Tap the floating chat button any time or message <a className="text-primary" href="https://wa.me/18682171111">+1 (868) 217-1111</a> directly.
            </p>
          </div>
        </div>
        <div className="card-surface space-y-6 rounded-[32px] border border-border/40 bg-surface/80 p-6">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-foreground">Project intake form</h2>
            <p className="text-sm leading-relaxed text-muted">
              Fill out the form below and we&rsquo;ll route your inquiry to the appropriate division lead.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      <Section
        eyebrow="Division inboxes"
        title="Email the team directly if you already know where to route your scope."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {contactChannels.map((channel) => (
            <div key={channel.label} className="rounded-3xl border border-border/40 bg-surface/80 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted/70">
                {channel.label}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{channel.description}</p>
              <Link
                href={`mailto:${channel.email}`}
                className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.32em] text-primary"
              >
                {channel.email} →
              </Link>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
