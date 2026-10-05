import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import instagram from "../assets/ig.svg";
import { site } from "../data/site";

const icons = {
  LinkedIn: linkedin,
  GitHub: github,
  Instagram: instagram,
};

const Footer = () => (
  <footer className="shell py-8">
    <div className="flex flex-col gap-6 border-t border-ink/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
      <p className="font-mono text-xs uppercase tracking-[0.15em] text-ink-mute">
        © {new Date().getFullYear()} {site.name}
      </p>

      <p className="font-mono text-xs uppercase tracking-[0.15em] text-ink-mute">
        Built with React, Tailwind CSS &amp; Vite
      </p>

      <div className="flex items-center gap-2">
        {site.socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            aria-label={social.label}
            title={social.label}
            className="flex h-9 w-9 items-center justify-center border border-ink/10 bg-white transition-all duration-300 hover:-translate-y-0.5 hover:border-ink"
          >
            <img
              src={icons[social.label]}
              alt=""
              aria-hidden="true"
              className="h-4 w-4"
            />
          </a>
        ))}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="ml-2 inline-flex items-center gap-2 border border-ink/25 px-4 py-2 font-mono text-xs uppercase tracking-[0.15em] transition-colors duration-300 hover:bg-ink hover:text-paper"
        >
          Top
          <span aria-hidden="true">↑</span>
        </button>
      </div>
    </div>
  </footer>
);

export default Footer;
