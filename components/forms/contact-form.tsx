"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useContactForm, type ContactFormData } from "@/lib/hooks/use-contact-form";
import { contactChannels } from "@/content/contact";

const formFields = [
  {
    label: "Full Name",
    name: "name",
    type: "text",
    required: true,
    placeholder: "John Doe"
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    required: true,
    placeholder: "john@company.com"
  },
  {
    label: "Company",
    name: "company",
    type: "text",
    required: true,
    placeholder: "Acme Corporation"
  },
  {
    label: "Country",
    name: "country",
    type: "text",
    required: true,
    placeholder: "Trinidad & Tobago"
  },
];

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    country: "",
    interest: "",
    timeline: "",
    summary: "",
  });

  const { isSubmitting, isSubmitted, errors, submitForm } = useContactForm();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await submitForm(formData);

    if (result.success) {
      // Could redirect to a thank you page or show success message
      // For now, showing inline success message
      setTimeout(() => {
        // Reset form after 5 seconds
        setFormData({
          name: "",
          email: "",
          company: "",
          country: "",
          interest: "",
          timeline: "",
          summary: "",
        });
      }, 5000);
    }
  };

  if (isSubmitted) {
    return (
      <div className="rounded-3xl border border-border/40 bg-surface/70 p-6 text-center">
        <div className="mb-4 text-4xl">✨</div>
        <h3 className="text-xl font-semibold text-foreground mb-2">
          Message received!
        </h3>
        <p className="text-sm text-muted mb-4">
          We&rsquo;ll route your inquiry to the right division lead and respond within one business day.
        </p>
        <div className="text-xs text-muted/60">
          Reference ID: #{Date.now().toString().slice(-6)}
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      {formFields.map((field) => (
        <div key={field.name} className="grid gap-2">
          <label className="text-xs font-semibold uppercase tracking-[0.24em] text-muted/70">
            {field.label}
            {field.required && <span className="text-primary ml-1">*</span>}
          </label>
          <input
            type={field.type}
            name={field.name}
            value={formData[field.name as keyof ContactFormData] as string}
            onChange={handleInputChange}
            required={field.required}
            disabled={isSubmitting}
            placeholder={field.placeholder}
            className={`h-12 rounded-full border bg-surface px-5 text-sm text-foreground placeholder:text-muted/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary disabled:opacity-50 ${
              errors[field.name]
                ? "border-red-500/50 focus-visible:outline-red-500"
                : "border-border/50"
            }`}
          />
          {errors[field.name] && (
            <p className="text-xs text-red-400">{errors[field.name]}</p>
          )}
        </div>
      ))}

      <div className="grid gap-2">
        <label className="text-xs font-semibold uppercase tracking-[0.24em] text-muted/70">
          Interest Area <span className="text-primary ml-1">*</span>
        </label>
        <select
          name="interest"
          value={formData.interest}
          onChange={handleInputChange}
          required
          disabled={isSubmitting}
          className={`h-12 rounded-full border bg-surface px-5 text-sm text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary disabled:opacity-50 ${
            errors.interest
              ? "border-red-500/50 focus-visible:outline-red-500"
              : "border-border/50"
          }`}
        >
          <option value="">Select an interest</option>
          {contactChannels.map((channel) => (
            <option key={channel.label} value={channel.label}>
              {channel.label}
            </option>
          ))}
        </select>
        {errors.interest && (
          <p className="text-xs text-red-400">{errors.interest}</p>
        )}
      </div>

      <div className="grid gap-2">
        <label className="text-xs font-semibold uppercase tracking-[0.24em] text-muted/70">
          Project Timeline (optional)
        </label>
        <input
          type="text"
          name="timeline"
          value={formData.timeline}
          onChange={handleInputChange}
          disabled={isSubmitting}
          placeholder="e.g., Within 3 months, Q1 2025, ASAP"
          className="h-12 rounded-full border border-border/50 bg-surface px-5 text-sm text-foreground placeholder:text-muted/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary disabled:opacity-50"
        />
      </div>

      <div className="grid gap-2">
        <label className="text-xs font-semibold uppercase tracking-[0.24em] text-muted/70">
          Project Summary <span className="text-primary ml-1">*</span>
        </label>
        <textarea
          name="summary"
          value={formData.summary}
          onChange={handleInputChange}
          required
          disabled={isSubmitting}
          rows={4}
          placeholder="Share your goals, challenges, timeline, and any specific requirements. The more detail you provide, the better we can assist you."
          className={`rounded-3xl border bg-surface px-5 py-4 text-sm text-foreground placeholder:text-muted/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary disabled:opacity-50 resize-none ${
            errors.summary
              ? "border-red-500/50 focus-visible:outline-red-500"
              : "border-border/50"
          }`}
        />
        {errors.summary && (
          <p className="text-xs text-red-400">{errors.summary}</p>
        )}
        <div className="text-xs text-muted/60 text-right">
          {formData.summary.length}/2000 characters
        </div>
      </div>

      {errors.submit && (
        <div className="rounded-3xl border border-red-500/50 bg-red-500/10 p-4">
          <p className="text-sm text-red-400">{errors.submit}</p>
        </div>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Sending..." : "Send message"}
      </Button>

      <div className="text-xs text-muted/60 text-center">
        <p>We&rsquo;ll respond within one business day with next steps and optional call slots.</p>
        <p className="mt-1">For urgent matters: <a href="https://wa.me/18681234567" className="text-primary">WhatsApp us</a></p>
      </div>
    </form>
  );
}