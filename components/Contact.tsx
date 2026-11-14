import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { site } from "@/lib/site";

export default function Contact() {
  return (
    <section id="contact" className="section border-t border-line bg-surface/50">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <span className="eyebrow">Contact</span>
          <h2 className="section-title">Let&apos;s talk about your project</h2>
          <p className="section-lead">
            Tell me about your business and what you want to achieve. I reply by email with a few questions, then a scope and a quote.
          </p>

          <ul className="mt-8 space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-sky" aria-hidden />
              <a className="hover:text-white" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Linkedin size={18} className="text-sky" aria-hidden />
              <a className="hover:text-white" href={site.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Github size={18} className="text-sky" aria-hidden />
              <a className="hover:text-white" href={site.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-sky" aria-hidden />
              <span>{site.location}. Working with clients worldwide.</span>
            </li>
          </ul>
        </div>

        <form className="card space-y-4" action={`https://formsubmit.co/${site.email}`} method="POST">
          <input type="hidden" name="_subject" value="New project enquiry from the portfolio" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden />
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-white">
                Your name
              </label>
              <input id="name" name="name" type="text" required className="input" placeholder="Jane Doe" autoComplete="name" />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-white">
                Your email
              </label>
              <input id="email" name="email" type="email" required className="input" placeholder="you@company.com" autoComplete="email" />
            </div>
          </div>
          <div>
            <label htmlFor="service" className="mb-2 block text-sm font-medium text-white">
              What do you need?
            </label>
            <select id="service" name="service" className="input" defaultValue="Website and SEO">
              <option>Website and SEO</option>
              <option>New website (Next.js)</option>
              <option>WordPress website</option>
              <option>SEO, AEO and GEO</option>
              <option>Google and Meta Ads</option>
              <option>Something else</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-white">
              Project details
            </label>
            <textarea id="message" name="message" required className="textarea" placeholder="Your business, your website link, and what you want to achieve." />
          </div>
          <button type="submit" className="btn-primary w-full sm:w-auto">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
