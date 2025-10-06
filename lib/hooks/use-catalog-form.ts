"use client";

import { useState } from "react";

export interface CatalogFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  country: string;
  phone?: string;
  interests: string[];
  consent: boolean;
}

export interface FormErrors {
  [key: string]: string;
}

export function useCatalogForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const validateForm = (data: CatalogFormData): FormErrors => {
    const newErrors: FormErrors = {};

    // First name validation
    if (!data.firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (data.firstName.trim().length < 2) {
      newErrors.firstName = "First name must be at least 2 characters";
    }

    // Last name validation
    if (!data.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    } else if (data.lastName.trim().length < 2) {
      newErrors.lastName = "Last name must be at least 2 characters";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email.trim()) {
      newErrors.email = "Work email is required";
    } else if (!emailRegex.test(data.email)) {
      newErrors.email = "Please enter a valid email address";
    } else if (data.email.includes("+") || data.email.includes("..")) {
      newErrors.email = "Please use a valid work email address";
    }

    // Company validation
    if (!data.company.trim()) {
      newErrors.company = "Company name is required";
    } else if (data.company.trim().length < 2) {
      newErrors.company = "Company name must be at least 2 characters";
    }

    // Country validation
    if (!data.country.trim()) {
      newErrors.country = "Country is required";
    }

    // Phone validation (optional but if provided, must be valid)
    if (data.phone && data.phone.trim()) {
      const phoneRegex = /^\+?[\d\s\-\(\)]+$/;
      if (!phoneRegex.test(data.phone.replace(/\s/g, ""))) {
        newErrors.phone = "Please enter a valid phone number";
      }
    }

    // Interests validation
    if (data.interests.length === 0) {
      newErrors.interests = "Please select at least one area of interest";
    }

    // Consent validation
    if (!data.consent) {
      newErrors.consent = "You must agree to receive updates to access the catalog";
    }

    return newErrors;
  };

  const submitForm = async (data: CatalogFormData) => {
    const validationErrors = validateForm(data);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return { success: false, errors: validationErrors };
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      // Simulate API call - replace with actual endpoint
      const response = await fetch("/api/catalog-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          timestamp: new Date().toISOString(),
          source: "catalog_form",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      const result = await response.json();

      setIsSubmitted(true);

      // Track conversion across all platforms
      const { trackAllPlatforms } = await import("@/components/analytics/tracking-manager");
      trackAllPlatforms.catalogRequested();

      return { success: true, data: result };

    } catch (error) {
      console.error("Form submission error:", error);
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