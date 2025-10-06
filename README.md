# A&S Global Impact 2025 – Marketing Site

Next.js 15 marketing experience for A&S Logistique Mondiale Ltd LLC. Delivers a bilingual-ready layout, structured content, and lead funnels tuned for catalog downloads and discovery calls.

## Tech Stack
- Next.js 15 (App Router, Turbopack)
- React 19, TypeScript, Tailwind CSS 4 (inline theming)
- Server Actions/API Routes for mock lead capture
- Analytics integrations for GA4, Meta Pixel, LinkedIn Insight Tag

## Local Development
```bash
pnpm install  # or npm/yarn/bun
pnpm dev
```
Visit `http://localhost:3000`. The root path redirects to the default locale (`/en`).

### Available Scripts
- `pnpm dev` – run the dev server with Turbopack
- `pnpm build` – production build
- `pnpm start` – serve the production build
- `pnpm lint` – run ESLint (Next.js + TypeScript rules)

## Environment Variables
Copy `.env.example` to `.env.local` and supply live IDs when ready:

```
NEXT_PUBLIC_GA_MEASUREMENT_ID=
NEXT_PUBLIC_META_PIXEL_ID=
NEXT_PUBLIC_LINKEDIN_PARTNER_ID=
# Optional:
# NEXT_PUBLIC_HOTJAR_ID=
# NEXT_PUBLIC_CLARITY_ID=
```

These are read client-side by the analytics components. Keep placeholders during local development if tags are not yet provisioned.

## Project Structure Highlights
- `app/` – locale-aware routes (`/[locale]/**`), API endpoints under `app/api`
- `components/` – design system primitives, navigation, forms, analytics widgets
- `content/` – typed data sources for solutions, divisions, partners, case studies, etc.
- `lib/` – hooks and utilities (forms, i18n helpers, performance tracking)
- `public/assets/` – catalog artwork and shared imagery

## Forms & Lead Flow
- Catalog request form posts to `app/api/catalog-request/route.ts` (mock storage) and redirects to `/[locale]/catalog/thank-you`.
- Contact form posts to `app/api/contact/route.ts`, routes leads by division, and surfaces inline confirmation.
- Both hooks (`useCatalogForm`, `useContactForm`) handle validation and fire analytics events when enabled.

## Localization
Routing supports `en` and `es`. Current copy is English-only; add locale-specific strings in `content/*` and components before launching Spanish.

## Analytics
`components/analytics/*` centralises GA4, Meta Pixel, LinkedIn Insight Tag, and Core Web Vitals tracking. Tags only render when their environment variables are present to avoid noisy console errors in development.

## Performance & Accessibility
- Base theming and tokens defined in `app/globals.css`
- Optimized image wrapper (`components/ui/optimized-image`) and lazy section helper for deferred rendering
- Buttons and navigation components maintain focus styles and keyboard access

## Roadmap Notes
- Integrate with Payload CMS once API is available
- Replace mock API endpoints with real CRM/ESP hooks
- Translate copy for `es` locale
- Expand automated testing (unit + integration) once component interfaces stabilise
# asml-site
