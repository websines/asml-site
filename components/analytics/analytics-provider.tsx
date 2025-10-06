"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { pageview, trackEvents } from "./gtag";
import { trackCoreWebVitals } from "@/lib/performance";

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

export function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Track page views on route changes
    if (pathname) {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "");
      pageview(url);
    }
  }, [pathname, searchParams]);

  useEffect(() => {
    // Track Core Web Vitals and performance metrics
    if (typeof window !== "undefined") {
      trackCoreWebVitals();
    }

    // Track page load time
    const trackPerformance = () => {
      if (typeof window !== "undefined" && "performance" in window) {
        const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming;
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
          trackEvents.pageLoadTime(loadTime);
        }
      }
    };

    // Track when page is fully loaded
    if (document.readyState === "complete") {
      trackPerformance();
    } else {
      window.addEventListener("load", trackPerformance);
      return () => window.removeEventListener("load", trackPerformance);
    }
  }, []);

  return <>{children}</>;
}