import { useEffect, useState } from "react";
import { navLinks, site } from "../data/site";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    const handleKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-accent bg-prime-dark text-paper">
      <div className="shell flex h-[var(--header-h)] items-center justify-between gap-6">
        <a
          href="#home"
          className="font-display text-base font-bold uppercase tracking-[0.18em] transition-colors duration-300 hover:text-accent-bright"
          aria-label={`${site.name} — back to top`}
        >
          {site.name}
        </a>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={`flex items-baseline gap-1.5 text-sm transition-colors duration-300 ${
                  isActive ? "text-paper" : "text-paper/65 hover:text-paper"
                }`}
              >
                <span className="font-mono text-[10px] text-accent-bright">{link.index}</span>
                <span className="link-wipe">{link.label}</span>
              </a>
            );
          })}
        </nav>

        <a
          href={site.socials[0].href}
          target="_blank"
          rel="noreferrer"
          className="kicker hidden items-center gap-2 border border-paper/40 px-4 py-2.5 transition-colors duration-300 hover:border-accent-bright hover:bg-accent-bright hover:text-ink lg:inline-flex"
        >
          Say hello
          <span aria-hidden="true">↗</span>
        </a>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="-mr-2 flex h-11 w-11 items-center justify-center lg:hidden"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="relative block h-4 w-7">
            <span
              className={`absolute left-0 h-px w-7 bg-paper transition-all duration-300 ${
                open ? "top-1/2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 h-px w-7 bg-paper transition-all duration-300 ${
                open ? "top-1/2 -rotate-45" : "top-full"
              }`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`grid transition-all duration-300 lg:hidden ${
          open ? "visible grid-rows-[1fr] opacity-100" : "invisible grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden bg-prime-dark">
          <nav className="shell flex flex-col py-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-3 border-b border-paper/15 py-3.5 last:border-b-0"
              >
                <span className="font-mono text-[10px] text-accent-bright">{link.index}</span>
                <span className="font-display text-lg font-semibold uppercase tracking-wide">
                  {link.label}
                </span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
