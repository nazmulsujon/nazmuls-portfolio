import { skillGroups } from "@/lib/site";

export default function Skills() {
  return (
    <section id="skills" className="section border-y border-line bg-surface/50">
      <div className="container-x">
        <span className="eyebrow">Skills and tools</span>
        <h2 className="section-title">One toolkit for the build and the growth</h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {skillGroups.map((g) => (
            <div key={g.title} className="card">
              <h3 className="text-lg font-semibold">{g.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <li key={i} className="chip">
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
