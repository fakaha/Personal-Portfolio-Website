import Photo from "../assets/PersonalPhoto.png";
import { site } from "../data/site";

const AboutMe = () => (
  <section
    id="home"
    className="shell pb-20 pt-[calc(var(--header-h)+3.5rem)] md:pb-28 md:pt-[calc(var(--header-h)+5rem)]"
  >
    <div className="grid items-center gap-y-14 lg:grid-cols-12 lg:gap-x-12">
      <div className="lg:col-span-7">
        <p className="kicker text-accent">Amikom Yogyakarta — Computer Science</p>

        <h1 className="mt-6 font-display text-[clamp(2.75rem,8.5vw,6rem)] font-bold uppercase leading-[0.9] tracking-[-0.02em]">
          <span className="block">Zulfa</span>
          <span className="relative inline-block">
            Fakaha
            <span
              aria-hidden="true"
              className="absolute -bottom-[0.06em] left-0 h-[0.08em] w-full bg-accent"
            />
          </span>
        </h1>

        <p className="mt-8 font-mono text-xs uppercase tracking-[0.25em] text-ink-soft">
          Front-End &amp; Back-End Developer
        </p>

        <p className="mt-5 max-w-[46ch] leading-relaxed text-ink-soft">
          Student at Universitas Amikom Yogyakarta. I build across the whole request —
          React and Tailwind on the front, Node, Express and Laravel behind it.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-6">
          <a
            href="#projects"
            className="cut inline-flex items-center gap-3 bg-ink px-7 py-4 font-medium text-paper transition-colors duration-300 hover:bg-accent"
          >
            See the work
            <span aria-hidden="true">↓</span>
          </a>
          <a
            href={site.socials[1].href}
            target="_blank"
            rel="noreferrer"
            className="link-wipe font-medium transition-colors duration-300 hover:text-accent"
          >
            github.com/fakaha <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <div className="lg:col-span-5">
        <figure className="mx-auto max-w-xs border border-ink/15 bg-white p-2 lg:ml-auto lg:mr-0">
          <img
            src={Photo}
            alt={`${site.name}, ${site.role.toLowerCase()} from ${site.location}`}
            width="295"
            height="388"
            className="w-full"
          />
          <figcaption className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-mute">
            Portrait — Yogyakarta
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
);

export default AboutMe;
