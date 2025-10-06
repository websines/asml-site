// Performance monitoring utilities

export interface PerformanceMetrics {
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  fcp: number; // First Contentful Paint
  loadTime: number; // Page load time
}

export function trackCoreWebVitals() {
  if (typeof window === "undefined" || typeof PerformanceObserver === "undefined") {
    return;
  }

  const observeLCP = () => {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries() as LargestContentfulPaint[];
      const lastEntry = entries[entries.length - 1];
      if (!lastEntry) {
        return;
      }
      const lcp = lastEntry.startTime;

      window.gtag?.('event', 'lcp', {
        event_category: 'performance',
        value: Math.round(lcp),
        non_interaction: true,
      });

      console.log('LCP:', lcp);
    });

    observer.observe({ entryTypes: ['largest-contentful-paint'] });
  };

  const observeFID = () => {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries() as PerformanceEventTiming[];
      entries.forEach((entry) => {
        const fid = entry.processingStart - entry.startTime;

        window.gtag?.('event', 'fid', {
          event_category: 'performance',
          value: Math.round(fid),
          non_interaction: true,
        });

        console.log('FID:', fid);
      });
    });

    observer.observe({ entryTypes: ['first-input'] });
  };

  const observeCLS = () => {
    let clsValue = 0;
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries() as LayoutShift[];
      entries.forEach((entry) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
    });

    const reportCls = () => {
      window.gtag?.('event', 'cls', {
        event_category: 'performance',
        value: Math.round(clsValue * 1000),
        non_interaction: true,
      });

      console.log('CLS:', clsValue);
    };

    window.addEventListener('beforeunload', reportCls);
    observer.observe({ entryTypes: ['layout-shift'] });
  };

  const observeTTFB = () => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
    if (!navigation) {
      return;
    }
    const ttfb = navigation.responseStart - navigation.requestStart;

    window.gtag?.('event', 'ttfb', {
      event_category: 'performance',
      value: Math.round(ttfb),
      non_interaction: true,
    });

    console.log('TTFB:', ttfb);
  };

  const observeFCP = () => {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries() as PerformanceEntry[];
      const fcpEntry = entries.find((entry) => entry.name === 'first-contentful-paint');
      if (!fcpEntry) {
        return;
      }

      const fcp = fcpEntry.startTime;

      window.gtag?.('event', 'fcp', {
        event_category: 'performance',
        value: Math.round(fcp),
        non_interaction: true,
      });

      console.log('FCP:', fcp);
    });

    observer.observe({ entryTypes: ['paint'] });
  };

  try {
    observeLCP();
    observeFID();
    observeCLS();
    observeFCP();
    observeTTFB();
  } catch (error) {
    console.warn('Performance tracking initialization failed:', error);
  }
}

export function getPerformanceMetrics(): PerformanceMetrics {
  if (typeof window === 'undefined') {
    return {
      lcp: 0,
      fid: 0,
      cls: 0,
      ttfb: 0,
      fcp: 0,
      loadTime: 0,
    };
  }

  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;

  return {
    lcp: 0,
    fid: 0,
    cls: 0,
    ttfb: navigation ? navigation.responseStart - navigation.requestStart : 0,
    fcp: 0,
    loadTime: navigation ? navigation.loadEventEnd - navigation.navigationStart : 0,
  };
}

export function checkPerformanceHealth(metrics: PerformanceMetrics) {
  return {
    lcp: metrics.lcp < 2500 ? 'good' : metrics.lcp < 4000 ? 'needs-improvement' : 'poor',
    fid: metrics.fid < 100 ? 'good' : metrics.fid < 300 ? 'needs-improvement' : 'poor',
    cls: metrics.cls < 0.1 ? 'good' : metrics.cls < 0.25 ? 'needs-improvement' : 'poor',
    ttfb: metrics.ttfb < 800 ? 'good' : metrics.ttfb < 1800 ? 'needs-improvement' : 'poor',
    fcp: metrics.fcp < 1800 ? 'good' : metrics.fcp < 3000 ? 'needs-improvement' : 'poor',
  } as const;
}
