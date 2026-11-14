import { experience, site } from "@/lib/site";

export default function About() {
  return (
    <section id="about" className="section border-t border-line bg-surface/50">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1fr]">
        <div>
          <span className="eyebrow">About</span>
          <h2 className="section-title">Developer first, with SEO in every line</h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-body">
            <p>
              I&apos;m Nazmul, a web developer and SEO specialist based in {site.location}. I started in front-end and full-stack development, then moved deeper into search
              because a website that nobody finds does not help the business that paid for it.
            </p>
            <p>
              Today I combine both: I build with Next.js and WordPress, and I run technical SEO, local SEO, AEO and GEO so the site is found on Google and understood by AI tools. I also
              set up Google and Meta Ads when a client wants traffic sooner.
            </p>
            <p>I am studying for a BSc in Computer Science and Engineering at Alhaz Mokbul Hossain University College, Dhaka.</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Experience</h3>
          <ol className="mt-5 space-y-5 border-l border-line pl-6">
            {experience.map((e) => (
              <li key={e.org} className="relative">
                <span className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-sky" aria-hidden />
                <p className="text-sm text-muted">{e.period}</p>
                <p className="text-base font-semibold text-white">
                  {e.role}, {e.org}
                </p>
                <p className="mt-1 text-sm text-muted">{e.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
