import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import { projects, site } from "@/lib/site";

export default function Work() {
  return (
    <section id="work" className="section">
      <div className="container-x">
        <span className="eyebrow">Selected work</span>
        <h2 className="section-title">Websites and web apps I have built</h2>
        <p className="section-lead">Live projects you can open and try. More on GitHub.</p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-6">
          {projects.map((p, index) => {
            const top = index < 2;
            const hasCaseStudy = "featured" in p && p.featured;
            return (
              <article key={p.name} className={`card card-hover group overflow-hidden p-0 ${top ? "lg:col-span-3" : "lg:col-span-2"}`}>
                <div className={`relative overflow-hidden bg-surface ${top ? "aspect-[11/5]" : "aspect-[16/10]"}`}>
                  <Image
                    src={p.image}
                    alt={`${p.name} website screenshot`}
                    fill
                    sizes={top ? "(min-width: 1024px) 50vw, (min-width: 768px) 45vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 768px) 45vw, 100vw"}
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-sky">{p.kind}</p>
                  <h3 className="mt-1 text-xl font-semibold">{p.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
                  <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${p.name} technologies`}>
                    {p.tech.map((t) => (
                      <li key={t} className="chip">
                        {t}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <a href={p.live} target="_blank" rel="noopener noreferrer" className="btn-ghost h-10 px-4">
                      Live site <ArrowUpRight size={14} />
                    </a>
                    {hasCaseStudy && (
                      <a href="#case-study" className="btn-ghost h-10 px-4">
                        Read the case study
                      </a>
                    )}
                    {p.code && (
                      <a href={p.code} target="_blank" rel="noopener noreferrer" className="btn-ghost h-10 px-4">
                        <Github size={14} /> Code
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <a href={site.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            <Github size={16} /> More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
