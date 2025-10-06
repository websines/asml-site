// Google Analytics 4 gtag setup
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

type GtagConfig = Record<string, unknown>;

type ConfigParams = ['config', string, GtagConfig?];
type EventParams = ['event', string, GtagConfig?];
type JsParams = ['js', Date];
type SetParams = ['set', GtagConfig];
export type GtagParams = ConfigParams | EventParams | JsParams | SetParams;

type GtagApi = (...args: GtagParams) => void;

declare global {
  interface Window {
    gtag?: GtagApi;
    dataLayer?: GtagParams[];
  }
}

export function gtag(...args: GtagParams) {
  if (typeof window === 'undefined') {
    return;
  }

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(args);
}

export function pageview(url: string) {
  if (typeof window !== 'undefined' && GA_MEASUREMENT_ID) {
    gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
      debug_mode: process.env.NODE_ENV === 'development',
    });
  }
}

export interface GTagEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  non_interaction?: boolean;
}

export function event({ action, category, label, value, non_interaction }: GTagEvent) {
  if (typeof window !== 'undefined' && GA_MEASUREMENT_ID) {
    gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
      non_interaction: non_interaction,
    });
  }
}

export const trackEvents = {
  catalogRequest: () => event({
    action: 'catalog_request',
    category: 'lead_generation',
    label: 'catalog_form',
  }),
  catalogDownload: () => event({
    action: 'catalog_download',
    category: 'engagement',
    label: 'catalog_pdf',
  }),
  contactFormSubmission: (interest: string) => event({
    action: 'contact_form_submission',
    category: 'lead_generation',
    label: interest,
  }),
  bookCallClick: () => event({
    action: 'book_call_click',
    category: 'lead_generation',
    label: 'calendly',
  }),
  whatsappClick: (source: string) => event({
    action: 'whatsapp_click',
    category: 'contact',
    label: source,
  }),
  divisionClick: (division: string) => event({
    action: 'division_click',
    category: 'navigation',
    label: division,
  }),
  caseStudyView: (caseStudy: string) => event({
    action: 'case_study_view',
    category: 'content',
    label: caseStudy,
  }),
  solutionPageView: (solution: string) => event({
    action: 'solution_page_view',
    category: 'content',
    label: solution,
  }),
  localeToggle: (locale: string) => event({
    action: 'locale_toggle',
    category: 'user_interaction',
    label: locale,
  }),
  navigationClick: (item: string) => event({
    action: 'navigation_click',
    category: 'user_interaction',
    label: item,
  }),
  mobileMenuToggle: (state: 'open' | 'close') => event({
    action: 'mobile_menu_toggle',
    category: 'user_interaction',
    label: state,
  }),
  pageLoadTime: (loadTime: number) => event({
    action: 'page_load_time',
    category: 'performance',
    value: Math.round(loadTime),
    non_interaction: true,
  }),
  leadScoreUpdate: (score: number, source: string) => event({
    action: 'lead_score_update',
    category: 'conversion',
    label: source,
    value: score,
  }),
};
