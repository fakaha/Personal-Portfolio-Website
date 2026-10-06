import { useRef } from "react";
import { projects } from "../data/projects";
import { useReveal } from "../hooks/useReveal";

const Project = () => {
  const gridRef = useRef(null);
  useReveal(gridRef, { threshold: 0.1 });

  return (
    <section id="projects" className="shell py-20 md:py-28">
      <div className="flex flex-col gap-6 border-b border-ink/15 pb-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="kicker text-accent">04 — Selected work</p>
          <h2 className="mt-4 max-w-[20ch] font-display text-4xl font-bold uppercase leading-[0.95] tracking-[-0.02em] md:text-6xl">
            Things I have <span className="text-accent">built</span> and put online
          </h2>
        </div>
        <p className="kicker text-ink-mute md:text-right">
          {String(projects.length).padStart(2, "0")} projects — click any of them
        </p>
      </div>

      <div ref={gridRef} className="grid gap-x-8 gap-y-12 pt-12 sm:grid-cols-2">
        {projects.map((project, index) => (
          <article
            key={project.title}
            data-reveal
            className="reveal group flex flex-col"
          >
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${project.title} in a new tab`}
              className="block border border-ink/15 bg-white p-2 transition-colors duration-300 hover:border-ink"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  loading="lazy"
                  className="aspect-[16/9] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>
            </a>

            <div className="mt-4 flex flex-1 flex-col">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-sm text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="kicker text-ink-mute">{project.category}</span>
              </div>

              <h3 className="mt-2 font-display text-lg font-bold uppercase tracking-wide">
                {project.title}
              </h3>

              <p className="mt-2 grow text-[0.9375rem] leading-relaxed text-ink-soft">
                {project.description}
              </p>

              {project.note ? (
                <p className="mt-3 border-l-2 border-accent pl-3 font-mono text-[11px] leading-relaxed text-ink-soft">
                  {project.note}
                </p>
              ) : null}

              <p className="mt-4 font-mono text-[11px] uppercase leading-relaxed tracking-[0.12em] text-ink-mute">
                {project.tech.join(" · ")}
              </p>

              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 self-start font-medium transition-colors duration-300 hover:text-accent"
              >
                <span className="link-wipe">View project</span>
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                >
                  ↗
                </span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Project;
