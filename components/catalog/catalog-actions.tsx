"use client";

import { useCallback } from "react";
import { Button } from "@/components/ui/button";

type DownloadCatalogButtonProps = {
  href: string;
};

type WhatsappButtonProps = {
  href: string;
  label: string;
};

type GtagFn = (command: string, eventName: string, params: Record<string, unknown>) => void;

const getGtag = () => (window as typeof window & { gtag?: GtagFn }).gtag;

export function DownloadCatalogButton({ href }: DownloadCatalogButtonProps) {
  const handleClick = useCallback(() => {
    if (typeof window === "undefined") return;
    getGtag()?.("event", "catalog_download", {
      event_category: "engagement",
      event_label: "thank_you_page",
    });
  }, []);

  return (
    <Button asChild size="lg" className="text-lg px-8 py-4" onClick={handleClick}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        Download Catalog Now
      </a>
    </Button>
  );
}

export function WhatsappAnalyticsButton({ href, label }: WhatsappButtonProps) {
  const handleClick = useCallback(() => {
    if (typeof window === "undefined") return;
    getGtag()?.("event", "whatsapp_click", {
      event_category: "contact",
      event_label: "thank_you_page",
    });
  }, []);

  return (
    <Button asChild variant="outline" onClick={handleClick}>
      <a href={href} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
    </Button>
  );
}
