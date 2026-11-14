import { Github, Linkedin, Facebook } from "lucide-react";
import { site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-ink py-10">
      <div className="container-x flex flex-col items-center justify-between gap-5 md:flex-row">
        <p className="text-sm text-muted">
          &copy; {year} {site.name}. {site.location}.
        </p>
        <ul className="flex items-center gap-4" aria-label="Social links">
          <li>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted hover:text-sky">
              <Linkedin size={18} />
            </a>
          </li>
          <li>
            <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted hover:text-sky">
              <Github size={18} />
            </a>
          </li>
          <li>
            <a href={site.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-muted hover:text-sky">
              <Facebook size={18} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
