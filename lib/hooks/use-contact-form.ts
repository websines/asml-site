"use client";

import { useState } from "react";

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  country: string;
  interest: string;
  timeline: string;
  summary: string;
}

export interface FormErrors {
  [key: string]: string;
}

export function useContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (data: ContactFormData): FormErrors => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!data.name.trim()) {
      newErrors.name = "Full name is required";
    } else if (data.name.trim().length < 3) {
      newErrors.name = "Please enter your full name";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(data.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Company validation
    if (!data.company.trim()) {
      newErrors.company = "Company name is required";
    }

    // Country validation
    if (!data.country.trim()) {
      newErrors.country = "Country is required";
    }

    // Interest validation
    if (!data.interest || data.interest === "Select an interest") {
      newErrors.interest = "Please select an area of interest";
    }

    // Summary validation
    if (!data.summary.trim()) {
      newErrors.summary = "Project summary is required";
    } else if (data.summary.trim().length < 20) {
      newErrors.summary = "Please provide more details about your project (at least 20 characters)";
    } else if (data.summary.trim().length > 2000) {
      newErrors.summary = "Project summary must be less than 2000 characters";
    }

    return newErrors;
  };

  const submitForm = async (data: ContactFormData) => {
    const validationErrors = validateForm(data);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return { success: false, errors: validationErrors };
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      // Simulate API call
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          timestamp: new Date().toISOString(),
          source: "contact_form",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      const result = await response.json();
      setIsSubmitted(true);

      // Track conversion across all platforms
      const { trackAllPlatforms } = await import("@/components/analytics/tracking-manager");
      trackAllPlatforms.contactSubmitted(data.interest);

      return { success: true, data: result };

    } catch (error) {
      console.error("Contact form submission error:", error);
      const submitError: FormErrors = {
        submit: "Failed to submit form. Please try again or contact us directly.",
      };
      setErrors(submitError);
      return { success: false, errors: submitError };
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setErrors({});
    setIsSubmitting(false);
  };

  return {
    isSubmitting,
    isSubmitted,
    errors,
    submitForm,
    resetForm,
  };
}