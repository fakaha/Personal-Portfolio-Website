import { useRef } from "react";
import { experience } from "../data/experience";
import { useReveal } from "../hooks/useReveal";

const Experience = () => {
  const listRef = useRef(null);
  useReveal(listRef, { threshold: 0.1 });

  return (
    <section id="experience" className="shell py-20 md:py-28">
      <div className="flex flex-col gap-6 border-b border-ink/15 pb-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="kicker text-accent">02 — Experience</p>
          <h2 className="mt-4 max-w-[18ch] font-display text-4xl font-bold uppercase leading-[0.95] tracking-[-0.02em] md:text-6xl">
            Where I have <span className="text-accent">worked</span>
          </h2>
        </div>
        <p className="kicker max-w-[30ch] text-ink-mute md:text-right">
          {experience.length} experiences
        </p>
      </div>

      <div ref={listRef}>
        {experience.slice().reverse().map((entry) => (
          <article
            key={`${entry.company}-${entry.period}`}
            data-reveal
            className="reveal grid gap-x-8 gap-y-3 border-b border-ink/15 py-8 md:grid-cols-12 md:py-10"
          >
            <div className="md:col-span-4 lg:col-span-3">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                {entry.period}
              </p>
              <p className="mt-1 font-mono text-xs uppercase text-ink-mute">{entry.duration}</p>
              <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-prime">
                {entry.type}
              </p>
            </div>

            <div className="md:col-span-8 lg:col-span-9">
              <h3 className="font-display text-xl font-bold uppercase tracking-wide md:text-2xl">
                {entry.role}
              </h3>
              <p className="mt-1 font-display text-sm font-semibold uppercase tracking-[0.12em] text-ink-soft md:text-base">
                {entry.company}
              </p>
              {entry.note ? (
                <p className="mt-4 max-w-[60ch] border-l-2 border-accent pl-3 text-[0.9375rem] leading-relaxed text-ink-soft">
                  {entry.note}
                </p>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
