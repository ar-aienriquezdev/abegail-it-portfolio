"use client";

import { useEffect, useState } from "react";

/** Appears after scrolling; clicking returns smoothly to the top anchor. */
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 450);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="#top"
      aria-label="Back to top of portfolio"
      title="Back to top"
      className="fixed bottom-6 right-6 z-[60] flex h-12 w-12 items-center justify-center rounded-full border border-[#ff97cf]/65 bg-[#241727]/95 text-[#ffabd7] shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-md transition hover:-translate-y-1 hover:border-[#ff64b2] hover:bg-[#ff64b2] hover:text-[#241022] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ff9fd1]"
    >
      <svg
        aria-hidden="true"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19V5" />
        <path d="m5 12 7-7 7 7" />
      </svg>
    </a>
  );
}
