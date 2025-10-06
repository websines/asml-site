import { testimonials } from "@/content/home";
import { Section } from "@/components/section";

export function Testimonials() {
  return (
    <Section
      eyebrow="Regional Proof"
      title="Operators, founders, and resort partners trust the A&S collective."
      description="Testimonials span procurement teams, tourism operators, and founders who needed a single accountable partner."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.name}
            className="card-surface flex h-full flex-col gap-6 rounded-3xl border border-border/40 bg-surface/75 p-6"
          >
            <p className="text-base leading-relaxed text-foreground/90">
              “{testimonial.quote}”
            </p>
            <div className="mt-auto">
              <p className="text-sm font-semibold text-foreground">{testimonial.name}</p>
              <p className="text-xs uppercase tracking-[0.24em] text-muted/70">{testimonial.role}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
