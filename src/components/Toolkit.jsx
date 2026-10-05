import { useRef } from "react";
import { toolkit } from "../data/toolkit";
import { useReveal } from "../hooks/useReveal";

const Toolkit = () => {
  const sectionRef = useRef(null);
  useReveal(sectionRef);

  return (
    <section id="toolkit" className="shell py-20 md:py-28">
      <div className="flex flex-col gap-6 border-b border-ink/15 pb-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="kicker text-accent">02 — Toolkit</p>
          <h2 className="mt-4 max-w-[18ch] font-display text-4xl font-bold uppercase leading-[0.95] tracking-[-0.02em] md:text-6xl">
            The tools I <span className="text-accent">reach for</span>
          </h2>
        </div>
        <p className="kicker max-w-[30ch] text-ink-mute md:text-right">
          React · Node · Express · Laravel · MongoDB
        </p>
      </div>

      <div
        ref={sectionRef}
        data-reveal
        className="reveal grid gap-x-10 gap-y-12 pt-10 sm:grid-cols-2 xl:grid-cols-4"
      >
        {toolkit.map((group) => (
          <div key={group.title}>
            <h3 className="border-t-2 border-ink pt-4 font-mono text-xs font-medium uppercase tracking-[0.2em]">
              {group.title}
            </h3>
            <ul className="mt-4">
              {group.items.map((item) => (
                <li
                  key={item.name}
                  className="flex items-center gap-3 border-b border-ink/10 py-2.5 transition-colors duration-300 hover:text-accent"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-ink/10 bg-white">
                    {item.icon ? (
                      <img
                        src={item.icon}
                        alt=""
                        aria-hidden="true"
                        width="16"
                        height="16"
                        className="h-4 w-4 object-contain"
                      />
                    ) : (
                      <span aria-hidden="true" className="h-px w-3 bg-current opacity-40" />
                    )}
                  </span>
                  <span className="font-display text-sm font-semibold uppercase tracking-wide">
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Toolkit;
