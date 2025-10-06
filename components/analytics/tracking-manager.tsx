"use client";

import { GoogleAnalytics } from "./google-analytics";
import { MetaPixel } from "./meta-pixel";
import { LinkedInInsightTag, LinkedInInsightTagNoScript } from "./linkedin-insight";
import { trackEvents } from "./gtag";
import { metaPixelEvents } from "./meta-pixel";

interface TrackingManagerProps {
  trackPageView?: boolean;
}

export function TrackingManager({ trackPageView = true }: TrackingManagerProps) {
  return (
    <>
      <GoogleAnalytics />
      <MetaPixel trackPageView={trackPageView} />
      <LinkedInInsightTag />
      <LinkedInInsightTagNoScript />
    </>
  );
}

// Comprehensive event tracking that calls all platforms
export const trackAllPlatforms = {
  // Lead generation events
  leadGenerated: (source: string, details?: { linkedinConversionId?: number } & Record<string, unknown>) => {
    // Google Analytics
    trackEvents.contactFormSubmission(source);

    // Meta Pixel
    metaPixelEvents.trackLead();

    // LinkedIn (if conversion ID is provided)
    if (typeof details?.linkedinConversionId === 'number') {
      const conversionId = details.linkedinConversionId;
      void import('./linkedin-insight').then(({ linkedinEvents }) => {
        linkedinEvents.trackConversion(conversionId);
      });
    }
  },

  catalogRequested: () => {
    // Google Analytics
    trackEvents.catalogRequest();

    // Meta Pixel
    metaPixelEvents.trackCompleteRegistration();
  },

  catalogDownloaded: () => {
    // Google Analytics
    trackEvents.catalogDownload();

    // Meta Pixel
    metaPixelEvents.trackViewContent("Global Impact Catalog");
  },

  contactSubmitted: (interest: string) => {
    // Google Analytics
    trackEvents.contactFormSubmission(interest);

    // Meta Pixel
    metaPixelEvents.trackContact();
  },

  contentEngaged: (contentType: 'case_study' | 'solution', contentName: string) => {
    // Google Analytics
    if (contentType === "case_study") {
      trackEvents.caseStudyView(contentName);
    } else if (contentType === "solution") {
      trackEvents.solutionPageView(contentName);
    }

    // Meta Pixel
    metaPixelEvents.trackViewContent(contentName);
  },

  divisionClicked: (divisionName: string) => {
    // Google Analytics
    trackEvents.divisionClick(divisionName);

    // Meta Pixel
    metaPixelEvents.trackViewContent(divisionName);
  },

  whatsappClicked: (source: string) => {
    // Google Analytics
    trackEvents.whatsappClick(source);

    // Meta Pixel - custom event for WhatsApp
    metaPixelEvents.trackCustomEvent("WhatsAppClick", {
      source: source,
    });
  },

  searchPerformed: (searchTerm: string) => {
    // Meta Pixel
    metaPixelEvents.trackSearch(searchTerm);
  },

  bookCallClicked: () => {
    // Google Analytics
    trackEvents.bookCallClick();

    // Meta Pixel
    metaPixelEvents.trackLead();
  },

  // Custom business events
  highValueLead: (leadScore: number, source: string) => {
    // Google Analytics
    trackEvents.leadScoreUpdate(leadScore, source);

    // Meta Pixel - custom event for high value leads
    if (leadScore > 80) {
      metaPixelEvents.trackCustomEvent("HighValueLead", {
        lead_score: leadScore,
        source: source,
      });
    }
  },
};