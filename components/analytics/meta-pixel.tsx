"use client";

import Script from "next/script";

const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

type MetaPixelFn = (command: string, ...args: unknown[]) => void;

declare global {
  interface Window {
    fbq?: MetaPixelFn;
  }
}

interface MetaPixelProps {
  trackPageView?: boolean;
}

export function MetaPixel({ trackPageView = true }: MetaPixelProps) {
  if (!META_PIXEL_ID) {
    if (process.env.NODE_ENV === "development") {
      console.warn("Meta Pixel missing NEXT_PUBLIC_META_PIXEL_ID");
    }
    return null;
  }

  return (
    <>
      <Script id="meta-pixel-init" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s){
            if (f.fbq) return;
            n = f.fbq = function(){
              n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
            };
            if (!f._fbq) f._fbq = n;
            n.push = n;
            n.loaded = true;
            n.version = '2.0';
            n.queue = [];
            t = b.createElement(e);
            t.async = true;
            t.src = v;
            s = b.getElementsByTagName(e)[0];
            if (s && s.parentNode) {
              s.parentNode.insertBefore(t, s);
            }
          }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
          window.fbq?.('init', '${META_PIXEL_ID}');
          ${trackPageView ? "window.fbq?.('track', 'PageView');" : ""}
        `}
      </Script>
      <noscript>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}

export const metaPixelEvents = {
  trackLead: () => {
    if (typeof window !== "undefined") {
      window.fbq?.('track', 'Lead');
    }
  },
  trackCompleteRegistration: () => {
    if (typeof window !== "undefined") {
      window.fbq?.('track', 'CompleteRegistration');
    }
  },
  trackViewContent: (contentName?: string) => {
    if (typeof window !== "undefined") {
      window.fbq?.('track', 'ViewContent', {
        content_name: contentName,
      });
    }
  },
  trackSearch: (searchString: string) => {
    if (typeof window !== "undefined") {
      window.fbq?.('track', 'Search', {
        search_string: searchString,
      });
    }
  },
  trackContact: () => {
    if (typeof window !== "undefined") {
      window.fbq?.('track', 'Contact');
    }
  },
  trackCustomEvent: (eventName: string, parameters?: Record<string, unknown>) => {
    if (typeof window !== "undefined") {
      window.fbq?.('trackCustom', eventName, parameters);
    }
  },
};
