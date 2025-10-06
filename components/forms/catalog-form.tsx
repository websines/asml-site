"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useCatalogForm, type CatalogFormData } from "@/lib/hooks/use-catalog-form";
import { withLocalePath, type Locale } from "@/lib/i18n";

const formFields = [
  { label: "First Name", name: "firstName", type: "text", required: true, placeholder: "John" },
  { label: "Last Name", name: "lastName", type: "text", required: true, placeholder: "Doe" },
  { label: "Work Email", name: "email", type: "email", required: true, placeholder: "john@company.com" },
  { label: "Company", name: "company", type: "text", required: true, placeholder: "Acme Corp" },
  { label: "Country", name: "country", type: "text", required: true, placeholder: "Trinidad & Tobago" },
  { label: "Phone (optional)", name: "phone", type: "tel", required: false, placeholder: "+1 868-123-4567" },
];

const interestOptions = [
  "Logistics & freight",
  "Global sourcing",
  "LLC & payments",
  "Events & brand activation",
  "Renewables & watersports",
  "Vehicle imports",
];

type CatalogFormProps = {
  locale: Locale;
};

export function CatalogForm({ locale }: CatalogFormProps) {
  const [formData, setFormData] = useState<CatalogFormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    country: "",
    phone: "",
    interests: [],
    consent: false,
  });

  const { isSubmitting, isSubmitted, errors, submitForm } = useCatalogForm();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      if (name === "consent") {
        setFormData((prev) => ({ ...prev, consent: checked }));
      } else {
        // Handle interest checkboxes
        const interest = value;
        setFormData((prev) => ({
          ...prev,
          interests: checked
            ? [...prev.interests, interest]
            : prev.interests.filter(item => item !== interest)
        }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await submitForm(formData);

    if (result.success) {
      // Redirect to thank you page or show success message
      // The API will handle the catalog download
      window.location.href = withLocalePath(locale, "/catalog/thank-you");
    }
  };

  if (isSubmitted) {
    return (
      <div className="rounded-3xl border border-border/40 bg-surface/70 p-6 text-center">
        <div className="mb-4 text-4xl">🎉</div>
        <h3 className="text-xl font-semibold text-foreground mb-2">
          Almost there!
        </h3>
        <p className="text-sm text-muted mb-4">
          Check your email to confirm and get instant access to the Global Impact 2025 catalog.
        </p>
        <div className="text-xs text-muted/60">
          Didn&rsquo;t receive it? Check your spam folder or reply to this message.
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
            value={formData[field.name as keyof CatalogFormData] as string}
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

      <fieldset className="rounded-3xl border border-border/40 bg-surface/70 p-4">
        <legend className="text-xs font-semibold uppercase tracking-[0.24em] text-muted/70">
          Areas of Interest <span className="text-primary ml-1">*</span>
        </legend>
        <div className="mt-3 grid gap-2 text-sm text-muted">
          {interestOptions.map((interest) => (
            <label key={interest} className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="interests"
                value={interest}
                checked={formData.interests.includes(interest)}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className="h-4 w-4 rounded border-border/40 bg-surface text-primary focus:ring-primary disabled:opacity-50"
              />
              <span>{interest}</span>
            </label>
          ))}
        </div>
        {errors.interests && (
          <p className="mt-2 text-xs text-red-400">{errors.interests}</p>
        )}
      </fieldset>

      <label className="flex items-start gap-3 text-sm text-muted cursor-pointer">
        <input
          type="checkbox"
          name="consent"
          checked={formData.consent}
          onChange={handleInputChange}
          disabled={isSubmitting}
          className="mt-1 h-4 w-4 rounded border-border/40 bg-surface text-primary focus:ring-primary disabled:opacity-50"
        />
        <span className="leading-relaxed">
          I agree to receive updates from A&S Logistique Mondiale Ltd LLC and understand I can unsubscribe anytime.
          <span className="text-primary ml-1">*</span>
        </span>
      </label>
      {errors.consent && (
        <p className="text-xs text-red-400">{errors.consent}</p>
      )}

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
        {isSubmitting ? "Processing..." : "Send me the catalog"}
      </Button>

      <div className="rounded-3xl border border-border/40 bg-surface/70 p-4 text-sm text-muted">
        <p className="font-semibold text-foreground">What happens next?</p>
        <ol className="mt-2 list-decimal space-y-2 pl-5 text-xs">
          <li>Confirmation email arrives instantly (check spam folder)</li>
          <li>Catalog download unlocks on the thank-you page</li>
          <li>Follow-up sequence with case studies and division guides</li>
        </ol>
      </div>

      <div className="text-xs text-muted/60 text-center">
        <p>We respect your privacy. Unsubscribe anytime.</p>
        <p className="mt-1">85%+ completion rate • Trusted by Caribbean & LATAM operators</p>
      </div>
    </form>
  );
}