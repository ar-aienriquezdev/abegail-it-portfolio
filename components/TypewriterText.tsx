"use client";

import { useEffect, useState } from "react";

const phrases = [
  "Software applications.",
  "Data engineering pipelines.",
  "Analytics dashboards.",
  "Thoughtful digital experiences.",
];

export default function TypewriterText() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    // Keep the accessible/static content available without perpetual animation.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const phrase = phrases[phraseIndex];
    const completed = !deleting && length === phrase.length;
    const cleared = deleting && length === 0;
    const delay = completed ? 1500 : cleared ? 350 : deleting ? 45 : 80;

    const timer = window.setTimeout(() => {
      if (completed) {
        setDeleting(true);
      } else if (cleared) {
        setPhraseIndex((current) => (current + 1) % phrases.length);
        setDeleting(false);
      } else {
        setLength((current) => current + (deleting ? -1 : 1));
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [phraseIndex, length, deleting]);

  return (
    <>
      <span className="sr-only">
        Software applications, data engineering pipelines, analytics dashboards,
        and thoughtful digital experiences.
      </span>
      <span aria-hidden="true" className="font-mono font-semibold text-[#ffd0e8]">
        <span className="motion-reduce:hidden">
          {phrases[phraseIndex].slice(0, length)}
          <span className="ml-1 inline-block animate-pulse text-[#ff64b2]">|</span>
        </span>
        <span className="hidden motion-reduce:inline">Software applications.</span>
      </span>
    </>
  );
}
