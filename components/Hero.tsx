import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import { site } from "@/lib/site";

const chips = ["Next.js", "WordPress", "SEO", "AEO", "GEO", "Google Ads", "Meta Ads"];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 md:pt-36">
      <div className="container-x grid items-center gap-12 pb-16 md:grid-cols-[1.15fr_0.85fr] md:pb-24">
        <div>
          <span className="eyebrow">AI-powered web developer and SEO specialist</span>
          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Websites that rank on Google
            <span className="block bg-gradient-to-r from-sky to-brand bg-clip-text text-transparent">&amp; get cited by AI.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted md:text-lg">
            I build fast Next.js and WordPress websites and run the SEO, AEO and GEO that gets them found, on Google and in answers from AI tools like ChatGPT,
            Gemini and Perplexity. I also run Google and Meta Ads when you want traffic sooner.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary">
              Start a project <ArrowRight size={16} />
            </a>
            <a href="#case-study" className="btn-ghost">
              See the results
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-2" aria-label="Services">
            {chips.map((c) => (
              <li key={c} className="chip">
                {c}
              </li>
            ))}
          </ul>

          <a
            href={site.resume}
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-muted underline-offset-4 hover:text-white hover:underline"
          >
            <Download size={14} /> Download resume
          </a>
        </div>

        <div className="relative mx-auto w-full max-w-sm md:max-w-none">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-brand/30 via-sky/10 to-transparent blur-2xl" aria-hidden />
          <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-full border-4 border-sky/30 bg-white shadow-glow">
            <Image
              src="/images/portrait.png"
              alt="Nazmul Hoque, web developer and SEO specialist"
              fill
              priority
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-3 left-0 rounded-2xl border border-line bg-surface/95 p-4 shadow-glow backdrop-blur md:-left-4">
            <p className="font-display text-3xl font-extrabold text-white">7.21K</p>
            <p className="text-xs text-muted">organic clicks in 12 months</p>
          </div>
        </div>
      </div>
    </section>
  );
}
