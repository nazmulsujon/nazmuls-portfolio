import Image from "next/image";
import { Check } from "lucide-react";
import { caseStudy } from "@/lib/site";

export default function CaseStudy() {
  return (
    <section id="case-study" className="section border-y border-line bg-surface/50">
      <div className="container-x">
        <span className="eyebrow">{caseStudy.tag}</span>
        <h2 className="section-title max-w-3xl">{caseStudy.title}</h2>
        <p className="section-lead">{caseStudy.intro}</p>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h3 className="text-lg font-semibold">What I did</h3>
            <ul className="mt-4 space-y-3">
              {caseStudy.did.map((d) => (
                <li key={d} className="flex items-start gap-3 text-sm leading-relaxed md:text-base">
                  <Check size={18} className="mt-1 shrink-0 text-mint" aria-hidden />
                  <span>{d}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-10 text-lg font-semibold">The results</h3>
            <dl className="mt-4 grid grid-cols-2 gap-3">
              {caseStudy.results.map((r) => (
                <div key={r.label} className="card p-4">
                  <dt className="sr-only">{r.label}</dt>
                  <dd className="font-display text-2xl font-extrabold text-white">{r.value}</dd>
                  <p className="mt-1 text-xs leading-snug text-muted">{r.label}</p>
                </div>
              ))}
            </dl>
          </div>

          <div className="space-y-5">
            <figure className="overflow-hidden rounded-2xl border border-line bg-white">
              <Image
                src="/case-studies/organic-12-months.png"
                alt="Google Search Console chart showing 7.21K clicks, 415K impressions and an average position of 9.8 over 12 months"
                width={1519}
                height={470}
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="h-auto w-full"
              />
              <figcaption className="border-t border-line bg-surface px-4 py-2 text-xs text-muted">Last 12 months, organic search</figcaption>
            </figure>
            <figure className="overflow-hidden rounded-2xl border border-line bg-white">
              <Image
                src="/case-studies/year-on-year.png"
                alt="Search Console comparison: clicks grew from 232 to 1.64K and impressions from 8.98K to 105K versus the same period a year earlier"
                width={778}
                height={456}
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="h-auto w-full"
              />
              <figcaption className="border-t border-line bg-surface px-4 py-2 text-xs text-muted">Same 3 months, a year apart (dashed line = previous year)</figcaption>
            </figure>
          </div>
        </div>

        <p className="mt-8 text-xs text-muted">{caseStudy.note}</p>
      </div>
    </section>
  );
}
