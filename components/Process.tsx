import { steps } from "@/lib/site";

export default function Process() {
  return (
    <section id="process" className="section">
      <div className="container-x">
        <span className="eyebrow">How we work</span>
        <h2 className="section-title">A simple process, no surprises</h2>

        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((p) => (
            <li key={p.step} className="card">
              <span className="font-display text-sm font-bold text-sky">{p.step}</span>
              <h3 className="mt-2 text-xl font-semibold">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{p.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
