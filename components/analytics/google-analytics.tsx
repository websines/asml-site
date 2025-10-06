"use client";

import Script from "next/script";
import { GA_MEASUREMENT_ID } from "./gtag";

export function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) {
    console.warn("Google Analytics measurement ID not configured");
    return null;
  }

  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              debug_mode: ${process.env.NODE_ENV === 'development'},
              custom_map: {
                'custom_parameter_1': 'lead_source',
                'custom_parameter_2': 'user_type',
              }
            });
          `,
        }}
      />
    </>
  );
}