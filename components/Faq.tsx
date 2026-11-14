import { faqs } from "@/lib/site";

export default function Faq() {
  return (
    <section id="faq" className="section">
      <div className="container-x max-w-3xl">
        <span className="eyebrow">FAQ</span>
        <h2 className="section-title">Questions clients ask</h2>

        <div className="mt-10 divide-y divide-line rounded-2xl border border-line bg-card/50">
          {faqs.map((f) => (
            <details key={f.q} className="group p-5 md:p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-white marker:hidden">
                {f.q}
                <span className="text-sky transition-transform group-open:rotate-45" aria-hidden>
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
