import { useRef } from "react";
import { site } from "../data/site";
import { useReveal } from "../hooks/useReveal";

const Contact = () => {
  const sectionRef = useRef(null);
  useReveal(sectionRef);

  const email = site.email.trim();
  const primary = email
    ? { label: "Send an email", href: `mailto:${email}` }
    : { label: "Say hello on LinkedIn", href: site.socials[0].href };

  return (
    <section id="contact" className="bg-prime-dark text-paper">
      <div ref={sectionRef} data-reveal className="reveal shell py-20 md:py-24">
        <p className="kicker text-accent-bright">04 — Contact</p>

        <div className="mt-8 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="max-w-[18ch] font-display text-4xl font-bold uppercase leading-[0.95] tracking-[-0.02em] md:text-6xl">
              Let&rsquo;s build something{" "}
              <span className="text-accent-bright">worth shipping</span>
            </h2>
            <p className="mt-6 max-w-[44ch] leading-relaxed text-paper/75">
              Hiring an intern, need a website put together, or want to compare notes
              on React and Laravel — my inbox is open.
            </p>
          </div>

          <a
            href={primary.href}
            target={email ? undefined : "_blank"}
            rel={email ? undefined : "noreferrer"}
            className="cut inline-flex shrink-0 items-center gap-3 bg-paper px-7 py-4 font-medium text-ink transition-colors duration-300 hover:bg-accent-bright hover:text-ink"
          >
            {primary.label}
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="mt-14 grid gap-6 border-t border-paper/20 pt-8 sm:grid-cols-3">
          {site.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between gap-4 border-b border-paper/15 pb-3 font-display text-base font-semibold uppercase tracking-wide transition-colors duration-300 hover:text-accent-bright"
            >
              {social.label}
              <span
                aria-hidden="true"
                className="text-accent-bright transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              >
                ↗
              </span>
            </a>
          ))}
        </div>

        <p className="mt-8 font-mono text-xs uppercase tracking-[0.2em] text-paper/50">
          {site.location}
        </p>
      </div>
    </section>
  );
};

export default Contact;
