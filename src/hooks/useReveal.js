import { useEffect } from "react";

const REVEAL_SELECTOR = "[data-reveal]";

/**
 * Fade-up on scroll for every `[data-reveal]` element inside `ref`
 * (or `ref` itself when it carries the attribute).
 * Styling lives in index.css: `.reveal` / `.reveal.is-visible`.
 */
export function useReveal(ref, { threshold = 0.15 } = {}) {
  useEffect(() => {
    const root = ref.current;
    if (!root) return undefined;

    const nodes = root.matches(REVEAL_SELECTOR)
      ? [root]
      : Array.from(root.querySelectorAll(REVEAL_SELECTOR));

    if (!nodes.length) return undefined;

    if (typeof IntersectionObserver === "undefined") {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold, rootMargin: "0px 0px -100px 0px" }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [ref, threshold]);
}
