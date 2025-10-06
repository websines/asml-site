"use client";

import Script from "next/script";

const LINKEDIN_PARTNER_ID = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID;

type LinkedInTracker = (command: 'track', payload: { conversion_id: number }) => void;

declare global {
  interface Window {
    lintrk?: LinkedInTracker;
    _linkedin_data_partner_ids?: string[];
  }
}

export function LinkedInInsightTag() {
  if (!LINKEDIN_PARTNER_ID) {
    if (process.env.NODE_ENV === "development") {
      console.warn("LinkedIn Insight Tag missing NEXT_PUBLIC_LINKEDIN_PARTNER_ID");
    }
    return null;
  }

  return (
    <>
      <Script
        id="linkedin-insight-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push("${LINKEDIN_PARTNER_ID}");
          `,
        }}
      />
      <Script
        id="linkedin-insight-loader"
        strategy="afterInteractive"
        src="https://snap.licdn.com/li.lms-analytics/insight.min.js"
      />
    </>
  );
}

export function LinkedInInsightTagNoScript() {
  if (!LINKEDIN_PARTNER_ID) return null;

  return (
    <noscript>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        alt=""
        src={`https://px.ads.linkedin.com/collect/?pid=${LINKEDIN_PARTNER_ID}&fmt=gif`}
      />
    </noscript>
  );
}

export const linkedinEvents = {
  trackConversion: (conversionId: number) => {
    if (typeof window !== "undefined") {
      window.lintrk?.('track', { conversion_id: conversionId });
    }
  },
};
