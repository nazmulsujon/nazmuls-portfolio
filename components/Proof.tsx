import { stats } from "@/lib/site";

export default function Proof() {
  return (
    <section aria-label="Results at a glance" className="border-y border-line bg-surface/60">
      <div className="container-x grid grid-cols-2 gap-y-8 py-10 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="px-2 text-center md:border-l md:border-line md:first:border-l-0">
            <p className="font-display text-4xl font-extrabold text-white md:text-5xl">{s.value}</p>
            <p className="mt-1 text-sm font-medium text-body">{s.label}</p>
            <p className="text-xs text-muted">{s.note}</p>
          </div>
        ))}
      </div>
      <p className="container-x pb-6 text-center text-xs text-muted">
        Results from one local business website I built and optimized. Source: Google Search Console. 100% organic, no paid ads.
      </p>
    </section>
  );
}
