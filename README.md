# Nazmul Hoque | Portfolio

Portfolio of Nazmul Hoque, an AI-powered web developer (Next.js and WordPress) and SEO specialist.
Live site: [nazmuls-portfolio.vercel.app](https://nazmuls-portfolio.vercel.app)

## Stack

- Next.js 15 (App Router), React 19, TypeScript
- Tailwind CSS 3
- `next/font` (Inter, Sora) and `next/image`
- Static pages, deployed on Vercel

## Run locally

```bash
yarn install
yarn dev        # http://localhost:3000
yarn lint       # type-check
yarn build      # production build
yarn start      # serve the production build
```

## Where things live

- `lib/site.ts`: all content (services, case study, projects, skills, FAQ, experience, contact details). Edit this file to change the copy.
- `components/`: page sections (Hero, Proof, Services, CaseStudy, Work, Skills, Process, About, Faq, Contact).
- `app/layout.tsx`: metadata, Open Graph, and JSON-LD schema (WebSite, Person, ProfessionalService, FAQPage).
- `app/sitemap.ts`, `app/robots.ts`, `app/opengraph-image.tsx`, `public/llms.txt`: search and AI crawler files.
- `public/case-studies/`: Google Search Console screenshots. Keep the client domain and name out of these images.

## Contact form

The form posts to [FormSubmit](https://formsubmit.co). The first submission sends an activation email to the address in `lib/site.ts`. Confirm it once and the form works.
