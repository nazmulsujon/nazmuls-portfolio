import { Check } from "lucide-react";
import { services } from "@/lib/site";

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container-x">
        <span className="eyebrow">What I do</span>
        <h2 className="section-title">Build it right, then get it found</h2>
        <p className="section-lead">
          One person for the website and the search growth, so design, code and SEO work together instead of being fixed separately later.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <article key={s.title} className="card card-hover flex flex-col">
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{s.text}</p>
              <ul className="mt-5 space-y-2 text-sm">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <Check size={16} className="mt-0.5 shrink-0 text-mint" aria-hidden />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
